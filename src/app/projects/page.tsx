import type { Metadata } from "next";
import PageTransition from "@/components/layout/PageTransition";
import ScrollReveal from "@/components/shared/ScrollReveal";
import ProjectCard from "@/components/shared/ProjectCard";
import { projects } from "@/../content/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "A collection of projects built by Yusheng Ding.",
};

export default function ProjectsPage() {
  return (
    <PageTransition>
      <div className="pt-32 pb-24 px-6">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-bold text-text">
              Projects
            </h1>
            <p className="mt-3 text-lg text-text-secondary">
              Things I&apos;ve built and contributed to
            </p>
            <div className="mt-4 h-1 w-16 rounded bg-primary" />
          </ScrollReveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
