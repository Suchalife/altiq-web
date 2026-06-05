import Link from "next/link";
import RevealWrapper from "./RevealWrapper";

export default function CtaSection() {
  return (
    <section style={{ background: "var(--dark)", color: "var(--dark-fg)" }}>
      <div
        style={{
          maxWidth: "var(--max-w)",
          margin: "0 auto",
          padding: "7rem 2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <RevealWrapper>
          <p className="label label-dark" style={{ marginBottom: "1.5rem" }}>
            <span className="label-dot label-dot-dark" />
            Ready to start
          </p>
        </RevealWrapper>

        <RevealWrapper delay={80}>
          <h2
            style={{
              fontFamily: "var(--font-sora), sans-serif",
              fontSize: "clamp(2.5rem, 7vw, 7rem)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 0.95,
              color: "var(--dark-fg)",
              margin: "0 0 2rem",
              maxWidth: "900px",
            }}
          >
            Ready to transform
            <br />
            <span style={{ color: "var(--dark-muted)" }}>your operations?</span>
          </h2>
        </RevealWrapper>

        <RevealWrapper delay={160}>
          <p
            style={{
              fontSize: "clamp(0.95rem, 1.4vw, 1.1rem)",
              color: "var(--dark-muted)",
              lineHeight: 1.75,
              maxWidth: "480px",
              marginBottom: "2.75rem",
            }}
          >
            Schedule a free 30-minute AI strategy session.
            No pitch. No slides. Just a direct conversation about
            what AI can do for your business — and what it can&apos;t.
          </p>
        </RevealWrapper>

        <RevealWrapper delay={220}>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
            <Link href="/contact" className="btn btn-cream" style={{ fontSize: "1rem", padding: "0.85rem 2rem" }}>
              Start a Conversation →
            </Link>
            <Link href="/work" className="btn btn-outline-dark">
              See Our Work First
            </Link>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
