"use client";

import { motion } from "framer-motion";
import { Calendar, Clock } from "lucide-react";
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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        href={`/blog/${post.slug}`}
        className="group block rounded-xl border border-border bg-surface p-6 transition-shadow hover:shadow-lg"
      >
        <h3 className="text-xl font-bold text-text group-hover:text-primary transition-colors">
          {post.title}
        </h3>
        <p className="mt-2 text-sm text-text-secondary leading-relaxed">
          {post.description}
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <TechTag key={tag} label={tag} />
          ))}
        </div>
        <div className="mt-4 flex items-center gap-4 text-xs text-text-secondary">
          <span className="flex items-center gap-1">
            <Calendar size={14} />
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={14} />
            {post.readingTime}
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
