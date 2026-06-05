"use client";

import RevealWrapper from "./RevealWrapper";

const STEPS = [
  {
    num: "01",
    title: "Understand the Environment",
    desc: "Deep understanding of workflows, constraints, and decision structures — we learn your operations before writing a single line of code.",
  },
  {
    num: "02",
    title: "Design the Intelligence Layer",
    desc: "Architecting AI systems aligned with operational realities. Every system is purpose-built for your specific context — never templated.",
  },
  {
    num: "03",
    title: "Embed Within Operations",
    desc: "Integration into existing processes and infrastructure — no rip-and-replace, no disruption. AI that fits your world.",
  },
  {
    num: "04",
    title: "Refine Through Real Use",
    desc: "Continuous improvement through live operational data. Systems that get smarter the more they're used.",
  },
];

export default function HowWeWork() {
  return (
    <section
      style={{
        borderTop: "1px solid var(--border)",
        background: "var(--bg)",
      }}
    >
      <div className="hww-grid">

        {/* ── Left: sticky heading ────────────────────────────── */}
        <div className="hww-left">
          <RevealWrapper>
            <p
              style={{
                fontSize: "0.72rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--fg-muted)",
                fontFamily: "var(--font-bebas), sans-serif",
                marginBottom: "1.25rem",
              }}
            >
              How We Work
            </p>
          </RevealWrapper>

          <RevealWrapper delay={80}>
            <h2
              style={{
                fontFamily: "var(--font-bebas), sans-serif",
                fontSize: "clamp(2.5rem, 4vw, 4.5rem)",
                lineHeight: 1.0,
                color: "var(--fg)",
                margin: "0 0 1.5rem",
                letterSpacing: "0.01em",
              }}
            >
              Four steps.<br />Real results.
            </h2>
          </RevealWrapper>

          <RevealWrapper delay={160}>
            <p
              style={{
                fontSize: "0.875rem",
                color: "var(--fg-muted)",
                lineHeight: 1.75,
                margin: 0,
                maxWidth: "280px",
              }}
            >
              From initial understanding to continuous improvement — every engagement
              follows a proven process built for real operations.
            </p>
          </RevealWrapper>
        </div>

        {/* ── Right: numbered steps ───────────────────────────── */}
        <div style={{ paddingTop: "6rem" }}>
          {STEPS.map((step, i) => (
            <RevealWrapper key={step.num} delay={i * 100}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "56px 1fr",
                  gap: "1.5rem",
                  padding: i === 0 ? "0 0 2.5rem" : "2.5rem 0",
                  borderBottom: i < STEPS.length - 1 ? "1px solid var(--border)" : "none",
                  alignItems: "start",
                }}
              >
                {/* Muted step number */}
                <span
                  style={{
                    fontFamily: "var(--font-bebas), sans-serif",
                    fontSize: "clamp(2.5rem, 4vw, 3.8rem)",
                    lineHeight: 1,
                    color: "var(--border)",
                    letterSpacing: "-0.01em",
                    display: "block",
                    paddingTop: "0.15rem",
                  }}
                >
                  {step.num}
                </span>

                {/* Step content */}
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-bebas), sans-serif",
                      fontSize: "clamp(1.4rem, 2.5vw, 2.1rem)",
                      letterSpacing: "0.03em",
                      lineHeight: 1.1,
                      color: "var(--fg)",
                      margin: "0.3rem 0 0.8rem",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      lineHeight: 1.75,
                      color: "var(--fg-muted)",
                      margin: 0,
                    }}
                  >
                    {step.desc}
                  </p>
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>

      </div>
    </section>
  );
}
