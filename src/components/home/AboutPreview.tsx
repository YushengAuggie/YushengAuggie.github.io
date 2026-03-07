"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";
import SectionHeading from "@/components/shared/SectionHeading";

export default function AboutPreview() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 md:grid-cols-2 items-center">
          <ScrollReveal direction="left">
            <SectionHeading
              label="About"
              title="Hi, I'm Yusheng."
              subtitle="Software engineer based in San Francisco."
            />
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                I build fast, reliable software — from backend systems to
                polished interfaces. I care about the details: clean APIs,
                sensible abstractions, and experiences that feel effortless.
              </p>
              <p>
                Outside of code I shoot film, hike with too much elevation gain,
                and read about things I probably won&apos;t remember.
              </p>
            </div>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
            >
              More about me <ArrowUpRight size={15} />
            </Link>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.15}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { stat: "5+", label: "Years of experience" },
                { stat: "20+", label: "Projects shipped" },
                { stat: "∞", label: "Bugs squashed" },
                { stat: "☕", label: "Cups of coffee" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-border bg-surface p-6"
                >
                  <p
                    className="text-3xl font-bold text-text"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {item.stat}
                  </p>
                  <p className="mt-1 text-sm text-text-secondary">{item.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
