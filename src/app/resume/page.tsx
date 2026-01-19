"use client";

import { useState } from "react";

import { resumeService } from "@/modules/resume/application/resume.service";

import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon, 
  GlobeAltIcon,
  ArrowDownTrayIcon 
} from "@heroicons/react/24/outline";

const certifications = resumeService.getCertifications();
const personalInfo = resumeService.getPersonalInfo();
const experiences = resumeService.getExperiences();
const languages = resumeService.getLanguages();
const education = resumeService.getEducation();
const skills = resumeService.getSkills();

export default function ResumePage() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const handleDownload = () => {
    resumeService.downloadResume();
  };

  return (
    <div className="p-8 font-mono max-w-6xl mx-auto">
      {/* Header with Download Button */}
      <div className="mb-12 mt-4 flex items-start justify-between">
        <div>
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
          className="flex items-center gap-2 px-4 py-2 bg-[#007acc] text-white rounded hover:bg-[#005a9e] transition-colors"
          onClick={handleDownload}
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
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-[#569cd6] mb-2">
            Experiencia Profesional
          </h2>

          <div className="h-0.5 w-20 bg-[#b5cea8]" />
        </div>
        
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              className="bg-[#252526] border border-[#2d2d2d] rounded-lg p-6 hover:border-[#007acc] transition-all cursor-pointer"
              key={index}
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
                    className="px-2 py-1 bg-[#1e1e1e] text-[#9cdcfe] text-xs rounded border border-[#007acc]"
                    key={idx}
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
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-[#569cd6] mb-2">
              Educación
            </h2>

            <div className="h-0.5 w-20 bg-[#b5cea8]" />
          </div>
          
          {education.map((edu, index) => (
            <div
              className="bg-[#252526] border border-[#2d2d2d] rounded-lg p-5"
              key={index}
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
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-[#569cd6] mb-2">
              Certificaciones
            </h2>

            <div className="h-0.5 w-20 bg-[#b5cea8]" />
          </div>

          <div className="space-y-3">
            {certifications.map((cert, index) => (
              <div
                className="bg-[#252526] border border-[#2d2d2d] rounded-lg p-4"
                key={index}
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
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-[#569cd6] mb-2">
            Habilidades Técnicas
          </h2>

          <div className="h-0.5 w-20 bg-[#b5cea8]" />
        </div>

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
                      className="px-3 py-1 bg-[#1e1e1e] text-[#d4d4d4] text-sm rounded hover:bg-[#2d2d2d] transition-colors"
                      key={idx}
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
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-[#569cd6] mb-2">
            Idiomas
          </h2>

          <div className="h-0.5 w-20 bg-[#b5cea8]" />
        </div>
        
        <div className="bg-[#252526] border border-[#2d2d2d] rounded-lg p-6">
          <div className="flex gap-8">
            {languages.map((lang, index) => (
              <div className="flex items-center gap-3" key={index}>
                <span className="text-[#d4d4d4] font-semibold">{lang.name}:</span>
                <span className="text-[#4ec9b0]">{lang.level}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
