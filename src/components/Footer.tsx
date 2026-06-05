"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer style={{ background: "var(--dark)", color: "var(--dark-fg)" }}>
      <div
        style={{
          maxWidth: "var(--max-w)",
          margin: "0 auto",
          padding: "5rem 2rem 3rem",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          gap: "3rem",
          alignItems: "start",
        }}
        className="footer-grid"
      >
        {/* Brand */}
        <div style={{ gridColumn: "1 / 2" }}>
          <Link href="/" className="altiq-wordmark altiq-wordmark-dark" style={{ fontSize: "1.6rem" }}>
            altIQ
          </Link>
          <p
            style={{
              fontSize: "0.85rem",
              color: "var(--dark-muted)",
              lineHeight: 1.7,
              marginTop: "0.75rem",
              maxWidth: "220px",
            }}
          >
            {siteConfig.tagline}
            <br />
            AI strategy, design, and deployment.
          </p>

          {/* Social */}
          <div style={{ display: "flex", gap: "1rem", marginTop: "1.5rem" }}>
            <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ color: "var(--dark-muted)", transition: "color 0.2s" }} onMouseEnter={e => (e.currentTarget.style.color = "var(--dark-fg)")} onMouseLeave={e => (e.currentTarget.style.color = "var(--dark-muted)")}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href={siteConfig.social.x} target="_blank" rel="noopener noreferrer" aria-label="X" style={{ color: "var(--dark-muted)", transition: "color 0.2s" }} onMouseEnter={e => (e.currentTarget.style.color = "var(--dark-fg)")} onMouseLeave={e => (e.currentTarget.style.color = "var(--dark-muted)")}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ color: "var(--dark-muted)", transition: "color 0.2s" }} onMouseEnter={e => (e.currentTarget.style.color = "var(--dark-fg)")} onMouseLeave={e => (e.currentTarget.style.color = "var(--dark-muted)")}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
          </div>
        </div>

        {/* Pages */}
        <div>
          <p style={{ fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--dark-muted)", marginBottom: "1.25rem" }}>Company</p>
          <nav style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {[
              { label: "Our Work",    href: "/work"     },
              { label: "Services",    href: "/services" },
              { label: "About",       href: "/about"    },
              { label: "Careers",     href: "/careers"  },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="footer-link">{l.label}</Link>
            ))}
          </nav>
        </div>

        {/* Projects */}
        <div>
          <p style={{ fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--dark-muted)", marginBottom: "1.25rem" }}>Case Studies</p>
          <nav style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {[
              { label: "Consensus.ai", href: "/work/consensus-ai" },
              { label: "GreenAxis",    href: "/work/greenaxis"    },
              { label: "Observex",     href: "/work/observex"     },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="footer-link">{l.label}</Link>
            ))}
          </nav>
        </div>

        {/* Contact */}
        <div>
          <p style={{ fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--dark-muted)", marginBottom: "1.25rem" }}>Get in Touch</p>
          <a
            href={`mailto:${siteConfig.email}`}
            style={{ fontSize: "0.875rem", color: "var(--dark-fg)", textDecoration: "none", display: "block", marginBottom: "1.5rem", transition: "opacity 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.7")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
          >
            {siteConfig.email}
          </a>
          <Link href="/contact" className="btn btn-outline-dark" style={{ fontSize: "0.8rem", padding: "0.55rem 1.2rem" }}>
            Book a Consultation
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          maxWidth: "var(--max-w)",
          margin: "0 auto",
          padding: "1.5rem 2rem",
          borderTop: "1px solid var(--dark-border)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <p style={{ fontSize: "0.75rem", color: "var(--dark-muted)" }}>
          © {siteConfig.copyright} altIQ. All rights reserved.
        </p>
        <p style={{ fontSize: "0.75rem", color: "var(--dark-muted)" }}>
          Intelligence, Applied.
        </p>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .footer-grid > :first-child {
            grid-column: 1 / -1;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
