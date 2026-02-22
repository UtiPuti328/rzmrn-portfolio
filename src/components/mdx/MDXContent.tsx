import { MDXRemote } from "next-mdx-remote-client/rsc";
import { mdxComponents } from "./MDXComponents";

interface MDXContentProps {
  source: string;
}

export default function MDXContent({ source }: MDXContentProps) {
  return (
    <div className="prose-custom mx-auto max-w-3xl">
      <MDXRemote source={source} components={mdxComponents} />
    </div>
  );
}
