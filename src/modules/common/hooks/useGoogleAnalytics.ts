import { useEffect } from "react";

/**
 * Hook para agregar Google Analytics a un proyecto Next.js exportado.
 * @param measurementId El ID de medición de Google Analytics (G-XXXXXXXXXX)
 */
export function useGoogleAnalytics(measurementId: string) {
  useEffect(() => {
    if (!measurementId) return;

    // Evitar doble inserción
    if (document.getElementById("ga-script")) return;

    // Insertar el script de Google Analytics
    const script = document.createElement("script");
    script.id = "ga-script";
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);

    // Insertar el script de configuración
    const inlineScript = document.createElement("script");
    inlineScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${measurementId}');
    `;

    document.head.appendChild(inlineScript);

    return () => {
      // Limpieza si el componente se desmonta
      script.remove();
      inlineScript.remove();
    };
  }, [measurementId]);
}
