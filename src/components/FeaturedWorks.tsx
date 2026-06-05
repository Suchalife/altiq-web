"use client";

import Image from "next/image";
import Link from "next/link";
import RevealWrapper from "./RevealWrapper";

const PROJECTS = [
  {
    id: "manuf",
    title: "ManufAI",
    category: "Manufacturing",
    year: "2024",
    image: "/images/work/manuf.png",
    description:
      "AI-powered manufacturing feasibility system that analyzes part designs and determines whether a specific plant can realistically produce them.",
  },
  {
    id: "procure",
    title: "ProcureAI",
    category: "Procurement",
    year: "2025",
    image: "/images/work/procure.png",
    description:
      "Procurement intelligence system that predicts raw material demand and optimizes purchasing decisions for manufacturing operations.",
  },
  {
    id: "intercom",
    title: "Intercom",
    category: "Enterprise",
    year: "2025",
    image: "/images/work/intercom.png",
    description:
      "Intelligent internal communication system designed to streamline coordination and information flow across teams.",
  },
];

export default function FeaturedWorks() {
  return (
    <section
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "6rem 1.5rem",
        borderTop: "1px solid var(--border)",
      }}
    >
      {/* ── Section header ─────────────────────────────────────── */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginBottom: "3rem",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <RevealWrapper>
          <div>
            <p
              style={{
                fontSize: "0.72rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--fg-muted)",
                fontFamily: "var(--font-bebas), sans-serif",
                marginBottom: "0.6rem",
              }}
            >
              Selected Work
            </p>
            <h2
              style={{
                fontFamily: "var(--font-bebas), sans-serif",
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                lineHeight: 1,
                letterSpacing: "0.02em",
                color: "var(--fg)",
                margin: 0,
              }}
            >
              Systems We&apos;ve Built
            </h2>
          </div>
        </RevealWrapper>

        <RevealWrapper delay={80}>
          <Link
            href="/work"
            className="fw-view-all"
            style={{
              fontSize: "0.875rem",
              color: "var(--fg-muted)",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.25rem",
              transition: "color 0.2s",
            }}
          >
            All projects ↗
          </Link>
        </RevealWrapper>
      </div>

      {/* ── Project cards ──────────────────────────────────────── */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {PROJECTS.map((p, i) => (
          <RevealWrapper key={p.id} delay={i * 90}>
            <Link href={`/work#${p.id}`} className="project-card" style={{ display: "block" }}>

              {/* Image */}
              <div
                style={{
                  width: "100%",
                  aspectRatio: "16 / 10",
                  background: "#efefef",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  style={{ objectFit: "contain", padding: "0.75rem" }}
                  sizes="(max-width: 768px) 100vw, 400px"
                  quality={85}
                />
              </div>

              {/* Card info */}
              <div style={{ padding: "1.2rem 1.4rem 1.5rem" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "0.45rem",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.62rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--fg-muted)",
                      fontFamily: "var(--font-bebas), sans-serif",
                    }}
                  >
                    {p.category}
                  </span>
                  <span
                    style={{
                      fontSize: "0.7rem",
                      color: "var(--fg-muted)",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {p.year}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: "var(--font-bebas), sans-serif",
                    fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)",
                    letterSpacing: "0.03em",
                    color: "var(--fg)",
                    margin: "0 0 0.5rem",
                    lineHeight: 1.1,
                  }}
                >
                  {p.title}
                </h3>

                <p
                  style={{
                    fontSize: "0.8rem",
                    color: "var(--fg-muted)",
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  {p.description}
                </p>
              </div>
            </Link>
          </RevealWrapper>
        ))}
      </div>
    </section>
  );
}
