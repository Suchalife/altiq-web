const LOGOS = [
  { src: "/images/manuf-ai.png",   alt: "ManufAI"   },
  { src: "/images/observex.jpg",   alt: "Observex"  },
  { src: "/images/orange-o.png",   alt: "Outreach"  },
  { src: "/images/procure-ai.png", alt: "ProcureAI" },
  { src: "/images/green-axis.png", alt: "GreenAxis" },
  { src: "/images/consensus-ai.png", alt: "Consensus.ai" },
] as const;

/* Triple the list so the loop is seamless even on wide screens */
const items = [...LOGOS, ...LOGOS, ...LOGOS];

export default function LogoMarquee() {
  return (
    <section
      aria-label="Products"
      style={{
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        padding: "2.25rem 0",
        overflow: "hidden",
      }}
    >
      <div className="marquee-wrapper">
        <div className="logo-track" aria-hidden="true">
          {items.map((logo, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={i}
              src={logo.src}
              alt={logo.alt}
              style={{
                width: "130px",
                height: "78px",
                objectFit: "cover",
                borderRadius: "12px",
                flexShrink: 0,
                marginInline: "1.75rem",
                opacity: 0.9,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
