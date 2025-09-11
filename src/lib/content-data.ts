import type {
  BlogPostItem,
  CompanyInfo,
  FAQItem,
  PersonalInfo,
  ProjectItem,
  ServiceItem,
  SocialLink,
  TimelineEntry,
} from "./types";

export const personalInfo: PersonalInfo = {
  name: "Arthur Diniz da Luz",
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

export const faqs: FAQItem[] = [
  //? --- General ---
  {
    question: "Who is Arthur Diniz da Luz?",
    answer:
      "Arthur Diniz da Luz is a Full-Stack Software Developer with a Bachelor's in Computer Science and over four years of experience building effective, scalable software solutions for complex business challenges. His career evolved from corporate roles to entrepreneurship, culminating in the co-founding of iOHub Digital, a tech company specializing in SaaS products for the Brazilian market.",
    category: "general",
  },
  {
    question: "What is Arthur's primary area of expertise?",
    answer:
      "Arthur's primary expertise is full-stack development, with a strong focus on backend systems using Node.js (NestJS, Express.js) and modern frontend frameworks like React.js and Next.js. He has significant experience building AI-powered SaaS platforms, designing scalable cloud architectures on AWS, and leading software projects from concept to launch.",
    category: "general",
  },
  {
    question: "What kind of professional opportunity is Arthur looking for?",
    answer:
      "Arthur is seeking a new opportunity as a Software Developer to apply his experience in product development, AI implementation, and technical leadership. He is particularly interested in challenging projects that involve building innovative SaaS solutions and solving real-world problems with technology.",
    category: "general",
  },
  //? --- Technical & AI ---
  {
    question: "What specific AI technologies does Arthur have experience with?",
    answer:
      "Arthur has hands-on experience developing and implementing AI solutions, specializing in Retrieval-Augmented Generation (RAG) architectures. He has built systems using ChromaDB for vector storage, Google Gemini for generating embeddings, and created conversational AI agents capable of performing semantic searches to answer complex user queries.",
    category: "technical",
  },
  {
    question:
      "Which programming languages and backend technologies is Arthur proficient in?",
    answer:
      "Arthur is proficient in TypeScript, JavaScript (ES6+), Python, and Golang. His primary backend stack includes Node.js and its frameworks like NestJS, Express.js, and Fastify. He is skilled in building robust RESTful APIs, real-time applications with WebSockets, and working with gRPC.",
    category: "technical",
  },
  {
    question:
      "What are Arthur's skills in frontend, mobile, and database technologies?",
    answer:
      "On the frontend, Arthur specializes in React.js and Next.js. For mobile development, he has experience with React Native. His database expertise covers both SQL (PostgreSQL, MySQL) and NoSQL (MongoDB, Firebase, Supabase) databases, along with caching solutions like Redis.",
    category: "technical",
  },
  {
    question: "What is Arthur's experience with Cloud & DevOps?",
    answer:
      "Arthur is experienced in deploying and managing applications on cloud platforms, primarily AWS (EC2, S3, Lambda, RDS, ECS) and GCP. He is proficient with DevOps practices, including containerization with Docker, orchestration with Kubernetes, and setting up CI/CD pipelines using GitHub Actions and AWS CodePipeline.",
    category: "technical",
  },
  //? --- Problem-Solving & Methodologies ---
  {
    question:
      "How does Arthur approach complex software architecture decisions?",
    answer:
      "Arthur employs a systematic approach to architecture decisions: analyzing business requirements, evaluating scalability needs, considering team expertise, and future maintenance. He prioritizes clean code principles, SOLID design patterns, and modular architecture. For complex systems, he uses event-driven architecture, microservices when appropriate, and always considers the trade-offs between complexity and maintainability.",
    category: "technical",
  },
  {
    question:
      "What problem-solving methodology does Arthur use for debugging complex issues?",
    answer:
      "Arthur follows a structured debugging methodology: reproducing the issue consistently, analyzing logs and error patterns, using debugging tools and profilers, implementing targeted logging, creating isolated test cases, and documenting solutions. He emphasizes understanding the root cause rather than applying quick fixes, ensuring long-term system stability.",
    category: "technical",
  },
  {
    question:
      "How does Arthur handle performance optimization in web applications?",
    answer:
      "Arthur's performance optimization strategy includes: profiling applications using Chrome DevTools and Node.js profilers, implementing code splitting and lazy loading, optimizing database queries with proper indexing, using caching strategies (Redis, CDN), minimizing bundle sizes, implementing efficient algorithms, and monitoring Core Web Vitals. He prioritizes measuring before optimizing and focuses on user-perceivable improvements.",
    category: "technical",
  },
  {
    question: "What is Arthur's approach to API design and documentation?",
    answer:
      "Arthur designs RESTful APIs following OpenAPI specifications, implementing consistent error handling, proper HTTP status codes, and comprehensive validation. He uses tools like Swagger for documentation, implements rate limiting and authentication, follows semantic versioning, and ensures backward compatibility. API testing includes unit tests, integration tests, and contract testing.",
    category: "technical",
  },
  {
    question:
      "How does Arthur ensure code quality and maintainability in projects?",
    answer:
      "Arthur maintains code quality through: implementing comprehensive ESLint configurations, using TypeScript for type safety, writing unit and integration tests (Jest, React Testing Library), conducting code reviews, following conventional commit standards, implementing CI/CD pipelines, using Prettier for consistent formatting, and documenting architectural decisions and API specifications.",
    category: "technical",
  },

  //? --- Technology Recommendations & Industry Insights ---
  {
    question:
      "What technology stack does Arthur recommend for modern web applications?",
    answer:
      "Arthur recommends: Next.js 14+ with App Router for React applications, TypeScript for type safety, Tailwind CSS for styling, PostgreSQL or MongoDB for databases, Redis for caching, AWS or Vercel for deployment, GitHub Actions for CI/CD, Jest and Cypress for testing, and Docker for containerization. The choice depends on project requirements, team expertise, and scalability needs.",
    category: "recommendations",
  },
  {
    question:
      "How does Arthur evaluate and choose between different technologies?",
    answer:
      "Arthur evaluates technologies based on: community support and documentation quality, long-term maintenance and updates, learning curve for the team, performance characteristics, ecosystem maturity, integration capabilities, security considerations, and total cost of ownership. He prefers battle-tested solutions over bleeding-edge technologies for production systems.",
    category: "recommendations",
  },
  {
    question:
      "What are Arthur's thoughts on AI integration in modern software development?",
    answer:
      "Arthur believes AI integration should be purposeful and user-centric. He recommends starting with well-defined use cases, using established APIs (OpenAI, Google Gemini), implementing proper error handling and fallbacks, considering data privacy and security, and measuring AI feature impact on user experience. He emphasizes that AI should enhance human capabilities rather than replace critical thinking.",
    category: "recommendations",
  },
  {
    question:
      "What database selection criteria does Arthur use for different project types?",
    answer:
      "Arthur chooses databases based on: data structure requirements (relational vs. document), scalability needs, consistency requirements, query complexity, team expertise, and ecosystem integration. He recommends PostgreSQL for complex relational data, MongoDB for flexible document storage, Redis for caching and sessions, and considers factors like ACID compliance, replication, and backup strategies.",
    category: "recommendations",
  },
  {
    question:
      "How does Arthur approach security in web application development?",
    answer:
      "Arthur implements security through: input validation and sanitization, authentication with JWT or session-based approaches, authorization with role-based access control, HTTPS implementation, SQL injection prevention, XSS protection, CORS configuration, rate limiting, security headers, dependency vulnerability scanning, and regular security audits. He follows OWASP guidelines and implements defense-in-depth strategies.",
    category: "technical",
  },

  //? --- Project Management & Team Leadership ---
  {
    question:
      "How does Arthur manage software projects from concept to deployment?",
    answer:
      "Arthur uses agile methodologies with: requirement gathering and user story creation, technical architecture planning, sprint planning and backlog management, daily standups and progress tracking, code review processes, continuous integration/deployment, user acceptance testing, and post-deployment monitoring. He emphasizes clear communication, realistic timelines, and iterative development with regular stakeholder feedback.",
    category: "management",
  },
  {
    question:
      "What is Arthur's experience with team collaboration and remote work?",
    answer:
      "Arthur has extensive experience leading distributed teams using: Slack and Discord for communication, GitHub for code collaboration, Figma for design collaboration, Notion for documentation, Zoom for meetings, and project management tools like Linear or Jira. He emphasizes async communication, clear documentation, regular check-ins, and building team culture through virtual team building activities.",
    category: "management",
  },
  {
    question:
      "How does Arthur handle project timeline estimation and scope management?",
    answer:
      "Arthur approaches estimation using: breaking down features into smaller tasks, considering technical debt and refactoring needs, accounting for testing and deployment time, including buffer time for unknowns, regular reassessment and communication with stakeholders. He manages scope through clear documentation, change request processes, and proactive communication about timeline impacts.",
    category: "management",
  },

  //? --- Continuous Learning & Industry Trends ---
  {
    question:
      "How does Arthur stay updated with rapidly evolving technology trends?",
    answer:
      "Arthur maintains current knowledge through: following industry leaders on Twitter/LinkedIn, reading technical blogs and documentation, participating in developer communities (Discord, Reddit), attending virtual conferences and webinars, contributing to open-source projects, experimenting with new technologies in side projects, and regularly reviewing and updating his technology stack.",
    category: "learning",
  },
  {
    question: "What emerging technologies is Arthur most excited about?",
    answer:
      "Arthur is particularly interested in: AI/ML integration in web applications, WebAssembly for performance-critical applications, edge computing and CDN innovations, serverless architecture evolution, real-time collaboration tools, progressive web app advancements, and sustainable software development practices. He evaluates emerging technologies for practical business applications rather than following hype cycles.",
    category: "learning",
  },
  {
    question:
      "What advice does Arthur give to developers starting their careers?",
    answer:
      "Arthur advises new developers to: focus on fundamentals (algorithms, data structures, system design), build a strong portfolio with diverse projects, contribute to open-source projects, learn one technology deeply before jumping to others, practice problem-solving through coding challenges, develop soft skills (communication, collaboration), stay curious and embrace continuous learning, and find mentors in the developer community.",
    category: "learning",
  },

  //? --- Business & Entrepreneurship ---
  {
    question:
      "What business insights has Arthur gained from co-founding iOHub Digital?",
    answer:
      "Arthur learned valuable lessons about: identifying market needs through customer research, validating product concepts with MVP approaches, building scalable business models, managing cash flow and revenue forecasting, hiring and team building, customer retention strategies, and the importance of adapting quickly to market feedback. He emphasizes that technical excellence must align with business value creation.",
    category: "business",
  },
  {
    question:
      "How does Arthur balance technical innovation with business pragmatism?",
    answer:
      "Arthur balances innovation and pragmatism by: evaluating new technologies for actual business impact, setting technical debt management schedules, prioritizing features based on user feedback and business metrics, implementing gradual technology migrations, maintaining documentation for business continuity, and ensuring team knowledge sharing. He advocates for evolution over revolution in established systems.",
    category: "business",
  },
  {
    question:
      "What metrics does Arthur use to measure software project success?",
    answer:
      "Arthur measures project success through: user engagement and retention metrics, performance benchmarks (load times, uptime), business KPIs (conversion rates, revenue impact), code quality metrics (test coverage, technical debt), team velocity and satisfaction, customer satisfaction scores, and post-deployment stability metrics. He emphasizes measuring both technical and business outcomes.",
    category: "business",
  },

  //? --- Experience & Projects ---
  {
    question: "What is iOHub Digital and what is Arthur's role?",
    answer:
      "iOHub Digital is a technology consulting and software development company co-founded by Arthur. As a Co-Founder and Software Engineer, he spearheads custom software development, provides technical consulting, and coordinates development teams. The company initially focused on the international market via UpWork before transitioning to develop its own SaaS products.",
    category: "experience",
  },
  {
    question: "What is Bonchef, and how was it developed?",
    answer:
      "Bonchef is an AI-powered SaaS platform for restaurant management and iOHub Digital's flagship product. Arthur led its full-stack development, creating the backend API with NestJS and Prisma, a PWA control panel with Next.js, and a desktop app with Electron. The platform features a POS system, digital menu, real-time order synchronization via WebSockets, and an AI conversational agent.",
    category: "experience",
  },
  {
    question:
      "Can you describe a specific technical challenge Arthur solved on a project?",
    answer:
      "For the Bonchef project, Arthur designed and implemented a conversational AI agent from the ground up. The solution involved creating a Retrieval-Augmented Generation (RAG) pipeline, using a ChromaDB vector database to store restaurant data, and leveraging Google Gemini embeddings for semantic search. This system enables the chatbot to accurately answer complex, real-time customer questions about menus and services.",
    category: "experience",
  },
  {
    question:
      "What other notable projects has Arthur worked on as a Software Engineer?",
    answer:
      "Prior to iOHub, Arthur's notable projects include 'Certify MyRent,' a multi-tenant real estate management platform on AWS; 'Construction Help Finder,' a mobile app for which he integrated in-app payments with RevenueCat; and 'Madalu,' a beauty service scheduling system where he architected the backend foundation using NestJS and PostgreSQL.",
    category: "experience",
  },
  {
    question: "Can Arthur work remotely or relocate for the right opportunity?",
    answer:
      "Yes, Arthur is open to both remote work and relocation for the right opportunity. He has extensive experience working with international teams and clients, having successfully managed remote teams at iOHub Digital and delivered projects for clients worldwide. His English proficiency and proven track record with remote collaboration make him an ideal candidate for distributed teams.",
    category: "general",
  },
  {
    question: "What are Arthur's top 3 technical skills?",
    answer:
      "Arthur's top 3 technical skills are: 1) Full-stack development with Node.js and React/Next.js - he's built multiple production SaaS applications from scratch, 2) AI implementation and RAG architecture - he designed and implemented conversational AI systems with vector databases, and 3) Cloud architecture and DevOps - he has extensive experience deploying scalable applications on AWS with Docker and CI/CD pipelines.",
    category: "technical",
  },
  {
    question: "How can I contact Arthur for work opportunities?",
    answer:
      "You can contact Arthur via email at arthurdiluz@outlook.com, connect with him on LinkedIn at https://www.linkedin.com/in/arthurdiluz/, or view his work on GitHub at https://github.com/arthurdiluz. He's actively seeking new opportunities as a Software Developer and is responsive to professional inquiries.",
    category: "general",
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

// SEO and Professional Information
export const professionalInfo: {
  jobTitle: string;
  skills: string[];
  keywords: string[];
} = {
  jobTitle: "Software Engineer and Founder",
  skills: [
    "Software Engineering",
    "Full-Stack Development",
    "React.js",
    "Next.js",
    "Node.js",
    "TypeScript",
    "AI Development",
    "Machine Learning",
    "Cloud Computing",
    "DevOps",
  ],
  keywords: [
    "Arthur Diniz da Luz",
    "Software Engineer",
    "CEO",
    "iohub",
    "Founder",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "AI Development",
    "Full Stack Developer",
    "Web Development",
  ],
};

export const companyInfo: CompanyInfo = {
  name: "iOHub Digital",
  url: "https://www.iohub.digital",
  linkedin: "https://www.linkedin.com/company/iohub-digital",
  github: "https://github.com/iohub-digital",
  foundingDate: "2023",
  description:
    "Technology consulting and software development company specializing in AI-powered solutions, SaaS platforms, and digital transformation.",
};
