import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    title: "Personal Website",
    description:
      "A cinematic personal website built with Next.js, Tailwind CSS, and Framer Motion. Features MDX blog, photo gallery, and scroll-driven animations.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "MDX"],
    github: "https://github.com/yushengauggie/yushengauggie.github.io",
    live: "https://yushengauggie.github.io",
    featured: true,
  },
  {
    title: "Data Pipeline Toolkit",
    description:
      "A modular ETL framework for processing and transforming large datasets with built-in support for parallel execution and fault tolerance.",
    tech: ["Python", "Apache Spark", "PostgreSQL", "Docker"],
    github: "https://github.com/yushengauggie/data-pipeline-toolkit",
    featured: true,
  },
  {
    title: "Task Manager CLI",
    description:
      "A command-line task manager with rich TUI, project tagging, due dates, and sync across devices via a lightweight REST API.",
    tech: ["Rust", "SQLite", "REST API"],
    github: "https://github.com/yushengauggie/task-cli",
    featured: true,
  },
  {
    title: "Photo Organizer",
    description:
      "Automatic photo organization tool using EXIF metadata, facial recognition, and location-based clustering.",
    tech: ["Python", "OpenCV", "TensorFlow"],
    github: "https://github.com/yushengauggie/photo-organizer",
  },
  {
    title: "Budget Tracker",
    description:
      "A minimal personal finance tracker with category-based budgeting, recurring transactions, and monthly reports.",
    tech: ["React", "Node.js", "MongoDB", "Chart.js"],
    github: "https://github.com/yushengauggie/budget-tracker",
  },
];
