"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { siteConfig } from "@/config/site";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const outerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      /* ── Set initial hidden state for text layer ─────── */
      gsap.set(".hero-text-layer", { opacity: 0, pointerEvents: "none" });
      gsap.set([".h-line", ".h-body", ".h-ctas", ".h-stat"], {
        y: 28,
        opacity: 0,
      });

      /* ── Logo entrance on page load ─────────────────── */
      gsap.timeline({ defaults: { ease: "power3.out" } })
        .from(".hero-logo-text",   { scale: 0.88, opacity: 0, duration: 1.4 })
        .from(".hero-tagline-text",{ opacity: 0, y: 8, duration: 0.9 }, "-=0.7")
        .from(".hero-scroll-hint", { opacity: 0, duration: 0.7 }, "-=0.5");

      /* ── Breathing radial glow ───────────────────────── */
      gsap.to(".hero-glow", {
        scale: 1.2,
        opacity: 0.6,
        duration: 5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      /* ── Scroll indicator pulse ──────────────────────── */
      gsap.to(".hero-scroll-bar", {
        scaleY: 0,
        transformOrigin: "top center",
        duration: 1.1,
        ease: "power2.inOut",
        repeat: -1,
        repeatDelay: 0.5,
        delay: 1.8,
      });

      /* ── Scrubbed crossfade: logo ↔ text ─────────────── */
      /* outer section is 260vh; crossfade fires over ~80vh travel */
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: outerRef.current,
          start: "top top",
          end: "+=700",          // 700px of scroll = the crossfade window
          scrub: 1,
          // keep ScrollTrigger alive for the rest of the tall section
        },
      });

      /* 0 → 0.45: logo fades + drifts up */
      tl.to(".hero-logo-layer", {
        opacity: 0,
        y: -40,
        duration: 0.45,
        ease: "power2.inOut",
      }, 0)
        .to(".hero-scroll-hint", { opacity: 0, duration: 0.2 }, 0);

      /* 0.2 → 1: text layer cross-fades in */
      tl.to(".hero-text-layer", {
        opacity: 1,
        duration: 0.3,
        ease: "power1.out",
        onStart() {
          // Allow pointer events once visible
          gsap.set(".hero-text-layer", { pointerEvents: "auto" });
        },
      }, 0.2);

      tl.to(".h-line", {
        y: 0,
        opacity: 1,
        duration: 0.35,
        stagger: 0.07,
        ease: "power3.out",
      }, 0.25);

      tl.to(".h-body", { y: 0, opacity: 1, duration: 0.3, ease: "power2.out" }, 0.45);
      tl.to(".h-ctas", { y: 0, opacity: 1, duration: 0.28, ease: "power2.out" }, 0.55);
      tl.to(".h-stat", {
        y: 0,
        opacity: 1,
        duration: 0.28,
        stagger: 0.07,
        ease: "power2.out",
      }, 0.62);

    }, outerRef);

    return () => ctx.revert();
  }, []);

  return (
    /*  Outer wrapper — tall so scroll travel exists for the animation.
        The sticky inner stays locked at top:0 during that travel.       */
    <section
      ref={outerRef}
      style={{ height: "260vh", position: "relative" }}
    >
      {/* ── Sticky inner panel ──────────────────────────── */}
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          background: "#0D0B09",
          overflow: "hidden",
        }}
      >
        {/* Radial glow */}
        <div
          className="hero-glow"
          style={{
            position: "absolute",
            width: "80vmax",
            height: "80vmax",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(38,28,18,0.92) 0%, rgba(20,14,10,0.5) 45%, transparent 70%)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
          }}
        />

        {/* Top + bottom vignettes */}
        {["top", "bottom"].map((side) => (
          <div
            key={side}
            style={{
              position: "absolute",
              [side]: 0,
              left: 0,
              right: 0,
              height: "28%",
              background: `linear-gradient(to ${side === "top" ? "bottom" : "top"}, rgba(13,11,9,0.75) 0%, transparent 100%)`,
              pointerEvents: "none",
              zIndex: 1,
            }}
          />
        ))}

        {/* ══ LAYER A — Logo ══════════════════════════════ */}
        <div
          className="hero-logo-layer"
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "1.5rem",
            userSelect: "none",
          }}
        >
          {/* altIQ wordmark */}
          <span
            className="hero-logo-text"
            style={{
              fontFamily:
                "var(--font-inter), -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
              fontSize: "clamp(5rem, 22vw, 20rem)",
              fontWeight: 600,
              letterSpacing: "-0.055em",
              color: "#9A9A9A",
              lineHeight: 0.88,
              display: "block",
            }}
          >
            altIQ
          </span>

          {/* Hairline separator */}
          <div
            style={{
              width: "clamp(40px, 5vw, 72px)",
              height: 1,
              background: "rgba(240,232,228,0.14)",
            }}
          />

          {/* Tagline */}
          <p
            className="hero-tagline-text"
            style={{
              fontSize: "clamp(0.55rem, 0.9vw, 0.7rem)",
              letterSpacing: "0.26em",
              textTransform: "uppercase",
              color: "rgba(240,232,228,0.26)",
              margin: 0,
              fontWeight: 500,
              textAlign: "center",
            }}
          >
            Intelligence, Applied.
          </p>

          {/* Scroll indicator */}
          <div
            className="hero-scroll-hint"
            style={{
              position: "absolute",
              bottom: "2.5rem",
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.55rem",
            }}
          >
            <span
              style={{
                fontSize: "0.52rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "rgba(240,232,228,0.18)",
                fontWeight: 600,
              }}
            >
              Scroll
            </span>
            <div
              style={{
                width: 1,
                height: 40,
                background: "rgba(240,232,228,0.08)",
                borderRadius: 1,
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                className="hero-scroll-bar"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "50%",
                  background: "rgba(240,232,228,0.42)",
                  borderRadius: 1,
                }}
              />
            </div>
          </div>
        </div>

        {/* ══ LAYER B — Headline / copy / stats ══════════ */}
        <div
          className="hero-text-layer"
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 3,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "calc(var(--nav-height) + 1rem) 2rem 0",
            maxWidth: "var(--max-w)",
            margin: "0 auto",
            left: 0,
            right: 0,
            color: "var(--dark-fg)",
          }}
        >
          {/* Badge */}
          <div
            className="h-badge badge-pill badge-pill-dark"
            style={{ marginBottom: "1.75rem", alignSelf: "flex-start" }}
          >
            <span className="badge-dot badge-dot-dark" />
            AI Strategy · AI Development · AI Consulting
          </div>

          {/* Headline */}
          <h1
            style={{
              fontFamily: "var(--font-sora), sans-serif",
              fontSize: "clamp(2.8rem, 7.5vw, 8rem)",
              fontWeight: 700,
              lineHeight: 0.94,
              letterSpacing: "-0.02em",
              color: "var(--dark-fg)",
              margin: "0 0 2rem",
            }}
          >
            <span className="h-line" style={{ display: "block" }}>
              Intelligence,
            </span>
            <span
              className="h-line"
              style={{ display: "block", color: "var(--dark-muted)" }}
            >
              Applied.
            </span>
          </h1>

          {/* Description + CTAs */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "2rem",
              alignItems: "flex-start",
              marginBottom: "3rem",
            }}
          >
            <p
              className="h-body"
              style={{
                fontSize: "clamp(0.9rem, 1.4vw, 1.05rem)",
                color: "var(--dark-fg-mid)",
                lineHeight: 1.75,
                maxWidth: "460px",
                margin: 0,
              }}
            >
              We help businesses identify, design, and deploy AI systems
              that solve real operational problems — from strategy to production.
              <br />
              <span style={{ color: "var(--dark-muted)" }}>
                Not demos. Not slide decks. Real AI.
              </span>
            </p>

            <div
              className="h-ctas"
              style={{
                display: "flex",
                gap: "0.85rem",
                flexWrap: "wrap",
                paddingTop: "0.1rem",
              }}
            >
              <Link href="/work" className="btn btn-cream">
                Explore Our Work →
              </Link>
              <Link href="/contact" className="btn btn-outline-dark">
                Book a Consultation
              </Link>
            </div>
          </div>

          {/* Stats bar */}
          <div
            style={{
              borderTop: "1px solid var(--dark-border)",
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
            }}
          >
            {siteConfig.stats.map((s, i) => (
              <div
                key={s.value}
                className="h-stat"
                style={{
                  padding: "1.75rem 0",
                  paddingLeft: i > 0 ? "2.5rem" : 0,
                  paddingRight:
                    i < siteConfig.stats.length - 1 ? "2.5rem" : 0,
                  borderRight:
                    i < siteConfig.stats.length - 1
                      ? "1px solid var(--dark-border)"
                      : "none",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sora), sans-serif",
                    fontSize: "clamp(1.8rem, 3.5vw, 3.2rem)",
                    fontWeight: 700,
                    lineHeight: 1,
                    color: "var(--dark-fg)",
                    margin: "0 0 0.35rem",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {s.value}
                </p>
                <p
                  style={{
                    fontSize: "0.65rem",
                    color: "var(--dark-muted)",
                    textTransform: "uppercase",
                    letterSpacing: "0.07em",
                    margin: 0,
                    lineHeight: 1.5,
                    whiteSpace: "pre-line",
                    fontWeight: 500,
                  }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
