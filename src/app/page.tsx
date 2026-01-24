"use client";

import Link from "next/link";

import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";

export default function Home() {
  const handleDownload = () => {
    // Implementar descarga de CV si es necesario
    console.log('Download CV');
  };

  return (
    <div className="p-8 font-mono max-w-6xl mx-auto">
      <div className="mb-8">
        <span className="text-[#569cd6]">const</span>{" "}
        <span className="text-[#9cdcfe]">saludo</span>{" "}
        <span className="text-[#d4d4d4]">=</span>{" "}
        <span className="text-[#ce9178]">&quot;Hola, Mundo!&quot;</span>
        <span className="text-[#d4d4d4]">;</span>
      </div>

      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-[#4ec9b0]">
          Bienvenido a mi Portfolio
        </h1>
        
        <p className="text-[#d4d4d4] text-lg">
          <span className="text-[#6a9955]">&#47;&#47; Desarrollador frontend</span>
        </p>

        <div className="mt-8 space-y-2 text-[#d4d4d4]">
          <p>
            <span className="text-[#c586c0]">export</span>{" "}
            <span className="text-[#569cd6]">const</span>{" "}
            <span className="text-[#4ec9b0]">desarrollador</span> = &#123;
          </p>

          <p className="pl-4">
            <span className="text-[#9cdcfe]">nombre</span>: 
            <span className="text-[#ce9178]"> &quot;Nicolás Giudice&quot;</span>,
          </p>
 
          <p className="pl-4">
            <span className="text-[#9cdcfe]">misión</span>: 
            <span className="text-[#ce9178]"> &quot;Diseñar y desarrollar aplicaciones eficientes y visualmente atractivas&quot;</span>,
          </p>

          <p className="pl-4">
            <span className="text-[#9cdcfe]">trabajo_actual</span>: &#123;
          </p>

          <p className="pl-8">
            <span className="text-[#9cdcfe]">desde</span>: 
            <span className="text-[#ce9178]"> &quot;Agosto 2021&quot;</span>,
          </p>

          <p className="pl-8">
            <span className="text-[#9cdcfe]">empresa</span>: 
            <span className="text-[#ce9178]"> &quot;Shipnow&quot;</span>,
          </p>

          <p className="pl-8">
            <span className="text-[#9cdcfe]">puesto</span>: 
            <span className="text-[#ce9178]"> &quot;Líder técnico de frontend&quot;</span>,
          </p>

          <p className="pl-4">&#125;,</p>

          <p>&#125;</p>
        </div>

        <div className="mt-8 flex gap-4">
          <button
            aria-disabled="true"
            className="flex items-center gap-2 px-4 py-2 bg-[#007acc] text-white rounded opacity-50 cursor-not-allowed transition-colors"
            disabled
            onClick={handleDownload}
            >
            <ArrowDownTrayIcon className="w-5 h-5" />
            Descargar PDF
          </button>

          <Link href="/contact" className="px-4 py-2 border border-[#007acc] text-[#007acc] rounded hover:bg-[#007acc] hover:text-white transition-colors inline-block text-center">
            Contactar
          </Link>
        </div>
      </div>
    </div>
  );
}
