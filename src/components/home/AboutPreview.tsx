"use client";

import Link from "next/link";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeading from "@/components/shared/SectionHeading";

export default function AboutPreview() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="About Me" />
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <ScrollReveal direction="left">
            <div className="aspect-square overflow-hidden rounded-2xl bg-surface">
              <div className="flex h-full items-center justify-center text-text-secondary text-sm">
                <div className="text-center">
                  <div className="mx-auto mb-4 h-32 w-32 rounded-full bg-primary-light/30" />
                  <p>Profile photo</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.15}>
            <div className="space-y-4">
              <p className="text-lg leading-relaxed text-text">
                Hi! I&apos;m Yusheng &mdash; a software engineer who loves
                building elegant solutions to complex problems. I&apos;m
                passionate about clean code, thoughtful design, and the
                intersection of technology and creativity.
              </p>
              <p className="text-text-secondary leading-relaxed">
                When I&apos;m not coding, you&apos;ll find me behind a camera
                capturing moments, exploring new cities, or diving into a good
                book. I believe in continuous learning and sharing knowledge with
                the community.
              </p>
              <Link
                href="/about"
                className="inline-block mt-4 text-primary font-medium hover:text-primary-dark transition-colors"
              >
                Read more about me &rarr;
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
