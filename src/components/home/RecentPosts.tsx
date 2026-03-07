import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import BlogPostCard from "@/components/shared/BlogPostCard";
import { getAllPosts } from "@/lib/blog";

export default function RecentPosts() {
  const posts = getAllPosts().slice(0, 3);
  if (posts.length === 0) return null;

  return (
    <section className="py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between">
          <SectionHeading
            label="Writing"
            title="Recent Posts"
            className="mb-0"
          />
          <Link
            href="/blog"
            className="mb-12 hidden items-center gap-1 text-sm font-semibold text-text-secondary transition-colors hover:text-primary md:flex"
          >
            All posts <ArrowUpRight size={15} />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <BlogPostCard key={post.slug} post={post} index={i} />
          ))}
        </div>

        <div className="mt-8 md:hidden">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
          >
            All posts <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
