import Link from "next/link";

interface WorkCardProps {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  index: number;
}

export default function WorkCard({
  id,
  title,
  subtitle,
  category,
  year,
  index,
}: WorkCardProps) {
  const num = String(index + 1).padStart(2, "0");

  return (
    <Link href={`/work#${id}`} className="work-card">
      {/* ── macOS-style header bar ────────────────────── */}
      <div className="work-card-header">
        <div className="work-card-header-left">
          {/* Traffic-light dots */}
          <div className="work-card-dots">
            <span className="wc-dot wc-dot-red"   />
            <span className="wc-dot wc-dot-yellow" />
            <span className="wc-dot wc-dot-green"  />
          </div>

          {/* Number */}
          <span className="work-card-num">{num}</span>

          {/* Title + subtitle */}
          <div className="work-card-title-block">
            <span className="work-card-title">{title}</span>
            <span className="work-card-subtitle">{subtitle}</span>
          </div>
        </div>

        <div className="work-card-header-right">
          <span className="work-card-category">{category}</span>
          <span className="work-card-year">{year}</span>
          <span className="work-card-arrow">→</span>
        </div>
      </div>

      {/* ── Full-width product image ──────────────────── */}
      {/* Save your laptop mockup at: /public/images/work/{id}.png */}
      <div
        className="work-card-image"
        style={{ backgroundImage: `url('/images/work/${id}.png')` }}
        aria-hidden="true"
      />
    </Link>
  );
}
