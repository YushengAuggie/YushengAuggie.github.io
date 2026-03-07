import type { Metadata } from "next";
import PageTransition from "@/components/layout/PageTransition";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SocialLinks from "@/components/shared/SocialLinks";

export const metadata: Metadata = {
  title: "About",
  description:
    "Yusheng Ding — software engineer, photographer, and occasional writer based in San Francisco.",
};

const whatIDo = [
  {
    title: "Full-Stack Engineering",
    desc: "From React frontends to distributed backend services, I care about systems that are fast, reliable, and easy to maintain.",
  },
  {
    title: "Developer Tooling",
    desc: "I love building tools that make other engineers more productive — CLIs, internal platforms, and automation pipelines.",
  },
  {
    title: "Photography",
    desc: "Street, landscape, and travel photography. I shoot mostly on weekends when the light is good and I have nowhere urgent to be.",
  },
  {
    title: "Writing",
    desc: "I write about engineering decisions, things I've learned the hard way, and tools worth knowing about.",
  },
];

const timeline = [
  {
    year: "2024 – Present",
    title: "Senior Software Engineer",
    detail: "Working on developer infrastructure at a Bay Area tech company.",
  },
  {
    year: "2021 – 2024",
    title: "Software Engineer",
    detail:
      "Built and scaled data pipelines and internal tooling serving millions of events per day.",
  },
  {
    year: "2019 – 2021",
    title: "Software Engineer (New Grad)",
    detail:
      "Started my career working on full-stack features for a B2B SaaS product.",
  },
  {
    year: "2019",
    title: "B.S. Computer Science",
    detail: "Graduated with a focus on systems and distributed computing.",
  },
];

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="pt-32 pb-24 px-6">
        <div className="mx-auto max-w-3xl">

          {/* Header */}
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-bold text-text">
              About Me
            </h1>
            <div className="mt-4 h-1 w-16 rounded bg-primary" />
          </ScrollReveal>

          {/* Intro */}
          <ScrollReveal delay={0.1}>
            <div className="mt-12 flex flex-col items-center gap-8 md:flex-row md:items-start">
              <div className="h-48 w-48 shrink-0 overflow-hidden rounded-2xl bg-surface">
                <div className="flex h-full items-center justify-center text-text-secondary text-sm">
                  <div className="text-center">
                    <div className="mx-auto mb-2 h-20 w-20 rounded-full bg-primary-light/30" />
                    <p>Photo</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-lg leading-relaxed text-text">
                  Hi, I&apos;m <strong>Yusheng Ding</strong> — a software
                  engineer based in San Francisco. I&apos;ve spent the past
                  several years building backend systems, internal tooling, and
                  the occasional polished frontend that makes people say
                  &ldquo;oh, this actually feels nice.&rdquo;
                </p>
                <p className="text-text-secondary leading-relaxed">
                  I grew up fascinated by how things work under the hood. That
                  curiosity led me to computer science and eventually to a career
                  where I get to spend my days solving interesting problems with
                  good people. I care a lot about code quality, clear
                  communication, and shipping things that hold up over time.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  When I&apos;m not at a computer, I&apos;m out with a camera,
                  hiking somewhere with a good elevation gain, or trying a new
                  ramen spot I probably read about at 11pm.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* What I Do */}
          <ScrollReveal delay={0.15}>
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-text">What I Do</h2>
              <div className="mt-2 h-1 w-12 rounded bg-primary" />
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {whatIDo.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-border bg-surface p-5"
                  >
                    <h3 className="font-bold text-text">{item.title}</h3>
                    <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Timeline */}
          <ScrollReveal delay={0.2}>
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-text">Background</h2>
              <div className="mt-2 h-1 w-12 rounded bg-primary" />
              <div className="mt-6 space-y-6">
                {timeline.map((item) => (
                  <div key={item.year} className="flex gap-4">
                    <div className="w-32 shrink-0 text-sm text-text-secondary pt-0.5">
                      {item.year}
                    </div>
                    <div>
                      <p className="font-semibold text-text">{item.title}</p>
                      <p className="mt-1 text-sm text-text-secondary leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Contact */}
          <ScrollReveal delay={0.25}>
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-text">Get in Touch</h2>
              <div className="mt-2 h-1 w-12 rounded bg-primary" />
              <p className="mt-4 text-text-secondary leading-relaxed">
                I&apos;m always happy to chat about engineering, side projects,
                or photography. Feel free to reach out on any of the platforms
                below.
              </p>
              <SocialLinks className="mt-4" iconSize={22} />
            </div>
          </ScrollReveal>

        </div>
      </div>
    </PageTransition>
  );
}
