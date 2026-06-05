"use client";

import { useEffect } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CtaSection from "@/components/CtaSection";
import RevealWrapper from "@/components/RevealWrapper";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PRINCIPLES = [
  {
    num: "01",
    title: "Operations First",
    body: "We learn your industry before writing a single line of code. Every system starts with deep operational understanding — not an AI demo looking for a problem to solve.",
  },
  {
    num: "02",
    title: "No Demo-ware",
    body: "We don't build for presentations. We build for production — systems that run daily, handle edge cases, and get meaningfully better over time.",
  },
  {
    num: "03",
    title: "Fit, Not Replace",
    body: "AI should slot into how you already work. We never ask you to abandon your infrastructure or existing workflows for ours.",
  },
  {
    num: "04",
    title: "Refinement Loop",
    body: "Live operational data makes every system smarter. Deployment is not the end — it's where the real improvement begins.",
  },
];

export default function AboutPage() {
  useEffect(() => {
    const ctx = gsap.context(() => {

      /* ── Hero entrance ───────────────────────────────────── */
      gsap.timeline({ defaults: { ease: "power3.out" } })
        .from(".ab-badge", { y: 18, opacity: 0, duration: 0.55 })
        .from(".ab-title", { y: 70, opacity: 0, duration: 0.9 }, "-=0.35")
        .from(".ab-body",  { y: 24, opacity: 0, duration: 0.7 }, "-=0.5");

      /* ── Principles: stagger each row on scroll ──────────── */
      gsap.utils.toArray<HTMLElement>(".ab-principle-row").forEach((row) => {
        const line  = row.querySelector<HTMLElement>(".ab-p-line");
        const num   = row.querySelector<HTMLElement>(".ab-p-num");
        const title = row.querySelector<HTMLElement>(".ab-p-title");
        const body  = row.querySelector<HTMLElement>(".ab-p-body");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: row,
            start: "top 82%",
            once: true,
          },
          defaults: { ease: "power3.out" },
        });

        /* Line draws left-to-right */
        tl.fromTo(line,
          { scaleX: 0, transformOrigin: "left center" },
          { scaleX: 1, duration: 0.7, ease: "power2.inOut" }
        )
        /* Number zooms in */
        .from(num,   { y: 30, opacity: 0, duration: 0.7 }, "-=0.4")
        /* Title slides up */
        .from(title, { y: 22, opacity: 0, duration: 0.6 }, "-=0.5")
        /* Body slides up last */
        .from(body,  { y: 16, opacity: 0, duration: 0.6 }, "-=0.45");
      });

    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Nav />
      <main>

        {/* ── Hero ─────────────────────────────────────────────── */}
        <section style={{ background: "var(--dark)", color: "var(--dark-fg)" }}>
          <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", padding: "8rem 2rem 5rem" }}>
            <div className="ab-badge badge-pill badge-pill-dark" style={{ marginBottom: "2rem" }}>
              <span className="badge-dot badge-dot-dark" />About altIQ
            </div>
            <h1 className="ab-title" style={{ fontFamily: "var(--font-sora), sans-serif", fontSize: "clamp(3rem, 8vw, 7.5rem)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 0.93, margin: "0 0 2.5rem" }}>
              <span style={{ display: "block", color: "var(--dark-fg)" }}>Building AI Systems</span>
              <span style={{ display: "block", color: "var(--dark-muted)" }}>That Power Real</span>
              <span style={{ display: "block", color: "var(--dark-muted)" }}>Operations.</span>
            </h1>
            <p className="ab-body" style={{ fontSize: "clamp(1rem, 1.6vw, 1.2rem)", color: "var(--dark-fg-mid)", maxWidth: "560px", lineHeight: 1.75, margin: 0 }}>
              altIQ is an AI strategy and systems firm focused on operational intelligence. We transform deep domain knowledge into scalable, decision-making systems that run inside real businesses.
            </p>
          </div>
        </section>

        {/* ── Mission ──────────────────────────────────────────── */}
        <section style={{ background: "var(--bg-deep)", borderBottom: "1px solid var(--border-2)" }}>
          <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", padding: "5rem 2rem", display: "grid", gridTemplateColumns: "minmax(200px, 280px) 1fr", gap: "5rem", alignItems: "start" }} className="ab-two-col">
            <RevealWrapper>
              <p className="label"><span className="label-dot" />Our Mission</p>
            </RevealWrapper>
            <div>
              <RevealWrapper>
                <p style={{ fontFamily: "var(--font-sora), sans-serif", fontSize: "clamp(1.1rem, 2vw, 1.5rem)", lineHeight: 1.55, color: "var(--fg)", margin: "0 0 1.5rem", fontWeight: 600, letterSpacing: "-0.01em" }}>
                  We go beyond the strategy deck. We learn your industry, understand your operations, and build intelligence-powered systems that drive decisions that matter.
                </p>
              </RevealWrapper>
              <RevealWrapper delay={80}>
                <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "var(--fg-muted)", margin: 0 }}>
                  Most AI firms show up with a model and a slide deck. We show up with engineers who spend time in your operations — because the only way to build operational AI is to understand the operation first.
                </p>
              </RevealWrapper>
            </div>
          </div>
        </section>

        {/* ── Stats ────────────────────────────────────────────── */}
        <section style={{ background: "var(--bg)", borderBottom: "1px solid var(--border-2)" }}>
          <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", padding: "0 2rem", display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
            {[
              { value: "3+",   label: "AI Systems in Production" },
              { value: "100%", label: "Custom-Built, Zero Off-the-Shelf" },
              { value: "0",    label: "Demo-ware Delivered" },
            ].map((s, i) => (
              <RevealWrapper key={s.value} delay={i * 100}>
                <div style={{ padding: "3rem 0", paddingLeft: i > 0 ? "3rem" : 0, paddingRight: i < 2 ? "3rem" : 0, borderRight: i < 2 ? "1px solid var(--border-2)" : "none" }}>
                  <p style={{ fontFamily: "var(--font-sora), sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1, color: "var(--fg)", margin: "0 0 0.4rem" }}>{s.value}</p>
                  <p style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--fg-muted)", margin: 0 }}>{s.label}</p>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </section>

        {/* ══ HOW WE THINK — Statement Rows ════════════════════ */}
        <section style={{ background: "var(--bg)", borderBottom: "1px solid var(--border-2)" }}>
          <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", padding: "6rem 2rem" }}>

            {/* Section header */}
            <RevealWrapper>
              <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "1rem", flexWrap: "wrap", gap: "1rem" }}>
                <div>
                  <p className="label" style={{ marginBottom: "0.75rem" }}>
                    <span className="label-dot" />How We Think
                  </p>
                  <h2 style={{ fontFamily: "var(--font-sora), sans-serif", fontSize: "clamp(1.8rem, 3.5vw, 3rem)", fontWeight: 700, letterSpacing: "-0.025em", lineHeight: 1.05, color: "var(--fg)", margin: 0 }}>
                    Our Operating<br />Principles
                  </h2>
                </div>
                <p style={{ fontSize: "0.9rem", color: "var(--fg-muted)", maxWidth: "320px", lineHeight: 1.7, margin: 0, fontWeight: 500 }}>
                  Four beliefs that shape every project we take on — from the first meeting to the final deployment.
                </p>
              </div>
            </RevealWrapper>

            {/* Principle rows */}
            <div style={{ marginTop: "3rem" }}>
              {PRINCIPLES.map((p) => (
                <div
                  key={p.num}
                  className="ab-principle-row"
                  style={{ position: "relative", paddingBottom: "3rem", paddingTop: "3rem" }}
                >
                  {/* Animated top border */}
                  <div
                    className="ab-p-line"
                    style={{
                      position: "absolute",
                      top: 0, left: 0, right: 0,
                      height: 1,
                      background: "var(--border-2)",
                    }}
                  />

                  {/* 3-column grid */}
                  <div className="ab-principle-grid">

                    {/* Large decorative number */}
                    <div className="ab-p-num" style={{ display: "flex", alignItems: "flex-start" }}>
                      <span
                        style={{
                          fontFamily: "var(--font-sora), sans-serif",
                          fontSize: "clamp(3.5rem, 6vw, 6rem)",
                          fontWeight: 700,
                          color: "var(--border)",
                          lineHeight: 0.85,
                          letterSpacing: "-0.04em",
                          display: "block",
                          transition: "color 0.35s",
                        }}
                        className="ab-p-num-text"
                      >
                        {p.num}
                      </span>
                    </div>

                    {/* Title */}
                    <div className="ab-p-title" style={{ paddingTop: "0.3rem" }}>
                      <h3
                        style={{
                          fontFamily: "var(--font-sora), sans-serif",
                          fontSize: "clamp(1.4rem, 2.2vw, 2rem)",
                          fontWeight: 700,
                          letterSpacing: "-0.02em",
                          color: "var(--fg)",
                          margin: 0,
                          lineHeight: 1.15,
                        }}
                      >
                        {p.title}
                      </h3>
                    </div>

                    {/* Body */}
                    <div className="ab-p-body" style={{ paddingTop: "0.3rem" }}>
                      <p
                        style={{
                          fontSize: "1rem",
                          color: "var(--fg-mid)",
                          lineHeight: 1.8,
                          margin: 0,
                          fontWeight: 500,
                        }}
                      >
                        {p.body}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Bottom closing border */}
              <div style={{ height: 1, background: "var(--border-2)" }} />
            </div>
          </div>
        </section>

        {/* ── Founder quote ─────────────────────────────────────── */}
        <section style={{ background: "var(--bg-deep)", borderTop: "1px solid var(--border-2)", borderBottom: "1px solid var(--border-2)" }}>
          <div style={{ maxWidth: "860px", margin: "0 auto", padding: "7rem 2rem", textAlign: "center" }}>
            <RevealWrapper>
              <p style={{ fontFamily: "var(--font-sora), sans-serif", fontSize: "4rem", lineHeight: 0.8, color: "var(--border)", marginBottom: "1.5rem", fontWeight: 700 }}>&ldquo;</p>
              <blockquote style={{ fontFamily: "var(--font-sora), sans-serif", fontSize: "clamp(1.5rem, 3.5vw, 2.5rem)", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.3, color: "var(--fg)", margin: "0 0 2rem" }}>
                We don&apos;t deliver presentations. We actually deploy strategic AI-powered systems that run inside real operations.
              </blockquote>
              <p style={{ fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--fg-muted)" }}>— Founder, altIQ</p>
            </RevealWrapper>
          </div>
        </section>

        <CtaSection />
      </main>
      <Footer />

      <style>{`
        /* Mission two-col */
        .ab-two-col { grid-template-columns: minmax(200px, 280px) 1fr; }
        @media (max-width: 768px) {
          .ab-two-col { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }

        /* Principle row 3-col grid */
        .ab-principle-grid {
          display: grid;
          grid-template-columns: 100px 1fr 2fr;
          gap: 3rem;
          align-items: start;
        }

        /* Hover: number tint + row bg */
        .ab-principle-row {
          cursor: default;
          transition: background 0.3s;
          border-radius: 4px;
          margin: 0 -1rem;
          padding-left: 1rem;
          padding-right: 1rem;
        }
        .ab-principle-row:hover {
          background: var(--bg-subtle);
        }
        .ab-principle-row:hover .ab-p-num-text {
          color: var(--fg-mid) !important;
        }

        /* Mobile: stack columns */
        @media (max-width: 768px) {
          .ab-principle-grid {
            grid-template-columns: 1fr !important;
            gap: 0.75rem !important;
          }
          .ab-p-num span {
            font-size: 2.5rem !important;
          }
        }
      `}</style>
    </>
  );
}
