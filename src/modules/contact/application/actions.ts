"use server";

import { Resend } from "resend";
import { FormData } from "@/types";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: FormData) {
  try {
    // Validar que todos los campos estén presentes
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      return {
        success: false,
        error: "Todos los campos son requeridos",
      };
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return {
        success: false,
        error: "El email no es válido",
      };
    }

    // Obtener el email de destino desde las variables de entorno
    const recipientEmail = process.env.RECIPIENT_EMAIL;

    if (!recipientEmail) {
      console.error("RECIPIENT_EMAIL no está configurado");
      return {
        success: false,
        error: "Configuración de email no encontrada",
      };
    }

    // Enviar el email
    await resend.emails.send({
      from: `Portfolio Contact <onboarding@resend.dev>`,
      to: recipientEmail,
      subject: `[Portfolio] ${formData.subject}`,
      replyTo: formData.email,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: 'Consolas', 'Courier New', monospace;
                line-height: 1.6;
                color: #d4d4d4;
                background-color: #1e1e1e;
                max-width: 700px;
                margin: 0 auto;
                padding: 0;
              }

              .container {
                background-color: #252526;
                border: 1px solid #2d2d2d;
                border-radius: 8px;
                overflow: hidden;
              }

              .header {
                background-color: #007acc;
                color: #ffffff;
                padding: 24px 30px;
                border-bottom: 2px solid #005a9e;
              }

              .header h1 {
                margin: 0;
                font-size: 24px;
                font-weight: 600;
                color: #ffffff;
              }

              .header .subtitle {
                margin-top: 8px;
                font-size: 14px;
                color: #e0e0e0;
                font-family: 'Consolas', monospace;
              }

              .content {
                padding: 30px;
                background-color: #1e1e1e;
              }

              .field {
                margin-bottom: 24px;
              }

              .label {
                font-size: 13px;
                color: #9cdcfe;
                display: block;
                margin-bottom: 8px;
                font-family: 'Consolas', monospace;
              }

              .keyword {
                color: #569cd6;
              }

              .operator {
                color: #d4d4d4;
              }

              .value {
                color: #d4d4d4;
                background-color: #252526;
                padding: 12px 16px;
                border-radius: 4px;
                border: 1px solid #3c3c3c;
                font-size: 14px;
              }

              .value a {
                color: #4ec9b0;
                text-decoration: none;
              }

              .value a:hover {
                text-decoration: underline;
              }

              .message-box {
                background-color: #252526;
                padding: 16px;
                border-radius: 4px;
                border-left: 4px solid #007acc;
                white-space: pre-wrap;
                font-size: 14px;
                color: #d4d4d4;
                line-height: 1.8;
              }

              .footer {
                margin-top: 24px;
                padding-top: 20px;
                border-top: 1px solid #3c3c3c;
                font-size: 12px;
                color: #858585;
                text-align: center;
              }

              .footer .comment {
                color: #3c3c3c;
              }

              .icon {
                display: inline-block;
                margin-right: 6px;
              }
            </style>
          </head>
          
          <body>
            <div class="container">
              <div class="header">
                <h1>Nuevo mensaje del Portfolio</h1>
                <div class="subtitle">Formulario de contacto</div>
              </div>

              <div class="content">
                <div class="field">
                  <span class="label">
                    <span class="keyword">const</span> <span style="color: #9cdcfe;">nombre</span> <span class="operator">=</span>
                  </span>
                  <div class="value">${formData.name}</div>
                </div>
                
                <div class="field">
                  <span class="label">
                    <span class="keyword">const</span> <span style="color: #9cdcfe;">email</span> <span class="operator">=</span>
                  </span>
                  <div class="value"><a href="mailto:${formData.email}">${formData.email}</a></div>
                </div>
                
                <div class="field">
                  <span class="label">
                    <span class="keyword">const</span> <span style="color: #9cdcfe;">asunto</span> <span class="operator">=</span>
                  </span>
                  <div class="value">${formData.subject}</div>
                </div>
                
                <div class="field">
                  <span class="label">
                    <span class="keyword">const</span> <span style="color: #9cdcfe;">mensaje</span> <span class="operator">=</span>
                  </span>
                  <div class="message-box">${formData.message}</div>
                </div>
                
                <div class="footer">
                  <span class="comment">Este mensaje fue enviado desde el formulario de contacto</span>
                  <br>
                  <span class="comment">Puedes responder directamente a este email</span>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Error al enviar email:", error);

    return {
      success: false,
      error: "Error al enviar el mensaje. Por favor intenta nuevamente.",
    };
  }
}
