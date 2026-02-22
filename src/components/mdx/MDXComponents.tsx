import Image from "next/image";
import type { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  h1: (props) => (
    <h1
      className="mb-6 font-heading text-4xl font-bold tracking-tight md:text-5xl"
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      className="mb-4 mt-12 font-heading text-3xl font-semibold tracking-tight"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="mb-3 mt-8 font-heading text-2xl font-semibold"
      {...props}
    />
  ),
  p: (props) => (
    <p className="mb-6 text-lg leading-relaxed text-text-secondary" {...props} />
  ),
  ul: (props) => (
    <ul className="mb-6 list-disc space-y-2 pl-6 text-text-secondary" {...props} />
  ),
  ol: (props) => (
    <ol className="mb-6 list-decimal space-y-2 pl-6 text-text-secondary" {...props} />
  ),
  li: (props) => <li className="text-lg" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="my-8 border-l-2 border-accent pl-6 text-xl italic text-text-primary"
      {...props}
    />
  ),
  hr: () => <hr className="my-12 border-t border-border" />,
  img: (props) => (
    <figure className="my-8">
      <Image
        src={props.src ?? ""}
        alt={props.alt ?? ""}
        width={1440}
        height={810}
        className="w-full rounded-none"
      />
      {props.alt && (
        <figcaption className="mt-2 text-sm text-text-muted">
          {props.alt}
        </figcaption>
      )}
    </figure>
  ),
  a: (props) => (
    <a
      className="text-accent underline underline-offset-4 transition-colors hover:text-accent-hover"
      target={props.href?.startsWith("http") ? "_blank" : undefined}
      rel={props.href?.startsWith("http") ? "noopener noreferrer" : undefined}
      {...props}
    />
  ),
  code: (props) => (
    <code
      className="rounded bg-surface px-1.5 py-0.5 text-sm text-accent"
      {...props}
    />
  ),
  pre: (props) => (
    <pre className="my-8 overflow-x-auto rounded-none bg-surface p-6 text-sm" {...props} />
  ),
};
