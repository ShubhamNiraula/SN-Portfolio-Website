"use client";

import { ArrowUpRight, PenLine } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { articles } from "@/data/site";
import { useLanguage } from "@/i18n/LanguageProvider";
import type { PostMeta } from "@/lib/blog";

function formatDate(date: string, lang: string) {
  if (!date) return "";
  const d = new Date(date);
  if (Number.isNaN(d.getTime())) return date;
  return d.toLocaleDateString(lang === "ru" ? "ru-RU" : "en-GB", { day: "numeric", month: "long", year: "numeric" });
}

export default function Blog({ posts }: { posts: PostMeta[] }) {
  const { t, lang, pick } = useLanguage();
  const b = t.blog;
  const sorted = [...articles].sort((a, z) => (a.date < z.date ? 1 : -1));

  return (
    <section className="section" id="blog">
      <div className="container">
        <SectionHeading eyebrow={b.eyebrow} title={b.title} number="08" icon="leaf" />
        <div className="blog-grid">
          <div>
            <p className="sub-kicker">{b.elsewhere}</p>
            <div className="post-list">
              {sorted.length === 0 && (
                <div className="empty">
                  <PenLine size={20} aria-hidden="true" /> {b.empty}
                </div>
              )}
              {sorted.map((article, index) => (
                <Reveal key={article.url} delay={index * 0.06}>
                  <a className="card post-card" href={article.url} target="_blank" rel="noreferrer">
                    <div className="meta">
                      <span>{article.site}</span>
                      <span>{formatDate(article.date, lang)}</span>
                    </div>
                    <h3>{pick(article.title)}</h3>
                    {pick(article.summary) && <p>{pick(article.summary)}</p>}
                    <span className="text-link">
                      {b.read} <ArrowUpRight size={14} aria-hidden="true" />
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>

          <div>
            <p className="sub-kicker">{b.myPosts}</p>
            <div className="post-list">
              {posts.length === 0 && (
                <div className="empty">
                  <PenLine size={20} aria-hidden="true" /> {b.empty}
                </div>
              )}
              {posts.map((post, index) => (
                <Reveal key={post.slug} delay={index * 0.06}>
                  <a className="card post-card" href={`/blog/${post.slug}/`}>
                    <div className="meta">
                      <span>{formatDate(post.date, lang)}</span>
                      <span className="badge">{post.lang.toUpperCase()}</span>
                    </div>
                    <h3>{post.title}</h3>
                    {post.summary && <p>{post.summary}</p>}
                    <span className="text-link">
                      {b.read} <ArrowUpRight size={14} aria-hidden="true" />
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
