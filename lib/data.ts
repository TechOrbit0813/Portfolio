// Central content for the site. Edit values here to update the page.

export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** Prefix a public asset path with the configured basePath (for GitHub Pages). */
export const asset = (path: string) => `${BASE_PATH}${path}`;

export const profile = {
  name: "Christopher Geyer",
  shortName: "Chris",
  title: "Senior Full-Stack AI Engineer",
  location: "Noble, Oklahoma",
  email: "chrisgeyer1215@gmail.com",
  phone: "(720) 549-0914",
  phoneHref: "tel:+17205490914",
  github: "https://github.com/chrisgeyer1215",
  linkedin: "#",
  resume: "https://drive.google.com/file/d/1PMfL9pVfule9d7QULvhq2L5rwcTntyMH/",
  photo: "/assets/images/profile.png",
  tagline:
    "I help teams design, build, and improve production software across full-stack applications, AI workflows, cloud infrastructure, and operational automation.",
};

export const hero = {
  availability: "Available for selected projects",
  headline: {
    firstLine: "Senior Full-Stack",
    secondLine: "AI Engineer",
  },
  description:
    "I build secure, production-ready software that connects thoughtful product engineering with practical AI, reliable backend systems, and cloud operations.",
  technologies: [
    { label: "AI and LLMs", icon: "fas fa-brain" },
    { label: "Next.js", icon: "fas fa-n" },
    { label: "Node.js", icon: "fab fa-node-js" },
    { label: "Python", icon: "fab fa-python" },
    { label: "AWS and Azure", icon: "fas fa-cloud" },
  ],
  stats: [
    { value: "22+", label: "Years in Software", icon: "fas fa-briefcase" },
    { value: "5+", label: "Years in AI", icon: "fas fa-brain" },
    { value: "End-to-End", label: "Production Ownership", icon: "fas fa-layer-group" },
  ],
  trustedPlatforms: [
    { label: "AWS", icon: "fab fa-aws" },
    { label: "Azure", icon: "fab fa-microsoft" },
    { label: "PostgreSQL", icon: "fas fa-database" },
    { label: "Docker", icon: "fab fa-docker" },
    { label: "OpenAI", icon: "fas fa-circle-nodes" },
  ],
  capabilities: [
    {
      title: "Full-Stack Product Engineering",
      text: "Responsive applications, dependable APIs, and maintainable product architecture",
      icon: "fas fa-code",
      tone: "blue",
    },
    {
      title: "AI Systems and Automation",
      text: "LLM workflows, RAG, agents, document processing, and operational automation",
      icon: "fas fa-brain",
      tone: "purple",
    },
    {
      title: "Cloud and Platform Engineering",
      text: "AWS, Azure, Linux, containers, CI/CD, monitoring, and hybrid infrastructure",
      icon: "fas fa-cloud",
      tone: "green",
    },
    {
      title: "Security and Reliability",
      text: "Least-privilege access, secure data workflows, observability, and recovery planning",
      icon: "fas fa-shield-halved",
      tone: "orange",
    },
  ],
};

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  // { href: "#contact", label: "Contact" },
];

export const about = {
  paragraphs: [
    "I began my software career in 2004 after completing a bachelor's degree in Computer Science. My early work centered on business websites, database-driven applications, technical support, and practical systems for small organizations. That experience taught me to connect implementation decisions with the people, processes, and business goals behind the software.",
    "As my responsibilities expanded, I moved across frontend engineering, backend services, APIs, databases, and cloud delivery. During more than eleven years at Clevyr, I helped build and maintain enterprise applications, SaaS platforms, client portals, and internal systems while improving performance, security, reliability, and long-term maintainability.",
    "My background also includes hands-on platform operations. I have built and hardened Linux environments, supported AWS and Azure infrastructure, worked with Docker and Kubernetes, automated delivery through CI/CD, managed PostgreSQL workloads, and implemented monitoring across more than 100 servers, virtual machines, devices, and endpoints.",
    "For the past five years, I have focused increasingly on applied AI. My work includes LLM integrations, RAG systems, AI agents, conversational interfaces, document automation, and intelligent workflows using OpenAI, Claude, LangChain, Python, Node.js, and modern cloud platforms. I focus on moving AI beyond prototypes and into dependable product workflows.",
    "Today, I work with founders and established teams to take products from concept to production or improve systems that need stronger architecture, clearer delivery processes, better performance, or more reliable operations. I bring product engineering, AI, cloud infrastructure, and production ownership together in one practical approach.",
  ],
  highlights: [
    {
      icon: "fas fa-laptop-code",
      title: "Full-Stack Product Delivery",
      text: "React and Next.js interfaces backed by Node.js, Python, and secure APIs",
    },
    {
      icon: "fas fa-robot",
      title: "Applied AI Systems",
      text: "OpenAI and Claude integrations, RAG, agents, chatbots, and document workflows",
    },
    {
      icon: "fas fa-database",
      title: "Backend and Data",
      text: "PostgreSQL, Supabase, API integrations, data modeling, and performance tuning",
    },
    {
      icon: "fas fa-cloud",
      title: "Cloud and Platform Operations",
      text: "AWS, Azure, Linux, containers, CI/CD, monitoring, and hybrid environments",
    },
    {
      icon: "fas fa-shield-halved",
      title: "Security and Reliability",
      text: "Least privilege, access controls, observability, backups, and operational readiness",
    },
    {
      icon: "fas fa-users",
      title: "Technical Leadership",
      text: "Clear communication, cross-functional collaboration, mentoring, and delivery ownership",
    },
  ],
};

// Each skill has a name, an optional Simple Icons slug (https://simpleicons.org)
// used to load the official logo, and a Font Awesome class used as a fallback.
export type Skill = { name: string; slug?: string; iconUrl?: string; fa: string };

export const skills: { icon: string; title: string; items: Skill[] }[] = [
  {
    icon: "fas fa-laptop-code",
    title: "Product Frontend",
    items: [
      { name: "React", slug: "react", fa: "fab fa-react" },
      { name: "Next.js", slug: "nextdotjs", fa: "fas fa-layer-group" },
      { name: "TypeScript", slug: "typescript", fa: "fas fa-code" },
      { name: "JavaScript", slug: "javascript", fa: "fab fa-js" },
      { name: "Tailwind CSS", slug: "tailwindcss", fa: "fas fa-wind" },
      { name: "Angular", slug: "angular", fa: "fab fa-angular" },
    ],
  },
  {
    icon: "fas fa-server",
    title: "Languages and Backend",
    items: [
      {
        name: "Python",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        fa: "fab fa-python",
      },
      {
        name: "Node.js",
        iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        fa: "fab fa-node-js",
      },
      { name: "FastAPI", slug: "fastapi", fa: "fas fa-bolt" },
      { name: "Django", slug: "django", fa: "fas fa-leaf" },
      { name: "C# / .NET", slug: "dotnet", fa: "fas fa-code" },
      { name: "Go", slug: "go", fa: "fas fa-code" },
      { name: "C++", slug: "cplusplus", fa: "fas fa-code" },
      { name: "REST APIs", fa: "fas fa-network-wired" },
    ],
  },
  {
    icon: "fas fa-brain",
    title: "AI and LLM Systems",
    items: [
      { name: "OpenAI", slug: "openai", fa: "fas fa-brain" },
      { name: "Claude", slug: "claude", fa: "fas fa-robot" },
      { name: "LangChain", slug: "langchain", fa: "fas fa-link" },
      { name: "RAG", fa: "fas fa-magnifying-glass" },
      { name: "AI Agents", fa: "fas fa-diagram-project" },
      { name: "Tool Calling", fa: "fas fa-gears" },
      { name: "Document AI", fa: "fas fa-file-lines" },
      { name: "Vector Search", fa: "fas fa-vector-square" },
    ],
  },
  {
    icon: "fas fa-database",
    title: "Data and Integrations",
    items: [
      { name: "PostgreSQL", slug: "postgresql", fa: "fas fa-database" },
      { name: "Supabase", slug: "supabase", fa: "fas fa-bolt" },
      { name: "SQL", fa: "fas fa-database" },
      { name: "Drizzle ORM", slug: "drizzle", fa: "fas fa-layer-group" },
      { name: "pgvector", fa: "fas fa-vector-square" },
      { name: "Redis", slug: "redis", fa: "fas fa-database" },
      { name: "API Integration", fa: "fas fa-plug" },
      { name: "Stripe", slug: "stripe", fa: "fab fa-stripe" },
    ],
  },
  {
    icon: "fas fa-cloud",
    title: "Cloud and Platform",
    items: [
      { name: "AWS", slug: "amazonwebservices", fa: "fab fa-aws" },
      { name: "Microsoft Azure", slug: "microsoftazure", fa: "fab fa-microsoft" },
      { name: "Linux", slug: "linux", fa: "fab fa-linux" },
      { name: "Docker", slug: "docker", fa: "fab fa-docker" },
      { name: "Kubernetes", slug: "kubernetes", fa: "fas fa-dharmachakra" },
      { name: "Terraform", slug: "terraform", fa: "fas fa-cubes" },
      { name: "CI/CD", fa: "fas fa-code-branch" },
      { name: "GitHub Actions", slug: "githubactions", fa: "fab fa-github" },
    ],
  },
  {
    icon: "fas fa-shield-halved",
    title: "Operations and Security",
    items: [
      { name: "Zabbix", slug: "zabbix", fa: "fas fa-chart-line" },
      { name: "Monitoring", fa: "fas fa-desktop" },
      { name: "Observability", fa: "fas fa-binoculars" },
      { name: "System Hardening", fa: "fas fa-shield-halved" },
      { name: "IAM and RBAC", fa: "fas fa-user-shield" },
      { name: "Backup and Recovery", fa: "fas fa-rotate-left" },
      { name: "Performance Tuning", fa: "fas fa-gauge-high" },
      { name: "Incident Response", fa: "fas fa-triangle-exclamation" },
    ],
  },
];

export const experience = [
  {
    title: "Freelance Senior Full-Stack and AI SaaS Developer",
    company: "Independent Consulting",
    location: "Remote | Noble, OK",
    period: "December 2025 to Present",
    points: [
      "Provide full-stack engineering, AI integration, SaaS development, and technical consulting for startups, small businesses, and distributed teams.",
      "Build production-ready web applications, AI-enabled dashboards, automation workflows, API integrations, and cloud deployment foundations.",
      "Help clients move from product definition to delivery while improving architecture, maintainability, security, and operational readiness.",
    ],
  },
  {
    title: "Senior Full-Stack Developer",
    company: "Clevyr, Inc.",
    location: "Oklahoma City, OK",
    period: "May 2014 to November 2025",
    points: [
      "Built and maintained enterprise web applications, client portals, SaaS platforms, and internal business systems across frontend, backend, data, and deployment layers.",
      "Improved API reliability, database performance, application maintainability, and production support across long-lived codebases.",
      "Modernized legacy systems, supported third-party integrations, and worked with stakeholders to translate operational requirements into maintainable software.",
      "Helped build, harden, monitor, and maintain a customized openSUSE-based Linux environment supporting more than 100 infrastructure assets.",
    ],
  },
  {
    title: "Full-Stack Web Developer",
    company: "Malloy Digital LLC",
    location: "Norman, OK",
    period: "March 2011 to April 2014",
    points: [
      "Developed business websites, custom web applications, CRM tools, and database-driven platforms for local and regional clients.",
      "Implemented frontend interfaces, backend functionality, API integrations, and practical user-experience improvements.",
      "Supported database design, troubleshooting, application maintenance, and incremental delivery for client-facing systems.",
    ],
  },
  {
    title: "Junior Web Developer",
    company: "Red Sun Digital",
    location: "Norman, OK",
    period: "August 2004 to February 2011",
    points: [
      "Started my professional software career building and maintaining small-business websites and database-backed web applications.",
      "Handled technical support, content and database updates, troubleshooting, and direct communication with clients.",
      "Developed a practical foundation in production support, web standards, server-side development, and dependable delivery.",
    ],
  },
];

export const education = [
  {
    degree: "Bachelor's Degree in Computer Science",
    school: "East Central University | Ada, Oklahoma | 1999 to 2003",
    description:
      "Completed undergraduate study focused on software development, programming fundamentals, database systems, web technologies, algorithms, object-oriented programming, systems analysis, and practical application development.",
    highlights: ["Software Engineering", "Algorithms", "Database Systems", "Web Technologies"],
  },
];

export type CertificationBadge = {
  image: string;
  alt: string;
};

export const certificationBadges: CertificationBadge[] = [
  {
    image: "/assets/images/certifications/badge_1_transparent_512.png",
    alt: "PCEP Certified Entry-Level Python Programmer badge",
  },
  {
    image: "/assets/images/certifications/badge_2_transparent_512.png",
    alt: "OpenEDG JS Institute Certified Associate Web Developer badge",
  },
  {
    image: "/assets/images/certifications/badge_3_transparent_512.png",
    alt: "AWS Generative AI Developer Professional badge",
  },
  {
    image: "/assets/images/certifications/badge_6_transparent_512.png",
    alt: "Everlaw Certified Project Manager badge",
  },
  {
    image: "/assets/images/certifications/badge_7_transparent_512.png",
    alt: "GitHub Agentic AI Developer certification badge",
  },
];

export type AdditionalCertificate = {
  title: string;
  image: string;
  alt: string;
  href: string;
};

export const additionalCertificates: AdditionalCertificate[] = [
  {
    title: "Python",
    image: "/assets/images/certificates/python_basic%20certificate.webp",
    alt: "HackerRank Python Basic certificate earned by Chris Geyer",
    href: "https://www.hackerrank.com/certificates/iframe/a671879b6c49",
  },
  {
    title: "Go",
    image: "/assets/images/certificates/golang_intermediate%20certificate.webp",
    alt: "HackerRank Go Intermediate certificate earned by Chris Geyer",
    href: "https://www.hackerrank.com/certificates/iframe/ca693d4fa588",
  },
  {
    title: "C#",
    image: "/assets/images/certificates/c_sharp_basic%20certificate.webp",
    alt: "HackerRank C# Basic certificate earned by Chris Geyer",
    href: "https://www.hackerrank.com/certificates/iframe/970365848f94",
  },
  {
    title: "React",
    image: "/assets/images/certificates/react_basic%20certificate.webp",
    alt: "HackerRank React Basic certificate earned by Chris Geyer",
    href: "https://www.hackerrank.com/certificates/iframe/65ba3280192d",
  },
  {
    title: "JavaScript",
    image: "/assets/images/certificates/javascript_intermediate%20certificate.webp",
    alt: "HackerRank JavaScript Intermediate certificate earned by Chris Geyer",
    href: "https://www.hackerrank.com/certificates/iframe/931df84abdf1",
  },
  {
    title: "SQL (Advanced)",
    image: "/assets/images/certificates/sql_advanced%20certificate.webp",
    alt: "HackerRank SQL Advanced certificate earned by Chris Geyer",
    href: "https://www.hackerrank.com/certificates/iframe/b4ce03443763",
  },
  {
    title: "Frontend Developer",
    image: "/assets/images/certificates/frontend_developer_react%20certificate.webp",
    alt: "HackerRank Frontend Developer React certificate earned by Chris Geyer",
    href: "https://www.hackerrank.com/certificates/iframe/efa1bdb505b7",
  },
  {
    title: "REST API",
    image: "/assets/images/certificates/rest_api_intermediate%20certificate.webp",
    alt: "HackerRank REST API Intermediate certificate earned by Chris Geyer",
    href: "https://www.hackerrank.com/certificates/iframe/33d9a4e62ac2",
  },
  {
    title: "Software Engineer",
    image: "/assets/images/certificates/software_engineer%20certificate.webp",
    alt: "HackerRank Software Engineer certificate earned by Chris Geyer",
    href: "https://www.hackerrank.com/certificates/iframe/c0a52353d35f",
  },
];

export type ProjectCategory = "ai" | "saas" | "automation" | "industry";

export const projectFilters: { key: "all" | ProjectCategory; label: string }[] = [
  { key: "all", label: "All Projects" },
  { key: "ai", label: "AI Systems" },
  { key: "saas", label: "SaaS Products" },
  { key: "automation", label: "Automation" },
  { key: "industry", label: "Domain Platforms" },
];

export type Project = {
  title: string;
  category: ProjectCategory[];
  image: string;
  gallery?: string[];
  description: string;
  stack: string[];
  demo: string;
  source: string;
  hidden?: boolean;
};

export const projects: Project[] = [
  {
    title: "Moonshot AI | Ecommerce Conversion Optimization",
    category: ["ai", "saas"],
    image: "/assets/images/projects/moonshot-ai.webp",
    gallery: [
      "/assets/images/gallery/moonshot (1).png",
      "/assets/images/gallery/moonshot (2).png",
      "/assets/images/gallery/moonshot (3).png",
    ],
    description:
      "An AI-enabled optimization platform for evaluating ecommerce experiences, identifying conversion opportunities, and turning performance signals into focused storefront experiments.",
    stack: ["React", "Node.js", "Python", "LLM Workflows", "Analytics", "A/B Testing"],
    demo: "https://moonshot-ai.com/",
    source: "#",
  },
  {
    title: "JFE Engineering | 3D Model Collaboration",
    category: ["saas", "automation", "industry"],
    image: "/assets/images/projects/jfe-3d-collaboration.webp",
    gallery: [
      "/assets/images/gallery/jfe-3d-collaboration-introduction.webp",
      "/assets/images/gallery/jfe-3d-collaboration-workflow.webp",
      "/assets/images/gallery/jfe-3d-collaboration-case-study.webp",
    ],
    description:
      "A secure browser-based engineering collaboration environment that connects Box storage with Autodesk authentication, Model Derivative API, and Viewer SDK so teams can translate, inspect, mark up, and review more than 70 model formats without dedicated workstations.",
    stack: [
      "Autodesk Platform Services",
      "Model Derivative API",
      "Viewer SDK",
      "OAuth 2.0",
      "Box Integration",
      "RBAC and Audit Logs",
    ],
    demo: "https://www.jfe-eng.co.jp/en/",
    source: "#",
  },
  {
    title: "ADS StormTech | Cloud Design Studio",
    category: ["automation", "industry"],
    image: "/assets/images/projects/ads-stormtech-design-tool.webp",
    gallery: [
      "/assets/images/gallery/ads-stormtech-introduction.webp",
      "/assets/images/gallery/ads-stormtech-workflow.webp",
      "/assets/images/gallery/ads-stormtech-case-study.webp",
    ],
    description:
      "A browser-based stormwater design tool that turns validated civil-engineering inputs into Autodesk Inventor models, layouts, dimensional drawings, bills of materials, and downloadable engineering packages through scalable cloud jobs.",
    stack: [
      "Autodesk Inventor Automation",
      "Data Management API",
      "Browser CAD",
      "Cloud Job Queues",
      "BOM Generation",
      "Engineering Validation",
    ],
    demo: "https://www.adspipe.com/stormtech/design-tool",
    source: "#",
  },
  {
    title: "Sportsbox AI | 3D Golf Motion Coaching",
    category: ["ai", "industry"],
    image: "/assets/images/projects/sportsbox-ai.webp",
    gallery: [
      "/assets/images/gallery/sportsbox (1).png",
      "/assets/images/gallery/sportsbox (2).png",
      "/assets/images/gallery/sportsbox (3).png",
    ],
    description:
      "A motion-analysis and coaching platform that converts golf swings into 3D performance data, visual feedback, and actionable insights for athletes and coaches.",
    stack: ["React", "Python", "Computer Vision", "3D Motion Data", "Cloud APIs", "Analytics"],
    demo: "https://shop.sportsbox.ai/",
    source: "#",
  },
  {
    title: "Boddle Learning | Adaptive K-6 Math Platform",
    category: ["ai", "industry"],
    image: "/assets/images/projects/boddlelearning.webp",
    gallery: [
      "/assets/images/gallery/boddlelearning (1).png",
      "/assets/images/gallery/boddlelearning (2).png",
      "/assets/images/gallery/boddlelearning (3).png",
    ],
    description:
      "A game-based learning platform that adapts math practice to each student, gives educators useful progress data, and keeps younger learners engaged through guided play.",
    stack: ["React", "Node.js", "Adaptive Learning", "Game Systems", "Analytics", "Cloud Platform"],
    demo: "https://www.boddlelearning.com/",
    source: "#",
  },
  {
    title: "Groove | Financial Wellness and Money Confidence",
    category: ["saas", "industry"],
    image: "/assets/images/projects/groove.webp",
    gallery: [
      "/assets/images/gallery/groove (1).png",
      "/assets/images/gallery/groove (2).png",
      "/assets/images/gallery/groove (3).png",
    ],
    description:
      "A financial wellness product that combines goal planning, educational content, cash-flow visibility, guided activities, rewards, and an AI-supported user experience.",
    stack: ["Vue.js", "Node.js", "PostgreSQL", "Plaid", "REST APIs", "CMS Integration"],
    demo: "https://groovemoney.org/",
    source: "#",
  },
  {
    title: "Boulder Longevity Institute | AI-Assisted Longevity Assessment & Protocol Generation",
    category: ["ai", "saas", "automation", "industry"],
    image: "/assets/images/projects/boulder.webp",
    gallery: [
      "/assets/images/gallery/boulder (1).png",
      "/assets/images/gallery/boulder (2).png",
      "/assets/images/gallery/boulder (3).png",
    ],
    description:
      "An AI-assisted longevity platform that connects patient intake, laboratory normalization, controlled protocol generation, provider approval, and longitudinal biomarker tracking in one secure clinical workflow.",
    stack: ["Claude", "Document AI", "OCR", "PDF and CSV Processing", "Clinical Workflow Automation", "RBAC and Audit Logs"],
    demo: "https://boulderlongevity.com/",
    source: "#",
  },
  {
    title: "Creativo AI | Marketing Content and Ad Creation",
    category: ["ai", "saas", "automation"],
    image: "/assets/images/projects/creativo-ai.webp",
    gallery: [
      "/assets/images/gallery/creativo-ai (1).png",
      "/assets/images/gallery/creativo-ai (2).png",
      "/assets/images/gallery/creativo-ai (3).png",
    ],
    description:
      "A generative marketing platform that helps teams develop campaign concepts, create ad assets, and move from brief to publishable content through a structured workflow.",
    stack: ["React", "Node.js", "Generative AI", "Campaign Automation", "Asset Generation", "Cloud Platform"],
    demo: "https://www.creativo.ai/",
    source: "#",
  },
  {
    title: "Guess Match Trivia | Mobile Picture Trivia",
    category: ["saas"],
    image: "/assets/images/projects/trivia.webp",
    gallery: [
      "/assets/images/gallery/trivia (1).png",
      "/assets/images/gallery/trivia (2).png",
      "/assets/images/gallery/trivia (3).png",
    ],
    description:
      "A mobile-first trivia experience built around picture-based guessing, progressive challenges, daily rewards, and token-based engagement mechanics.",
    stack: ["Python", "Anvil", "PostgreSQL", "REST APIs", "WebSockets", "Docker"],
    demo: "https://anvil.works/",
    source: "#",
  },
  {
    title: "Valhalla Healthcare | AI-Assisted Clinical Intake",
    category: ["ai", "industry"],
    image: "/assets/images/projects/valhalla.webp",
    gallery: [
      "/assets/images/gallery/valhalla (1).png",
      "/assets/images/gallery/valhalla (2).png",
      "/assets/images/gallery/valhalla (3).png",
    ],
    description:
      "A healthcare workflow platform that supports patient intake, clinical precharting, structured data capture, and better preparation before the provider encounter.",
    stack: ["React", "Node.js", "OpenAI", "Secure APIs", "Healthcare Workflows", "Cloud Deployment"],
    demo: "https://www.valhalla.healthcare/",
    source: "#",
  },
  {
    title: "Uplift AI | Smartphone Biomechanics Analysis",
    category: ["ai", "industry"],
    image: "/assets/images/projects/uplift-ai.webp",
    gallery: [
      "/assets/images/gallery/uplift (1).png",
      "/assets/images/gallery/uplift (2).png",
      "/assets/images/gallery/uplift (3).png",
    ],
    description:
      "A mobile biomechanics platform that uses smartphone video to evaluate movement, quantify athletic performance, and support data-informed coaching decisions.",
    stack: ["Mobile Web", "Python", "Computer Vision", "Biomechanics", "Cloud APIs", "Analytics"],
    demo: "https://www.uplift.ai/",
    source: "#",
  },
  {
    title: "Xel.Care | CNA Skills Training Lab",
    category: ["ai", "industry"],
    image: "/assets/images/projects/xel.care.webp",
    gallery: [
      "/assets/images/gallery/Xel.Care (1).png",
      "/assets/images/gallery/Xel.Care (2).png",
      "/assets/images/gallery/Xel.Care (3).png",
    ],
    description:
      "A healthcare training environment that supports CNA skill development through guided practice, structured assessment, and technology-assisted feedback.",
    stack: ["React", "Node.js", "AI Coaching", "Healthcare Training", "Skills Assessment", "Cloud Platform"],
    demo: "https://xel.care/",
    source: "#",
  },
  {
    title: "Frenger Systems | BIM Content Configurator",
    category: ["automation", "industry"],
    image: "/assets/images/projects/frenger-bim-configurator.webp",
    gallery: [
      "/assets/images/gallery/frenger-bim-introduction.webp",
      "/assets/images/gallery/frenger-bim-workflow.webp",
      "/assets/images/gallery/frenger-bim-case-study.webp",
    ],
    description:
      "A browser-based BIM configurator that validates custom heating and cooling ceiling requirements, runs versioned Autodesk Revit Automation jobs, and returns ready-to-use RFA or RVT content on demand.",
    stack: [
      "Autodesk Platform Services",
      "Revit Automation API",
      "Browser Configurator",
      "Rules Engine",
      "Async Job Processing",
      "Webhooks",
    ],
    demo: "https://frenger.de/",
    source: "#",
  },
  {
    title: "Med Matrix | AI Lab Review & Personalized Protocol Automation",
    category: ["ai", "automation", "industry"],
    image: "/assets/images/projects/med-matrix.webp",
    gallery: [
      "/assets/images/gallery/med-matrix (1).png",
      "/assets/images/gallery/med-matrix (2).png",
      "/assets/images/gallery/med-matrix (3).png",
    ],
    description:
      "A secure clinical document-automation workflow that extracts and normalizes 80+ laboratory biomarkers, populates review templates, and generates provider-reviewed longevity, hormone, nutrition, and supplementation protocol drafts.",
    stack: ["Python", "Claude", "OCR", "Document Automation", "Clinical Data Validation", "RBAC and Audit Logs"],
    demo: "https://medmatrixusa.com/",
    source: "#",
  },
  {
    title: "GRC Compliance | Governance, Risk, and Evidence Workflows",
    category: ["saas", "automation", "industry"],
    image: "/assets/images/projects/grc_compliance.webp",
    gallery: [
      "/assets/images/gallery/grc (1).png",
      "/assets/images/gallery/grc (2).png",
      "/assets/images/gallery/grc (3).png",
    ],
    description:
      "An AI-assisted compliance concept designed to replace fragmented spreadsheets and paper-based submissions with structured controls, evidence collection, review workflows, and audit-ready reporting.",
    stack: ["React", "Node.js", "PostgreSQL", "OpenAI", "RBAC", "Audit Workflows"],
    demo: "https://asiaverify.com/",
    source: "#",
  },
  {
    title: "U Platform | Workforce Coordination and Operations",
    category: ["saas", "automation"],
    image: "/assets/images/projects/unisongroup.webp",
    gallery: [
      "/assets/images/gallery/unison (1).png",
      "/assets/images/gallery/unison (2).png",
      "/assets/images/gallery/unison (3).png",
    ],
    description:
      "A workforce coordination platform that brings office, field, and onsite teams into one operating view for tasks, communications, emergency response, goals, and accountability.",
    stack: ["Vue.js", "Node.js", "PostgreSQL", "REST APIs", "Stripe", "Docker"],
    demo: "https://unisongroup.com/",
    source: "#",
  },
];
