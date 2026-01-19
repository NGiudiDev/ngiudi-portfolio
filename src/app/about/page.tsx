import { TimelineItem, InterestCard } from "@/modules/about/ui";
import { aboutService } from "@/modules/about/application/about.service";

const experiences = aboutService.getExperiences();
const education = aboutService.getEducation();
const interests = aboutService.getInterests();

export default function AboutPage() {
  return (
    <div className="p-8 font-mono max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <div className="mb-4">
          <span className="text-[#6a9955]">&#47;&#47; about.tsx</span>
        </div>
        <h1 className="text-4xl font-bold text-[#4ec9b0] mb-4">
          Sobre Mí
        </h1>
      </div>

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
        <h2 className="text-2xl font-bold text-[#569cd6] mb-6 flex items-center gap-2">
          <span className="text-[#6a9955]">&#47;&#47;</span> Experiencia Profesional
        </h2>
        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <TimelineItem key={index} item={exp} />
          ))}
        </div>
      </section>

      {/* Education Timeline */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-[#569cd6] mb-6 flex items-center gap-2">
          <span className="text-[#6a9955]">&#47;&#47;</span> Educación & Certificaciones
        </h2>
        <div className="space-y-4">
          {education.map((edu, index) => (
            <TimelineItem key={index} item={edu} />
          ))}
        </div>
      </section>

      {/* Interests */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-[#569cd6] mb-6 flex items-center gap-2">
          <span className="text-[#6a9955]">&#47;&#47;</span> Intereses & Pasiones
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {interests.map((interest, index) => (
            <InterestCard key={index} interest={interest} />
          ))}
        </div>
      </section>
    </div>
  );
}
