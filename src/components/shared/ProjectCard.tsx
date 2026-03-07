"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import TechTag from "./TechTag";
import type { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className="group flex flex-col rounded-2xl border border-border bg-background p-6 shadow-sm transition-shadow hover:shadow-md"
    >
      {project.image && (
        <div className="mb-5 overflow-hidden rounded-xl">
          <img
            src={project.image}
            alt={project.title}
            className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}

      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-bold text-text">{project.title}</h3>
        <div className="flex shrink-0 items-center gap-2 pt-0.5">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary/60 transition-colors hover:text-text"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary/60 transition-colors hover:text-text"
              aria-label="Live site"
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>

      <p className="mt-2 flex-1 text-sm leading-relaxed text-text-secondary">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <TechTag key={t} label={t} />
        ))}
      </div>
    </motion.div>
  );
}
