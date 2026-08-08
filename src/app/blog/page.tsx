import { getAllPosts } from "@/lib/post-repository";
import Link from "next/link";
import { VFile } from "vfile";

type PostCardProps = { post: VFile };

function PostCard({ post }: PostCardProps) {
  return (
    /* Can remove `` when matter undefined gets fixed. */
    <Link href={`${post.data.matter?.slug}`}>
      <div className="size-full rounded-xl bg-neutral-200/75 p-4 dark:bg-neutral-800/75">
        <h2 className="text-balance text-xl font-bold leading-none">
          {post.data.matter?.title ?? post.data.meta?.title}
        </h2>
        <p className="mt-3 line-clamp-5">
          {post.data.matter?.description ?? post.data.meta?.description}
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
      <h1 className="mb-2 text-6xl font-thin">Blog</h1>
      <p className="my-2">Welcome to the blog page!</p>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8">
        {sorted.map((post) => (
          <PostCard key={post.data.matter?.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
