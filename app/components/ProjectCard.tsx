"use client";

import Link from "next/link";
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from "@heroicons/react/24/outline";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  date: string;
  github?: string;
  demo?: string;
  image?: string;
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-[#252526] border border-[#2d2d2d] rounded-lg overflow-hidden hover:border-[#007acc] transition-all duration-300 group">
      {/* Project Image Placeholder */}
      <div className="h-48 bg-[#1e1e1e] border-b border-[#2d2d2d] flex items-center justify-center relative overflow-hidden">
        {project.image ? (
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <CodeBracketIcon className="w-16 h-16 text-[#007acc] opacity-30" />
        )}
        <div className="absolute inset-0 bg-[#007acc] opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title & Date */}
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-semibold text-[#4ec9b0] group-hover:text-[#6dd4bd] transition-colors">
            {project.title}
          </h3>
          <span className="text-[#858585] text-sm ml-2">{project.date}</span>
        </div>

        {/* Description */}
        <p className="text-[#cccccc] text-sm mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs bg-[#1e1e1e] text-[#9cdcfe] border border-[#2d2d2d] rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex gap-3 pt-3 border-t border-[#2d2d2d]">
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-[#858585] hover:text-[#007acc] transition-colors"
            >
              <CodeBracketIcon className="w-4 h-4" />
              <span>Code</span>
            </Link>
          )}
          {project.demo && (
            <Link
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-[#858585] hover:text-[#007acc] transition-colors"
            >
              <ArrowTopRightOnSquareIcon className="w-4 h-4" />
              <span>Demo</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
