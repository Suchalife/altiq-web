"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";
import RevealWrapper from "./RevealWrapper";

export default function ProcessSection() {
  const [active, setActive] = useState(0);

  return (
    <section
      style={{
        background: "var(--bg)",
        borderTop: "1px solid var(--border-2)",
      }}
    >
      <div
        style={{
          maxWidth: "var(--max-w)",
          margin: "0 auto",
          padding: "6rem 2rem",
        }}
      >
        {/* Header */}
        <RevealWrapper>
          <p className="label" style={{ marginBottom: "0.75rem" }}>
            <span className="label-dot" />
            How We Work
          </p>
          <h2
            style={{
              fontFamily: "var(--font-sora), sans-serif",
              fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              color: "var(--fg)",
              margin: "0 0 3.5rem",
            }}
          >
            Five steps.
            <br />
            <span style={{ color: "var(--fg-muted)" }}>Zero ambiguity.</span>
          </h2>
        </RevealWrapper>

        {/* Step indicators row */}
        <RevealWrapper>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gap: 0,
              borderBottom: "1px solid var(--border-2)",
              marginBottom: "0",
            }}
            className="process-row"
          >
            {siteConfig.process.map((step, i) => (
              <button
                key={step.num}
                onMouseEnter={() => setActive(i)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  padding: "1.5rem 0 1.5rem",
                  paddingRight: i < siteConfig.process.length - 1 ? "1.5rem" : 0,
                  borderBottom: active === i ? "2px solid var(--fg)" : "2px solid transparent",
                  transition: "border-color 0.2s",
                  fontFamily: "inherit",
                }}
              >
                <span
                  style={{
                    display: "block",
                    fontFamily: "var(--font-sora), sans-serif",
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: active === i ? "var(--fg)" : "var(--fg-faint)",
                    marginBottom: "0.35rem",
                    transition: "color 0.2s",
                  }}
                >
                  {step.num}
                </span>
                <span
                  style={{
                    display: "block",
                    fontFamily: "var(--font-sora), sans-serif",
                    fontSize: "clamp(0.8rem, 1.2vw, 1rem)",
                    fontWeight: 600,
                    color: active === i ? "var(--fg)" : "var(--fg-muted)",
                    lineHeight: 1.2,
                    transition: "color 0.2s",
                  }}
                >
                  {step.title}
                </span>
              </button>
            ))}
          </div>
        </RevealWrapper>

        {/* Active step description */}
        <div
          key={active}
          style={{
            padding: "3rem 0",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "start",
            animation: "fadeIn 0.35s ease",
          }}
          className="process-detail"
        >
          <div>
            <h3
              style={{
                fontFamily: "var(--font-sora), sans-serif",
                fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                color: "var(--fg)",
                margin: "0 0 0.5rem",
                lineHeight: 1.15,
              }}
            >
              <span style={{ color: "var(--fg-faint)", fontSize: "0.75em" }}>
                {siteConfig.process[active].num} /{" "}
              </span>
              {siteConfig.process[active].title}
            </h3>
          </div>
          <div>
            <p
              style={{
                fontSize: "1rem",
                color: "var(--fg-muted)",
                lineHeight: 1.8,
                margin: 0,
              }}
            >
              {siteConfig.process[active].desc}
            </p>

            {/* Next step arrow */}
            {active < siteConfig.process.length - 1 && (
              <button
                onMouseEnter={() => setActive(active + 1)}
                style={{
                  marginTop: "1.5rem",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  fontSize: "0.8rem",
                  fontWeight: 500,
                  color: "var(--fg-muted)",
                  padding: 0,
                  fontFamily: "inherit",
                  transition: "color 0.2s",
                }}
              >
                Next: {siteConfig.process[active + 1].title} →
              </button>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 768px) {
          .process-row { grid-template-columns: repeat(3, 1fr) !important; }
          .process-detail { grid-template-columns: 1fr !important; gap: 1.5rem !important; }
        }
        @media (max-width: 480px) {
          .process-row { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}
