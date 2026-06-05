"use client";

import { useEffect } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CtaSection from "@/components/CtaSection";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
  {
    num: "01",
    title: "AI Strategy & Roadmapping",
    tagline: "Clarity before code.",
    image: "/images/services/strategy.jpg",
    imagePos: "center center",
    points: ["AI opportunity assessment", "Prioritised roadmap & build order", "Tech stack & risk analysis"],
  },
  {
    num: "02",
    title: "Custom AI Development",
    tagline: "Built for your exact workflow.",
    image: "/images/services/development.jpg",
    imagePos: "center center",
    points: ["Custom-trained AI models", "Production-ready backend", "Full documentation & handover"],
  },
  {
    num: "03",
    title: "Process Automation",
    tagline: "Remove the bottlenecks only AI can solve.",
    image: "/images/services/automation.jpg",
    imagePos: "center center",
    points: ["Intelligent workflow design", "Complex decision automation", "Integration with existing tools"],
  },
  {
    num: "04",
    title: "Data Intelligence",
    tagline: "Your data already has answers.",
    image: "/images/services/data-intelligence.jpg",
    imagePos: "center center",
    points: ["Real-time analytics dashboards", "ML pipelines & prediction models", "Anomaly detection & alerting"],
  },
  {
    num: "05",
    title: "AI Product Design",
    tagline: "From concept to intelligent product.",
    image: "/images/services/product-design.jpg",
    imagePos: "center center",
    points: ["AI product strategy & validation", "UX and system architecture", "MVP to market-ready launch"],
  },
  {
    num: "06",
    title: "AI Integration & Deployment",
    tagline: "AI that works inside your world.",
    image: "/images/services/deployment.jpg",
    imagePos: "center center",
    points: ["System integration & APIs", "Cloud infrastructure & CI/CD", "Production monitoring & alerts"],
  },
];

/* Reusable service card */
function ServiceCard({ s, large = false }: { s: typeof SERVICES[0]; large?: boolean }) {
  return (
    <div className="sv-card" style={{ borderRadius: 20, overflow: "hidden", background: "var(--bg-subtle)", border: "1px solid var(--border-2)", display: "flex", flexDirection: "column", height: "100%" }}>

      {/* Image */}
      <div style={{ position: "relative", height: large ? 300 : 240, overflow: "hidden", flexShrink: 0 }}>
        <Image
          src={s.image}
          alt={s.title}
          fill
          style={{ objectFit: "cover", objectPosition: s.imagePos, transition: "transform 0.6s cubic-bezier(0.22,1,0.36,1)" }}
          className="sv-img"
          sizes="(max-width: 768px) 100vw, 700px"
          quality={90}
        />
        {/* Number badge */}
        <span style={{
          position: "absolute", top: "1rem", right: "1rem",
          background: "rgba(240,232,228,0.92)", backdropFilter: "blur(8px)",
          padding: "0.2rem 0.7rem", borderRadius: "100px",
          fontFamily: "var(--font-sora), sans-serif",
          fontSize: "0.68rem", fontWeight: 700,
          letterSpacing: "0.1em", color: "var(--fg-mid)",
        }}>
          {s.num}
        </span>
      </div>

      {/* Text */}
      <div style={{ padding: "1.75rem 2rem 2rem", display: "flex", flexDirection: "column", flex: 1 }}>
        <h2 style={{ fontFamily: "var(--font-sora), sans-serif", fontSize: large ? "clamp(1.4rem, 2vw, 1.75rem)" : "clamp(1.2rem, 1.8vw, 1.45rem)", fontWeight: 700, letterSpacing: "-0.02em", color: "var(--fg)", margin: "0 0 0.35rem", lineHeight: 1.15 }}>
          {s.title}
        </h2>
        <p style={{ fontSize: "0.9rem", fontStyle: "italic", color: "var(--fg-muted)", margin: "0 0 1.25rem", fontWeight: 500, lineHeight: 1.4 }}>
          {s.tagline}
        </p>

        {/* Divider */}
        <div style={{ height: 1, background: "var(--border-2)", marginBottom: "1.25rem" }} />

        {/* 3 bullet points */}
        <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.75rem", display: "flex", flexDirection: "column", gap: "0.55rem", flex: 1 }}>
          {s.points.map((p) => (
            <li key={p} style={{ display: "flex", alignItems: "center", gap: "0.65rem", fontSize: "0.88rem", color: "var(--fg-mid)", fontWeight: 500, lineHeight: 1.4 }}>
              <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--accent)", flexShrink: 0 }} />
              {p}
            </li>
          ))}
        </ul>

        <Link href="/contact" className="btn btn-outline" style={{ fontSize: "0.78rem", padding: "0.5rem 1.1rem", alignSelf: "flex-start" }}>
          Enquire →
        </Link>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  useEffect(() => {
    const ctx = gsap.context(() => {

      /* Hero entrance */
      gsap.timeline({ defaults: { ease: "power3.out" } })
        .from(".sv-badge",  { y: 18, opacity: 0, duration: 0.55 })
        .from(".sv-h1 span", { y: 70, opacity: 0, duration: 0.9, stagger: 0.08 }, "-=0.35")
        .from(".sv-body",   { y: 24, opacity: 0, duration: 0.7 }, "-=0.5");

      /* Each row fades up on scroll */
      gsap.utils.toArray<HTMLElement>(".sv-row").forEach((row) => {
        const cards = row.querySelectorAll(".sv-card");
        gsap.from(cards, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: row,
            start: "top 82%",
          },
        });
      });

      /* Section label fades in */
      gsap.utils.toArray<HTMLElement>(".sv-section-label").forEach((el) => {
        gsap.from(el, {
          y: 16, opacity: 0, duration: 0.6, ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 88%" },
        });
      });

      /* Industries stagger */
      gsap.from(".sv-industry", {
        y: 14, opacity: 0, duration: 0.5, stagger: 0.04, ease: "power2.out",
        scrollTrigger: { trigger: ".sv-industries", start: "top 85%" },
      });

    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <Nav />
      <main>

        {/* ── Hero ──────────────────────────────────────────────── */}
        <section style={{ background: "var(--dark)", color: "var(--dark-fg)" }}>
          <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", padding: "8rem 2rem 5rem" }}>
            <div className="sv-badge badge-pill badge-pill-dark" style={{ marginBottom: "2rem" }}>
              <span className="badge-dot badge-dot-dark" />
              What We Build
            </div>
            <h1 className="sv-h1" style={{ fontFamily: "var(--font-sora), sans-serif", fontSize: "clamp(3rem, 8vw, 7.5rem)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 0.93, color: "var(--dark-fg)", margin: "0 0 2rem" }}>
              <span style={{ display: "block" }}>Six services.</span>
              <span style={{ display: "block", color: "var(--dark-muted)" }}>One goal: deployment.</span>
            </h1>
            <p className="sv-body" style={{ fontSize: "clamp(1rem, 1.5vw, 1.15rem)", color: "var(--dark-fg-mid)", maxWidth: "540px", lineHeight: 1.75, margin: 0 }}>
              Every service is designed to deliver working AI systems — not strategy documents, not pilot programmes that never scale.
            </p>
          </div>
        </section>

        {/* ── Bento grid ────────────────────────────────────────── */}
        <section style={{ background: "var(--bg)", borderTop: "1px solid var(--border-2)" }}>
          <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", padding: "5rem 2rem 6rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>

            {/* Row 1 — Strategy (large) + Development (small) */}
            <div
              className="sv-row"
              style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: "1.5rem", alignItems: "stretch" }}
            >
              <ServiceCard s={SERVICES[0]} large />
              <ServiceCard s={SERVICES[1]} />
            </div>

            {/* Row 2 — Automation (small) + Data Intelligence (large) */}
            <div
              className="sv-row"
              style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "1.5rem", alignItems: "stretch" }}
            >
              <ServiceCard s={SERVICES[2]} />
              <ServiceCard s={SERVICES[3]} large />
            </div>

            {/* Row 3 — Product Design + Deployment (equal) */}
            <div
              className="sv-row"
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", alignItems: "stretch" }}
            >
              <ServiceCard s={SERVICES[4]} />
              <ServiceCard s={SERVICES[5]} />
            </div>

          </div>
        </section>

        {/* ── Industries ────────────────────────────────────────── */}
        <section style={{ background: "var(--bg-deep)", borderTop: "1px solid var(--border-2)", borderBottom: "1px solid var(--border-2)" }}>
          <div className="sv-industries" style={{ maxWidth: "var(--max-w)", margin: "0 auto", padding: "3.5rem 2rem" }}>
            <p className="label sv-section-label" style={{ marginBottom: "1.5rem" }}>
              <span className="label-dot" />
              Industries We Serve
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {["Manufacturing", "Procurement", "Sustainability & ESG", "Waste Management", "Logistics", "Agriculture", "Retail", "Enterprise", "Public Sector", "Healthcare", "Finance", "Legal"].map((ind) => (
                <span key={ind} className="tech-badge sv-industry" style={{ fontSize: "0.82rem", padding: "0.4rem 1rem", fontWeight: 500 }}>
                  {ind}
                </span>
              ))}
            </div>
          </div>
        </section>

        <CtaSection />
      </main>
      <Footer />

      <style>{`
        /* Card hover: lift + shadow */
        .sv-card {
          transition: transform 0.4s cubic-bezier(0.22,1,0.36,1),
                      box-shadow 0.4s cubic-bezier(0.22,1,0.36,1),
                      border-color 0.25s;
          cursor: default;
        }
        .sv-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 64px rgba(26,20,16,0.1);
          border-color: var(--border) !important;
        }
        /* Image zoom on card hover */
        .sv-card:hover .sv-img {
          transform: scale(1.06) !important;
        }
        /* Mobile: single column */
        @media (max-width: 768px) {
          .sv-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
