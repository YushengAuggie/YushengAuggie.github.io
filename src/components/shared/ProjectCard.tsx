"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import TechTag from "./TechTag";
import type { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group rounded-xl border border-border bg-surface p-6 transition-shadow hover:shadow-lg"
    >
      {project.image && (
        <div className="mb-4 overflow-hidden rounded-lg">
          <img
            src={project.image}
            alt={project.title}
            className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      <h3 className="text-xl font-bold text-text">{project.title}</h3>
      <p className="mt-2 text-sm text-text-secondary leading-relaxed">
        {project.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <TechTag key={t} label={t} />
        ))}
      </div>
      <div className="mt-4 flex items-center gap-3">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-text-secondary transition-colors hover:text-primary"
          >
            <Github size={16} />
            Code
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-text-secondary transition-colors hover:text-primary"
          >
            <ExternalLink size={16} />
            Live
          </a>
        )}
      </div>
    </motion.div>
  );
}
