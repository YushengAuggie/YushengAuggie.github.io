import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeHighlight from "rehype-highlight";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { getAllSlugs, getPostBySlug } from "@/lib/blog";
import { mdxComponents } from "@/components/blog/MDXComponents";
import TechTag from "@/components/shared/TechTag";
import PageTransition from "@/components/layout/PageTransition";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.meta.title,
    description: post.meta.description,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const { content: mdxContent } = await compileMDX({
    source: post.content,
    components: mdxComponents,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypeSlug, rehypeHighlight],
      },
    },
  });

  return (
    <PageTransition>
      <article className="pt-32 pb-24 px-6">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm text-text-secondary hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Back to blog
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold text-text leading-tight">
            {post.meta.title}
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-text-secondary">
            <span className="flex items-center gap-1">
              <Calendar size={16} />
              {new Date(post.meta.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={16} />
              {post.meta.readingTime}
            </span>
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            {post.meta.tags.map((tag: string) => (
              <TechTag key={tag} label={tag} />
            ))}
          </div>

          <hr className="mt-8 border-border" />

          <div className="prose prose-lg mt-8 max-w-none">{mdxContent}</div>
        </div>
      </article>
    </PageTransition>
  );
}
