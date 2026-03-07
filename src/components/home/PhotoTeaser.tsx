"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";

const placeholderPhotos = [
  { id: 1, label: "City", span: "col-span-2 row-span-2", color: "bg-primary/15" },
  { id: 2, label: "Mountains", span: "", color: "bg-accent/20" },
  { id: 3, label: "Street", span: "", color: "bg-primary-light/25" },
  { id: 4, label: "Travel", span: "", color: "bg-accent/15" },
  { id: 5, label: "Night", span: "", color: "bg-primary/10" },
];

export default function PhotoTeaser() {
  return (
    <section className="py-28 px-6 bg-surface">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between">
          <SectionHeading
            label="Photography"
            title="Through the Lens"
            className="mb-0"
          />
          <Link
            href="/photos"
            className="mb-12 hidden items-center gap-1 text-sm font-semibold text-text-secondary transition-colors hover:text-primary md:flex"
          >
            View gallery <ArrowUpRight size={15} />
          </Link>
        </div>

        <div className="mt-10 grid h-80 grid-cols-4 grid-rows-2 gap-3">
          {placeholderPhotos.map((photo, i) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className={`group cursor-pointer overflow-hidden rounded-xl ${photo.color} ${photo.span}`}
            >
              <div className="flex h-full items-end p-3 opacity-0 transition-opacity group-hover:opacity-100">
                <span className="text-xs font-medium text-text-secondary">
                  {photo.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 md:hidden">
          <Link
            href="/photos"
            className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
          >
            View gallery <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
