"use client";

import { useEffect, useRef, useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CtaSection from "@/components/CtaSection";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ROLES = [
  {
    title: "Full Stack Engineer",
    dept: "Engineering",
    type: "Full-time",
    what: "Build the interfaces and backends that power our AI systems. You'll work across React frontends, Node/Python APIs, and cloud infrastructure — connecting intelligence to real users inside production environments.",
  },
  {
    title: "ML Developer",
    dept: "AI & Research",
    type: "Full-time",
    what: "Design and train the models at the core of our products. You'll work on NLP, forecasting, and decision systems deployed inside real manufacturing and procurement operations.",
  },
  {
    title: "Frontend Developer",
    dept: "Engineering",
    type: "Full-time",
    what: "Craft the UI layer of intelligence-powered products. You'll turn complex operational data into clear, fast, accessible interfaces — working closely with our AI systems team.",
  },
  {
    title: "Sales",
    dept: "Growth",
    type: "Full-time",
    what: "Take our AI systems to market. You'll identify and close enterprise opportunities, communicating real operational value — not buzzwords — to real buyers.",
  },
  {
    title: "HR",
    dept: "People",
    type: "Full-time",
    what: "Build the team that builds the systems. You'll run hiring, onboarding, and culture — making altIQ a place where sharp, curious people do their best work.",
  },
  {
    title: "Project Manager",
    dept: "Operations",
    type: "Full-time",
    what: "Keep complex AI deployments on track. You'll coordinate across engineering, client, and operations teams — making sure systems ship and run exactly as promised.",
  },
];

export default function CareersPage() {
  const [hovered, setHovered]     = useState<number | null>(null);
  const [fileName, setFileName]   = useState<string>("");
  const [submitted, setSubmitted] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* ── Hero ─────────────────────────────────────────── */
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".cr-badge",    { y: 18, opacity: 0, duration: 0.55 })
        .from(".cr-title",    { y: 70, opacity: 0, duration: 1.0 }, "-=0.35")
        .from(".cr-subtitle", { y: 30, opacity: 0, duration: 0.75 }, "-=0.5");

      /* ── Roles ────────────────────────────────────────── */
      gsap.from(".cr-roles-heading", {
        y: 30, opacity: 0, duration: 0.7, ease: "power2.out",
        scrollTrigger: { trigger: ".cr-roles-heading", start: "top 85%" },
      });
      gsap.utils.toArray<HTMLElement>(".cr-role-row").forEach((row, i) => {
        gsap.from(row, {
          x: -30, opacity: 0, duration: 0.6,
          delay: i * 0.07,
          ease: "power2.out",
          scrollTrigger: { trigger: ".cr-roles-section", start: "top 78%" },
        });
      });

      /* ── Form ─────────────────────────────────────────── */
      gsap.from(".cr-form-heading", {
        y: 30, opacity: 0, duration: 0.7, ease: "power2.out",
        scrollTrigger: { trigger: ".cr-form-heading", start: "top 85%" },
      });
      gsap.from(".cr-form-inner", {
        y: 40, opacity: 0, duration: 0.8, ease: "power2.out",
        scrollTrigger: { trigger: ".cr-form-inner", start: "top 85%" },
      });
    });

    return () => ctx.revert();
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <Nav />
      <main>

        {/* ══════════════════════════════════════════════════
            HERO
        ══════════════════════════════════════════════════ */}
        <section style={{ background: "var(--dark)", color: "var(--dark-fg)" }}>
          <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", padding: "8rem 2rem 5rem" }}>
            <div className="cr-badge badge-pill badge-pill-dark" style={{ marginBottom: "2rem" }}>
              <span className="badge-dot badge-dot-dark" />
              Careers at altIQ · {ROLES.length} Open Roles
            </div>

            <h1
              className="cr-title"
              style={{
                fontFamily: "var(--font-sora), sans-serif",
                fontSize: "clamp(4rem, 11vw, 10rem)",
                fontWeight: 700,
                lineHeight: 0.9,
                letterSpacing: "-0.03em",
                color: "var(--dark-fg)",
                margin: "0 0 2rem",
              }}
            >
              Join Us.
            </h1>

            <p
              className="cr-subtitle"
              style={{
                fontSize: "clamp(1rem, 1.6vw, 1.2rem)",
                color: "var(--dark-fg-mid)",
                maxWidth: "520px",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              We build AI systems that change how businesses operate.
              If you want to work on hard problems that ship to real operations — not slide decks — this is the place.
            </p>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            OPEN ROLES
        ══════════════════════════════════════════════════ */}
        <section
          className="cr-roles-section"
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "5rem 1.5rem" }}
        >
          <p
            className="cr-roles-heading"
            style={{
              fontSize: "0.72rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--fg-muted)",
              fontFamily: "var(--font-inter), sans-serif",
              marginBottom: "0.5rem",
            }}
          >
            Open Roles — hover to see what you'd be working on
          </p>

          {/* Two-column: roles list | description panel */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "3rem",
              alignItems: "start",
              marginTop: "2.5rem",
            }}
          >
            {/* Roles list */}
            <div>
              {ROLES.map((role, i) => (
                <div
                  key={role.title}
                  className="cr-role-row"
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "1.6rem 0",
                    borderBottom: "1px solid var(--border)",
                    cursor: "default",
                    transition: "padding-left 0.25s cubic-bezier(0.22,1,0.36,1)",
                    paddingLeft: hovered === i ? "0.75rem" : "0",
                  }}
                >
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-inter), sans-serif",
                        fontSize: "clamp(1.2rem, 2.2vw, 1.8rem)",
                        letterSpacing: "0.04em",
                        color: hovered === i ? "var(--fg)" : "var(--fg)",
                        margin: 0,
                        lineHeight: 1.1,
                        transition: "color 0.2s",
                      }}
                    >
                      {role.title}
                    </p>
                    <p
                      style={{
                        fontSize: "0.75rem",
                        color: "var(--fg-muted)",
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        margin: "0.25rem 0 0",
                      }}
                    >
                      {role.dept} · {role.type}
                    </p>
                  </div>
                  <span
                    style={{
                      fontSize: "1.1rem",
                      color: "var(--fg)",
                      opacity: hovered === i ? 1 : 0,
                      transform: hovered === i ? "translateX(0)" : "translateX(-8px)",
                      transition: "opacity 0.25s, transform 0.25s cubic-bezier(0.22,1,0.36,1)",
                    }}
                  >
                    →
                  </span>
                </div>
              ))}
            </div>

            {/* Description panel */}
            <div
              style={{
                position: "sticky",
                top: "calc(var(--nav-height) + 2rem)",
                minHeight: "200px",
              }}
            >
              {hovered !== null ? (
                <div key={hovered}>
                  <p
                    style={{
                      fontSize: "0.7rem",
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      color: "var(--fg-muted)",
                      fontFamily: "var(--font-inter), sans-serif",
                      marginBottom: "1.25rem",
                      animation: "fade-up 0.35s cubic-bezier(0.22,1,0.36,1) both",
                    }}
                  >
                    {ROLES[hovered].dept}
                  </p>
                  <h2
                    style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
                      letterSpacing: "0.02em",
                      color: "var(--fg)",
                      margin: "0 0 1.25rem",
                      lineHeight: 1.05,
                      animation: "fade-up 0.4s 0.05s cubic-bezier(0.22,1,0.36,1) both",
                    }}
                  >
                    {ROLES[hovered].title}
                  </h2>
                  <p
                    style={{
                      fontSize: "0.95rem",
                      lineHeight: 1.75,
                      color: "var(--fg-muted)",
                      maxWidth: "420px",
                      animation: "fade-up 0.45s 0.1s cubic-bezier(0.22,1,0.36,1) both",
                    }}
                  >
                    {ROLES[hovered].what}
                  </p>
                </div>
              ) : (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                    minHeight: "200px",
                    borderRadius: "12px",
                    border: "1px dashed var(--border)",
                    padding: "2rem",
                  }}
                >
                  <p
                    style={{
                      fontSize: "0.825rem",
                      color: "var(--fg-muted)",
                      textAlign: "center",
                      letterSpacing: "0.04em",
                    }}
                  >
                    Hover a role to see
                    <br />
                    what you&apos;d be working on
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        <div style={{ borderTop: "1px solid var(--border)" }} />

        {/* ══════════════════════════════════════════════════
            APPLICATION FORM
        ══════════════════════════════════════════════════ */}
        <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "5rem 1.5rem 7rem" }}>
          <p
            className="cr-form-heading"
            style={{
              fontSize: "0.72rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--fg-muted)",
              fontFamily: "var(--font-inter), sans-serif",
              marginBottom: "1rem",
            }}
          >
            Apply Now
          </p>
          <h2
            className="cr-form-heading"
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "clamp(2rem, 4vw, 4rem)",
              letterSpacing: "0.02em",
              color: "var(--fg)",
              margin: "0 0 3rem",
              lineHeight: 1,
            }}
          >
            Tell us about yourself.
          </h2>

          {submitted ? (
            <div
              style={{
                padding: "4rem 2rem",
                textAlign: "center",
                border: "1px solid var(--border)",
                borderRadius: "12px",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "2rem",
                  color: "var(--fg)",
                  marginBottom: "0.75rem",
                  letterSpacing: "0.04em",
                }}
              >
                Application Received
              </p>
              <p style={{ fontSize: "0.9rem", color: "var(--fg-muted)" }}>
                We'll review it and get back to you.
              </p>
            </div>
          ) : (
            <form
              ref={formRef}
              className="cr-form-inner"
              onSubmit={handleSubmit}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1.5rem",
                maxWidth: "800px",
              }}
            >
              {/* Position */}
              <div style={{ gridColumn: "1 / -1" }}>
                <label style={labelStyle}>Position</label>
                <select required style={inputStyle}>
                  <option value="">Select a role</option>
                  {ROLES.map(r => (
                    <option key={r.title} value={r.title}>{r.title}</option>
                  ))}
                </select>
              </div>

              {/* Name */}
              <div>
                <label style={labelStyle}>Name</label>
                <input required type="text" placeholder="Your full name" style={inputStyle} />
              </div>

              {/* Email */}
              <div>
                <label style={labelStyle}>Email</label>
                <input required type="email" placeholder="you@email.com" style={inputStyle} />
              </div>

              {/* Phone */}
              <div style={{ gridColumn: "1 / -1" }}>
                <label style={labelStyle}>Phone</label>
                <input type="tel" placeholder="+1 (000) 000-0000" style={inputStyle} />
              </div>

              {/* Message */}
              <div style={{ gridColumn: "1 / -1" }}>
                <label style={labelStyle}>Message <span style={{ color: "var(--fg-muted)" }}>(optional)</span></label>
                <textarea
                  rows={4}
                  placeholder="Tell us why you want to work at altIQ…"
                  style={{ ...inputStyle, resize: "vertical", lineHeight: 1.6 }}
                />
              </div>

              {/* Resume upload */}
              <div style={{ gridColumn: "1 / -1" }}>
                <label style={labelStyle}>Resume</label>
                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    padding: "1rem 1.25rem",
                    border: "1.5px dashed var(--border)",
                    borderRadius: "8px",
                    cursor: "pointer",
                    transition: "border-color 0.2s",
                    color: fileName ? "var(--fg)" : "var(--fg-muted)",
                    fontSize: "0.875rem",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = "var(--fg)")}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--border)")}
                >
                  <span style={{ fontSize: "1.2rem" }}>📎</span>
                  <span>{fileName || "Upload PDF, DOC or DOCX — max 3 MB"}</span>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    style={{ display: "none" }}
                    onChange={e => setFileName(e.target.files?.[0]?.name ?? "")}
                  />
                </label>
              </div>

              {/* Submit */}
              <div style={{ gridColumn: "1 / -1", marginTop: "0.5rem" }}>
                <button
                  type="submit"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    padding: "0.75rem 2rem",
                    border: "1.5px solid var(--fg)",
                    borderRadius: "100px",
                    background: "var(--fg)",
                    color: "var(--bg)",
                    fontSize: "0.9rem",
                    fontWeight: 500,
                    cursor: "pointer",
                    transition: "background 0.2s, color 0.2s",
                    fontFamily: "inherit",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                    (e.currentTarget as HTMLButtonElement).style.color = "var(--fg)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLButtonElement).style.background = "var(--fg)";
                    (e.currentTarget as HTMLButtonElement).style.color = "var(--bg)";
                  }}
                >
                  Submit Application →
                </button>
              </div>
            </form>
          )}
        </section>

        <CtaSection />

      </main>
      <Footer />
    </>
  );
}

/* ── Shared input/label styles ─────────────────────────────── */
const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "0.72rem",
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: "var(--fg-muted)",
  marginBottom: "0.5rem",
  fontFamily: "var(--font-inter), sans-serif",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "0.75rem 1rem",
  background: "var(--card-bg)",
  border: "1.5px solid var(--border)",
  borderRadius: "8px",
  color: "var(--fg)",
  fontSize: "0.9rem",
  fontFamily: "inherit",
  outline: "none",
  transition: "border-color 0.2s",
  appearance: "none",
};
