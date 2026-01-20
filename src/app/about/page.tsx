import { TimelineItem, InterestCard } from "@/modules/about/ui";
import { PageTitle } from "@/modules/common/ui/PageTitle";

import { aboutService } from "@/modules/about/application/about.service";

const experiences = aboutService.getExperiences();
const education = aboutService.getEducation();
const interests = aboutService.getInterests();

export default function AboutPage() {
  return (
    <div className="p-8 font-mono max-w-6xl mx-auto">
      <PageTitle title="Sobre Mí" />

      {/* Introduction */}
      <section className="mb-16">
        <div className="bg-[#252526] border border-[#2d2d2d] rounded-lg p-6">
          <div className="mb-4">
            <span className="text-[#569cd6]">const</span>{" "}
            <span className="text-[#9cdcfe]">aboutMe</span>{" "}
            <span className="text-[#d4d4d4]">=</span>{" "}
            <span className="text-[#d4d4d4]">{"{"}</span>
          </div>
          
          <div className="pl-4 space-y-3 text-[#d4d4d4]">
            <p>
              <span className="text-[#9cdcfe]">bio</span>
              <span className="text-[#d4d4d4]">:</span>{" "}
              <span className="text-[#ce9178]">&quot;Soy un desarrollador Full Stack apasionado por crear soluciones web innovadoras y eficientes. Con más de 5 años de experiencia, me especializo en construir aplicaciones escalables que resuelven problemas reales.&quot;</span>
              <span className="text-[#d4d4d4]">,</span>
            </p>
            <p>
              <span className="text-[#9cdcfe]">location</span>
              <span className="text-[#d4d4d4]">:</span>{" "}
              <span className="text-[#ce9178]">&quot;Buenos Aires, Argentina&quot;</span>
              <span className="text-[#d4d4d4]">,</span>
            </p>
            <p>
              <span className="text-[#9cdcfe]">yearsOfExperience</span>
              <span className="text-[#d4d4d4]">:</span>{" "}
              <span className="text-[#b5cea8]">5</span>
              <span className="text-[#d4d4d4]">,</span>
            </p>
            <p>
              <span className="text-[#9cdcfe]">philosophy</span>
              <span className="text-[#d4d4d4]">:</span>{" "}
              <span className="text-[#ce9178]">&quot;Code is poetry, and every line should tell a story.&quot;</span>
            </p>
          </div>
          
          <div className="mt-4">
            <span className="text-[#d4d4d4]">{"}"}</span>
            <span className="text-[#d4d4d4]">;</span>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="mb-16">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-[#569cd6] mb-2">
            Experiencia Profesional
          </h2>

          <div className="h-0.5 w-20 bg-[#b5cea8]" />
        </div>

        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <TimelineItem key={index} item={exp} />
          ))}
        </div>
      </section>

      {/* Education Timeline */}
      <section className="mb-16">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-[#569cd6] mb-2">
            Educación & Certificaciones
          </h2>

          <div className="h-0.5 w-20 bg-[#b5cea8]" />
        </div>
        
        <div className="space-y-4">
          {education.map((edu, index) => (
            <TimelineItem key={index} item={edu} />
          ))}
        </div>
      </section>

      {/* Interests */}
      <section className="mb-8">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-[#569cd6] mb-2">
            Intereses & Pasiones
          </h2>

          <div className="h-0.5 w-20 bg-[#b5cea8]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {interests.map((interest, index) => (
            <InterestCard key={index} interest={interest} />
          ))}
        </div>
      </section>
    </div>
  );
}
