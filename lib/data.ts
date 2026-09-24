// Central content for the site. Edit values here to update the page.

export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** Prefix a public asset path with the configured basePath (for GitHub Pages). */
export const asset = (path: string) => `${BASE_PATH}${path}`;

export const profile = {
  name: "Denver Greene",
  shortName: "Denver",
  title: "AI Software Engineer",
  location: "Savannah, MO",
  email: "greenedenver771@gmail.com",
  phone: "(702) 899-0350",
  phoneHref: "tel:+17028990350",
  github: "https://github.com/TechOrbit0813",
  linkedin: "#",
  resume: "/assets/Resume.pdf",
  photo: "/assets/optimized/profile/profile-364.7ef96494dc.webp",
  tagline:
    "I help teams design, build, and improve production software across full-stack applications, AI workflows, cloud infrastructure, and operational automation.",
};

export const hero = {
  availability: "Available for selected projects",
  headline: {
    firstLine: "AI Software",
    secondLine: "Engineer",
  },
  description:
    "I help companies turn complex software and AI ideas into systems they can actually ship and operate. I work independently and can also integrate with an existing engineering or product team. I’m comfortable taking ownership of architecture and implementation while communicating technical tradeoffs clearly to founders, product leaders, and other engineers.",
  technologies: [
    { label: "C#, ASP.NET", icon: "fas fa-brain" },
    { label: "LLMs", icon: "fas fa-n" },
    { label: "Node.js", icon: "fab fa-node-js" },
    { label: "Python", icon: "fab fa-python" },
    { label: "AWS and Azure", icon: "fas fa-cloud" },
  ],
  stats: [
    { value: "12+", label: "Years in Software", icon: "fas fa-briefcase" },
    { value: "5+", label: "Years in AI", icon: "fas fa-brain" },
    { value: "End-to-End", label: "Production Ownership", icon: "fas fa-layer-group" },
  ],
  trustedPlatforms: [
    { label: "AWS", icon: "fab fa-aws" },
    { label: "Azure", icon: "fab fa-microsoft" },
    { label: "PostgreSQL", icon: "fas fa-database" },
    { label: "Docker", icon: "fab fa-docker" },
    { label: "OpenAI", icon: "fas fa-circle-nodes" },
  ]
};

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  // { href: "#certifications", label: "Certifications" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export const about = {
  paragraphs: [
    "I began my software career after completing a bachelor's degree in Computer Science. My early work centered on business websites, database-driven applications, technical support, and practical systems for small organizations. That experience taught me to connect implementation decisions with the people, processes, and business goals behind the software.",
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

// Skill icons use the locally bundled SVG icon subset.
export type Skill = { name: string; fa: string };

export const skills: { icon: string; title: string; items: Skill[] }[] = [
  {
    icon: "fas fa-laptop-code",
    title: "Product Frontend",
    items: [
      { name: "React", fa: "fab fa-react" },
      { name: "Next.js", fa: "fas fa-layer-group" },
      { name: "TypeScript", fa: "fas fa-code" },
      { name: "JavaScript", fa: "fab fa-js" },
      { name: "Tailwind CSS", fa: "fas fa-wind" },
      { name: "Angular", fa: "fab fa-angular" },
    ],
  },
  {
    icon: "fas fa-server",
    title: "Languages and Backend",
    items: [
      {
        name: "Python",
        fa: "fab fa-python",
      },
      {
        name: "Node.js",
        fa: "fab fa-node-js",
      },
      { name: "FastAPI", fa: "fas fa-bolt" },
      { name: "Django", fa: "fas fa-leaf" },
      { name: "C# / .NET", fa: "fas fa-code" },
      { name: "Go", fa: "fas fa-code" },
      { name: "C++", fa: "fas fa-code" },
      { name: "REST APIs", fa: "fas fa-network-wired" },
    ],
  },
  {
    icon: "fas fa-brain",
    title: "AI and LLM Systems",
    items: [
      { name: "OpenAI", fa: "fas fa-brain" },
      { name: "Claude", fa: "fas fa-robot" },
      { name: "LangChain", fa: "fas fa-link" },
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
      { name: "PostgreSQL", fa: "fas fa-database" },
      { name: "Supabase", fa: "fas fa-bolt" },
      { name: "SQL", fa: "fas fa-database" },
      { name: "Drizzle ORM", fa: "fas fa-layer-group" },
      { name: "pgvector", fa: "fas fa-vector-square" },
      { name: "Redis", fa: "fas fa-database" },
      { name: "API Integration", fa: "fas fa-plug" },
      { name: "Stripe", fa: "fab fa-stripe" },
    ],
  },
  {
    icon: "fas fa-cloud",
    title: "Cloud and Platform",
    items: [
      { name: "AWS", fa: "fab fa-aws" },
      { name: "Microsoft Azure", fa: "fab fa-microsoft" },
      { name: "Linux", fa: "fab fa-linux" },
      { name: "Docker", fa: "fab fa-docker" },
      { name: "Kubernetes", fa: "fas fa-dharmachakra" },
      { name: "Terraform", fa: "fas fa-cubes" },
      { name: "CI/CD", fa: "fas fa-code-branch" },
      { name: "GitHub Actions", fa: "fab fa-github" },
    ],
  },
  {
    icon: "fas fa-shield-halved",
    title: "Operations and Security",
    items: [
      { name: "Zabbix", fa: "fas fa-chart-line" },
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
    title: "Senior AI Engineer & LLM Developer",
    company: "Microsoft Corporation",
    location: "Creve Coeur, MO",
    period: "April 2024 - May 2026",
    points: [
      "Designed and delivered production AI/LLM solutions using C#, Python, Azure OpenAI, RAG, embeddings, and vector search.",
      "Built AI agents, document-processing pipelines, semantic search, and structured data extraction workflows.",
    ],
  },
  {
    title: "Senior Full-stack Engineer",
    company: "TechSoft LLC",
    location: "Chesterfield, MO",
    period: "June 2020 - November 2023",
    points: [
      "Developed and maintained SaaS and enterprise applications using C#/.NET Core, ASP.NET Core, React, TypeScript, PostgreSQL, and REST APIs.",
      "Designed backend services, authentication systems, integrations, background processing, and complex business workflows.",
      "Implemented Docker and CI/CD pipelines to streamline development, testing, and production releases.",
    ],
  },
  {
    title: "C#, .Net Expert",
    company: "Impact Technologies",
    location: "Chesterfield, MO",
    period: "March 2016 - April 2020",
    points: [
      "Built out scalable cloud-native services on AWS to support global manufacturing and supply chain operations.",
      "Streamlined internal workflows by designing and implementing developer-friendly RESTful services and automated CI/CD pipelines.",
      "Managed large-scale NoSQL databases, ensuring high availability and data integrity across distributed systems.",
    ],
  }
];

export const education = [
  {
    degree: "Bachelor of Computer Science",
    school: "Webster University | Missouri, USA | 2013 - 2017",
    description:
      "Focused on software engineering, algorithms, databases, and distributed systems, with a strong foundation in C#, .NET, and modern application development.",
    highlights: ["Software Engineering", "Algorithms", "Database Systems", "Web Technologies"],
  },
];

export type CertificationBadge = {
  image: string;
  alt: string;
};

export const certificationBadges: CertificationBadge[] = [
  {
    image: "/assets/optimized/badges/badge_1_transparent_512.1620585688.webp",
    alt: "PCEP Certified Entry-Level Python Programmer badge",
  },
  {
    image: "/assets/optimized/badges/badge_2_transparent_512.33fe465fe1.webp",
    alt: "OpenEDG JS Institute Certified Associate Web Developer badge",
  },
  {
    image: "/assets/optimized/badges/badge_3_transparent_512.82be73dea1.webp",
    alt: "AWS Generative AI Developer Professional badge",
  },
  {
    image: "/assets/optimized/badges/badge_6_transparent_512.8b075665ed.webp",
    alt: "Everlaw Certified Project Manager badge",
  },
  {
    image: "/assets/optimized/badges/badge_7_transparent_512.d65ef6939c.webp",
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
    image: "/assets/optimized/certificates/python_basic-certificate.862c263f3b.webp",
    alt: "HackerRank Python Basic certificate earned by Denver Greene",
    href: "https://www.hackerrank.com/certificates/iframe/a671879b6c49",
  },
  {
    title: "Go",
    image: "/assets/optimized/certificates/golang_intermediate-certificate.317649b5bc.webp",
    alt: "HackerRank Go Intermediate certificate earned by Denver Greene",
    href: "https://www.hackerrank.com/certificates/iframe/ca693d4fa588",
  },
  {
    title: "C#",
    image: "/assets/optimized/certificates/c_sharp_basic-certificate.49cb0d8f8d.webp",
    alt: "HackerRank C# Basic certificate earned by Denver Greene",
    href: "https://www.hackerrank.com/certificates/iframe/970365848f94",
  },
  {
    title: "React",
    image: "/assets/optimized/certificates/react_basic-certificate.49cb0d8f8d.webp",
    alt: "HackerRank React Basic certificate earned by Denver Greene",
    href: "https://www.hackerrank.com/certificates/iframe/65ba3280192d",
  },
  {
    title: "JavaScript",
    image: "/assets/optimized/certificates/javascript_intermediate-certificate.4bc0f9c062.webp",
    alt: "HackerRank JavaScript Intermediate certificate earned by Denver Greene",
    href: "https://www.hackerrank.com/certificates/iframe/931df84abdf1",
  },
  {
    title: "SQL (Advanced)",
    image: "/assets/optimized/certificates/sql_advanced-certificate.317649b5bc.webp",
    alt: "HackerRank SQL Advanced certificate earned by Denver Greene",
    href: "https://www.hackerrank.com/certificates/iframe/b4ce03443763",
  },
  {
    title: "Frontend Developer",
    image: "/assets/optimized/certificates/frontend_developer_react-certificate.acf569609e.webp",
    alt: "HackerRank Frontend Developer React certificate earned by Denver Greene",
    href: "https://www.hackerrank.com/certificates/iframe/efa1bdb505b7",
  },
  {
    title: "REST API",
    image: "/assets/optimized/certificates/rest_api_intermediate-certificate.a4341a3559.webp",
    alt: "HackerRank REST API Intermediate certificate earned by Denver Greene",
    href: "https://www.hackerrank.com/certificates/iframe/33d9a4e62ac2",
  },
  {
    title: "Software Engineer",
    image: "/assets/optimized/certificates/software_engineer-certificate.6e8456a0a4.webp",
    alt: "HackerRank Software Engineer certificate earned by Denver Greene",
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
      "/assets/optimized/gallery/moonshot-1.d6e22af7ef.webp",
      "/assets/optimized/gallery/moonshot-2.8ce887512d.webp",
      "/assets/optimized/gallery/moonshot-3.0afe2de158.webp",
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
      "/assets/optimized/gallery/jfe-3d-collaboration-introduction.f85453a6c5.webp",
      "/assets/optimized/gallery/jfe-3d-collaboration-workflow.e3e2c507f8.webp",
      "/assets/optimized/gallery/jfe-3d-collaboration-case-study.4e39caeb0c.webp",
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
      "/assets/optimized/gallery/ads-stormtech-introduction.dc26c9402f.webp",
      "/assets/optimized/gallery/ads-stormtech-workflow.3dd4d429e3.webp",
      "/assets/optimized/gallery/ads-stormtech-case-study.3c89a2d91e.webp",
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
      "/assets/optimized/gallery/sportsbox-1.7ade2be9f0.webp",
      "/assets/optimized/gallery/sportsbox-2.9e51dd16d7.webp",
      "/assets/optimized/gallery/sportsbox-3.a7e0067d19.webp",
    ],
    description:
      "A motion-analysis and coaching platform that converts golf swings into 3D performance data, visual feedback, and actionable insights for athletes and coaches.",
    stack: ["React", "Python", "Computer Vision", "3D Motion Data", "Cloud APIs", "Analytics"],
    demo: "https://shop.sportsbox.ai/",
    source: "#",
  },
  {
    title: "YesLovey | Customizable Wedding Microsites",
    category: ["saas", "automation", "industry"],
    image: "/assets/images/projects/yeslovey.webp",
    gallery: [
      "/assets/optimized/gallery/yeslovey-introduction.6d4791f513.webp",
      "/assets/optimized/gallery/yeslovey-workflow.5b13204f55.webp",
      "/assets/optimized/gallery/yeslovey-result.d8eaccd389.webp",
    ],
    description:
      "A customizable wedding microsite platform that balances structured templates with controlled visual personalization, RSVP management, photos, registries, maps, countdowns, and post-publish editing.",
    stack: [
      "Vue.js",
      "Laravel",
      "MySQL",
      "Google Maps API",
    ],
    demo: "https://yeslovey.com/",
    source: "#",
  },
  {
    title: "Planning.Wedding | Wedding Planning & Website Platform",
    category: ["saas", "automation", "industry"],
    image: "/assets/images/projects/planning-wedding.webp",
    gallery: [
      "/assets/optimized/gallery/planning-wedding-introduction.ea7ebae0f4.webp",
      "/assets/optimized/gallery/planning-wedding-workflow.5513920225.webp",
      "/assets/optimized/gallery/planning-wedding-result.740f5702ad.webp",
    ],
    description:
      "An integrated wedding-planning platform where guest-facing microsites stay synchronized with centralized wedding data, RSVPs, schedules, photos, and planning workflows while private information remains separated.",
    stack: [
      "React",
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "RESTful API",
      "Multi-Tenant SaaS",
    ],
    demo: "https://planning.wedding/",
    source: "#",
  },
  {
    title: "Boddle Learning | Adaptive K-6 Math Platform",
    category: ["ai", "industry"],
    image: "/assets/images/projects/boddlelearning.webp",
    gallery: [
      "/assets/optimized/gallery/boddlelearning-1.3695bceb30.webp",
      "/assets/optimized/gallery/boddlelearning-2.f1713e119f.webp",
      "/assets/optimized/gallery/boddlelearning-3.37b4df0816.webp",
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
      "/assets/optimized/gallery/groove-1.f75764b162.webp",
      "/assets/optimized/gallery/groove-2.0527b8fb99.webp",
      "/assets/optimized/gallery/groove-3.6017d7603f.webp",
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
      "/assets/optimized/gallery/boulder-1.f351142748.webp",
      "/assets/optimized/gallery/boulder-2.d4811347b2.webp",
      "/assets/optimized/gallery/boulder-3.8a4b2f9bd8.webp",
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
      "/assets/optimized/gallery/creativo-ai-1.c3a609ebdd.webp",
      "/assets/optimized/gallery/creativo-ai-2.9768ef76dc.webp",
      "/assets/optimized/gallery/creativo-ai-3.0f67be35e6.webp",
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
      "/assets/optimized/gallery/trivia-1.90685c02ac.webp",
      "/assets/optimized/gallery/trivia-2.7d36c01bc6.webp",
      "/assets/optimized/gallery/trivia-3.c734dc68cd.webp",
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
      "/assets/optimized/gallery/valhalla-1.5a232b1d36.webp",
      "/assets/optimized/gallery/valhalla-2.fb54e89a1c.webp",
      "/assets/optimized/gallery/valhalla-3.18a5803753.webp",
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
      "/assets/optimized/gallery/uplift-1.b1d4e0d8ff.webp",
      "/assets/optimized/gallery/uplift-2.3e239f13d1.webp",
      "/assets/optimized/gallery/uplift-3.674964ea87.webp",
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
      "/assets/optimized/gallery/xel.care-1.4de048287f.webp",
      "/assets/optimized/gallery/xel.care-2.07b557ce0a.webp",
      "/assets/optimized/gallery/xel.care-3.f8bcc82c98.webp",
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
      "/assets/optimized/gallery/frenger-bim-introduction.014e228e6c.webp",
      "/assets/optimized/gallery/frenger-bim-workflow.010f51965c.webp",
      "/assets/optimized/gallery/frenger-bim-case-study.c6f7af525d.webp",
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
      "/assets/optimized/gallery/med-matrix-1.65bf919bd7.webp",
      "/assets/optimized/gallery/med-matrix-2.2e64dcb65a.webp",
      "/assets/optimized/gallery/med-matrix-3.f47e2f739a.webp",
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
      "/assets/optimized/gallery/grc-1.18d62bc77d.webp",
      "/assets/optimized/gallery/grc-2.d1ded2db54.webp",
      "/assets/optimized/gallery/grc-3.af2c148570.webp",
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
      "/assets/optimized/gallery/unison-1.82d22a53ee.webp",
      "/assets/optimized/gallery/unison-2.c4292a7beb.webp",
      "/assets/optimized/gallery/unison-3.b36b2217e4.webp",
    ],
    description:
      "A workforce coordination platform that brings office, field, and onsite teams into one operating view for tasks, communications, emergency response, goals, and accountability.",
    stack: ["Vue.js", "Node.js", "PostgreSQL", "REST APIs", "Stripe", "Docker"],
    demo: "https://unisongroup.com/",
    source: "#",
  },
];
