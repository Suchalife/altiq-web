"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
  {
    num: "01",
    title: "AI Strategy & Roadmapping",
    tagline: "Clarity before code.",
    detail: "We map the right AI investments for your operations — what to build, in what order, and to what outcome.",
  },
  {
    num: "02",
    title: "Custom AI Development",
    tagline: "Built for your exact workflow.",
    detail: "Purpose-built AI systems engineered from scratch. Not API wrappers — real systems that solve the problem you actually have.",
  },
  {
    num: "03",
    title: "Process Automation",
    tagline: "Remove the bottlenecks only AI can solve.",
    detail: "Intelligent automation that doesn't just execute rules — it makes decisions. Complex workflows, simplified.",
  },
  {
    num: "04",
    title: "Data Intelligence",
    tagline: "Your data already has answers.",
    detail: "AI-powered analytics that surface patterns, predict outcomes, and feed better decisions in real time.",
  },
  {
    num: "05",
    title: "AI Product Design",
    tagline: "From concept to intelligent product.",
    detail: "We work with founders to design and build AI-native products — from the initial concept to market-ready software.",
  },
  {
    num: "06",
    title: "AI Integration & Deployment",
    tagline: "AI that works inside your world.",
    detail: "We handle the full integration into your existing infrastructure — no rip-and-replace, no disruption.",
  },
];

export default function ServicesSection() {
  const [hovered, setHovered] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      /* Section header */
      gsap.from(".sv-label", {
        y: 16, opacity: 0, duration: 0.6, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 85%" },
      });
      gsap.from(".sv-heading", {
        y: 40, opacity: 0, duration: 0.8, ease: "power3.out", delay: 0.1,
        scrollTrigger: { trigger: sectionRef.current, start: "top 85%" },
      });
      gsap.from(".sv-all-link", {
        opacity: 0, duration: 0.6, ease: "power2.out", delay: 0.25,
        scrollTrigger: { trigger: sectionRef.current, start: "top 85%" },
      });

      /* Top rule draws */
      gsap.from(".sv-top-rule", {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 0.9,
        ease: "power2.inOut",
        scrollTrigger: { trigger: ".sv-rows", start: "top 82%" },
      });

      /* Rows slide in left-to-right with stagger */
      gsap.utils.toArray<HTMLElement>(".sv-row").forEach((row, i) => {
        gsap.from(row, {
          x: -24,
          opacity: 0,
          duration: 0.65,
          ease: "power3.out",
          delay: i * 0.075,
          scrollTrigger: { trigger: ".sv-rows", start: "top 80%" },
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{ background: "var(--bg)", borderTop: "1px solid var(--border-2)" }}
    >
      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", padding: "6rem 2rem" }}>

        {/* ── Header ──────────────────────────────────────────── */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "3.5rem",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <div>
            <p className="label sv-label" style={{ marginBottom: "0.75rem" }}>
              <span className="label-dot" />
              What We Build
            </p>
            <h2
              className="sv-heading"
              style={{
                fontFamily: "var(--font-sora), sans-serif",
                fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
                fontWeight: 700,
                letterSpacing: "-0.025em",
                lineHeight: 1.1,
                color: "var(--fg)",
                margin: 0,
              }}
            >
              AI Solutions Designed
              <br />
              <span style={{ color: "var(--fg-muted)" }}>for Your Operations</span>
            </h2>
          </div>
          <Link
            href="/services"
            className="sv-all-link btn btn-ghost"
            style={{ fontSize: "0.875rem" }}
          >
            All services ↗
          </Link>
        </div>

        {/* ── Service rows ─────────────────────────────────────── */}
        <div className="sv-rows">

          {/* Top rule */}
          <div className="sv-top-rule" style={{ height: 1, background: "var(--border-2)" }} />

          {SERVICES.map((s, i) => (
            <div
              key={s.num}
              className="sv-row"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                borderBottom: "1px solid var(--border-2)",
                position: "relative",
                overflow: "hidden",
                cursor: "default",
              }}
            >
              {/* Hover background wash */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "var(--bg-deep)",
                  opacity: hovered === i ? 1 : 0,
                  transition: "opacity 0.35s cubic-bezier(0.22,1,0.36,1)",
                  pointerEvents: "none",
                }}
              />

              {/* Left accent line */}
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: 2,
                  background: "var(--fg)",
                  transform: hovered === i ? "scaleY(1)" : "scaleY(0)",
                  transformOrigin: "center",
                  transition: "transform 0.35s cubic-bezier(0.22,1,0.36,1)",
                  borderRadius: 1,
                }}
              />

              {/* Row content */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "52px 1fr 1fr auto",
                  alignItems: "center",
                  gap: "1.5rem",
                  padding: "1.6rem 0 1.6rem 1rem",
                  position: "relative",
                  zIndex: 1,
                  transform: hovered === i ? "translateX(6px)" : "translateX(0)",
                  transition: "transform 0.4s cubic-bezier(0.22,1,0.36,1)",
                }}
                className="sv-row-inner"
              >
                {/* Number */}
                <span
                  style={{
                    fontFamily: "var(--font-sora), sans-serif",
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    color: hovered === i ? "var(--fg-mid)" : "var(--fg-faint)",
                    transition: "color 0.3s",
                  }}
                >
                  {s.num}
                </span>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: "var(--font-sora), sans-serif",
                    fontSize: "clamp(1.1rem, 2vw, 1.6rem)",
                    fontWeight: 700,
                    letterSpacing: "-0.02em",
                    color: "var(--fg)",
                    margin: 0,
                    lineHeight: 1.2,
                  }}
                >
                  {s.title}
                </h3>

                {/* Detail — appears on hover */}
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "var(--fg-muted)",
                    margin: 0,
                    fontWeight: 500,
                    lineHeight: 1.55,
                    opacity: hovered === i ? 1 : 0,
                    transform: hovered === i ? "translateX(0)" : "translateX(-12px)",
                    transition: "opacity 0.35s cubic-bezier(0.22,1,0.36,1), transform 0.35s cubic-bezier(0.22,1,0.36,1)",
                  }}
                >
                  {s.detail}
                </p>

                {/* Tagline + arrow */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    flexShrink: 0,
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.8rem",
                      fontStyle: "italic",
                      color: "var(--fg-muted)",
                      opacity: hovered === i ? 0 : 1,
                      transition: "opacity 0.25s",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {s.tagline}
                  </span>
                  <span
                    style={{
                      fontSize: "1rem",
                      color: "var(--fg)",
                      opacity: hovered === i ? 1 : 0,
                      transform: hovered === i ? "translateX(0)" : "translateX(-8px)",
                      transition: "opacity 0.3s, transform 0.35s cubic-bezier(0.22,1,0.36,1)",
                    }}
                  >
                    →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .sv-row-inner {
            grid-template-columns: 40px 1fr auto !important;
          }
          .sv-row-inner > :nth-child(3) {
            display: none;
          }
        }
        @media (max-width: 480px) {
          .sv-row-inner {
            grid-template-columns: 36px 1fr !important;
          }
          .sv-row-inner > :nth-child(3),
          .sv-row-inner > :nth-child(4) {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
