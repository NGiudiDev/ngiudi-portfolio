import { ProjectCard } from "@/modules/projects/ui";
import { projectsService } from "@/modules/projects/application/projects.service";

const projects = projectsService.getAllProjects();

export default function ProjectsPage() {
  return (
    <div className="p-8 font-mono max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-12 mt-4">
        <h1 className="text-4xl font-bold text-[#4ec9b0] mb-2">
          Mis Proyectos
        </h1>
        
        <p className="text-[#d4d4d4] text-lg">
          <span className="text-[#569cd6]">const</span>{" "}
          <span className="text-[#9cdcfe]">projectCount</span>{" "}
          <span className="text-[#d4d4d4]">=</span>{" "}
          <span className="text-[#b5cea8]">{projects.length}</span>
          <span className="text-[#d4d4d4]">;</span>
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Footer */}
      <div className="mt-12 pt-6 border-t border-[#2d2d2d]">
        <p className="text-[#6a9955] text-sm">
          &#47;&#47; Más proyectos próximamente...
        </p>
      </div>
    </div>
  );
}
