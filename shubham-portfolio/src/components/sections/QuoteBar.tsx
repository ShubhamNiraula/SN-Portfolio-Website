"use client";

import { useEffect, useRef, useState } from "react";
import { quotes } from "@/data/site";
import { useLanguage } from "@/i18n/LanguageProvider";

/** An engineering quote at the top of the page; changes in random order every 9–13 s. */
export default function QuoteBar() {
  const { pick } = useLanguage();
  const [index, setIndex] = useState(0);
  const [hidden, setHidden] = useState(false);
  const timer = useRef<number | undefined>(undefined);

  const goTo = (next: number) => {
    setHidden(true);
    window.setTimeout(() => {
      setIndex(next);
      setHidden(false);
    }, 650);
  };

  useEffect(() => {
    setIndex(Math.floor(Math.random() * quotes.length));
  }, []);

  useEffect(() => {
    if (quotes.length < 2) return;
    const wait = 9000 + Math.random() * 4000;
    timer.current = window.setTimeout(() => {
      let next = index;
      while (next === index) next = Math.floor(Math.random() * quotes.length);
      goTo(next);
    }, wait);
    return () => window.clearTimeout(timer.current);
  }, [index]);

  if (quotes.length === 0) return null;
  const quote = quotes[index];

  return (
    <div className="quote-bar">
      <div className="container quote-inner">
        <span className="quote-mark" aria-hidden="true">
          “
        </span>
        <blockquote className={`quote-body ${hidden ? "is-hidden" : ""}`} style={{ margin: 0 }} aria-live="polite">
          <p className="quote-text">{pick(quote.text)}</p>
          <footer className="quote-author">— {pick(quote.author)}</footer>
        </blockquote>
        <div className="quote-dots" role="group" aria-label="Quotes">
          {quotes.map((q, i) => (
            <button
              type="button"
              key={i}
              className={i === index ? "active" : ""}
              aria-label={`${i + 1}`}
              aria-current={i === index}
              onClick={() => i !== index && goTo(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
