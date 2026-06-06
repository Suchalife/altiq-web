"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";

export default function Nav() {
  const [open, setOpen]         = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname                = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      <header className={`altiq-nav${scrolled ? " scrolled" : ""}`}>
        <nav className="altiq-nav-inner" aria-label="Main navigation">

          {/* Logo */}
          <div className="nav-logo">
            <Link href="/" className="altiq-wordmark" aria-label="altIQ home">
              altIQ
            </Link>
          </div>

          {/* Centre links — desktop only */}
          <ul className="nav-links">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`nav-link${pathname === item.href || (item.href.length > 1 && pathname.startsWith(item.href)) ? " active" : ""}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right actions */}
          <div className="nav-actions">
            {/* Hamburger */}
            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              style={{
                flexDirection: "column",
                gap: "5px",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "4px",
              }}
              className="mobile-hamburger"
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  style={{
                    display: "block",
                    width: 22,
                    height: 1.5,
                    background: "var(--fg)",
                    borderRadius: 2,
                    transition: "transform 0.3s, opacity 0.3s",
                    opacity: i === 1 && open ? 0 : 1,
                    transform:
                      open && i === 0 ? "translateY(6.5px) rotate(45deg)"
                      : open && i === 2 ? "translateY(-6.5px) rotate(-45deg)"
                      : "none",
                  }}
                />
              ))}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile overlay */}
      <div
        className={`mobile-menu${open ? " open" : ""}`}
        aria-hidden={!open}
        style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}
      >
        <nav style={{ display: "flex", flexDirection: "column" }}>
          {siteConfig.nav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                fontFamily: "var(--font-sora), sans-serif",
                fontSize: "clamp(2rem, 9vw, 3.5rem)",
                fontWeight: 700,
                color: (pathname === item.href || (item.href.length > 1 && pathname.startsWith(item.href as string))) ? "var(--fg)" : "var(--fg-muted)",
                textDecoration: "none",
                lineHeight: 1.2,
                padding: "0.75rem 0",
                borderBottom: i < siteConfig.nav.length - 1 ? "1px solid var(--border-2)" : "none",
                transition: "color 0.2s",
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div style={{ paddingTop: "2.5rem" }}>
          <Link href="/contact" className="btn btn-primary">
            Get in Touch
          </Link>
        </div>
      </div>

      <style>{`
        .mobile-hamburger { display: none; }
        @media (max-width: 767px) {
          .mobile-hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}
