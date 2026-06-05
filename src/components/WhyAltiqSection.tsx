import RevealWrapper from "./RevealWrapper";

const WHY = [
  {
    num: "01",
    title: "Deep Operational Understanding",
    body: "We spend time in your environment before writing a single line of code. We learn the workflows, the constraints, and the actual goals — not the polished version you share in the first meeting.",
  },
  {
    num: "02",
    title: "Built, Not Presented",
    body: "We deliver working AI systems. Not strategy decks. Not pilot programs designed to extend the engagement. If we take a project, we build it — and it runs in production.",
  },
  {
    num: "03",
    title: "End-to-End Partnership",
    body: "From the first discovery session to live deployment and beyond, we own the whole journey. No handoffs to implementation teams who weren't part of the strategy.",
  },
  {
    num: "04",
    title: "Zero Off-the-Shelf",
    body: "Every system we build is purpose-designed for your specific context. No templates. No tool wrappers dressed up as AI strategy. Custom means custom.",
  },
];

export default function WhyAltiqSection() {
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
          display: "grid",
          gridTemplateColumns: "minmax(260px, 340px) 1fr",
          gap: "5rem",
          alignItems: "start",
        }}
        className="why-layout"
      >
        {/* Left: sticky heading */}
        <div style={{ position: "sticky", top: "calc(var(--nav-height) + 2rem)" }}>
          <RevealWrapper>
            <p className="label" style={{ marginBottom: "1.25rem" }}>
              <span className="label-dot" />
              Why altIQ
            </p>
          </RevealWrapper>
          <RevealWrapper delay={80}>
            <h2
              style={{
                fontFamily: "var(--font-sora), sans-serif",
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
                color: "var(--fg)",
                margin: "0 0 1.5rem",
              }}
            >
              There are many
              <br />
              AI companies.
            </h2>
          </RevealWrapper>
          <RevealWrapper delay={160}>
            <p
              style={{
                fontSize: "0.95rem",
                color: "var(--fg-muted)",
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              Here is why the ones who care about outcomes choose us.
            </p>
          </RevealWrapper>
        </div>

        {/* Right: principle cards */}
        <div className="why-grid">
          {WHY.map((w, i) => (
            <RevealWrapper key={w.num} delay={i * 90}>
              <div className="service-card">
                <span
                  style={{
                    display: "block",
                    fontFamily: "var(--font-sora), sans-serif",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    color: "var(--fg-faint)",
                    marginBottom: "1.25rem",
                  }}
                >
                  {w.num}
                </span>
                <h3
                  style={{
                    fontFamily: "var(--font-sora), sans-serif",
                    fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
                    fontWeight: 600,
                    letterSpacing: "-0.01em",
                    color: "var(--fg)",
                    margin: "0 0 0.75rem",
                    lineHeight: 1.25,
                  }}
                >
                  {w.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--fg-muted)",
                    lineHeight: 1.75,
                    margin: 0,
                  }}
                >
                  {w.body}
                </p>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .why-layout {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          .why-layout > :first-child {
            position: relative !important;
            top: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
