import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import ProjectCard from "@/components/shared/ProjectCard";
import { projects } from "@/../content/projects";

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <section className="py-28 px-6 bg-surface">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between">
          <SectionHeading
            label="Work"
            title="Selected Projects"
            className="mb-0"
          />
          <Link
            href="/projects"
            className="mb-12 hidden items-center gap-1 text-sm font-semibold text-text-secondary transition-colors hover:text-primary md:flex"
          >
            All projects <ArrowUpRight size={15} />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        <div className="mt-8 md:hidden">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
          >
            All projects <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
