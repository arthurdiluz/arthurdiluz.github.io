"use client";

import {
  education,
  experience,
  personalInfo,
  projects,
  services,
  socialLinks,
} from "@/lib/data";
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

type PageKey = "about" | "resume" | "portfolio";

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
        <aside
          className={`sidebar${sidebarOpen ? " active" : ""}`}
          data-sidebar
        >
          <div className="sidebar-info">
            <figure className="avatar-box">
              <img
                src={personalInfo.avatarPath}
                alt={personalInfo.name}
                width={80}
                className="rounded-2xl"
              />
            </figure>
            <div className="info-content">
              <h1 className="name">{personalInfo.name}</h1>
              <p className="title">{personalInfo.title}</p>
            </div>
            <button
              className="info_more-btn"
              data-sidebar-btn
              onClick={() => setSidebarOpen((v) => !v)}
            >
              <span>{"Show Contacts"}</span>
              <CaretDown size={18} weight="bold" />
            </button>
          </div>
          <div className="sidebar-info_more">
            <div className="separator" />
            <ul className="contacts-list">
              <li className="contact-item">
                <div className="icon-box">
                  <Envelope size={20} weight="fill" />
                </div>
                <div className="contact-info">
                  <p className="contact-title">{"Email"}</p>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="contact-link"
                    title={personalInfo.email}
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </li>
              <li className="contact-item">
                <div className="icon-box">
                  <Phone size={20} weight="fill" />
                </div>
                <div className="contact-info">
                  <p className="contact-title">{"Phone"}</p>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="contact-link"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </li>
              <li className="contact-item">
                <div className="icon-box">
                  <Calendar size={20} weight="fill" />
                </div>
                <div className="contact-info">
                  <p className="contact-title">{"Birthday"}</p>
                  <time dateTime={personalInfo.birthdayISO}>
                    {personalInfo.birthday}
                  </time>
                </div>
              </li>
              <li className="contact-item">
                <div className="icon-box">
                  <MapPin size={20} weight="fill" />
                </div>
                <div className="contact-info">
                  <p className="contact-title">{"Location"}</p>
                  <address>{personalInfo.location}</address>
                </div>
              </li>
            </ul>
            <div className="separator" />
            <ul className="social-list">
              {socialLinks.map((social) => {
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
                  <li className="social-item" key={social.name}>
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
              })}
            </ul>
          </div>
        </aside>

        <div className="main-content">
          <nav className="navbar">
            <ul className="navbar-list">
              {["about", "resume", "portfolio"].map((p) => (
                <li className="navbar-item" key={p}>
                  <button
                    className={`navbar-link${
                      activePage === p ? " active" : ""
                    }`}
                    data-nav-link
                    onClick={() => setActivePage(p as PageKey)}
                  >
                    {p.charAt(0).toUpperCase() + p.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <article
            className={`about${activePage === "about" ? " active" : ""}`}
            data-page="about"
          >
            <header>
              <h2 className="h2 article-title">{"About me"}</h2>
            </header>
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
            <section className="service">
              <h3 className="h3 service-title">{"Technical Skills"}</h3>
              <ul className="service-list">
                {services.map((s) => {
                  const getServiceIcon = (title: string) => {
                    switch (title) {
                      case "Programming Languages":
                        return <Code size={40} weight="fill" />;
                      case "Backend Development":
                        return <Database size={40} weight="fill" />;
                      case "Frontend & Mobile":
                        return <DeviceMobile size={40} weight="fill" />;
                      case "AI, Data & Vectors":
                        return <Brain size={40} weight="fill" />;
                      case "Database & Cache":
                        return <HardDrives size={40} weight="fill" />;
                      case "Cloud & DevOps":
                        return <Cloud size={40} weight="fill" />;
                      default:
                        return <Code size={40} weight="fill" />;
                    }
                  };

                  return (
                    <li className="service-item" key={s.title}>
                      <div className="service-icon-box">
                        <IconContext.Provider
                          value={{
                            color: "var(--highlight)",
                            weight: "fill",
                            mirrored: false,
                          }}
                        >
                          {getServiceIcon(s.title)}
                        </IconContext.Provider>
                      </div>
                      <div className="service-content-box">
                        <h4 className="h4 service-item-title">{s.title}</h4>
                        <p className="service-item-text">{s.text}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </section>
          </article>

          <article
            className={`resume${activePage === "resume" ? " active" : ""}`}
            data-page="resume"
          >
            <header>
              <h2 className="h2 article-title">{"Resume"}</h2>
            </header>
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
                    <Briefcase size={20} weight="fill" />
                  </IconContext.Provider>
                </div>
                <h3 className="h3">{"Experience"}</h3>
              </div>
              <ol className="timeline-list">
                {experience.map((e) => (
                  <li className="timeline-item" key={e.title}>
                    <h4 className="h4 timeline-item-title">{e.title}</h4>
                    <span>{e.span}</span>
                    <div
                      className="timeline-text"
                      dangerouslySetInnerHTML={{
                        __html: e.text
                          .replace(/\n/g, "<br />")
                          .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
                      }}
                    />
                  </li>
                ))}
              </ol>
            </section>
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
                    <GraduationCap size={20} weight="fill" />
                  </IconContext.Provider>
                </div>
                <h3 className="h3">{"Education"}</h3>
              </div>
              <ol className="timeline-list">
                {education.map((e) => (
                  <li className="timeline-item" key={e.title}>
                    <h4 className="h4 timeline-item-title">{e.title}</h4>
                    <span>{e.span}</span>
                    <div
                      className="timeline-text"
                      dangerouslySetInnerHTML={{
                        __html: e.text
                          .replace(/\n/g, "<br />")
                          .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
                      }}
                    />
                  </li>
                ))}
              </ol>
            </section>
          </article>

          <article
            className={`portfolio${
              activePage === "portfolio" ? " active" : ""
            }`}
            data-page="portfolio"
          >
            <header>
              <h2 className="h2 article-title">{"Portfolio"}</h2>
            </header>
            <section className="projects">
              <ul className="project-list">
                {projects.map((p) => {
                  const hasMultipleUrls = "urls" in p && p.urls !== undefined;

                  return (
                    <li className="project-item active" key={p.title}>
                      {hasMultipleUrls ? (
                        <div className="project-multiple-links">
                          <figure className="project-img">
                            <img
                              src={p.imagePath}
                              alt={p.title}
                              loading="lazy"
                            />
                            <div className="project-multiple-buttons">
                              {p.urls.map((link) => (
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
                          <h3 className="project-title">{p.title}</h3>
                          <div className="project-categories">
                            {p.categories.map((category) => (
                              <span key={category} className="category-tag">
                                {category}
                              </span>
                            ))}
                          </div>
                          <p className="project-description">{p.description}</p>
                        </div>
                      ) : (
                        <>
                          <a
                            href={p.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <figure className="project-img">
                              <div className="project-item-icon-box">
                                <Eye size={24} weight="fill" />
                              </div>
                              <img
                                src={p.imagePath}
                                alt={p.title}
                                loading="lazy"
                              />
                            </figure>
                            <h3 className="project-title">{p.title}</h3>
                          </a>
                          <div className="project-categories">
                            {p.categories.map((category) => (
                              <span key={category} className="category-tag">
                                {category}
                              </span>
                            ))}
                          </div>
                          <p className="project-description">{p.description}</p>
                        </>
                      )}
                    </li>
                  );
                })}
              </ul>
            </section>
          </article>
        </div>
      </main>
    </IconContext.Provider>
  );
}
