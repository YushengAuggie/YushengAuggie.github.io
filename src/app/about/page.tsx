import type { Metadata } from "next";
import PageTransition from "@/components/layout/PageTransition";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SocialLinks from "@/components/shared/SocialLinks";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Yusheng Ding — software engineer, photographer, and creative thinker.",
};

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="pt-32 pb-24 px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-bold text-text">
              About Me
            </h1>
            <div className="mt-4 h-1 w-16 rounded bg-primary" />
          </ScrollReveal>

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
                  engineer who loves building elegant solutions to complex
                  problems. I&apos;m passionate about clean code, thoughtful
                  design, and the intersection of technology and creativity.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  I have experience across the full stack, from building
                  responsive front-end interfaces to designing scalable
                  back-end services. I enjoy working with modern frameworks
                  and tools to deliver products that are both performant and
                  delightful to use.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-text">What I Do</h2>
              <div className="mt-2 h-1 w-12 rounded bg-primary" />
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                {[
                  {
                    title: "Software Engineering",
                    desc: "Building robust, scalable applications with modern tools and best practices.",
                  },
                  {
                    title: "Photography",
                    desc: "Capturing stories through landscape, street, and portrait photography.",
                  },
                  {
                    title: "Technical Writing",
                    desc: "Sharing knowledge through blog posts, tutorials, and documentation.",
                  },
                  {
                    title: "Open Source",
                    desc: "Contributing to and maintaining open source projects that help the community.",
                  },
                ].map((item) => (
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

          <ScrollReveal delay={0.3}>
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-text">Get in Touch</h2>
              <div className="mt-2 h-1 w-12 rounded bg-primary" />
              <p className="mt-4 text-text-secondary leading-relaxed">
                I&apos;m always open to interesting conversations and
                collaboration opportunities. Feel free to reach out!
              </p>
              <SocialLinks className="mt-4" iconSize={22} />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </PageTransition>
  );
}
