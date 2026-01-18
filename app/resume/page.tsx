"use client";

import { useState } from "react";
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon, 
  GlobeAltIcon,
  ArrowDownTrayIcon 
} from "@heroicons/react/24/outline";

const personalInfo = {
  name: "Nicolas Giudi",
  title: "Senior Full Stack Developer",
  email: "nicolas.giudi@example.com",
  phone: "+54 11 1234-5678",
  location: "Buenos Aires, Argentina",
  website: "ngiudi.dev",
  summary: "Desarrollador Full Stack con más de 5 años de experiencia en la creación de aplicaciones web escalables y de alto rendimiento. Especializado en React, Next.js, Node.js y arquitecturas cloud. Apasionado por escribir código limpio, implementar mejores prácticas y liderar equipos técnicos."
};

const experiences = [
  {
    period: "2024 - Presente",
    position: "Senior Full Stack Developer",
    company: "Tech Solutions Inc.",
    location: "Buenos Aires, Argentina",
    responsibilities: [
      "Lidero equipo de 5 desarrolladores en la construcción de plataformas SaaS escalables",
      "Implementación de arquitecturas serverless con Next.js y AWS Lambda",
      "Reducción del tiempo de carga en 60% mediante optimizaciones de rendimiento",
      "Mentoría y code reviews para mantener estándares de código de alta calidad"
    ],
    technologies: ["Next.js", "TypeScript", "AWS", "PostgreSQL", "Docker"]
  },
  {
    period: "2022 - 2024",
    position: "Full Stack Developer",
    company: "Digital Agency",
    location: "Buenos Aires, Argentina",
    responsibilities: [
      "Desarrollo de aplicaciones web y móviles para clientes corporativos",
      "Implementación de APIs REST y GraphQL con Node.js y Express",
      "Integración de pasarelas de pago (Stripe, MercadoPago)",
      "Colaboración con equipos de diseño para implementar interfaces responsivas"
    ],
    technologies: ["React", "Node.js", "MongoDB", "GraphQL", "AWS"]
  },
  {
    period: "2020 - 2022",
    position: "Frontend Developer",
    company: "StartUp XYZ",
    location: "Buenos Aires, Argentina",
    responsibilities: [
      "Construcción de SPAs con React y Redux para gestión de estado",
      "Implementación de mejores prácticas de accesibilidad (WCAG 2.1)",
      "Optimización de bundle size reduciendo tiempo de carga en 40%",
      "Creación de sistema de diseño interno con Storybook"
    ],
    technologies: ["React", "Redux", "TypeScript", "Sass", "Jest"]
  }
];

const education = [
  {
    period: "2019 - 2023",
    degree: "Ingeniería en Sistemas",
    institution: "Universidad Nacional",
    location: "Buenos Aires, Argentina",
    honors: "Promedio: 8.5/10"
  }
];

const certifications = [
  {
    year: "2025",
    name: "AWS Certified Solutions Architect - Professional",
    issuer: "Amazon Web Services"
  },
  {
    year: "2023",
    name: "AWS Certified Solutions Architect - Associate",
    issuer: "Amazon Web Services"
  },
  {
    year: "2022",
    name: "Meta Front-End Developer Professional Certificate",
    issuer: "Meta (Facebook)"
  }
];

const skills = {
  "Frontend": ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Vue.js"],
  "Backend": ["Node.js", "Express", "Python", "FastAPI", "GraphQL", "REST APIs"],
  "Database": ["PostgreSQL", "MongoDB", "Redis", "Prisma"],
  "DevOps & Cloud": ["AWS", "Docker", "Git", "CI/CD", "Vercel", "Netlify"],
  "Tools & Others": ["Jest", "Cypress", "Figma", "Agile/Scrum", "Jira"]
};

const languages = [
  { name: "Español", level: "Nativo" },
  { name: "Inglés", level: "Avanzado (C1)" }
];

export default function ResumePage() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const handleDownload = () => {
    // Aquí podrías implementar la descarga real del PDF
    alert("Funcionalidad de descarga de PDF próximamente...");
  };

  return (
    <div className="p-8 font-mono max-w-5xl mx-auto">
      {/* Header with Download Button */}
      <div className="mb-8 flex items-start justify-between">
        <div>
          <div className="mb-4">
            <span className="text-[#6a9955]">// resume.tsx</span>
          </div>
          <h1 className="text-4xl font-bold text-[#4ec9b0] mb-2">
            Currículum Vitae
          </h1>
          <p className="text-[#858585]">
            <span className="text-[#569cd6]">const</span>{" "}
            <span className="text-[#9cdcfe]">lastUpdated</span>{" "}
            <span className="text-[#d4d4d4]">=</span>{" "}
            <span className="text-[#ce9178]">&quot;Enero 2026&quot;</span>
            <span className="text-[#d4d4d4]">;</span>
          </p>
        </div>
        
        <button
          onClick={handleDownload}
          className="flex items-center gap-2 px-4 py-2 bg-[#007acc] text-white rounded hover:bg-[#005a9e] transition-colors"
        >
          <ArrowDownTrayIcon className="w-5 h-5" />
          Descargar PDF
        </button>
      </div>

      {/* Personal Info Card */}
      <section className="mb-8 bg-[#252526] border border-[#2d2d2d] rounded-lg p-6">
        <h2 className="text-3xl font-bold text-[#d4d4d4] mb-2">
          {personalInfo.name}
        </h2>
        <p className="text-xl text-[#4ec9b0] mb-4">{personalInfo.title}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4 text-[#9cdcfe] text-sm">
          <div className="flex items-center gap-2">
            <EnvelopeIcon className="w-4 h-4 text-[#858585]" />
            <a href={`mailto:${personalInfo.email}`} className="hover:text-[#4ec9b0] transition-colors">
              {personalInfo.email}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <PhoneIcon className="w-4 h-4 text-[#858585]" />
            <span>{personalInfo.phone}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPinIcon className="w-4 h-4 text-[#858585]" />
            <span>{personalInfo.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <GlobeAltIcon className="w-4 h-4 text-[#858585]" />
            <a href={`https://${personalInfo.website}`} className="hover:text-[#4ec9b0] transition-colors">
              {personalInfo.website}
            </a>
          </div>
        </div>

        <div className="pt-4 border-t border-[#2d2d2d]">
          <h3 className="text-sm text-[#569cd6] mb-2 uppercase tracking-wider">Resumen Profesional</h3>
          <p className="text-[#d4d4d4] leading-relaxed">{personalInfo.summary}</p>
        </div>
      </section>

      {/* Experience */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-[#dcdcaa] mb-6 flex items-center gap-2">
          <span className="text-[#6a9955]">{"//>"}</span> Experiencia Profesional
        </h2>
        
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-[#252526] border border-[#2d2d2d] rounded-lg p-6 hover:border-[#007acc] transition-all cursor-pointer"
              onClick={() => setActiveSection(activeSection === `exp-${index}` ? null : `exp-${index}`)}
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-lg font-semibold text-[#4ec9b0]">{exp.position}</h3>
                  <p className="text-[#9cdcfe]">{exp.company}</p>
                </div>
                <div className="text-right">
                  <p className="text-[#858585] text-sm">{exp.period}</p>
                  <p className="text-[#858585] text-xs">{exp.location}</p>
                </div>
              </div>
              
              <ul className="space-y-2 mb-4">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="text-[#d4d4d4] text-sm flex items-start gap-2">
                    <span className="text-[#569cd6] mt-1">▹</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-[#1e1e1e] text-[#9cdcfe] text-xs rounded border border-[#007acc]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education & Certifications */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Education */}
        <section>
          <h2 className="text-2xl font-bold text-[#dcdcaa] mb-6 flex items-center gap-2">
            <span className="text-[#6a9955]">{"//>"}</span> Educación
          </h2>
          
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-[#252526] border border-[#2d2d2d] rounded-lg p-5"
            >
              <p className="text-[#858585] text-sm mb-2">{edu.period}</p>
              <h3 className="text-lg font-semibold text-[#4ec9b0] mb-1">{edu.degree}</h3>
              <p className="text-[#9cdcfe] text-sm mb-1">{edu.institution}</p>
              <p className="text-[#858585] text-xs mb-2">{edu.location}</p>
              {edu.honors && (
                <p className="text-[#ce9178] text-sm">{edu.honors}</p>
              )}
            </div>
          ))}
        </section>

        {/* Certifications */}
        <section>
          <h2 className="text-2xl font-bold text-[#dcdcaa] mb-6 flex items-center gap-2">
            <span className="text-[#6a9955]">{"//>"}</span> Certificaciones
          </h2>
          
          <div className="space-y-3">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-[#252526] border border-[#2d2d2d] rounded-lg p-4"
              >
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-sm font-semibold text-[#4ec9b0]">{cert.name}</h3>
                  <span className="text-[#858585] text-xs">{cert.year}</span>
                </div>
                <p className="text-[#9cdcfe] text-xs">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Skills */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-[#dcdcaa] mb-6 flex items-center gap-2">
          <span className="text-[#6a9955]">{"//>"}</span> Habilidades Técnicas
        </h2>
        
        <div className="bg-[#252526] border border-[#2d2d2d] rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category}>
                <h3 className="text-sm font-semibold text-[#569cd6] mb-3 uppercase tracking-wider">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-[#1e1e1e] text-[#d4d4d4] text-sm rounded hover:bg-[#2d2d2d] transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Languages */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-[#dcdcaa] mb-6 flex items-center gap-2">
          <span className="text-[#6a9955]">{"//>"}</span> Idiomas
        </h2>
        
        <div className="bg-[#252526] border border-[#2d2d2d] rounded-lg p-6">
          <div className="flex gap-8">
            {languages.map((lang, index) => (
              <div key={index} className="flex items-center gap-3">
                <span className="text-[#d4d4d4] font-semibold">{lang.name}:</span>
                <span className="text-[#4ec9b0]">{lang.level}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="mt-12 pt-6 border-t border-[#2d2d2d] text-center">
        <p className="text-[#6a9955] text-sm">
          <span className="text-[#569cd6]">export default</span>{" "}
          <span className="text-[#9cdcfe]">ResumePage</span>
          <span className="text-[#d4d4d4]">;</span>
        </p>
      </div>
    </div>
  );
}
