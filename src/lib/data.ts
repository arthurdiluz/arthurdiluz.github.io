import type {
  BlogPostItem,
  PersonalInfo,
  ProjectItem,
  ServiceItem,
  SocialLink,
  TestimonialItem,
  TimelineEntry,
} from "./types";

export const personalInfo: PersonalInfo = {
  name: "Arthur Diniz",
  title: "Full-Stack Developer",
  avatarPath: "/assets/images/pp.webp",
  email: "arthurdiluz@outlook.com",
  phone: "+55 (43) 9 9804-8845",
  birthday: "July 30th, 1999",
  birthdayISO: "1999-07-30",
  location: "Campinas, São Paulo, Brasil",
};

export const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/arthurdiluz/",
    label: "LinkedIn Profile",
  },
  {
    name: "GitHub",
    url: "https://github.com/arthurdiluz",
    label: "GitHub Profile",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/arthurdiluz/",
    label: "Instagram Profile",
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/5543998048845",
    label: "WhatsApp Contact",
  },
  {
    name: "Telegram",
    url: "https://t.me/arthurdiluz",
    label: "Telegram Contact",
  },
];

export const services: ServiceItem[] = [
  {
    title: "Programming Languages",
    text: "JavaScript (ES6+), TypeScript, Python, and Golang for building robust applications.",
    iconPath: "/assets/images/icon-code.svg",
  },
  {
    title: "Backend Development",
    text: "Node.js, NestJS, Express.js, Fastify, and Buffalo for scalable server-side solutions.",
    iconPath: "/assets/images/icon-server.svg",
  },
  {
    title: "Frontend & Mobile",
    text: "React.js, Next.js, and React Native for modern and responsive user interfaces.",
    iconPath: "/assets/images/icon-frontend.svg",
  },
  {
    title: "AI, Data & Vectors",
    text: "ChromaDB, RAG Architecture, and Embeddings for intelligent data processing.",
    iconPath: "/assets/images/icon-ai.svg",
  },
  {
    title: "Database & Cache",
    text: "PostgreSQL, MongoDB, MySQL, Redis, Firebase, and Supabase for data management.",
    iconPath: "/assets/images/icon-database.svg",
  },
  {
    title: "Cloud & DevOps",
    text: "AWS (EC2, S3, Lambda, RDS, ECS), Docker, Kubernetes, CI/CD (GitHub Actions, AWS CodePipeline), and GCP.",
    iconPath: "/assets/images/icon-cloud.svg",
  },
];

export const testimonials: TestimonialItem[] = [
  {
    name: "Daniel lewis",
    avatarPath: "/assets/images/avatar-1.png",
    text: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.",
  },
  {
    name: "Jessica miller",
    avatarPath: "/assets/images/avatar-2.png",
    text: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.",
  },
  {
    name: "Emily evans",
    avatarPath: "/assets/images/avatar-3.png",
    text: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.",
  },
  {
    name: "Henry william",
    avatarPath: "/assets/images/avatar-4.png",
    text: "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.",
  },
];

export const projects: ProjectItem[] = [
  {
    title: "Bonchef",
    categories: ["API", "Web App", "Mobile App", "Desktop App", "AI Features"],
    imagePath: "/assets/images/project-bonchef.webp",
    url: "https://app.bonchef.com.br/lp2?utm_source=diniz_portfolio",
    description:
      "Automatic sales with Brazil's first AI-powered ordering system. Complete SaaS solution for restaurant management with real-time synchronization and conversational AI.",
  },
  {
    title: "TourLibras",
    categories: ["API", "Mobile App"],
    imagePath: "/assets/images/project-tourlibras.webp",
    urls: [
      {
        label: "API Repository",
        url: "https://github.com/arthurdiluz/tourlibras-api",
      },
      {
        label: "APP Repository",
        url: "https://github.com/arthurdiluz/tourlibras-app",
      },
    ],
    description:
      "An application (with backend) that teaches Brazilian Sign Language (Libras) through interactive lessons and exercises.",
  },
  {
    title: "BeTheHero",
    categories: ["API", "Web App", "Mobile App"],
    imagePath: "/assets/images/project-bethehero.webp",
    url: "https://github.com/arthurdiluz/be-the-hero",
    description:
      "A platform where NGOs can request currency support, and anyone can help by donating money to their cases.",
  },
  {
    title: "The 2048",
    categories: ["Desktop App", "Game"],
    imagePath: "/assets/images/project-2048.webp",
    url: "https://github.com/arthurdiluz/the-2048",
    description:
      "A simple game that the objective is to slide numbered tiles on a board to combine them to create a tile with the number 2048; however, it's also possible to continue the gameplay after reaching the goal, creating tiles with larger numbers.",
  },
];

export const posts: BlogPostItem[] = [
  {
    title: "Design conferences in 2022",
    imagePath: "/assets/images/blog-1.jpg",
    category: "Design",
    dateISO: "2022-02-23",
    dateLabel: "Feb 23, 2022",
    excerpt:
      "Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.",
  },
  {
    title: "Best fonts every designer",
    imagePath: "/assets/images/blog-2.jpg",
    category: "Design",
    dateISO: "2022-02-23",
    dateLabel: "Feb 23, 2022",
    excerpt:
      "Sed ut perspiciatis, nam libero tempore, cum soluta nobis est eligendi.",
  },
  {
    title: "Design digest #80",
    imagePath: "/assets/images/blog-3.jpg",
    category: "Design",
    dateISO: "2022-02-23",
    dateLabel: "Feb 23, 2022",
    excerpt:
      "Excepteur sint occaecat cupidatat no proident, quis nostrum exercitationem ullam corporis suscipit.",
  },
  {
    title: "UI interactions of the week",
    imagePath: "/assets/images/blog-4.jpg",
    category: "Design",
    dateISO: "2022-02-23",
    dateLabel: "Feb 23, 2022",
    excerpt:
      "Enim ad minim veniam, consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi.",
  },
  {
    title: "The forgotten art of spacing",
    imagePath: "/assets/images/blog-5.jpg",
    category: "Design",
    dateISO: "2022-02-23",
    dateLabel: "Feb 23, 2022",
    excerpt:
      "Maxime placeat, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Design digest #79",
    imagePath: "/assets/images/blog-6.jpg",
    category: "Design",
    dateISO: "2022-02-23",
    dateLabel: "Feb 23, 2022",
    excerpt:
      "Optio cumque nihil impedit uo minus quod maxime placeat, velit esse cillum.",
  },
];

export const education: TimelineEntry[] = [
  {
    title: "Bachelor's Degree in Computer Science",
    span: "2017 — 2023",
    text: "Universidade Estadual do Norte do Paraná (UENP). Comprehensive study of computer science fundamentals, software engineering, algorithms, and modern development practices.",
  },
  {
    title: "English Proficiency",
    span: "2010 — 2016",
    text: "Wizard Language School. Advanced English language training, achieving professional proficiency for international business communication.",
  },
  {
    title: "High School",
    span: "2014 — 2016",
    text: "Colégio Estadual Vinicius de Morais. Completed secondary education with focus on science and technology subjects.",
  },
];

export const experience: TimelineEntry[] = [
  {
    title: "Co-Founder & Software Engineer @ iOHub Digital",
    span: "November 2023 — Present",
    text: "Co-founded iOHub to develop custom software and provide technology consulting, focusing on international markets. Achieved 100% Job Success on UpWork in a short time.\n\nCoordinated teams with freelancers and interns, organizing workflows to ensure quality and timely deliveries.\n\n**Main Projects at iOHub:**\n\n**Bonchef (app.bonchef.com.br):** Our first product, a SaaS system for restaurant management. Developed the complete solution stack: API with NestJS and Prisma, control panel with Next.js and React (PWA), and Desktop app with Electron, using WebSockets for real-time order synchronization. Created integrated POS to centralize orders (counter, phone, WhatsApp) in a single Kanban; developed digital menu with QR Code, advanced item customization management, pizzeria module, and mini-CRM with ZIP code address search. Designed and implemented the platform's conversational AI agent, creating a RAG (Retrieval-Augmented Generation) flow with ChromaDB vector database, orchestrated via Docker Compose. Developed the service that vectorizes restaurant information using Google Gemini embeddings and created API endpoints for semantic search, allowing the chatbot to answer complex customer questions. Developed the Desktop app (Electron) that functions as a hub, connecting the restaurant's WhatsApp to the platform via official WhatsApp API and managing thermal printer queues. For the platform, created access control with RBAC, audit logs, email and push notifications (FCM), and guided onboarding tour. Ensured security with Argon2 hashing and rate limiting, and organized file storage with AWS S3.\n\n**Leadsy (leadsy.app):** B2B lead extraction platform. Worked on system development from scratch, creating the backend with NestJS for data extraction and management panel with Next.js.\n\n**MMarketplaces (mmarketplaces.com.br):** Technical consulting for a platform integrated with Bling ERP. My contribution was analyzing and optimizing critical API routes, implementing caching strategies to reduce query response times.\n\n**Okay Bears (okay-bears-beta.vercel.app):** NFT sales platform on Solana blockchain. Worked on frontend with Next.js, creating wallet interaction components and transaction processes.\n\n**Landing Pages:** Developed over 100 landing pages for international clients, using Next.js, React, and Vue.js to create optimized static pages, focusing on integration with different marketing services.",
  },
  {
    title: "Software Engineer @ Superior Digital",
    span: "June 2023 — December 2024",
    text: "**CertifyMyRent:** Property management platform to optimize rental processes and tenant screening. Led the start of full-stack development, creating PostgreSQL database modeling, API with NestJS and Prisma, and frontend with React.js. Implemented multi-tenant architecture with access control (RBAC) and integrated services like Stripe payments and Pandadoc document management. In infrastructure, used AWS EC2, S3, and configured automatic EBS and RDS provisioning in CI/CD.\n\n**Construction Help Finder:** Application connecting construction workers to project managers. Worked on system refactoring, fixing critical bugs and adding new features to make it more stable and attractive. Integrated in-app payment system with RevenueCat and other adjustments until App Store publication.\n\n**Cross Roads Gamification:** Gamification platform for restaurants, focused on improving customer interaction. Developed some of the system's main features, using Next.js to create the web version and AWS Lambda for serverless backend, ensuring an efficient and scalable solution.\n\n**L&Co Store:** Fashion-focused e-commerce application. Created the iOS version from the existing Android version and improved user experience by implementing push notifications with OneSignal. Also contributed to the application backend with Supabase.",
  },
  {
    title: "Software Engineer @ Kodde",
    span: "January 2022 — June 2023",
    text: "**Madalu:** Beauty service scheduling system. Participated from conception, gathering requirements, defining data model, and developing the backend foundation in NestJS, with Docker, PostgreSQL, and AWS S3 storage. Worked on employee and appointment management rules, handling schedule conflicts and ensuring atomic reservations to prevent overbooking. Documented APIs with Swagger and also contributed to frontend with React when necessary.\n\n**Kodde Time:** Internal time tracking and timesheet tool for teams. Worked on both backend and frontend, using Express.js and React to develop new features, fix bugs, and create unit tests with Jest.",
  },
  {
    title: "Intern @ Tata Consultancy Services (TCS)",
    span: "July 2021 — January 2022",
    text: "Started career with intensive training and client project work, consolidating software engineering fundamentals, version control, and best practices.\n\nCompleted modern web development and Object-Oriented Programming with Java tracks, in addition to enhancing JavaScript fundamentals; created REST APIs with Spring Boot following layer patterns, DTOs, and validations.\n\nAs a Trainee, worked in technical consulting for Roche, using OutSystems (low-code) to model processes, automate workflows, and deliver business solutions.",
  },
];
