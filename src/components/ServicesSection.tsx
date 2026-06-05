import { siteConfig } from "@/config/site";
import RevealWrapper from "./RevealWrapper";

/* ── SVG icons for each service ─────────────────────────────── */
const ICONS: Record<string, React.ReactNode> = {
  strategy: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
    </svg>
  ),
  build: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
    </svg>
  ),
  automation: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
    </svg>
  ),
  data: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3"/>
    </svg>
  ),
  product: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>
    </svg>
  ),
  deploy: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
    </svg>
  ),
};

export default function ServicesSection() {
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
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: "3rem",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <div>
              <p className="label" style={{ marginBottom: "0.75rem" }}>
                <span className="label-dot" />
                What We Build
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-sora), sans-serif",
                  fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
                  fontWeight: 700,
                  color: "var(--fg)",
                  margin: 0,
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                }}
              >
                AI Solutions Designed
                <br />
                for Your Operations
              </h2>
            </div>
            <a
              href="/services"
              className="btn btn-ghost"
              style={{ fontSize: "0.875rem" }}
            >
              All services ↗
            </a>
          </div>
        </RevealWrapper>

        {/* Service grid */}
        <div className="services-grid">
          {siteConfig.services.map((s, i) => (
            <RevealWrapper key={s.num} delay={i * 60}>
              <div className="service-card">
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: "var(--surface)",
                    color: "var(--fg-muted)",
                    marginBottom: "1.25rem",
                  }}
                >
                  {ICONS[s.icon]}
                </div>

                <p
                  style={{
                    fontSize: "0.62rem",
                    fontWeight: 600,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--fg-faint)",
                    marginBottom: "0.5rem",
                  }}
                >
                  {s.num}
                </p>

                <h3
                  style={{
                    fontFamily: "var(--font-sora), sans-serif",
                    fontSize: "1.05rem",
                    fontWeight: 600,
                    color: "var(--fg)",
                    margin: "0 0 0.6rem",
                    lineHeight: 1.2,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {s.title}
                </h3>

                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "var(--fg-muted)",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {s.desc}
                </p>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
