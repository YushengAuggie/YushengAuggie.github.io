"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      <motion.div
        className="absolute w-72 h-72 rounded-full opacity-20 blur-3xl"
        style={{ background: "var(--color-primary-light)", top: "10%", left: "15%" }}
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -25, 15, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-96 h-96 rounded-full opacity-15 blur-3xl"
        style={{ background: "var(--color-accent)", top: "40%", right: "10%" }}
        animate={{
          x: [0, -40, 20, 0],
          y: [0, 30, -20, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-64 h-64 rounded-full opacity-10 blur-3xl"
        style={{ background: "var(--color-primary)", bottom: "15%", left: "40%" }}
        animate={{
          x: [0, 25, -30, 0],
          y: [0, -15, 25, 0],
          scale: [1, 1.05, 0.9, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
