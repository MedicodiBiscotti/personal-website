import { getAllPostSlugs, getPostBySlug } from "@/lib/post-repository";
import { ClockIcon } from "@heroicons/react/24/outline";
import type { Metadata } from "next";
import { VFile } from "vfile";

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

function formatReadingTime(minutes: number) {
  minutes = Math.max(1, Math.floor(minutes));
  return `${minutes} minute${minutes != 1 ? "s" : ""}`;
}

function PostHeader({ file }: { file: VFile }) {
  const { matter, meta } = file.data;
  return (
    <header>
      <h1 className="mx-auto w-fit text-6xl font-extrabold">
        {matter?.title ?? meta?.title}
      </h1>
      {/* Match width of article (65ch from prose) */}
      <div className="mx-auto mt-2 grid max-w-[65ch] grid-cols-[repeat(2,max-content)] justify-between tabular-nums text-neutral-500 dark:text-neutral-400">
        {/* Align dates on top of each other */}
        <div className="grid grid-cols-[repeat(2,max-content)] justify-between gap-2">
          <span>Posted:</span>
          <span>{matter?.created}</span>
        </div>
        <p>
          <ClockIcon className="me-2 inline-block size-5 align-text-bottom" />
          <span>{formatReadingTime(meta?.readingTime as number)}</span>
        </p>
        {matter?.updated && (
          <div className="grid grid-cols-[repeat(2,max-content)] justify-between gap-2">
            <span>Updated:</span>
            <span>{matter?.updated}</span>
          </div>
        )}
      </div>
    </header>
  );
}

export default async function Post({ params }: { params: Promise<PostProps> }) {
  const { slug } = await params;
  const file = await getPostBySlug(slug);

  return (
    <article>
      <PostHeader file={file} />
      <div
        className="prose mx-auto mt-8 dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: file.value }}
      />
    </article>
  );
}
