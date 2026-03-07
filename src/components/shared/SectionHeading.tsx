"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  className?: string;
  light?: boolean;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  className = "",
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${className}`}
    >
      {label && (
        <p className={`mb-3 text-xs font-semibold uppercase tracking-widest ${light ? "text-white/40" : "text-primary"}`}>
          {label}
        </p>
      )}
      <h2 className={`text-3xl font-bold md:text-4xl ${light ? "text-white" : "text-text"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-base ${light ? "text-white/50" : "text-text-secondary"}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
