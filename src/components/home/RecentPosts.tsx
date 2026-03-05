import Link from "next/link";
import SectionHeading from "@/components/shared/SectionHeading";
import BlogPostCard from "@/components/shared/BlogPostCard";
import { getAllPosts } from "@/lib/blog";

export default function RecentPosts() {
  const posts = getAllPosts().slice(0, 3);

  if (posts.length === 0) return null;

  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Recent Posts"
          subtitle="Thoughts on code, design, and life"
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <BlogPostCard key={post.slug} post={post} index={i} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/blog"
            className="inline-block rounded-full border border-border bg-background px-8 py-3 text-sm font-medium text-text transition-colors hover:border-primary hover:text-primary"
          >
            Read All Posts
          </Link>
        </div>
      </div>
    </section>
  );
}
