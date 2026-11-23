import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackToBlog from "@/components/ui/BackToBlog";
import { getAllPosts, getPost } from "@/lib/blog";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Shubham Niraula`,
    description: post.summary,
    robots: post.draft ? { index: false, follow: false } : undefined
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return notFound();

  const date = post.date
    ? new Date(post.date).toLocaleDateString(post.lang === "ru" ? "ru-RU" : "en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric"
      })
    : "";

  return (
    <main>
      <Navbar />
      <article className="post-page" lang={post.lang}>
        <BackToBlog />
        <div className="meta" style={{ marginTop: 28 }}>
          <span>{date}</span>
          <span className="badge">{post.lang.toUpperCase()}</span>
        </div>
        <h1>{post.title}</h1>
        {post.summary && <p className="post-summary">{post.summary}</p>}
        <div className="post-body" dangerouslySetInnerHTML={{ __html: post.html }} />
        <BackToBlog />
      </article>
      <Footer />
    </main>
  );
}
