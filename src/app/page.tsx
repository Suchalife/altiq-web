import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import FeaturedWorkSection from "@/components/FeaturedWorkSection";
import WhyAltiqSection from "@/components/WhyAltiqSection";
import ProcessSection from "@/components/ProcessSection";
import CtaSection from "@/components/CtaSection";
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



/* ── Page ────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <HeroSection />
        <ManifestoSection />
        <ServicesSection />
        <FeaturedWorkSection />
        <WhyAltiqSection />
        <ProcessSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
