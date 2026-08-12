import { formatReadingTime } from "@/lib/metadata-utils";
import { getAllPosts } from "@/lib/post-repository";
import { ClockIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { VFile } from "vfile";

type PostCardProps = { post: VFile };

function PostCard({ post }: PostCardProps) {
  const { matter, meta } = post.data;
  return (
    /* Can remove `` when matter undefined gets fixed. */
    <Link href={`${matter?.slug}`}>
      <div className="size-full rounded-xl bg-neutral-200/75 p-4 dark:bg-slate-800/75">
        <h2 className="text-balance text-xl font-bold leading-none">
          {matter?.title ?? meta?.title}
        </h2>
        <div className="mt-2 flex justify-between text-sm tabular-nums text-neutral-500 dark:text-neutral-400">
          <p>{matter?.created}</p>
          <p className="flex items-center gap-1">
            <ClockIcon className="size-5" />
            <span>{formatReadingTime(meta?.readingTime as number)}</span>
          </p>
        </div>
        <p className="mt-3 line-clamp-5">
          {matter?.description ?? meta?.description}
        </p>
      </div>
    </Link>
  );
}

export default async function BlogPage() {
  const posts = await getAllPosts();
  const sorted = posts.toSorted((a, b) =>
    (b.data.matter?.created as string).localeCompare(
      a.data.matter?.created as string,
    ),
  );

  return (
    <div>
      <h1 className="text-center text-[clamp(2.25rem,calc(1.705rem+2.727vw),3.75rem)] font-bold leading-none">
        Blog
      </h1>
      <div className="mt-6 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8">
        {sorted.map((post) => (
          <PostCard key={post.data.matter?.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
