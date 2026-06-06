"use client";

import { useEffect, useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import RevealWrapper from "@/components/RevealWrapper";
import gsap from "gsap";
import { siteConfig } from "@/config/site";

const INTERESTS = [
  "AI Strategy & Roadmapping",
  "Custom AI Development",
  "Process Automation",
  "Data Intelligence",
  "AI Product Design",
  "General Enquiry",
];

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "0.68rem",
  fontWeight: 600,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: "var(--fg-muted)",
  marginBottom: "0.5rem",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "0.8rem 1rem",
  background: "var(--bg-subtle)",
  border: "1.5px solid var(--border-2)",
  borderRadius: "10px",
  color: "var(--fg)",
  fontSize: "0.9rem",
  fontFamily: "inherit",
  outline: "none",
  transition: "border-color 0.2s",
  appearance: "none",
};

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);
  const [error, setError]         = useState("");
  const [selected, setSelected]   = useState<string[]>([]);
  const [otherText, setOtherText] = useState("");

  // Controlled field values
  const [name, setName]       = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail]     = useState("");
  const [phone, setPhone]     = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".ct-badge", { y: 18, opacity: 0, duration: 0.55 })
        .from(".ct-title", { y: 70, opacity: 0, duration: 0.9 }, "-=0.35")
        .from(".ct-body",  { y: 24, opacity: 0, duration: 0.7 }, "-=0.5");
    });
    return () => ctx.revert();
  }, []);

  function toggleInterest(s: string) {
    setSelected((prev) => prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          company,
          email,
          phone,
          interests: selected,
          otherDomain: otherText,
          message,
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

        {/* Hero */}
        <section style={{ background: "var(--dark)", color: "var(--dark-fg)", paddingTop: "calc(var(--nav-height) + 5rem)", paddingBottom: "5rem" }}>
          <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", padding: "0 2rem" }}>
            <div className="ct-badge badge-pill badge-pill-dark" style={{ marginBottom: "2rem" }}>
              <span className="badge-dot badge-dot-dark" />
              Get in Touch
            </div>
            <h1 className="ct-title" style={{ fontFamily: "var(--font-sora), sans-serif", fontSize: "clamp(3.5rem, 9vw, 8rem)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 0.93, color: "var(--dark-fg)", margin: "0 0 1.5rem" }}>
              Let&apos;s build
              <br />
              <span style={{ color: "var(--dark-muted)" }}>something real.</span>
            </h1>
            <p className="ct-body" style={{ fontSize: "clamp(1rem, 1.6vw, 1.15rem)", color: "var(--dark-fg-mid)", maxWidth: "500px", lineHeight: 1.75, margin: 0 }}>
              Schedule a free 30-minute AI strategy session. No pitch. No slides. Just a direct conversation about what AI can do for your business.
            </p>
          </div>
        </section>

        {/* Form section */}
        <section style={{ background: "var(--bg)", borderTop: "1px solid var(--border-2)" }}>
          <div
            style={{
              maxWidth: "var(--max-w)",
              margin: "0 auto",
              padding: "5rem 2rem 7rem",
              display: "grid",
              gridTemplateColumns: "1fr 1.5fr",
              gap: "6rem",
              alignItems: "start",
            }}
            className="ct-grid"
          >
            {/* Left: info */}
            <div style={{ position: "sticky", top: "calc(var(--nav-height) + 2rem)" }}>
              <RevealWrapper>
                <div style={{ marginBottom: "3rem" }}>
                  <p className="label" style={{ marginBottom: "0.6rem" }}><span className="label-dot" />Direct Email</p>
                  <a href={`mailto:${siteConfig.email}`} style={{ fontFamily: "var(--font-sora), sans-serif", fontSize: "1.1rem", fontWeight: 600, color: "var(--fg)", textDecoration: "none", transition: "opacity 0.2s", display: "block" }}
                    onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.7")}
                    onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")}
                  >
                    {siteConfig.email}
                  </a>
                </div>

                <div style={{ marginBottom: "3rem" }}>
                  <p className="label" style={{ marginBottom: "0.6rem" }}><span className="label-dot" />Response Time</p>
                  <p style={{ fontSize: "0.9rem", color: "var(--fg-muted)", lineHeight: 1.6, margin: 0 }}>
                    We respond to every enquiry within 24 hours.
                    Strategy sessions are typically scheduled within 48 hours.
                  </p>
                </div>

                <div>
                  <p className="label" style={{ marginBottom: "0.6rem" }}><span className="label-dot" />What to Expect</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                    {["A direct conversation — no sales script", "Honest assessment of what AI can do for you", "Clear next steps if we're a fit"].map((line, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem" }}>
                        <span style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--accent)", display: "inline-block", flexShrink: 0, marginTop: "0.45rem" }} />
                        <p style={{ fontSize: "0.875rem", color: "var(--fg-muted)", margin: 0, lineHeight: 1.6 }}>{line}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </RevealWrapper>
            </div>

            {/* Right: form */}
            <RevealWrapper delay={80}>
              {submitted ? (
                <div style={{ padding: "4rem 2rem", textAlign: "center", background: "var(--bg-subtle)", borderRadius: "20px", border: "1px solid var(--border-2)" }}>
                  <div style={{ width: 56, height: 56, borderRadius: "50%", background: "var(--surface)", border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--fg)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <h2 style={{ fontFamily: "var(--font-sora), sans-serif", fontSize: "1.75rem", fontWeight: 700, color: "var(--fg)", margin: "0 0 0.75rem", letterSpacing: "-0.02em" }}>
                    Message Received
                  </h2>
                  <p style={{ fontSize: "0.9rem", color: "var(--fg-muted)", lineHeight: 1.7, margin: 0 }}>
                    We&apos;ll review it and get back to you within 24 hours to schedule your strategy session.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>

                  {/* Name + Company */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                    <div>
                      <label style={labelStyle}>Name *</label>
                      <input required type="text" placeholder="Your full name" style={inputStyle}
                        value={name} onChange={e => setName(e.target.value)}
                        onFocus={e => ((e.target as HTMLInputElement).style.borderColor = "var(--fg)")}
                        onBlur={e  => ((e.target as HTMLInputElement).style.borderColor = "var(--border-2)")}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Company</label>
                      <input type="text" placeholder="Company name" style={inputStyle}
                        value={company} onChange={e => setCompany(e.target.value)}
                        onFocus={e => ((e.target as HTMLInputElement).style.borderColor = "var(--fg)")}
                        onBlur={e  => ((e.target as HTMLInputElement).style.borderColor = "var(--border-2)")}
                      />
                    </div>
                  </div>

                  {/* Email + Phone */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                    <div>
                      <label style={labelStyle}>Email *</label>
                      <input required type="email" placeholder="you@company.com" style={inputStyle}
                        value={email} onChange={e => setEmail(e.target.value)}
                        onFocus={e => ((e.target as HTMLInputElement).style.borderColor = "var(--fg)")}
                        onBlur={e  => ((e.target as HTMLInputElement).style.borderColor = "var(--border-2)")}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Phone</label>
                      <input type="tel" placeholder="+1 000 000 0000" style={inputStyle}
                        value={phone} onChange={e => setPhone(e.target.value)}
                        onFocus={e => ((e.target as HTMLInputElement).style.borderColor = "var(--fg)")}
                        onBlur={e  => ((e.target as HTMLInputElement).style.borderColor = "var(--border-2)")}
                      />
                    </div>
                  </div>

                  {/* Interest selector */}
                  <div>
                    <label style={labelStyle}>I&apos;m interested in</label>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: selected.includes("Others") ? "0.85rem" : 0 }}>
                      {INTERESTS.map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => toggleInterest(s)}
                          style={{
                            padding: "0.4rem 0.85rem",
                            borderRadius: "100px",
                            fontSize: "0.78rem",
                            fontWeight: 500,
                            cursor: "pointer",
                            fontFamily: "inherit",
                            transition: "all 0.2s",
                            background: selected.includes(s) ? "var(--fg)" : "var(--bg-subtle)",
                            color: selected.includes(s) ? "var(--bg)" : "var(--fg-muted)",
                            border: selected.includes(s) ? "1.5px solid var(--fg)" : "1.5px solid var(--border-2)",
                          }}
                        >
                          {s}
                        </button>
                      ))}

                      {/* Others button */}
                      <button
                        type="button"
                        onClick={() => toggleInterest("Others")}
                        style={{
                          padding: "0.4rem 0.85rem",
                          borderRadius: "100px",
                          fontSize: "0.78rem",
                          fontWeight: 500,
                          cursor: "pointer",
                          fontFamily: "inherit",
                          transition: "all 0.2s",
                          background: selected.includes("Others") ? "var(--fg)" : "var(--bg-subtle)",
                          color: selected.includes("Others") ? "var(--bg)" : "var(--fg-muted)",
                          border: selected.includes("Others") ? "1.5px solid var(--fg)" : "1.5px solid var(--border-2)",
                        }}
                      >
                        Others
                      </button>
                    </div>

                    {/* "Others" text input — appears when Others is selected */}
                    {selected.includes("Others") && (
                      <div
                        style={{
                          animation: "fadeSlideIn 0.3s cubic-bezier(0.22,1,0.36,1) both",
                        }}
                      >
                        <label style={{ ...labelStyle, marginTop: "0.85rem", marginBottom: "0.45rem" }}>
                          Please specify your domain
                        </label>
                        <input
                          type="text"
                          value={otherText}
                          onChange={(e) => setOtherText(e.target.value)}
                          placeholder="e.g. Agriculture, Healthcare, Logistics..."
                          style={{ ...inputStyle }}
                          onFocus={e  => ((e.target as HTMLInputElement).style.borderColor = "var(--fg)")}
                          onBlur={e   => ((e.target as HTMLInputElement).style.borderColor = "var(--border-2)")}
                        />
                      </div>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label style={labelStyle}>Message *</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell us about your business and what you're trying to solve…"
                      style={{ ...inputStyle, resize: "vertical", lineHeight: 1.65 }}
                      value={message} onChange={e => setMessage(e.target.value)}
                      onFocus={e => ((e.target as HTMLTextAreaElement).style.borderColor = "var(--fg)")}
                      onBlur={e  => ((e.target as HTMLTextAreaElement).style.borderColor = "var(--border-2)")}
                    />
                  </div>

                  {/* Error message */}
                  {error && (
                    <p style={{ fontSize: "0.85rem", color: "#c0392b", margin: 0, fontWeight: 500 }}>
                      ⚠ {error}
                    </p>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn btn-primary"
                    style={{ fontSize: "0.95rem", padding: "0.85rem 2rem", alignSelf: "flex-start", opacity: loading ? 0.65 : 1, cursor: loading ? "not-allowed" : "pointer" }}
                  >
                    {loading ? "Sending…" : "Send Message →"}
                  </button>
                </form>
              )}
            </RevealWrapper>
          </div>
        </section>

      </main>
      <Footer />

      <style>{`
        .ct-grid { grid-template-columns: 1fr 1.5fr; }
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 768px) {
          .ct-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .ct-grid > :first-child { position: relative !important; top: 0 !important; }
        }
        @media (max-width: 560px) {
          form > div:has(input) { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
