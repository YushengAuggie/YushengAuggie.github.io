"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";

const placeholderPhotos = [
  { id: 1, color: "bg-primary-light/40" },
  { id: 2, color: "bg-accent/40" },
  { id: 3, color: "bg-primary/20" },
  { id: 4, color: "bg-accent/20" },
];

export default function PhotoTeaser() {
  return (
    <section className="py-24 px-6 bg-surface">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Photography"
          subtitle="Capturing moments through the lens"
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {placeholderPhotos.map((photo, i) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`group aspect-square overflow-hidden rounded-lg ${photo.color}`}
            >
              <div className="flex h-full items-center justify-center text-text-secondary/50 text-xs transition-colors group-hover:text-text-secondary">
                Photo {photo.id}
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/photos"
            className="inline-block rounded-full border border-border bg-background px-8 py-3 text-sm font-medium text-text transition-colors hover:border-primary hover:text-primary"
          >
            View Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}
