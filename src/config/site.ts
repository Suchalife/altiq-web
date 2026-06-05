export const siteConfig = {
  name: "altIQ",
  tagline: "Intelligence, Applied.",
  description:
    "We help businesses identify, design, and deploy AI systems that solve real operational problems — from strategy to production.",
  email: "hello@altiq.ai",
  copyright: "2025",
  nav: [
    { label: "Work",     href: "/work"     },
    { label: "Services", href: "/services" },
    { label: "About",    href: "/about"    },
    { label: "Contact",  href: "/contact"  },
  ],
  social: {
    linkedin:  "https://linkedin.com",
    x:         "https://x.com",
    instagram: "https://instagram.com",
  },
  services: [
    {
      num: "01",
      title: "AI Strategy & Roadmapping",
      desc:  "Clarity before code. We map the right AI investments for your specific context and operations.",
      icon:  "strategy",
    },
    {
      num: "02",
      title: "Custom AI Development",
      desc:  "Purpose-built AI systems — not off-the-shelf tools wrapped in your branding.",
      icon:  "build",
    },
    {
      num: "03",
      title: "Process Automation",
      desc:  "Intelligent workflows that eliminate the bottlenecks only AI can solve at scale.",
      icon:  "automation",
    },
    {
      num: "04",
      title: "Data Intelligence",
      desc:  "Your operational data already holds answers. We surface them with precision.",
      icon:  "data",
    },
    {
      num: "05",
      title: "AI Product Design",
      desc:  "From concept to intelligent product — we build what others spend months pitching.",
      icon:  "product",
    },
    {
      num: "06",
      title: "AI Integration & Deployment",
      desc:  "AI embedded into your existing systems — no infrastructure overhaul required.",
      icon:  "deploy",
    },
  ],
  process: [
    {
      num: "01",
      title: "Discovery",
      desc:  "We embed in your operation. We learn the workflows, data sources, constraints, and the real goals — not the stated ones.",
    },
    {
      num: "02",
      title: "AI Strategy",
      desc:  "We design the roadmap: what to build, in what order, with what technology, to what measurable outcome.",
    },
    {
      num: "03",
      title: "Design & Prototype",
      desc:  "Architecture, UX, and system design. We build a working prototype before committing to full development.",
    },
    {
      num: "04",
      title: "Build & Test",
      desc:  "Custom AI system development with continuous validation against real operational conditions — not synthetic benchmarks.",
    },
    {
      num: "05",
      title: "Deploy & Optimise",
      desc:  "Live deployment with ongoing monitoring, model refinement, and continuous improvement as real operational data flows in.",
    },
  ],
  stats: [
    { value: "3+",   label: "AI Systems\nin Production"         },
    { value: "7+",   label: "Industries\nServed"                },
    { value: "100%", label: "Custom-Built,\nZero Off-the-Shelf" },
  ],
  techStack: {
    "AI / ML":       ["OpenAI", "Anthropic Claude", "Google Gemini", "LangChain", "PyTorch", "Hugging Face", "YOLOv8", "OpenCV"],
    "Backend":       ["Node.js", "Python", "FastAPI", "Redis", "WebSockets"],
    "Frontend":      ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    "Cloud / Infra": ["AWS", "GCP", "Docker", "Kubernetes", "Vercel"],
    "Data":          ["PostgreSQL", "TimescaleDB", "MongoDB", "Pinecone", "Redis Streams"],
  },
} as const;
