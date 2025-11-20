import { notFound } from "next/navigation";
import ArticleHeader from "@/components/blocks/Blog/ArticleHeader/ArticleHeader";
import ArticleBody from "@/components/blocks/Blog/ArticleBody/ArticleBody";
import { BLOG_POSTS } from "@/data/blogData";

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ article: string }>;
}) {
  const { article } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === article);

  if (!post) {
    notFound();
  }

  return (
    <main
      style={{ backgroundColor: "#fff", minHeight: "100vh", padding: "0 20px" }}
    >
      <ArticleHeader
        title={post.title}
        date={post.date}
        imageSrc={post.image}
      />
      <ArticleBody content={post.content} />
    </main>
  );
}
