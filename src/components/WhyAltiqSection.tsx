"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WHY = [
  {
    num: "01",
    title: "Deep Operational Understanding",
    body: "We spend time in your environment before writing a single line of code. We learn the workflows, constraints, and actual goals — not the polished version you share in the first meeting.",
  },
  {
    num: "02",
    title: "Built, Not Presented",
    body: "We deliver working AI systems — not strategy decks, not pilot programs. If we take a project, we build it and it runs in production.",
  },
  {
    num: "03",
    title: "End-to-End Partnership",
    body: "From the first discovery session to live deployment and beyond, we own the whole journey. No handoffs to teams who weren't part of the strategy.",
  },
  {
    num: "04",
    title: "Zero Off-the-Shelf",
    body: "Every system is purpose-designed for your specific context. No templates. No tool wrappers dressed up as AI strategy. Custom means custom.",
  },
];

export default function WhyAltiqSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      /* ── Header elements ────────────────────────────────── */
      gsap.from(".why-label", {
        y: 20, opacity: 0, duration: 0.6, ease: "power3.out",
        scrollTrigger: { trigger: ".why-header", start: "top 85%" },
      });
      gsap.from(".why-heading", {
        y: 50, opacity: 0, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: ".why-header", start: "top 85%" },
        delay: 0.1,
      });
      gsap.from(".why-sub", {
        y: 24, opacity: 0, duration: 0.7, ease: "power3.out",
        scrollTrigger: { trigger: ".why-header", start: "top 85%" },
        delay: 0.2,
      });

      /* ── Horizontal divider draws left → right ───────────── */
      gsap.from(".why-h-divider", {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1.0,
        ease: "power2.inOut",
        scrollTrigger: { trigger: ".why-grid", start: "top 80%" },
      });

      /* ── Vertical divider draws top → bottom ─────────────── */
      gsap.from(".why-v-divider", {
        scaleY: 0,
        transformOrigin: "center top",
        duration: 1.0,
        ease: "power2.inOut",
        scrollTrigger: { trigger: ".why-grid", start: "top 80%" },
      });

      /* ── Cell numbers drop in ────────────────────────────── */
      gsap.from(".why-num", {
        y: 40, opacity: 0, duration: 0.7, ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: { trigger: ".why-grid", start: "top 78%" },
        delay: 0.25,
      });

      /* ── Cell text stagger ───────────────────────────────── */
      gsap.from(".why-text", {
        y: 24, opacity: 0, duration: 0.65, ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: { trigger: ".why-grid", start: "top 78%" },
        delay: 0.4,
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{ background: "var(--bg)", borderTop: "1px solid var(--border-2)" }}
    >
      {/* ── Section header ─────────────────────────────────── */}
      <div
        className="why-header"
        style={{
          maxWidth: "var(--max-w)",
          margin: "0 auto",
          padding: "6rem 2rem 4rem",
        }}
      >
        <p className="label why-label" style={{ marginBottom: "1.5rem" }}>
          <span className="label-dot" />
          Why altIQ
        </p>

        <div className="why-header-grid">
          <h2
            className="why-heading"
            style={{
              fontFamily: "var(--font-sora), sans-serif",
              fontSize: "clamp(2.5rem, 5vw, 5rem)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.0,
              color: "var(--fg)",
              margin: 0,
            }}
          >
            There are many
            <br />
            <span style={{ color: "var(--fg-muted)" }}>AI companies.</span>
          </h2>
          <p
            className="why-sub"
            style={{
              fontSize: "1rem",
              color: "var(--fg-mid)",
              lineHeight: 1.8,
              margin: 0,
              fontWeight: 500,
              alignSelf: "flex-end",
              paddingBottom: "0.25rem",
            }}
          >
            Here is why the ones who care about outcomes choose us over all of them.
          </p>
        </div>
      </div>

      {/* ── Feature grid ──────────────────────────────────── */}
      <div
        style={{
          maxWidth: "var(--max-w)",
          margin: "0 auto",
          padding: "0 2rem 6rem",
          position: "relative",
        }}
      >
        {/* Top border */}
        <div style={{ height: 1, background: "var(--border-2)" }} />

        {/* Animated dividers overlaid on grid */}
        <div style={{ position: "relative" }}>

          {/* Horizontal centre divider */}
          <div
            className="why-h-divider"
            style={{
              position: "absolute",
              top: "50%",
              left: 0,
              right: 0,
              height: 1,
              background: "var(--border-2)",
              zIndex: 2,
              pointerEvents: "none",
            }}
          />

          {/* Vertical centre divider */}
          <div
            className="why-v-divider"
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: "50%",
              width: 1,
              background: "var(--border-2)",
              zIndex: 2,
              pointerEvents: "none",
            }}
          />

          {/* 2×2 grid */}
          <div
            className="why-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
            }}
          >
            {WHY.map((w, i) => (
              <div
                key={w.num}
                className="why-cell"
                style={{
                  padding: "clamp(2rem, 3.5vw, 3.5rem)",
                  position: "relative",
                }}
              >
                {/* Large decorative number */}
                <span
                  className="why-num"
                  style={{
                    display: "block",
                    fontFamily: "var(--font-sora), sans-serif",
                    fontSize: "clamp(3.5rem, 7vw, 6.5rem)",
                    fontWeight: 700,
                    letterSpacing: "-0.04em",
                    lineHeight: 0.85,
                    color: "var(--border)",
                    marginBottom: "1.75rem",
                    transition: "color 0.35s",
                  }}
                >
                  {w.num}
                </span>

                {/* Title + body */}
                <div className="why-text">
                  <h3
                    style={{
                      fontFamily: "var(--font-sora), sans-serif",
                      fontSize: "clamp(1.2rem, 1.9vw, 1.6rem)",
                      fontWeight: 700,
                      letterSpacing: "-0.02em",
                      color: "var(--fg)",
                      margin: "0 0 0.85rem",
                      lineHeight: 1.15,
                    }}
                  >
                    {w.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.92rem",
                      color: "var(--fg-mid)",
                      lineHeight: 1.8,
                      margin: 0,
                      fontWeight: 500,
                    }}
                  >
                    {w.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom border */}
        <div style={{ height: 1, background: "var(--border-2)" }} />
      </div>

      <style>{`
        /* Header two-column */
        .why-header-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: end;
        }

        /* Cell hover: subtle bg tint + number brightens */
        .why-cell {
          transition: background 0.35s cubic-bezier(0.22, 1, 0.36, 1);
          cursor: default;
        }
        .why-cell:hover {
          background: var(--bg-deep);
        }
        .why-cell:hover .why-num {
          color: var(--fg-mid) !important;
        }

        /* Mobile */
        @media (max-width: 768px) {
          .why-header-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          .why-grid {
            grid-template-columns: 1fr !important;
          }
          .why-v-divider { display: none; }
        }
      `}</style>
    </section>
  );
}
