import Image from "next/image";
import Link from "next/link";
import { PROJECTS } from "@/config/projects";
import RevealWrapper from "./RevealWrapper";

export default function FeaturedWorkSection() {
  const [hero, ...rest] = PROJECTS;

  return (
    <section
      style={{
        background: "var(--bg-deep)",
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
                Selected Work
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
                Proof of Intelligence
              </h2>
            </div>
            <Link
              href="/work"
              className="btn btn-ghost"
              style={{ fontSize: "0.875rem" }}
            >
              All projects ↗
            </Link>
          </div>
        </RevealWrapper>

        {/* Hero project — full width */}
        <RevealWrapper>
          <Link href={`/work/${hero.slug}`} className="project-card" style={{ marginBottom: "1.25rem", display: "block" }}>
            <div className="project-card-img" style={{ aspectRatio: "21 / 9" }}>
              {hero.heroImage ? (
                <Image
                  src={hero.heroImage}
                  alt={hero.name}
                  fill
                  style={{ objectFit: "cover", objectPosition: "center 10%" }}
                  sizes="(max-width: 768px) 100vw, 1280px"
                  quality={90}
                  priority
                />
              ) : (
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: `linear-gradient(135deg, ${hero.brandColor}30, ${hero.brandColor}60)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span style={{ fontSize: "0.75rem", color: "var(--fg-muted)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                    Image coming soon
                  </span>
                </div>
              )}
              {/* Category chip */}
              <span
                style={{
                  position: "absolute",
                  top: "1.25rem",
                  left: "1.25rem",
                  background: "rgba(240,232,228,0.92)",
                  backdropFilter: "blur(8px)",
                  padding: "0.25rem 0.75rem",
                  borderRadius: "100px",
                  fontSize: "0.65rem",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--fg-mid)",
                }}
              >
                {hero.category}
              </span>
            </div>
            <div style={{ padding: "1.5rem 2rem 2rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
                <span style={{ fontSize: "0.62rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--fg-muted)" }}>
                  {hero.industry}
                </span>
                <span style={{ fontSize: "0.75rem", color: "var(--fg-faint)" }}>{hero.year}</span>
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-sora), sans-serif",
                  fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  color: "var(--fg)",
                  margin: "0 0 0.6rem",
                  lineHeight: 1.1,
                }}
              >
                {hero.name}
              </h3>
              <p style={{ fontSize: "0.875rem", color: "var(--fg-muted)", margin: 0, lineHeight: 1.65, maxWidth: "640px" }}>
                {hero.summary}
              </p>
            </div>
          </Link>
        </RevealWrapper>

        {/* Secondary projects */}
        <div className="work-hero-grid">
          {rest.map((p, i) => (
            <RevealWrapper key={p.slug} delay={i * 100}>
              <Link href={`/work/${p.slug}`} className="project-card" style={{ display: "block" }}>
                <div className="project-card-img" style={{ aspectRatio: "21 / 9" }}>
                  {p.heroImage ? (
                    <Image
                      src={p.heroImage}
                      alt={p.name}
                      fill
                      style={{ objectFit: "cover", objectPosition: "center 10%" }}
                      sizes="(max-width: 768px) 100vw, 640px"
                      quality={85}
                    />
                  ) : (
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: `linear-gradient(135deg, ${p.brandColor}20, ${p.brandColor}50)`,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "0.75rem",
                        padding: "2rem",
                      }}
                    >
                      {/* Observex logo as placeholder backdrop */}
                      <Image
                        src={p.logo}
                        alt={`${p.name} brand`}
                        width={180}
                        height={80}
                        style={{ objectFit: "contain", opacity: 0.4 }}
                      />
                      <span
                        style={{
                          fontSize: "0.65rem",
                          color: "var(--fg-faint)",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          background: "rgba(240,232,228,0.7)",
                          padding: "0.2rem 0.6rem",
                          borderRadius: "100px",
                        }}
                      >
                        Desktop image coming soon
                      </span>
                    </div>
                  )}
                  <span
                    style={{
                      position: "absolute",
                      top: "1rem",
                      left: "1rem",
                      background: "rgba(240,232,228,0.92)",
                      backdropFilter: "blur(8px)",
                      padding: "0.2rem 0.6rem",
                      borderRadius: "100px",
                      fontSize: "0.6rem",
                      fontWeight: 600,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--fg-mid)",
                    }}
                  >
                    {p.category}
                  </span>
                </div>
                <div style={{ padding: "1.25rem 1.5rem 1.5rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.4rem" }}>
                    <span style={{ fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--fg-muted)" }}>
                      {p.industry}
                    </span>
                    <span style={{ fontSize: "0.7rem", color: "var(--fg-faint)" }}>{p.year}</span>
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-sora), sans-serif",
                      fontSize: "clamp(1.2rem, 2vw, 1.6rem)",
                      fontWeight: 700,
                      letterSpacing: "-0.02em",
                      color: "var(--fg)",
                      margin: "0 0 0.5rem",
                      lineHeight: 1.1,
                    }}
                  >
                    {p.name}
                  </h3>
                  <p style={{ fontSize: "0.82rem", color: "var(--fg-muted)", margin: 0, lineHeight: 1.6 }}>
                    {p.summary}
                  </p>
                </div>
              </Link>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
