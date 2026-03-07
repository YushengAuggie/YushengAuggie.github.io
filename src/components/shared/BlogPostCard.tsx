"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import TechTag from "./TechTag";
import type { PostMeta } from "@/lib/types";

interface BlogPostCardProps {
  post: PostMeta;
  index?: number;
}

export default function BlogPostCard({ post, index = 0 }: BlogPostCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
    >
      <Link
        href={`/blog/${post.slug}`}
        className="group flex flex-col rounded-2xl border border-border bg-background p-6 shadow-sm transition-shadow hover:shadow-md"
      >
        <div className="flex items-start justify-between gap-3">
          <p className="text-xs text-text-secondary">
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
            {" · "}
            {post.readingTime}
          </p>
          <ArrowUpRight
            size={16}
            className="shrink-0 text-text-secondary/40 transition-all group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </div>

        <h3 className="mt-3 text-lg font-bold leading-snug text-text transition-colors group-hover:text-primary">
          {post.title}
        </h3>

        <p className="mt-2 flex-1 text-sm leading-relaxed text-text-secondary">
          {post.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {post.tags.map((tag) => (
            <TechTag key={tag} label={tag} />
          ))}
        </div>
      </Link>
    </motion.div>
  );
}
