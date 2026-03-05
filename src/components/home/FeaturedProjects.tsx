import Link from "next/link";
import SectionHeading from "@/components/shared/SectionHeading";
import ProjectCard from "@/components/shared/ProjectCard";
import { projects } from "@/../content/projects";

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <section className="py-24 px-6 bg-surface">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Featured Projects"
          subtitle="A selection of things I've built"
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/projects"
            className="inline-block rounded-full border border-border bg-background px-8 py-3 text-sm font-medium text-text transition-colors hover:border-primary hover:text-primary"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
