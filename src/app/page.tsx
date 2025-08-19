"use client";

import {
  education,
  experience,
  personalInfo,
  projects,
  services,
  socialLinks,
} from "@/lib/data";
import type {
  AvatarBoxProps,
  ContactItemProps,
  InfoContentProps,
  MainContentProps,
  NavbarItemProps,
  PageArticleProps,
  PageKey,
  ProjectCategoriesProps,
  ProjectItem,
  ProjectItemProps,
  ProjectTitleProps,
  ProjectWithMultipleLinksProps,
  ProjectWithSingleLinkProps,
  ServiceIconProps,
  ServiceItemProps,
  ShowContactsButtonProps,
  SidebarProps,
  SocialItemProps,
  TimelineEntry,
  TimelineIconProps,
  TimelineItemProps,
} from "@/lib/types";
import {
  Brain,
  Briefcase,
  Calendar,
  CaretDown,
  Cloud,
  Code,
  Database,
  DeviceMobile,
  Envelope,
  Eye,
  GithubLogo,
  GraduationCap,
  HardDrives,
  IconContext,
  InstagramLogo,
  LinkedinLogo,
  MapPin,
  Phone,
  TelegramLogo,
  WhatsappLogo,
} from "@phosphor-icons/react";
import type { JSX } from "react";
import { useState } from "react";

export default function Home(): JSX.Element {
  const [activePage, setActivePage] = useState<PageKey>("about");
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  return (
    <IconContext.Provider
      value={{
        color: "white",
        weight: "regular",
        mirrored: false,
      }}
    >
      <main>
        <Sidebar
          isOpen={sidebarOpen}
          onToggle={() => setSidebarOpen((v) => !v)}
        />

        <MainContent activePage={activePage} onPageChange={setActivePage} />
      </main>
    </IconContext.Provider>
  );
}

const Sidebar = ({ isOpen, onToggle }: SidebarProps): JSX.Element => (
  <aside className={`sidebar${isOpen ? " active" : ""}`} data-sidebar>
    <div className="sidebar-info">
      <AvatarBox
        src={personalInfo.avatarPath}
        alt={personalInfo.name}
        size={80}
      />
      <InfoContent name={personalInfo.name} title={personalInfo.title} />
      <ShowContactsButton _isOpen={isOpen} onClick={onToggle} />
    </div>
    <div className="sidebar-info_more">
      <div className="separator" />
      <ContactsList />
      <div className="separator" />
      <SocialList />
    </div>
  </aside>
);

const AvatarBox = ({ src, alt, size = 80 }: AvatarBoxProps): JSX.Element => (
  <figure className="avatar-box">
    <img src={src} alt={alt} width={size} className="rounded-2xl" />
  </figure>
);

const InfoContent = ({ name, title }: InfoContentProps): JSX.Element => (
  <div className="info-content">
    <h1 className="name">{name}</h1>
    <p className="title">{title}</p>
  </div>
);

const ShowContactsButton = ({
  _isOpen,
  onClick,
}: ShowContactsButtonProps): JSX.Element => (
  <button className="info_more-btn" data-sidebar-btn onClick={onClick}>
    <div className="flex items-center space-x-2">
      <CaretDown size={20} weight="bold" />
      <span className="text-xs font-bold">Show Contacts</span>
    </div>
  </button>
);

const ContactsList = (): JSX.Element => (
  <ul className="contacts-list">
    <ContactItem icon={<Envelope size={20} weight="fill" />} title="Email">
      <a
        href={`mailto:${personalInfo.email}`}
        className="contact-link"
        title={personalInfo.email}
      >
        {personalInfo.email}
      </a>
    </ContactItem>
    <ContactItem icon={<Phone size={20} weight="fill" />} title="Phone">
      <a href={`tel:${personalInfo.phone}`} className="contact-link">
        {personalInfo.phone}
      </a>
    </ContactItem>
    <ContactItem icon={<Calendar size={20} weight="fill" />} title="Birthday">
      <time dateTime={personalInfo.birthdayISO}>{personalInfo.birthday}</time>
    </ContactItem>
    <ContactItem icon={<MapPin size={20} weight="fill" />} title="Location">
      <address>{personalInfo.location}</address>
    </ContactItem>
  </ul>
);

const ContactItem = ({
  icon,
  title,
  children,
}: ContactItemProps): JSX.Element => (
  <li className="contact-item">
    <div className="icon-box">{icon}</div>
    <div className="contact-info">
      <p className="contact-title">{title}</p>
      {children}
    </div>
  </li>
);

const SocialList = (): JSX.Element => (
  <ul className="social-list">
    {socialLinks.map((social) => (
      <SocialItem key={social.name} social={social} />
    ))}
  </ul>
);

const SocialItem = ({ social }: SocialItemProps): JSX.Element => {
  const getSocialIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case "linkedin":
        return <LinkedinLogo size={24} weight="fill" />;
      case "github":
        return <GithubLogo size={24} weight="fill" />;
      case "instagram":
        return <InstagramLogo size={24} weight="fill" />;
      case "whatsapp":
        return <WhatsappLogo size={24} weight="fill" />;
      case "telegram":
        return <TelegramLogo size={24} weight="fill" />;
      default:
        return social.name.slice(0, 2).toUpperCase();
    }
  };

  return (
    <li className="social-item">
      <a
        href={social.url}
        className="social-link"
        aria-label={social.label}
        target="_blank"
        rel="noopener noreferrer"
      >
        {getSocialIcon(social.name)}
      </a>
    </li>
  );
};

const MainContent = ({
  activePage,
  onPageChange,
}: MainContentProps): JSX.Element => (
  <div className="main-content">
    <Navbar activePage={activePage} onPageChange={onPageChange} />

    <PageArticle pageKey="about" isActive={activePage === "about"}>
      <h2 className="h2 article-title">About me</h2>
      <section className="about-text">
        <p>
          {
            "I'm a Full-Stack Software Developer with a Bachelor's degree in Computer Science and over 4 years of experience transforming business challenges into effective technical solutions. My professional journey evolved from corporate projects to entrepreneurship, culminating in my co-founding of iOHub Digital."
          }
        </p>
        <p>
          {
            "Today, I lead the development of a SaaS product for the national market and am seeking a new role as a Software Developer. My goal is to continue going beyond the code, using technologies like Node.js, React, and TypeScript to build tools that drive businesses forward and solve real-world problems."
          }
        </p>
      </section>
      <TechnicalSkills />
    </PageArticle>

    <PageArticle pageKey="resume" isActive={activePage === "resume"}>
      <h2 className="h2 article-title">Resume</h2>
      <TimelineSection
        type="experience"
        title="Experience"
        entries={experience}
      />
      <TimelineSection type="education" title="Education" entries={education} />
    </PageArticle>

    <PageArticle pageKey="portfolio" isActive={activePage === "portfolio"}>
      <h2 className="h2 article-title">Portfolio</h2>
      <section className="projects">
        <ul className="project-list">
          {projects.map((project) => (
            <ProjectItem key={project.title} project={project} />
          ))}
        </ul>
      </section>
    </PageArticle>
  </div>
);

const Navbar = ({
  activePage,
  onPageChange,
}: MainContentProps): JSX.Element => (
  <nav className="navbar">
    <ul className="navbar-list">
      {(["about", "resume", "portfolio"] as PageKey[]).map((page) => (
        <NavbarItem
          key={page}
          page={page}
          isActive={activePage === page}
          onClick={onPageChange}
        />
      ))}
    </ul>
  </nav>
);

const NavbarItem = ({
  page,
  isActive,
  onClick,
}: NavbarItemProps): JSX.Element => (
  <li className="navbar-item">
    <button
      className={`navbar-link${isActive ? " active" : ""}`}
      data-nav-link
      onClick={() => onClick(page)}
    >
      {page.charAt(0).toUpperCase() + page.slice(1)}
    </button>
  </li>
);

const PageArticle = ({
  pageKey,
  isActive,
  children,
}: PageArticleProps): JSX.Element => (
  <article
    className={`${pageKey}${isActive ? " active" : ""}`}
    data-page={pageKey}
  >
    {children}
  </article>
);

const TechnicalSkills = (): JSX.Element => (
  <section className="service">
    <h3 className="h3 service-title">{"Technical Skills"}</h3>
    <ul className="service-list">
      {services.map((service) => (
        <ServiceItemComponent key={service.title} service={service} />
      ))}
    </ul>
  </section>
);

const ServiceItemComponent = ({ service }: ServiceItemProps): JSX.Element => (
  <li className="service-item">
    <div className="service-icon-box">
      <IconContext.Provider
        value={{
          color: "var(--highlight)",
          weight: "fill",
          mirrored: false,
        }}
      >
        <ServiceIcon title={service.title} />
      </IconContext.Provider>
    </div>
    <div className="service-content-box">
      <h4 className="h4 service-item-title">{service.title}</h4>
      <p className="service-item-text">{service.text}</p>
    </div>
  </li>
);

const ServiceIcon = ({
  title,
  size = 40,
  weight = "fill",
}: ServiceIconProps): JSX.Element => {
  const getServiceIcon = (title: string) => {
    switch (title) {
      case "Programming Languages":
        return <Code size={size} weight={weight} />;
      case "Backend Development":
        return <Database size={size} weight={weight} />;
      case "Frontend & Mobile":
        return <DeviceMobile size={size} weight={weight} />;
      case "AI, Data & Vectors":
        return <Brain size={size} weight={weight} />;
      case "Database & Cache":
        return <HardDrives size={size} weight={weight} />;
      case "Cloud & DevOps":
        return <Cloud size={size} weight={weight} />;
      default:
        return <Code size={size} weight={weight} />;
    }
  };

  return getServiceIcon(title);
};

const TimelineSection = ({
  type,
  title,
  entries,
}: {
  type: "experience" | "education";
  title: string;
  entries: TimelineEntry[];
}): JSX.Element => (
  <section className="timeline">
    <div className="title-wrapper">
      <div className="icon-box">
        <IconContext.Provider
          value={{
            color: "var(--highlight)",
            weight: "fill",
            mirrored: false,
          }}
        >
          <TimelineIcon type={type} />
        </IconContext.Provider>
      </div>
      <h3 className="h3">{title}</h3>
    </div>
    <ol className="timeline-list">
      {entries.map((entry) => (
        <TimelineItem key={entry.title} entry={entry} />
      ))}
    </ol>
  </section>
);

const TimelineIcon = ({
  type,
  size = 20,
  weight = "fill",
}: TimelineIconProps): JSX.Element => {
  switch (type) {
    case "experience":
      return <Briefcase size={size} weight={weight} />;
    case "education":
      return <GraduationCap size={size} weight={weight} />;
    default:
      return <Briefcase size={size} weight={weight} />;
  }
};

const TimelineItem = ({ entry }: TimelineItemProps): JSX.Element => (
  <li className="timeline-item">
    <h4 className="h4 timeline-item-title">{entry.title}</h4>
    <span>{entry.span}</span>
    <div
      className="timeline-text"
      dangerouslySetInnerHTML={{
        __html: entry.text
          .replace(/\n/g, "<br />")
          .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
      }}
    />
  </li>
);

const ProjectCategories = ({
  categories,
}: ProjectCategoriesProps): JSX.Element => (
  <div className="project-categories">
    {categories.map((category) => (
      <span key={category} className="category-tag">
        {category}
      </span>
    ))}
  </div>
);

const ProjectTitle = ({ title }: ProjectTitleProps): JSX.Element => (
  <h3 className="project-title">{title}</h3>
);

const ProjectWithMultipleLinks = ({
  project,
}: ProjectWithMultipleLinksProps): JSX.Element | null => {
  if (!("urls" in project)) return null;

  return (
    <div className="project-multiple-links">
      <figure className="project-img">
        <img src={project.imagePath} alt={project.title} loading="lazy" />
        <div className="project-multiple-buttons">
          {project.urls.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-repo-button"
            >
              <GithubLogo size={20} weight="fill" />
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </figure>
      <ProjectTitle title={project.title} />
      <ProjectCategories categories={project.categories} />
    </div>
  );
};

const ProjectWithSingleLink = ({
  project,
}: ProjectWithSingleLinkProps): JSX.Element | null => {
  if (!("url" in project)) return null;

  return (
    <>
      <a href={project.url} target="_blank" rel="noopener noreferrer">
        <figure className="project-img">
          <div className="project-item-icon-box">
            <Eye size={24} weight="fill" />
          </div>
          <img src={project.imagePath} alt={project.title} loading="lazy" />
        </figure>
        <ProjectTitle title={project.title} />
      </a>
      <ProjectCategories categories={project.categories} />
    </>
  );
};

const ProjectItem = ({ project }: ProjectItemProps): JSX.Element => {
  const hasMultipleUrls = "urls" in project && project.urls !== undefined;

  return (
    <li className="project-item active" key={project.title}>
      {hasMultipleUrls ? (
        <ProjectWithMultipleLinks project={project} />
      ) : (
        <ProjectWithSingleLink project={project} />
      )}
    </li>
  );
};
