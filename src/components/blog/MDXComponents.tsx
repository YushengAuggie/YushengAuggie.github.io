import type { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  h1: (props) => (
    <h1 className="text-3xl font-bold mt-10 mb-4" {...props} />
  ),
  h2: (props) => (
    <h2 className="text-2xl font-bold mt-8 mb-3" {...props} />
  ),
  h3: (props) => (
    <h3 className="text-xl font-bold mt-6 mb-2" {...props} />
  ),
  a: (props) => (
    <a
      className="text-primary hover:text-primary-dark underline underline-offset-2 transition-colors"
      target={props.href?.startsWith("http") ? "_blank" : undefined}
      rel={props.href?.startsWith("http") ? "noopener noreferrer" : undefined}
      {...props}
    />
  ),
  blockquote: (props) => (
    <blockquote
      className="border-l-4 border-primary-light pl-4 italic text-text-secondary my-4"
      {...props}
    />
  ),
};
