"use client";

import { motion } from "framer-motion";

interface PhotoCardProps {
  src: string;
  alt: string;
  index?: number;
  onClick?: () => void;
}

export default function PhotoCard({
  src,
  alt,
  index = 0,
  onClick,
}: PhotoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group cursor-pointer overflow-hidden rounded-lg"
      onClick={onClick}
    >
      <img
        src={src}
        alt={alt}
        className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
    </motion.div>
  );
}
