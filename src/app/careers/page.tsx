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
  const [hovered, setHovered]           = useState<number | null>(null);
  const [fileName, setFileName]         = useState<string>("");
  const [resumeFile, setResumeFile]     = useState<File | null>(null);
  const [submitted, setSubmitted]       = useState(false);
  const [loading, setLoading]           = useState(false);
  const [error, setError]               = useState("");
  const [selectedRole, setSelectedRole] = useState<string>("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Controlled fields
  const [appName, setAppName]       = useState("");
  const [appEmail, setAppEmail]     = useState("");
  const [appPhone, setAppPhone]     = useState("");
  const [appMessage, setAppMessage] = useState("");

  const formRef     = useRef<HTMLFormElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  /* Close dropdown on outside click */
  useEffect(() => {
    function handleOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

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

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!selectedRole) { setError("Please select a position."); return; }
    setLoading(true);
    setError("");

    try {
      // Convert resume file to base64 if provided
      let resumeBase64   = "";
      let resumeFileName = "";
      let resumeMimeType = "";

      if (resumeFile) {
        resumeFileName = resumeFile.name;
        resumeMimeType = resumeFile.type || "application/octet-stream";
        const buffer   = await resumeFile.arrayBuffer();
        const bytes    = new Uint8Array(buffer);
        let binary     = "";
        bytes.forEach(b => (binary += String.fromCharCode(b)));
        resumeBase64   = btoa(binary);
      }

      const res = await fetch("/api/careers", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify({
          position:       selectedRole,
          name:           appName,
          email:          appEmail,
          phone:          appPhone,
          message:        appMessage,
          resumeBase64,
          resumeFileName,
          resumeMimeType,
        }),
      });

      const result = await res.json();

      if (result.success) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please try again or email us directly.");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
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
              {/* Position — custom dropdown */}
              <div style={{ gridColumn: "1 / -1" }}>
                <label style={labelStyle}>Position *</label>

                {/* Hidden real input for form validation */}
                <input
                  type="hidden"
                  name="position"
                  value={selectedRole}
                  required
                />

                <div ref={dropdownRef} style={{ position: "relative" }}>

                  {/* Trigger */}
                  <button
                    type="button"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    style={{
                      width: "100%",
                      padding: "0.85rem 1rem",
                      background: "var(--bg-subtle)",
                      border: `1.5px solid ${dropdownOpen ? "var(--fg)" : "var(--border-2)"}`,
                      borderRadius: "10px",
                      color: selectedRole ? "var(--fg)" : "var(--fg-faint)",
                      fontSize: "0.9rem",
                      fontFamily: "inherit",
                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      textAlign: "left",
                      transition: "border-color 0.2s",
                    }}
                  >
                    <span>{selectedRole || "Select a role"}</span>
                    <svg
                      width="16" height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{
                        color: "var(--fg-muted)",
                        flexShrink: 0,
                        transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.25s cubic-bezier(0.22,1,0.36,1)",
                      }}
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>

                  {/* Dropdown panel */}
                  {dropdownOpen && (
                    <div
                      style={{
                        position: "absolute",
                        top: "calc(100% + 6px)",
                        left: 0,
                        right: 0,
                        background: "var(--bg-subtle)",
                        border: "1.5px solid var(--border)",
                        borderRadius: "12px",
                        zIndex: 50,
                        overflow: "hidden",
                        boxShadow: "0 12px 40px rgba(26,20,16,0.10)",
                        animation: "dropdownIn 0.2s cubic-bezier(0.22,1,0.36,1)",
                      }}
                    >
                      {ROLES.map((r, i) => (
                        <button
                          key={r.title}
                          type="button"
                          onClick={() => {
                            setSelectedRole(r.title);
                            setDropdownOpen(false);
                          }}
                          style={{
                            width: "100%",
                            padding: "0.85rem 1.1rem",
                            background: selectedRole === r.title ? "var(--surface)" : "transparent",
                            border: "none",
                            borderTop: i > 0 ? "1px solid var(--border-2)" : "none",
                            color: "var(--fg)",
                            fontSize: "0.9rem",
                            fontFamily: "inherit",
                            cursor: "pointer",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            textAlign: "left",
                            transition: "background 0.15s",
                            fontWeight: selectedRole === r.title ? 600 : 400,
                          }}
                          onMouseEnter={e => (e.currentTarget.style.background = "var(--bg-deep)")}
                          onMouseLeave={e => (e.currentTarget.style.background = selectedRole === r.title ? "var(--surface)" : "transparent")}
                        >
                          <span>{r.title}</span>
                          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                            <span style={{ fontSize: "0.72rem", color: "var(--fg-faint)", fontWeight: 400 }}>
                              {r.dept}
                            </span>
                            {selectedRole === r.title && (
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Name */}
              <div>
                <label style={labelStyle}>Name *</label>
                <input required type="text" placeholder="Your full name" style={inputStyle}
                  value={appName} onChange={e => setAppName(e.target.value)} suppressHydrationWarning />
              </div>

              {/* Email */}
              <div>
                <label style={labelStyle}>Email *</label>
                <input required type="email" placeholder="you@email.com" style={inputStyle}
                  value={appEmail} onChange={e => setAppEmail(e.target.value)} suppressHydrationWarning />
              </div>

              {/* Phone */}
              <div style={{ gridColumn: "1 / -1" }}>
                <label style={labelStyle}>Phone</label>
                <input type="tel" placeholder="+1 (000) 000-0000" style={inputStyle}
                  value={appPhone} onChange={e => setAppPhone(e.target.value)} suppressHydrationWarning />
              </div>

              {/* Message */}
              <div style={{ gridColumn: "1 / -1" }}>
                <label style={labelStyle}>Message <span style={{ color: "var(--fg-muted)" }}>(optional)</span></label>
                <textarea
                  rows={4}
                  placeholder="Tell us why you want to work at altIQ…"
                  style={{ ...inputStyle, resize: "vertical", lineHeight: 1.6 }}
                  value={appMessage} onChange={e => setAppMessage(e.target.value)}
                  suppressHydrationWarning
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
                    onChange={e => {
                      const file = e.target.files?.[0] ?? null;
                      setResumeFile(file);
                      setFileName(file?.name ?? "");
                    }}
                  />
                </label>
              </div>

              {/* Submit */}
              <div style={{ gridColumn: "1 / -1", marginTop: "0.5rem" }}>
                <button
                  type="submit"
                  disabled={loading}
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
                    cursor: loading ? "not-allowed" : "pointer",
                    opacity: loading ? 0.65 : 1,
                    transition: "background 0.2s, color 0.2s",
                    fontFamily: "inherit",
                  }}
                >
                  {loading ? "Submitting…" : "Submit Application →"}
                </button>

                {/* Error message */}
                {error && (
                  <p style={{ fontSize: "0.85rem", color: "#c0392b", margin: "0.5rem 0 0", fontWeight: 500 }}>
                    ⚠ {error}
                  </p>
                )}
              </div>
            </form>
          )}
        </section>

        <CtaSection />

      </main>
      <Footer />

      <style>{`
        @keyframes dropdownIn {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
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
