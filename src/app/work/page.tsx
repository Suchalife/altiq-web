"use client";

import { useEffect } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CtaSection from "@/components/CtaSection";
import Link from "next/link";
import Image from "next/image";
import { PROJECTS } from "@/config/projects";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import RevealWrapper from "@/components/RevealWrapper";

gsap.registerPlugin(ScrollTrigger);

export default function WorkPage() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".wk-badge", { y: 18, opacity: 0, duration: 0.55 })
        .from(".wk-title", { y: 60, opacity: 0, duration: 0.9 }, "-=0.35")
        .from(".wk-sub",   { y: 24, opacity: 0, duration: 0.7 }, "-=0.5");

      gsap.utils.toArray<HTMLElement>(".wk-card-anim").forEach((el) => {
        gsap.from(el, {
          y: 40, opacity: 0, duration: 0.75, ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 88%" },
        });
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <Nav />
      <main>

        {/* Hero */}
        <section style={{ background: "var(--dark)", color: "var(--dark-fg)" }}>
          <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", padding: "8rem 2rem 5rem" }}>
            <div
              className="wk-badge badge-pill badge-pill-dark"
              style={{ marginBottom: "2rem" }}
            >
              <span className="badge-dot badge-dot-dark" />
              {PROJECTS.length} Projects in Production
            </div>

            <h1
              className="wk-title"
              style={{
                fontFamily: "var(--font-sora), sans-serif",
                fontSize: "clamp(3.5rem, 9vw, 8rem)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                lineHeight: 0.93,
                color: "var(--dark-fg)",
                margin: "0 0 2rem",
              }}
            >
              Our Work
            </h1>

            <p
              className="wk-sub"
              style={{
                fontSize: "clamp(1rem, 1.6vw, 1.2rem)",
                color: "var(--dark-fg-mid)",
                maxWidth: "520px",
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              AI systems built for real operations.
              Not demos, not dashboards — production AI
              that fits how your business actually works.
            </p>
          </div>
        </section>

        {/* Projects */}
        <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", padding: "4rem 2rem 6rem" }}>
          {PROJECTS.map((p, idx) => (
            <div key={p.slug} className="wk-card-anim" style={{ marginBottom: idx < PROJECTS.length - 1 ? "3rem" : 0 }}>
              <Link
                href={`/work/${p.slug}`}
                style={{
                  display: "grid",
                  gridTemplateColumns: idx % 2 === 0 ? "1fr 1fr" : "1fr 1fr",
                  gap: "2.5rem",
                  alignItems: "center",
                  textDecoration: "none",
                  color: "inherit",
                  padding: "2.5rem",
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "20px",
                  transition: "transform 0.4s cubic-bezier(0.22,1,0.36,1), box-shadow 0.4s, border-color 0.2s",
                }}
                className="wk-project-row"
              >
                {/* Image side */}
                <div
                  style={{
                    aspectRatio: "21 / 9",
                    borderRadius: "12px",
                    overflow: "hidden",
                    background: "var(--bg-deep)",
                    position: "relative",
                    order: idx % 2 === 0 ? 0 : 1,
                  }}
                >
                  {p.heroImage ? (
                    <Image
                      src={p.heroImage}
                      alt={p.name}
                      fill
                      style={{ objectFit: "cover", objectPosition: "center 10%", transition: "transform 0.55s cubic-bezier(0.22,1,0.36,1)" }}
                      className="wk-img"
                      sizes="(max-width: 768px) 100vw, 640px"
                      quality={90}
                    />
                  ) : (
                    <div
                      style={{
                        position: "absolute", inset: 0,
                        background: `linear-gradient(135deg, ${p.brandColor}20, ${p.brandColor}50)`,
                        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "1rem",
                      }}
                    >
                      <Image src={p.logo} alt={p.name} width={160} height={60} style={{ objectFit: "contain", opacity: 0.35 }} />
                      <span style={{ fontSize: "0.65rem", color: "var(--fg-faint)", letterSpacing: "0.1em", textTransform: "uppercase", background: "rgba(240,232,228,0.7)", padding: "0.18rem 0.55rem", borderRadius: "100px" }}>
                        Image coming soon
                      </span>
                    </div>
                  )}
                </div>

                {/* Text side */}
                <div style={{ order: idx % 2 === 0 ? 1 : 0 }}>
                  <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.25rem", flexWrap: "wrap" }}>
                    <span style={{ fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--fg-muted)", padding: "0.2rem 0.65rem", background: "var(--bg-deep)", borderRadius: "100px", border: "1px solid var(--border-2)" }}>
                      {p.category}
                    </span>
                    <span style={{ fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--fg-faint)", padding: "0.2rem 0.65rem", background: "var(--bg-deep)", borderRadius: "100px", border: "1px solid var(--border-2)" }}>
                      {p.year}
                    </span>
                  </div>

                  <h2
                    style={{
                      fontFamily: "var(--font-sora), sans-serif",
                      fontSize: "clamp(1.5rem, 2.5vw, 2.5rem)",
                      fontWeight: 700,
                      letterSpacing: "-0.025em",
                      color: "var(--fg)",
                      margin: "0 0 0.75rem",
                      lineHeight: 1.1,
                    }}
                  >
                    {p.name}
                  </h2>

                  <p
                    style={{
                      fontSize: "0.95rem",
                      fontStyle: "italic",
                      color: "var(--fg-muted)",
                      margin: "0 0 1rem",
                      lineHeight: 1.5,
                    }}
                  >
                    &ldquo;{p.tagline}&rdquo;
                  </p>

                  <p style={{ fontSize: "0.875rem", color: "var(--fg-muted)", lineHeight: 1.7, margin: "0 0 1.75rem" }}>
                    {p.summary}
                  </p>

                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.3rem",
                      fontSize: "0.875rem",
                      fontWeight: 500,
                      color: "var(--fg)",
                    }}
                  >
                    View Case Study →
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <CtaSection />

      </main>
      <Footer />

      <style>{`
        .wk-project-row:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 60px rgba(26,20,16,0.08);
          border-color: var(--border);
        }
        .wk-project-row:hover .wk-img {
          transform: scale(1.04);
        }
        @media (max-width: 768px) {
          .wk-project-row {
            grid-template-columns: 1fr !important;
          }
          .wk-project-row > :first-child,
          .wk-project-row > :last-child {
            order: unset !important;
          }
        }
      `}</style>
    </>
  );
}
