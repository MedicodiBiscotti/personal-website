import { getAllPosts } from "@/lib/post-repository";
import Link from "next/link";
import { VFile } from "vfile";

type PostCardProps = { post: VFile };

function PostCard({ post }: PostCardProps) {
  return (
    /* Can remove `` when matter undefined gets fixed. */
    <Link href={`${post.data.matter?.slug}`}>
      <div className="rounded-xl bg-neutral-200/75 p-4 dark:bg-neutral-800/75">
        <h2 className="text-balance text-lg font-bold">
          {post.data.matter?.title}
        </h2>
        <p>{post.data.matter?.description}</p>
      </div>
    </Link>
  );
}

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div>
      <h1 className="mb-2 text-6xl font-thin">Blog</h1>
      <p className="my-2">Welcome to the blog page!</p>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8">
        {posts.map((post) => (
          <PostCard key={post.data.matter?.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
