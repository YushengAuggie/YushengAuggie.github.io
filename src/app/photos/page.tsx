"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import PageTransition from "@/components/layout/PageTransition";
import ScrollReveal from "@/components/shared/ScrollReveal";

const photos = [
  { id: 1, alt: "Cityscape at golden hour", color: "bg-primary-light/40" },
  { id: 2, alt: "Mountain trail in fog", color: "bg-accent/40" },
  { id: 3, alt: "Street photography in Tokyo", color: "bg-primary/20" },
  { id: 4, alt: "Ocean waves at sunset", color: "bg-accent/20" },
  { id: 5, alt: "Autumn forest path", color: "bg-primary-light/30" },
  { id: 6, alt: "Urban architecture", color: "bg-accent/30" },
  { id: 7, alt: "Night sky long exposure", color: "bg-primary/30" },
  { id: 8, alt: "Flower macro shot", color: "bg-primary-light/20" },
  { id: 9, alt: "Rainy day reflections", color: "bg-accent/25" },
];

export default function PhotosPage() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <PageTransition>
      <div className="pt-32 pb-24 px-6">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-bold text-text">
              Photography
            </h1>
            <p className="mt-3 text-lg text-text-secondary">
              Capturing moments through the lens
            </p>
            <div className="mt-4 h-1 w-16 rounded bg-primary" />
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-3">
            {photos.map((photo, i) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={`group cursor-pointer overflow-hidden rounded-lg aspect-square ${photo.color}`}
                onClick={() => setSelected(photo.id)}
              >
                <div className="flex h-full items-center justify-center text-text-secondary/50 text-sm transition-all group-hover:text-text-secondary group-hover:scale-105">
                  {photo.alt}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
            onClick={() => setSelected(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors"
              onClick={() => setSelected(null)}
              aria-label="Close lightbox"
            >
              <X size={28} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`w-full max-w-3xl aspect-video rounded-xl ${
                photos.find((p) => p.id === selected)?.color ?? "bg-surface"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex h-full items-center justify-center text-text-secondary text-lg">
                {photos.find((p) => p.id === selected)?.alt}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
}
