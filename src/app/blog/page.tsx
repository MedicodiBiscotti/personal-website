import { getAllPosts } from "@/lib/post-repository";
import Link from "next/dist/client/link";
import { VFile } from "vfile";

type PostCardProps = { post: VFile };

function PostCard({ post }: PostCardProps) {
  return (
    <div>
      <Link href={`/blog/${post.data.matter?.slug}`}>
        <h2 className="text-xl font-bold">{post.data.matter?.title}</h2>
      </Link>
    </div>
  );
}

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div>
      <h1 className="mb-2 text-6xl font-thin">Blog</h1>
      <p className="my-2">Welcome to the blog page!</p>
      {posts.map((post) => (
        <PostCard key={post.data.matter?.slug} post={post} />
      ))}
    </div>
  );
}
