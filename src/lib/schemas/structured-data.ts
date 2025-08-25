import type {
  ImageObject,
  Organization,
  Person,
  SoftwareApplication,
  Thing,
  WithContext,
} from "schema-dts";
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
    knowsAbout: seoData.skills,
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

  return schemas;
}
