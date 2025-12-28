import { getPostBySlug } from "@/lib/post-repository";
import type { Metadata } from "next";


export async function generateMetadata(): Promise<Metadata> {
  const file = await getPostBySlug("examples");
  return {
    title: file.data.matter.title,
    description: "asdda",
  };
}

async function MdCode() {
  const file = await getPostBySlug("examples");

  return (
    <article
      className="prose dark:prose-invert prose-em:font-italic prose-em:not-italic"
      dangerouslySetInnerHTML={{ __html: file.value }}
    />
  );
}

export default MdCode;
