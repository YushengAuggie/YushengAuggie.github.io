"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import AnimatedBackground from "@/components/shared/AnimatedBackground";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      <AnimatedBackground />

      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-text"
        >
          Yusheng Ding
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-6 text-lg md:text-xl text-text-secondary max-w-2xl mx-auto"
        >
          Software engineer, photographer, and creative thinker.
          <br className="hidden sm:block" />
          Building things that matter.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 flex justify-center gap-4"
        >
          <a
            href="#about"
            className="rounded-full bg-primary px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-dark"
          >
            Learn More
          </a>
          <a
            href="/projects"
            className="rounded-full border border-border px-8 py-3 text-sm font-medium text-text transition-colors hover:border-primary hover:text-primary"
          >
            View Projects
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={28} className="text-text-secondary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
