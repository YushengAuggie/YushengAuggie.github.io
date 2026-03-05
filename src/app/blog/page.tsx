import type { Metadata } from "next";
import PageTransition from "@/components/layout/PageTransition";
import ScrollReveal from "@/components/shared/ScrollReveal";
import BlogPostCard from "@/components/shared/BlogPostCard";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Thoughts on software engineering, design, and life by Yusheng Ding.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <PageTransition>
      <div className="pt-32 pb-24 px-6">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-bold text-text">Blog</h1>
            <p className="mt-3 text-lg text-text-secondary">
              Thoughts on code, design, and life
            </p>
            <div className="mt-4 h-1 w-16 rounded bg-primary" />
          </ScrollReveal>

          <div className="mt-12 space-y-6">
            {posts.map((post, i) => (
              <BlogPostCard key={post.slug} post={post} index={i} />
            ))}
          </div>

          {posts.length === 0 && (
            <p className="mt-12 text-text-secondary">
              No posts yet. Check back soon!
            </p>
          )}
        </div>
      </div>
    </PageTransition>
  );
}
