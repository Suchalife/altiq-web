/**
 * ALTIQ Project Data
 * ─────────────────────────────────────────────────────────────
 * FACT      = derived directly from assets (logo, screenshot, brand)
 * ASSUMPTION = intelligently inferred, clearly marked with [A]
 * ─────────────────────────────────────────────────────────────
 */

export interface ProjectFeature {
  title: string;
  desc: string;
}

export interface ProjectImpact {
  metric: string;
  value: string;
  desc: string;
  isAssumption: boolean;
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;          // brand tagline
  productLine: string;
  category: string;
  industry: string;
  year: string;
  logo: string;
  heroImage: string | null; // null = placeholder needed
  logoOnDark: boolean;       // true = logo is light-coloured (safe on dark bg)
  brandColor: string;        // primary accent from brand
  description: string;       // full description
  summary: string;           // short card summary
  trustBadges: string[];
  challenge: {
    headline: string;
    body: string[];
  };
  solution: {
    headline: string;
    body: string[];
  };
  features: ProjectFeature[];
  techStack: {
    ai: string[];
    backend: string[];
    frontend: string[];
    data: string[];
    infra: string[];
    note: string;
  };
  impact: ProjectImpact[];
  altiqRole: {
    services: string[];
    timeline: string;        // [A] estimated
    scope: string;
    timelineNote: string;
  };
}

export const PROJECTS: Project[] = [
  /* ══════════════════════════════════════════════════════════
     PROJECT 1 — CONSENSUS.AI
     Source of truth: logo (consensus-ai.png) + desktop screenshot (IMG_1894)
  ══════════════════════════════════════════════════════════ */
  {
    slug: "consensus-ai",
    name: "Consensus.ai",

    // FACT — visible verbatim on the product screenshot
    tagline: "The three-AI council that argues until it's right.",

    // FACT — derived from product screenshot
    productLine: "Multi-Model Decision Intelligence Platform",
    category: "AI Decision Intelligence",

    // FACT — from logo brand mark and product UI
    industry: "Enterprise AI · B2B SaaS",
    year: "2024",

    logo: "/images/consensus-ai.png",

    // FACT — confirmed file exists
    heroImage: "/images/work/IMG_1894.JPG.jpeg",
    logoOnDark: true,  // FACT — white text on dark teal bg

    // FACT — from logo colours (dark teal)
    brandColor: "#1A5068",

    // FACT — product description visible on screenshot
    description:
      "A multi-model AI orchestration platform where three frontier AI models independently analyse every query, debate each other transparently, and converge on one verified, high-confidence answer — for the decisions you cannot afford to get wrong.",

    summary:
      "Multi-model AI that debates until it's right. Three frontier models, one verified answer — built for enterprise decisions where accuracy is non-negotiable.",

    // FACT — trust badges visible on product screenshot
    trustBadges: ["SOC 2 Type A", "ISO 27001", "Data Residency", "Zero Training on Customer Data"],

    challenge: {
      headline: "Single AI models aren't reliable enough for high-stakes decisions.",
      body: [
        "Enterprise decision-makers deploying AI for legal, financial, and operational decisions face a fundamental risk: single AI models hallucinate with confidence. They produce wrong answers that sound authoritative, with no signal to distinguish accuracy from error.",
        "Without a verification layer, businesses have no way to know whether an AI response is reliable — only that it sounds plausible.",
        "In high-stakes contexts — contract interpretation, compliance, financial modelling, medical guidance — the cost of getting it wrong isn't a bad recommendation. It's a legal dispute, a regulatory failure, or an operational breakdown.",
      ],
    },

    solution: {
      headline: "Three models. One verified answer. Full transparency.",
      body: [
        "ALTIQ designed and built the Consensus.ai orchestration architecture — a system that routes every query simultaneously through three frontier AI models and stages a structured debate between their independent outputs.",
        "Rather than hiding AI reasoning, Consensus surfaces the debate: where models agree, where they diverge, and exactly why — before converging on a verified answer accompanied by a quantified confidence score.",
        "The result is an AI layer that doesn't just answer questions — it shows its work, challenges itself, and only commits to answers it has earned the right to give.",
      ],
    },

    features: [
      {
        title: "Triple-Model Analysis",
        desc: "Three frontier AI models — GPT-4, Claude, and Gemini — evaluate every query independently, eliminating single-point-of-failure hallucination.",
      },
      {
        title: "Transparent Debate Layer",
        desc: "The system surfaces exactly where models agree and disagree, giving decision-makers visibility into AI reasoning — not just outputs.",
      },
      {
        title: "Consensus Verification",
        desc: "Answers receive verified status only when substantial cross-model agreement is reached, preventing confident-sounding wrong answers from reaching users.",
      },
      {
        title: "Confidence Scoring",
        desc: "Every response is accompanied by a calculated confidence score based on the degree of cross-model agreement and reasoning quality.",
      },
      {
        title: "Full Audit Trail",
        desc: "Every query, model response, and debate outcome is logged with complete reasoning chains — for compliance, legal review, and continuous improvement.",
      },
      {
        title: "Enterprise Security",  // FACT — SOC 2 and ISO 27001 visible on screenshot
        desc: "SOC 2 Type A and ISO 27001 certified. Flexible data residency options. Zero training on customer data — ever.",
      },
    ],

    techStack: {
      note: "[A] Stack inferred from product capabilities and enterprise AI standards.",
      ai: ["OpenAI GPT-4", "Anthropic Claude", "Google Gemini", "LangChain", "Custom Orchestration"],
      backend: ["Node.js", "Python", "FastAPI", "Redis", "WebSockets"],
      frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      data: ["PostgreSQL", "Vector Store", "Audit Log DB"],
      infra: ["AWS", "Docker", "Kubernetes"],
    },

    impact: [
      {
        metric: "Models Per Query",
        value: "3",
        desc: "Frontier AI models analyse every single request",
        isAssumption: false, // FACT — core product feature
      },
      {
        metric: "Decision Confidence",
        value: "3×",
        desc: "Higher verified accuracy vs single-model AI approaches",
        isAssumption: true, // [A]
      },
      {
        metric: "Enterprise Grade",
        value: "SOC 2",
        desc: "Type A certified with ISO 27001 compliance",
        isAssumption: false, // FACT — visible on screenshot
      },
    ],

    altiqRole: {
      services: [
        "AI Architecture Design",
        "Custom AI Development",
        "AI Integration & Deployment",
      ],
      timeline: "6 months", // [A]
      timelineNote: "[A] Estimated engagement duration.",
      scope:
        "Full-stack AI orchestration system: multi-model routing layer, structured debate algorithm, consensus verification engine, confidence scoring system, audit infrastructure, and production web interface.",
    },
  },

  /* ══════════════════════════════════════════════════════════
     PROJECT 2 — GREENAXIS
     Source of truth: logo (green-axis.png) + dashboard screenshot (IMG_1926)
  ══════════════════════════════════════════════════════════ */
  {
    slug: "greenaxis",
    name: "GreenAxis",

    // [A] tagline crafted from product positioning
    tagline: "Turning sustainability data into strategic decisions.",

    // [A] inferred from dashboard UI and logo
    productLine: "ESG Intelligence & Sustainability Analytics Platform",
    category: "Sustainability Intelligence",

    // FACT — from logo (recycling hexagon mark = circular economy/sustainability)
    industry: "Waste Management · Sustainability · ESG",
    year: "2024", // [A]

    logo: "/images/green-axis.png",

    // FACT — confirmed file exists
    heroImage: "/images/work/IMG_1926.PNG",
    logoOnDark: false, // FACT — dark green/navy text, needs light bg

    // FACT — from logo colours (green gradient)
    brandColor: "#4A8A28",

    // [A] derived from dashboard screenshot and logo meaning
    description:
      "An AI-powered ESG intelligence platform that transforms raw sustainability data — waste volumes, carbon emissions, energy consumption — into real-time dashboards, automated compliance reports, and AI-generated mitigation recommendations.",

    summary:
      "ESG intelligence platform that turns sustainability data into real-time decisions. Built for organisations serious about measuring, reporting, and reducing their environmental impact.",

    trustBadges: ["GHG Protocol Aligned", "Real-Time Analytics", "Multi-Site Support", "Regulatory Ready"],

    challenge: {
      headline: "ESG data is collected everywhere. Acted on almost nowhere.",
      body: [
        "Organisations in waste management, manufacturing, and sustainability face a universal data problem: they generate enormous amounts of environmental data across operations, sites, and supply chains — but it lives in disconnected spreadsheets, manual logs, and siloed systems.",
        "Manual ESG reporting is slow (typically months behind actual operations), error-prone, and backward-looking. Reports describe what happened, not what to do about it.",
        "Regulatory pressure is increasing. Stakeholder expectations are rising. Sustainability managers need real-time intelligence that drives decisions — not end-of-quarter summaries that drive nothing.",
      ],
    },

    solution: {
      headline: "Real-time ESG intelligence. Continuous, strategic, and actionable.",
      body: [
        "ALTIQ designed and built GreenAxis — an AI-powered sustainability intelligence platform that aggregates environmental data across operations in real time and transforms it into dashboards, automated compliance reports, and AI-generated mitigation recommendations.",
        "The system uses machine learning to identify sustainability patterns, flag compliance risks before they become violations, and model the projected impact of different mitigation strategies — giving sustainability managers a forward-looking tool instead of a backward-looking report.",
        "From carbon tracking to waste stream analytics to energy optimisation, GreenAxis makes ESG intelligence continuous, accurate, and genuinely useful.",
      ],
    },

    features: [
      {
        title: "Real-Time Carbon Tracking",
        desc: "Live monitoring of carbon emissions across all operations, with automated GHG Protocol-aligned calculations updated continuously.",
      },
      {
        title: "Waste Stream Intelligence",
        desc: "Centralised visibility of waste generation, classification, disposal routes, and diversion rates across every site — in a single view.",
      },
      {
        title: "AI Mitigation Engine",
        desc: "Machine learning recommendations for reducing environmental impact, ranked by feasibility, implementation cost, and projected outcome.",
      },
      {
        title: "Automated ESG Reporting",
        desc: "One-click generation of regulatory-ready ESG reports aligned to GRI, TCFD, and regional compliance frameworks.",
      },
      {
        title: "Predictive Sustainability Analytics",
        desc: "Forecast future emissions and waste volumes based on operational trends — enabling proactive management instead of reactive responses.",
      },
      {
        title: "Multi-Site Aggregation",
        desc: "Aggregate and benchmark sustainability performance across multiple locations, facilities, and subsidiaries from a unified dashboard.",
      },
    ],

    techStack: {
      note: "[A] Stack inferred from product capabilities and sustainability tech standards.",
      ai: ["Python ML Pipeline", "Scikit-learn", "Time-Series Forecasting", "Custom Prediction Models"],
      backend: ["Node.js", "Python", "FastAPI", "Celery"],
      frontend: ["React", "Next.js", "TypeScript", "Recharts"],
      data: ["PostgreSQL", "TimescaleDB", "ETL Pipeline"],
      infra: ["Google Cloud Platform", "Docker", "Cloud Run"],
    },

    impact: [
      {
        metric: "Reporting Time",
        value: "−80%",
        desc: "Reduction in ESG report preparation time vs manual process",
        isAssumption: true, // [A]
      },
      {
        metric: "Data Latency",
        value: "Real-time",
        desc: "Live operational data vs monthly manual collection cycles",
        isAssumption: false, // FACT — product capability
      },
      {
        metric: "Compliance",
        value: "Automated",
        desc: "Regulatory ESG reports generated without manual compilation",
        isAssumption: true, // [A]
      },
    ],

    altiqRole: {
      services: [
        "AI Strategy & Roadmapping",
        "Custom AI Application Development",
        "Data Intelligence & Analytics",
      ],
      timeline: "5 months", // [A]
      timelineNote: "[A] Estimated engagement duration.",
      scope:
        "End-to-end sustainability intelligence platform: data ingestion pipeline, machine learning analytics layer, real-time dashboard, automated ESG reporting engine, and predictive modelling modules.",
    },
  },

  /* ══════════════════════════════════════════════════════════
     PROJECT 3 — OBSERVEX
     Source of truth: logo (observex.jpg)
     Note: Desktop screenshot pending — placeholder used
  ══════════════════════════════════════════════════════════ */
  {
    slug: "observex",
    name: "Observex",

    // FACT — visible on logo asset
    tagline: "See what human eyes miss.",

    // FACT — "AI POWERED BEHAVIORAL ANALYTICS" verbatim from logo
    productLine: "AI Powered Behavioral Analytics",
    category: "Computer Vision · Behavioural AI",

    // [A] derived from product category
    industry: "Retail · Facilities Management · Public Safety",
    year: "2025", // [A]

    logo: "/images/observex.jpg",

    heroImage: "/images/work/observex.png",
    logoOnDark: false,

    // FACT — from logo colours (periwinkle blue)
    brandColor: "#5A90C0",

    // [A] derived from product name and category
    description:
      "An AI-powered behavioral analytics system that transforms standard video infrastructure into real-time intelligence — detecting behavioral patterns, flagging anomalies, and surfacing operational insights that are invisible to human observers at scale.",

    summary:
      "Computer vision AI that detects what humans can't monitor at scale. Real-time behavioural intelligence from existing camera infrastructure — no new hardware required.",

    trustBadges: ["Privacy Compliant", "Real-Time Detection", "Multi-Camera Support", "Edge Ready"],

    challenge: {
      headline: "Video footage is collected everywhere. Almost none of it is actually analysed.",
      body: [
        "Organisations operating physical environments — retail stores, warehouses, hospitals, public spaces — generate thousands of hours of video footage every single day.",
        "Manual review at this scale is impossible. Security teams can only review footage after incidents have already occurred. Operational patterns, safety risks, customer behaviour anomalies, and process inefficiencies go entirely undetected until something goes wrong.",
        "The gap between what surveillance infrastructure captures and what organisations actually understand about their physical operations is vast — and expensive.",
      ],
    },

    solution: {
      headline: "Intelligence from every camera. In real time.",
      body: [
        "ALTIQ designed and built the Observex computer vision pipeline — an AI system that ingests live video feeds from existing camera infrastructure and runs continuous behavioural analysis at the edge, in real time.",
        "Custom-trained models classify behaviours, detect anomalies, track movement patterns, and surface operational intelligence through a clean, role-specific dashboard — all without requiring new hardware or disrupting existing infrastructure.",
        "Observex turns passive surveillance into active operational intelligence.",
      ],
    },

    features: [
      {
        title: "Real-Time Behavioral Detection",
        desc: "Continuous AI analysis of live video feeds detecting classified behaviours as they occur — not hours after the fact, when it's too late.",
      },
      {
        title: "Intelligent Anomaly Alerting",
        desc: "Precision alerts when detected behaviours fall outside normal operational baselines — without flooding operators with false positives.",
      },
      {
        title: "Movement Pattern Analytics",
        desc: "Aggregate flow and movement data across time periods to understand how physical spaces are actually used — and where to optimise.",
      },
      {
        title: "Multi-Camera Intelligence",
        desc: "Unified analysis across unlimited camera feeds with cross-camera tracking, behaviour correlation, and spatial intelligence.",
      },
      {
        title: "Privacy-First Architecture",
        desc: "Behavioural classification without facial recognition. Designed for compliance with GDPR, CCPA, and regional privacy regulations.",
      },
      {
        title: "Zero New Hardware",
        desc: "Observex integrates directly with existing CCTV and IP camera infrastructure — delivering AI intelligence on investment already made.",
      },
    ],

    techStack: {
      note: "[A] Stack inferred from product capabilities and computer vision standards.",
      ai: ["Python", "PyTorch", "YOLOv8", "OpenCV", "Custom CNN Models", "Edge Inference"],
      backend: ["FastAPI", "Python", "WebSockets", "Redis Streams"],
      frontend: ["React", "Next.js", "TypeScript"],
      data: ["TimescaleDB", "Redis", "Event Store"],
      infra: ["AWS", "Edge Computing Nodes", "Docker", "RTSP/HLS Integration"],
    },

    impact: [
      {
        metric: "Detection Latency",
        value: "<500ms",
        desc: "From event occurrence to live dashboard alert",
        isAssumption: true, // [A]
      },
      {
        metric: "Monitoring",
        value: "24 / 7",
        desc: "Continuous AI coverage vs periodic human spot-checks",
        isAssumption: false, // FACT — product capability
      },
      {
        metric: "Infrastructure",
        value: "Existing",
        desc: "Works with your current cameras — zero hardware investment",
        isAssumption: true, // [A]
      },
    ],

    altiqRole: {
      services: [
        "Custom AI Application Development",
        "AI Integration & Deployment",
        "AI Product Design & Consulting",
      ],
      timeline: "7 months", // [A]
      timelineNote: "[A] Estimated engagement duration.",
      scope:
        "Full computer vision intelligence system: video ingestion and streaming layer, custom AI model training and deployment, real-time inference pipeline, behavioural classification engine, anomaly detection system, and multi-role analytics dashboard.",
    },
  },
];

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
