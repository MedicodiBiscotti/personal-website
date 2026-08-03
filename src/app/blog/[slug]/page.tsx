import {
  getAllPostFilenames,
  getAllPosts,
  getAllPostSlugs,
  getPostBySlug,
} from "@/lib/post-repository";
import type { Metadata } from "next";

type PostProps = { slug: string };

// Render at build time. Wrong slugs will 404.
// If not this, then we need to handle wrong filenames.
export const dynamicParams = false;

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<PostProps>;
}): Promise<Metadata> {
  const { slug } = await params;
  const file = await getPostBySlug(slug);
  return {
    title: file.data.matter?.title ?? file.data.meta?.title,
    description: file.data.matter?.description ?? file.data.meta?.description,
  };
}

export default async function Post({ params }: { params: Promise<PostProps> }) {
  const { slug } = await params;
  const file = await getPostBySlug(slug);

  return (
    <article
      className="prose dark:prose-invert"
      dangerouslySetInnerHTML={{ __html: file.value }}
    />
  );
}
