import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import FeaturedWorkSection from "@/components/FeaturedWorkSection";
import WhyAltiqSection from "@/components/WhyAltiqSection";
import ProcessSection from "@/components/ProcessSection";
import CtaSection from "@/components/CtaSection";
import { siteConfig } from "@/config/site";
import RevealWrapper from "@/components/RevealWrapper";

/* ── Manifesto ───────────────────────────────────────────────── */
function ManifestoSection() {
  return (
    <section style={{ background: "var(--bg-deep)", borderTop: "1px solid var(--border-2)", borderBottom: "1px solid var(--border-2)" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "7rem 2rem", textAlign: "center" }}>
        <RevealWrapper>
          <h2 style={{ fontFamily: "var(--font-sora), sans-serif", fontSize: "clamp(1.5rem, 3.5vw, 2.75rem)", fontWeight: 600, letterSpacing: "-0.025em", lineHeight: 1.35, color: "var(--fg)", margin: "0 0 1.5rem" }}>
            Most companies treat AI as a technology problem.
            <br />
            <span style={{ color: "var(--fg-muted)" }}>We treat it as a business problem.</span>
          </h2>
        </RevealWrapper>
        <RevealWrapper delay={100}>
          <p style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)", color: "var(--fg-muted)", lineHeight: 1.8, margin: "0 auto", maxWidth: "680px" }}>
            That distinction changes everything — what we build, how we build it,
            and whether it actually works when real operations depend on it.
          </p>
        </RevealWrapper>
      </div>
    </section>
  );
}

/* ── Tech Stack ──────────────────────────────────────────────── */
function TechStackSection() {
  const stack = siteConfig.techStack;
  const categories = Object.keys(stack) as (keyof typeof stack)[];
  return (
    <section style={{ background: "var(--bg)", borderTop: "1px solid var(--border-2)" }}>
      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", padding: "5rem 2rem" }}>
        <RevealWrapper>
          <p className="label" style={{ marginBottom: "2.5rem" }}>
            <span className="label-dot" />
            Built With
          </p>
        </RevealWrapper>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2rem" }}>
          {categories.map((cat, i) => (
            <RevealWrapper key={cat} delay={i * 60}>
              <div>
                <p style={{ fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--fg-faint)", marginBottom: "0.85rem" }}>
                  {cat}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                  {(stack[cat] as readonly string[]).map((tech) => (
                    <span key={tech} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Client Strip ────────────────────────────────────────────── */
function ClientStrip() {
  const clients = [
    { name: "Consensus.ai", logo: "/images/consensus-ai.png" },
    { name: "GreenAxis",    logo: "/images/green-axis.png"   },
    { name: "Observex",     logo: "/images/observex.jpg"     },
  ];
  return (
    <section style={{ background: "var(--bg)", borderTop: "1px solid var(--border-2)" }}>
      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", padding: "3rem 2rem", display: "flex", alignItems: "center", gap: "3rem", flexWrap: "wrap" }}>
        <p style={{ fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--fg-faint)", flexShrink: 0 }}>
          AI Systems Built For
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: "2.5rem", flexWrap: "wrap" }}>
          {clients.map((c) => (
            <div key={c.name} className="client-logo" style={{ height: 32 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={c.logo} alt={c.name} style={{ height: "100%", width: "auto", maxWidth: 110, objectFit: "contain", display: "block" }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Page ────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <HeroSection />
        <ClientStrip />
        <ManifestoSection />
        <ServicesSection />
        <FeaturedWorkSection />
        <WhyAltiqSection />
        <ProcessSection />
        <TechStackSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
