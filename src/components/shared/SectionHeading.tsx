"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  className = "",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${className}`}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-text">{title}</h2>
      {subtitle && (
        <p className="mt-3 text-lg text-text-secondary">{subtitle}</p>
      )}
      <div className="mt-4 h-1 w-16 rounded bg-primary" />
    </motion.div>
  );
}
