"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="noise relative flex min-h-screen items-center overflow-hidden bg-ink px-6">
      {/* Radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(196,100,74,0.18) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
          <span className="text-xs font-medium tracking-wider text-white/60 uppercase">
            Software Engineer · San Francisco
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="text-gradient text-6xl font-bold leading-none tracking-tight md:text-8xl lg:text-[10rem]"
        >
          Yusheng
          <br />
          Ding
        </motion.h1>

        {/* Tagline + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
        >
          <p className="max-w-sm text-base leading-relaxed text-white/50 md:text-lg">
            I build fast, thoughtful software and occasionally
            take photos worth looking at.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="/projects"
              className="rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-dark hover:scale-[1.03] active:scale-100"
            >
              View Work
            </a>
            <a
              href="#about"
              className="rounded-full border border-white/20 px-7 py-3 text-sm font-semibold text-white/70 transition-all hover:border-white/40 hover:text-white"
            >
              About Me
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={20} className="text-white/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}
