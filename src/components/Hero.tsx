"use client";

import { useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";

const STATS = [
  {
    value: "3+",
    label: "AI Systems in Production",
    desc:  "Every system we ship runs inside real operations — not a sandbox.",
  },
  {
    value: "100%",
    label: "Custom-Built, Zero Off-the-Shelf",
    desc:  "Each solution is purpose-built from the ground up for your exact context.",
  },
  {
    value: "0",
    label: "Demo-ware Delivered",
    desc:  "We don't build for the deck. We build for daily use and continuous improvement.",
  },
];

export default function Hero() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".h-badge",  { y: 20, opacity: 0, duration: 0.55 })
        .from(".h-line",   { y: 70, opacity: 0, duration: 0.85, stagger: 0.08 }, "-=0.3")
        .from(".h-desc",   { y: 24, opacity: 0, duration: 0.65 }, "-=0.5")
        .from(".h-ctas",   { y: 18, opacity: 0, duration: 0.55 }, "-=0.4")
        .from(".h-stat",   { y: 22, opacity: 0, duration: 0.55, stagger: 0.1  }, "-=0.3");
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      style={{
        background: "var(--bg)",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "6rem 1.5rem 0",
      }}
    >
      {/* ── Badge ─────────────────────────────────────────────── */}
      <div
        className="h-badge"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
          padding: "0.28rem 0.85rem",
          border: "1px solid var(--border)",
          borderRadius: "100px",
          fontSize: "0.65rem",
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "var(--fg-muted)",
          marginBottom: "2.5rem",
        }}
      >
        <span
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: "#636363",
            display: "inline-block",
            flexShrink: 0,
          }}
        />
        AI Systems · Manufacturing · Procurement · Enterprise
      </div>

      {/* ── Headline ──────────────────────────────────────────── */}
      <h1
        style={{
          fontFamily: "var(--font-bebas), sans-serif",
          fontSize: "clamp(3.5rem, 9.5vw, 9rem)",
          lineHeight: 0.93,
          letterSpacing: "0.01em",
          color: "var(--fg)",
          margin: "0 0 2.5rem",
        }}
      >
        <span className="h-line" style={{ display: "block" }}>Intelligence Built</span>
        <span className="h-line" style={{ display: "block" }}>For Industrial</span>
        <span className="h-line" style={{ display: "block" }}>Operations.</span>
      </h1>

      {/* ── Description + CTAs ────────────────────────────────── */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "2.5rem",
          alignItems: "flex-start",
          marginBottom: "4rem",
        }}
      >
        <p
          className="h-desc"
          style={{
            fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)",
            color: "var(--fg-muted)",
            lineHeight: 1.75,
            maxWidth: "460px",
            margin: 0,
          }}
        >
          We go beyond the strategy deck. We learn your industry, understand your
          operations, and build intelligence-powered systems that drive decisions
          that matter.
        </p>
        <div
          className="h-ctas"
          style={{ display: "flex", gap: "1rem", flexWrap: "wrap", paddingTop: "0.15rem" }}
        >
          <a href="/contact" className="cta-btn">
            Get in touch →
          </a>
          <Link
            href="/work"
            className="h-see-work"
            style={{
              display: "inline-flex",
              alignItems: "center",
              fontSize: "0.875rem",
              color: "var(--fg-muted)",
              textDecoration: "none",
              gap: "0.25rem",
              transition: "color 0.2s",
            }}
          >
            See our work ↗
          </Link>
        </div>
      </div>

      {/* ── Stats bar ─────────────────────────────────────────── */}
      <div
        style={{
          borderTop: "1px solid var(--border)",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
        }}
      >
        {STATS.map((s, i) => (
          <div
            key={s.value}
            className="h-stat"
            style={{
              padding: "2.5rem 0",
              paddingLeft: i > 0 ? "3rem" : 0,
              paddingRight: i < STATS.length - 1 ? "3rem" : 0,
              borderRight: i < STATS.length - 1 ? "1px solid var(--border)" : "none",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-bebas), sans-serif",
                fontSize: "clamp(2.5rem, 5vw, 4.2rem)",
                lineHeight: 1,
                color: "var(--fg)",
                margin: "0 0 0.4rem",
                letterSpacing: "-0.01em",
              }}
            >
              {s.value}
            </p>
            <p
              style={{
                fontSize: "0.68rem",
                color: "var(--fg-muted)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                margin: "0 0 0.75rem",
                lineHeight: 1.4,
                fontFamily: "var(--font-bebas), sans-serif",
              }}
            >
              {s.label}
            </p>
            <p
              style={{
                fontSize: "0.82rem",
                color: "var(--fg-muted)",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
