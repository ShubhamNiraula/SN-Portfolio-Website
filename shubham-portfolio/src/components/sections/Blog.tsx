"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, PenLine } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { articles } from "@/data/site";
import { useLanguage } from "@/i18n/LanguageProvider";
import type { PostMeta } from "@/lib/blog";

function formatDate(date: string, lang: string) {
  if (!date) return "";
  const d = new Date(date);
  if (Number.isNaN(d.getTime())) return date;
  return d.toLocaleDateString(lang === "ru" ? "ru-RU" : "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
}

export default function Blog({ posts }: { posts: PostMeta[] }) {
  const { t, lang, pick } = useLanguage();
  const b = t.blog;
  const sortedArticles = [...articles].sort((a, z) => (a.date < z.date ? 1 : -1));

  return (
    <section className="content-section page-wrap" id="blog">
      <SectionHeading eyebrow={b.eyebrow} title={b.title} number="06" />

      <div className="blog-columns">
        <div>
          <p className="eyebrow blog-subtitle">{b.myPosts}</p>
          {posts.length === 0 ? (
            <div className="blog-empty">
              <PenLine size={20} aria-hidden="true" />
              <span>{b.empty}</span>
            </div>
          ) : (
            <div className="post-list">
              {posts.map((post, index) => (
                <motion.a
                  className="post-card"
                  href={`/blog/${post.slug}/`}
                  key={post.slug}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                >
                  <div className="post-meta">
                    <span>{formatDate(post.date, lang)}</span>
                    <span className="post-lang">{post.lang.toUpperCase()}</span>
                  </div>
                  <h3>{post.title}</h3>
                  {post.summary && <p>{post.summary}</p>}
                  <span className="inline-link">
                    {b.read} <ArrowUpRight size={13} aria-hidden="true" />
                  </span>
                </motion.a>
              ))}
            </div>
          )}
        </div>

        <div>
          <p className="eyebrow blog-subtitle">{b.elsewhere}</p>
          {sortedArticles.length === 0 ? (
            <div className="blog-empty">
              <ExternalLink size={20} aria-hidden="true" />
              <span>{b.empty}</span>
            </div>
          ) : (
            <div className="article-list">
              {sortedArticles.map((article) => (
                <a
                  className="article-item"
                  href={article.url}
                  target="_blank"
                  rel="noreferrer"
                  key={article.url}
                >
                  <div>
                    <div className="post-meta">
                      <span>{article.site}</span>
                      <span>{formatDate(article.date, lang)}</span>
                    </div>
                    <h3>{pick(article.title)}</h3>
                    {pick(article.summary) && <p>{pick(article.summary)}</p>}
                  </div>
                  <ArrowUpRight size={18} aria-hidden="true" />
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
