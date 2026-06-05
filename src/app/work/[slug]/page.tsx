import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import RevealWrapper from "@/components/RevealWrapper";
import { PROJECTS, getProject } from "@/config/projects";

interface Props { params: { slug: string }; }

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const p = getProject(params.slug);
  if (!p) return { title: "Project Not Found" };
  return {
    title: `${p.name} — altIQ Case Study`,
    description: p.description,
  };
}

/* ── Assumption badge ────────────────────────────────────────── */
function A() {
  return (
    <span className="assumption-note" title="This detail was intelligently assumed based on product capabilities and industry standards">
      [A]
    </span>
  );
}

export default function CaseStudyPage({ params }: Props) {
  const p = getProject(params.slug);
  if (!p) notFound();

  const otherProjects = PROJECTS.filter((pr) => pr.slug !== p.slug);

  return (
    <>
      <Nav />
      <main>

        {/* ── Project Hero ────────────────────────────────────── */}
        <section
          style={{
            background: "var(--dark)",
            color: "var(--dark-fg)",
            paddingTop: "calc(var(--nav-height) + 4rem)",
            paddingBottom: "4rem",
          }}
        >
          <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", padding: "0 2rem" }}>

            {/* Breadcrumb */}
            <nav style={{ marginBottom: "2.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <Link href="/work" style={{ fontSize: "0.8rem", color: "var(--dark-muted)", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={undefined} /* SSR safe */
              >
                Work
              </Link>
              <span style={{ color: "var(--dark-border)", fontSize: "0.8rem" }}>/</span>
              <span style={{ fontSize: "0.8rem", color: "var(--dark-fg-mid)" }}>{p.name}</span>
            </nav>

            {/* Category + year */}
            <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
              <span className="badge-pill badge-pill-dark">
                <span className="badge-dot badge-dot-dark" />
                {p.category}
              </span>
              <span className="badge-pill badge-pill-dark">{p.industry}</span>
              <span className="badge-pill badge-pill-dark">{p.year}</span>
            </div>

            {/* Project name */}
            <h1
              style={{
                fontFamily: "var(--font-sora), sans-serif",
                fontSize: "clamp(3rem, 8vw, 7rem)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                lineHeight: 0.93,
                color: "var(--dark-fg)",
                margin: "0 0 1.5rem",
              }}
            >
              {p.name}
            </h1>

            {/* Tagline */}
            <p
              style={{
                fontFamily: "var(--font-sora), sans-serif",
                fontSize: "clamp(1rem, 2vw, 1.4rem)",
                fontWeight: 500,
                color: "var(--dark-muted)",
                fontStyle: "italic",
                margin: "0 0 2rem",
                maxWidth: "700px",
                lineHeight: 1.5,
              }}
            >
              &ldquo;{p.tagline}&rdquo;
            </p>

            {/* ALTIQ's services */}
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              {p.altiqRole.services.map((s) => (
                <span
                  key={s}
                  style={{
                    fontSize: "0.68rem",
                    fontWeight: 500,
                    letterSpacing: "0.06em",
                    color: "var(--dark-muted)",
                    padding: "0.25rem 0.7rem",
                    border: "1px solid var(--dark-border)",
                    borderRadius: "100px",
                    background: "var(--dark-2)",
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── Hero Image ──────────────────────────────────────── */}
        <section style={{ background: "var(--dark)" }}>
          <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", padding: "0 2rem 5rem" }}>
            <div
              style={{
                aspectRatio: "21 / 9",
                borderRadius: "20px",
                overflow: "hidden",
                border: "1px solid var(--dark-border)",
                position: "relative",
                background: "var(--dark-2)",
              }}
            >
              {p.heroImage ? (
                <Image
                  src={p.heroImage}
                  alt={`${p.name} — desktop screenshot`}
                  fill
                  style={{ objectFit: "cover", objectPosition: "center 10%" }}
                  sizes="1280px"
                  quality={95}
                  priority
                />
              ) : (
                <div
                  style={{
                    position: "absolute", inset: 0,
                    background: `linear-gradient(135deg, ${p.brandColor}15, ${p.brandColor}40)`,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "1.5rem",
                  }}
                >
                  <Image
                    src={p.logo}
                    alt={p.name}
                    width={220}
                    height={90}
                    style={{ objectFit: "contain", opacity: 0.35 }}
                  />
                  <div
                    style={{
                      padding: "0.6rem 1.25rem",
                      background: "rgba(240,232,228,0.08)",
                      border: "1px solid var(--dark-border)",
                      borderRadius: "12px",
                      textAlign: "center",
                    }}
                  >
                    <p style={{ fontSize: "0.75rem", color: "var(--dark-muted)", margin: 0, letterSpacing: "0.06em" }}>
                      Desktop screenshot pending
                    </p>
                    <p style={{ fontSize: "0.65rem", color: "var(--dark-border)", margin: "0.2rem 0 0", letterSpacing: "0.06em" }}>
                      Will update when image is received
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ── Overview Metrics ────────────────────────────────── */}
        <section style={{ background: "var(--bg)", borderBottom: "1px solid var(--border-2)" }}>
          <div
            style={{
              maxWidth: "var(--max-w)",
              margin: "0 auto",
              padding: "0 2rem",
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              borderTop: "1px solid var(--border-2)",
            }}
          >
            {p.impact.map((item, i) => (
              <div
                key={item.metric}
                style={{
                  padding: "3rem 0",
                  paddingLeft: i > 0 ? "3rem" : 0,
                  paddingRight: i < p.impact.length - 1 ? "3rem" : 0,
                  borderRight: i < p.impact.length - 1 ? "1px solid var(--border-2)" : "none",
                }}
              >
                <div style={{ display: "flex", alignItems: "baseline", gap: "0.35rem", marginBottom: "0.35rem" }}>
                  <p
                    style={{
                      fontFamily: "var(--font-sora), sans-serif",
                      fontSize: "clamp(2rem, 4vw, 3.2rem)",
                      fontWeight: 700,
                      color: "var(--fg)",
                      margin: 0,
                      letterSpacing: "-0.02em",
                      lineHeight: 1,
                    }}
                  >
                    {item.value}
                  </p>
                  {item.isAssumption && <A />}
                </div>
                <p style={{ fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--fg-muted)", margin: "0 0 0.3rem" }}>
                  {item.metric}
                </p>
                <p style={{ fontSize: "0.8rem", color: "var(--fg-faint)", margin: 0, lineHeight: 1.5 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Challenge ───────────────────────────────────────── */}
        <section style={{ background: "var(--bg)" }}>
          <div
            style={{
              maxWidth: "var(--max-w)",
              margin: "0 auto",
              padding: "5rem 2rem",
              display: "grid",
              gridTemplateColumns: "minmax(200px, 280px) 1fr",
              gap: "5rem",
              alignItems: "start",
            }}
            className="cs-two-col"
          >
            <RevealWrapper>
              <p className="label" style={{ marginBottom: "0.75rem" }}>
                <span className="label-dot" />
                The Challenge
              </p>
            </RevealWrapper>
            <div>
              <RevealWrapper>
                <h2
                  style={{
                    fontFamily: "var(--font-sora), sans-serif",
                    fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                    fontWeight: 700,
                    letterSpacing: "-0.02em",
                    color: "var(--fg)",
                    margin: "0 0 1.75rem",
                    lineHeight: 1.2,
                  }}
                >
                  {p.challenge.headline}
                </h2>
              </RevealWrapper>
              {p.challenge.body.map((para, i) => (
                <RevealWrapper key={i} delay={i * 80}>
                  <p style={{ fontSize: "1rem", color: "var(--fg-muted)", lineHeight: 1.8, margin: i < p.challenge.body.length - 1 ? "0 0 1.25rem" : 0 }}>
                    {para}
                  </p>
                </RevealWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* ── Solution ────────────────────────────────────────── */}
        <section style={{ background: "var(--bg-deep)", borderTop: "1px solid var(--border-2)", borderBottom: "1px solid var(--border-2)" }}>
          <div
            style={{
              maxWidth: "var(--max-w)",
              margin: "0 auto",
              padding: "5rem 2rem",
              display: "grid",
              gridTemplateColumns: "minmax(200px, 280px) 1fr",
              gap: "5rem",
              alignItems: "start",
            }}
            className="cs-two-col"
          >
            <RevealWrapper>
              <p className="label" style={{ marginBottom: "0.75rem" }}>
                <span className="label-dot" />
                What We Built
              </p>
            </RevealWrapper>
            <div>
              <RevealWrapper>
                <h2
                  style={{
                    fontFamily: "var(--font-sora), sans-serif",
                    fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                    fontWeight: 700,
                    letterSpacing: "-0.02em",
                    color: "var(--fg)",
                    margin: "0 0 1.75rem",
                    lineHeight: 1.2,
                  }}
                >
                  {p.solution.headline}
                </h2>
              </RevealWrapper>
              {p.solution.body.map((para, i) => (
                <RevealWrapper key={i} delay={i * 80}>
                  <p style={{ fontSize: "1rem", color: "var(--fg-muted)", lineHeight: 1.8, margin: i < p.solution.body.length - 1 ? "0 0 1.25rem" : 0 }}>
                    {para}
                  </p>
                </RevealWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* ── Features ────────────────────────────────────────── */}
        <section style={{ background: "var(--bg)" }}>
          <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", padding: "5rem 2rem" }}>
            <RevealWrapper>
              <p className="label" style={{ marginBottom: "0.75rem" }}>
                <span className="label-dot" />
                Key Features
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-sora), sans-serif",
                  fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  color: "var(--fg)",
                  margin: "0 0 2.5rem",
                  lineHeight: 1.2,
                }}
              >
                What the System Does
              </h2>
            </RevealWrapper>

            <div className="features-grid">
              {p.features.map((f, i) => (
                <RevealWrapper key={f.title} delay={i * 70}>
                  <div className="service-card">
                    <div
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: 8,
                        background: `${p.brandColor}18`,
                        border: `1px solid ${p.brandColor}30`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "1.1rem",
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        color: p.brandColor,
                        fontFamily: "var(--font-sora), sans-serif",
                        letterSpacing: "0.05em",
                        flexShrink: 0,
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3
                      style={{
                        fontFamily: "var(--font-sora), sans-serif",
                        fontSize: "1rem",
                        fontWeight: 600,
                        color: "var(--fg)",
                        margin: "0 0 0.55rem",
                        lineHeight: 1.25,
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {f.title}
                    </h3>
                    <p style={{ fontSize: "0.855rem", color: "var(--fg-muted)", lineHeight: 1.7, margin: 0 }}>
                      {f.desc}
                    </p>
                  </div>
                </RevealWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* ── Tech Stack ──────────────────────────────────────── */}
        <section style={{ background: "var(--dark)", color: "var(--dark-fg)", borderTop: "1px solid var(--dark-border)" }}>
          <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", padding: "5rem 2rem" }}>
            <RevealWrapper>
              <p className="label label-dark" style={{ marginBottom: "0.75rem" }}>
                <span className="label-dot label-dot-dark" />
                Technology Stack
                <A />
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-sora), sans-serif",
                  fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  color: "var(--dark-fg)",
                  margin: "0 0 2.5rem",
                  lineHeight: 1.2,
                }}
              >
                Built on the right tools for the job
              </h2>
            </RevealWrapper>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "2rem" }}>
              {(Object.entries(p.techStack) as [string, string[]][])
                .filter(([k]) => k !== "note")
                .map(([cat, tools], i) => (
                  <RevealWrapper key={cat} delay={i * 60}>
                    <div>
                      <p style={{ fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--dark-muted)", marginBottom: "0.75rem" }}>
                        {cat}
                      </p>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
                        {tools.map((t: string) => (
                          <span key={t} className="tech-badge tech-badge-dark">{t}</span>
                        ))}
                      </div>
                    </div>
                  </RevealWrapper>
                ))}
            </div>
          </div>
        </section>

        {/* ── ALTIQ's Role ────────────────────────────────────── */}
        <section style={{ background: "var(--bg-deep)", borderTop: "1px solid var(--border-2)" }}>
          <div
            style={{
              maxWidth: "var(--max-w)",
              margin: "0 auto",
              padding: "5rem 2rem",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "4rem",
              alignItems: "start",
            }}
            className="cs-two-col"
          >
            <RevealWrapper>
              <div>
                <p className="label" style={{ marginBottom: "0.75rem" }}>
                  <span className="label-dot" />
                  altIQ&apos;s Role
                </p>
                <h2
                  style={{
                    fontFamily: "var(--font-sora), sans-serif",
                    fontSize: "clamp(1.2rem, 2vw, 1.75rem)",
                    fontWeight: 700,
                    letterSpacing: "-0.02em",
                    color: "var(--fg)",
                    margin: "0 0 1.5rem",
                    lineHeight: 1.2,
                  }}
                >
                  What ALTIQ Delivered
                </h2>
                <p style={{ fontSize: "0.9rem", color: "var(--fg-muted)", lineHeight: 1.8, margin: 0 }}>
                  {p.altiqRole.scope}
                </p>
              </div>
            </RevealWrapper>

            <RevealWrapper delay={100}>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {/* Timeline */}
                <div style={{ padding: "1.25rem 1.5rem", background: "var(--surface)", borderRadius: "12px", border: "1px solid var(--border-2)" }}>
                  <p style={{ fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--fg-faint)", marginBottom: "0.4rem" }}>
                    Timeline <A />
                  </p>
                  <p style={{ fontFamily: "var(--font-sora), sans-serif", fontSize: "1.1rem", fontWeight: 600, color: "var(--fg)", margin: 0 }}>
                    {p.altiqRole.timeline}
                  </p>
                </div>
                {/* Services used */}
                <div style={{ padding: "1.25rem 1.5rem", background: "var(--surface)", borderRadius: "12px", border: "1px solid var(--border-2)" }}>
                  <p style={{ fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--fg-faint)", marginBottom: "0.75rem" }}>
                    Services Used
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                    {p.altiqRole.services.map((s) => (
                      <span
                        key={s}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem",
                          fontSize: "0.875rem",
                          color: "var(--fg-mid)",
                        }}
                      >
                        <span style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--accent)", display: "inline-block", flexShrink: 0 }} />
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Trust badges */}
                {p.trustBadges.length > 0 && (
                  <div style={{ padding: "1.25rem 1.5rem", background: "var(--surface)", borderRadius: "12px", border: "1px solid var(--border-2)" }}>
                    <p style={{ fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--fg-faint)", marginBottom: "0.75rem" }}>
                      Standards & Certifications
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                      {p.trustBadges.map((b) => (
                        <span key={b} className="tech-badge">{b}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </RevealWrapper>
          </div>
        </section>

        {/* ── Next Projects ────────────────────────────────────── */}
        <section style={{ background: "var(--bg)", borderTop: "1px solid var(--border-2)" }}>
          <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", padding: "5rem 2rem" }}>
            <RevealWrapper>
              <p className="label" style={{ marginBottom: "2rem" }}>
                <span className="label-dot" />
                More Projects
              </p>
            </RevealWrapper>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.25rem" }}>
              {otherProjects.map((op, i) => (
                <RevealWrapper key={op.slug} delay={i * 80}>
                  <Link href={`/work/${op.slug}`} className="project-card" style={{ display: "block" }}>
                    <div className="project-card-img" style={{ aspectRatio: "16 / 9" }}>
                      {op.heroImage ? (
                        <Image src={op.heroImage} alt={op.name} fill style={{ objectFit: "cover", objectPosition: "center 10%" }} sizes="640px" quality={80} />
                      ) : (
                        <div style={{ position: "absolute", inset: 0, background: `linear-gradient(135deg, ${op.brandColor}20, ${op.brandColor}45)`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <Image src={op.logo} alt={op.name} width={120} height={50} style={{ objectFit: "contain", opacity: 0.35 }} />
                        </div>
                      )}
                    </div>
                    <div style={{ padding: "1.25rem 1.5rem 1.5rem" }}>
                      <span style={{ fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--fg-muted)", display: "block", marginBottom: "0.4rem" }}>
                        {op.category}
                      </span>
                      <h3 style={{ fontFamily: "var(--font-sora), sans-serif", fontSize: "1.2rem", fontWeight: 700, letterSpacing: "-0.02em", color: "var(--fg)", margin: "0 0 0.4rem", lineHeight: 1.1 }}>
                        {op.name}
                      </h3>
                      <p style={{ fontSize: "0.8rem", color: "var(--fg-muted)", margin: 0, lineHeight: 1.6 }}>
                        {op.summary}
                      </p>
                    </div>
                  </Link>
                </RevealWrapper>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ─────────────────────────────────────────────── */}
        <section style={{ background: "var(--dark)", color: "var(--dark-fg)", borderTop: "1px solid var(--dark-border)" }}>
          <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", padding: "6rem 2rem", textAlign: "center" }}>
            <RevealWrapper>
              <h2 style={{ fontFamily: "var(--font-sora), sans-serif", fontSize: "clamp(2rem, 5vw, 4.5rem)", fontWeight: 700, letterSpacing: "-0.025em", lineHeight: 1, color: "var(--dark-fg)", margin: "0 0 1.5rem" }}>
                Want AI systems like this
                <br />
                <span style={{ color: "var(--dark-muted)" }}>for your business?</span>
              </h2>
            </RevealWrapper>
            <RevealWrapper delay={80}>
              <p style={{ fontSize: "1rem", color: "var(--dark-muted)", lineHeight: 1.75, maxWidth: "440px", margin: "0 auto 2.5rem" }}>
                Let&apos;s talk about what we can build together.
                Free strategy session — no pitch, no obligations.
              </p>
            </RevealWrapper>
            <RevealWrapper delay={140}>
              <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                <Link href="/contact" className="btn btn-cream" style={{ fontSize: "1rem", padding: "0.85rem 2rem" }}>
                  Start a Conversation →
                </Link>
                <Link href="/work" className="btn btn-outline-dark">
                  Back to All Projects
                </Link>
              </div>
            </RevealWrapper>
          </div>
        </section>

      </main>
      <Footer />

      <style>{`
        .cs-two-col {
          grid-template-columns: minmax(200px, 280px) 1fr;
        }
        @media (max-width: 768px) {
          .cs-two-col {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
        a.footer-link { transition: color 0.2s; }
      `}</style>
    </>
  );
}
