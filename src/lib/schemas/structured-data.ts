import type {
  BreadcrumbList,
  FAQPage,
  ImageObject,
  Organization,
  Person,
  SoftwareApplication,
  SoftwareSourceCode,
  Thing,
  WithContext,
} from "schema-dts";
import { faqs } from "../content-data";
import { seoData } from "../seo-data";

export function generateStructuredData(): WithContext<Thing>[] {
  const schemas: WithContext<Thing>[] = [];

  const personSchema: WithContext<Person> = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: seoData.name,
    url: seoData.siteUrl,
    image: seoData.fullProfileImageUrl,
    sameAs: seoData.socialLinks,
    jobTitle: seoData.jobTitle,
    worksFor: {
      "@type": "Organization",
      name: seoData.company.name,
      url: seoData.company.url,
      sameAs: [seoData.company.linkedin, seoData.company.github],
      founder: { "@type": "Person", name: seoData.name },
    },
    email: seoData.email,
    birthDate: seoData.birthDate,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Campinas",
      addressRegion: "SP",
      addressCountry: "BR",
    },
    homeLocation: {
      "@type": "Place",
      name: "Campinas, São Paulo, Brasil",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Campinas",
        addressRegion: "São Paulo",
        addressCountry: "Brazil",
        postalCode: "13000-000",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "-22.9099384",
        longitude: "-47.0626332",
      },
    },
    knowsAbout: seoData.skills,
    knowsLanguage: [
      {
        "@type": "Language",
        name: "Portuguese",
        alternateName: "pt-BR",
      },
      {
        "@type": "Language",
        name: "English",
        alternateName: "en-US",
      },
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        name: "Bachelor's Degree in Computer Science",
        credentialCategory: "degree",
        educationalLevel: "Bachelor's",
        recognizedBy: {
          "@type": "EducationalOrganization",
          name: "Universidade Estadual do Norte do Paraná (UENP)",
        },
        dateCreated: "2023",
      },
    ],
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Full-Stack Development",
          description:
            "End-to-end web application development using modern technologies",
        },
        category: "Software Development",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Development",
          description: "Custom AI solutions and chatbot development",
        },
        category: "Artificial Intelligence",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Cloud Architecture",
          description:
            "Scalable cloud infrastructure design and implementation",
        },
        category: "Cloud Computing",
      },
    ],
    hasOccupation: { "@type": "Occupation", name: "Software Engineer" },
  };
  schemas.push(personSchema);

  const organizationSchema: WithContext<Organization> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: seoData.company.name,
    url: seoData.company.url,
    logo: seoData.logoUrl,
    description: seoData.company.description,
    sameAs: [seoData.company.linkedin, seoData.company.github],
    founder: { "@type": "Person", name: seoData.name },
    foundingDate: seoData.company.foundingDate,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Campinas",
      addressRegion: "SP",
      addressCountry: "BR",
    },
  };
  schemas.push(organizationSchema);

  const bonchefProject = seoData.featuredProjects.find(
    (p) => p.title === "Bonchef"
  );
  if (bonchefProject) {
    const softwareSchema: WithContext<SoftwareApplication> = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: bonchefProject.title,
      description: bonchefProject.description,
      url: bonchefProject.url ?? "https://app.bonchef.com.br",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web, iOS, Android",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "BRL",
        priceValidUntil: "2025-12-31",
        availability: "https://schema.org/InStock",
        validFrom: "2023-01-01",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "1000",
      },
      author: { "@type": "Organization", name: seoData.company.name },
    };
    schemas.push(softwareSchema);
  }

  const imageSchema: WithContext<ImageObject> = {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    name: `${seoData.name} Profile Picture`,
    caption: `Professional headshot of ${seoData.name}, Software Engineer and Co-founder of iOHub Digital`,
    url: seoData.fullProfileImageUrl,
    contentUrl: seoData.fullProfileImageUrl,
    description: `Professional portrait of ${seoData.name} showcasing expertise in software engineering, AI development, and entrepreneurship`,
    about: { "@type": "Person", name: seoData.name },
    creator: { "@type": "Person", name: seoData.name },
  };
  schemas.push(imageSchema);

  const faqSchema: WithContext<FAQPage> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
  schemas.push(faqSchema);

  const breadcrumbSchema: WithContext<BreadcrumbList> = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: seoData.siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: `${seoData.siteUrl}#about`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Resume",
        item: `${seoData.siteUrl}#resume`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Portfolio",
        item: `${seoData.siteUrl}#portfolio`,
      },
    ],
  };
  schemas.push(breadcrumbSchema);

  const githubProjects = [
    {
      name: "TourLibras API",
      description: "REST API for accessibility tourism application in Brazil",
      codeRepository: "https://github.com/arthurdiluz/tourlibras-api",
      programmingLanguage: "TypeScript",
      runtimePlatform: "Node.js",
    },
    {
      name: "TourLibras App",
      description: "React Native mobile app for accessibility tourism",
      codeRepository: "https://github.com/arthurdiluz/tourlibras-app",
      programmingLanguage: "TypeScript",
      runtimePlatform: "React Native",
    },
    {
      name: "Be The Hero API",
      description: "API for connecting NGOs with donors and volunteers",
      codeRepository: "https://github.com/arthurdiluz/bethehero-api",
      programmingLanguage: "JavaScript",
      runtimePlatform: "Node.js",
    },
    {
      name: "2048 Game",
      description: "Web-based implementation of the popular 2048 puzzle game",
      codeRepository: "https://github.com/arthurdiluz/2048-game",
      programmingLanguage: "JavaScript",
      runtimePlatform: "Web Browser",
    },
  ];

  githubProjects.forEach((project) => {
    const sourceCodeSchema: WithContext<SoftwareSourceCode> = {
      "@context": "https://schema.org",
      "@type": "SoftwareSourceCode",
      name: project.name,
      description: project.description,
      codeRepository: project.codeRepository,
      programmingLanguage: project.programmingLanguage,
      runtimePlatform: project.runtimePlatform,
      author: { "@type": "Person", name: seoData.name },
      creator: { "@type": "Person", name: seoData.name },
      copyrightHolder: { "@type": "Person", name: seoData.name },
      license: "MIT",
      version: "1.0.0",
      keywords: [
        "software development",
        "open source",
        project.programmingLanguage.toLowerCase(),
      ],
    };
    schemas.push(sourceCodeSchema);
  });

  return schemas;
}
