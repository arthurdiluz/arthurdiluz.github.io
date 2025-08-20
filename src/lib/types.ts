import type { ReactNode } from "react";

export interface ServiceItem {
  title: string;
  text: string;
  iconPath: string;
}

export interface TestimonialItem {
  name: string;
  avatarPath: string;
  text: string;
}

interface BaseProjectItem {
  title: string;
  categories: string[];
  imagePath: string;
  description: string;
}

interface SingleUrlProject extends BaseProjectItem {
  url: string;
  urls?: never;
}

interface MultipleUrlsProject extends BaseProjectItem {
  url?: never;
  urls: {
    label: string;
    url: string;
  }[];
}

export type ProjectItem = SingleUrlProject | MultipleUrlsProject;

export interface BlogPostItem {
  title: string;
  imagePath: string;
  category: string;
  dateISO: string;
  dateLabel: string;
  excerpt: string;
}

export interface TimelineEntry {
  title: string;
  span: string;
  text: string;
}

export interface SkillItem {
  label: string;
  value: number;
}

export interface PersonalInfo {
  name: string;
  avatarPath: string;
  email: string;
  phone: string;
  birthday: string;
  birthdayISO: string;
  location: string;
}

export interface SocialLink {
  name: string;
  url: string;
  label: string;
}

export type PageKey = "about" | "resume" | "portfolio";

export interface HomePageProps {
  _placeholder?: never;
}

export interface HomePageState {
  activePage: PageKey;
  sidebarOpen: boolean;
}

export interface ProjectCategoriesProps {
  categories: string[];
}

export interface ProjectTitleProps {
  title: string;
}

export interface ProjectWithMultipleLinksProps {
  project: ProjectItem;
}

export interface ProjectWithSingleLinkProps {
  project: ProjectItem;
}

export interface ProjectItemProps {
  project: ProjectItem;
}

export interface ServiceItemProps {
  service: ServiceItem;
}

export interface TimelineItemProps {
  entry: TimelineEntry;
}

export interface ContactItemProps {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}

export interface SocialItemProps {
  social: SocialLink;
}

export interface NavbarItemProps {
  page: PageKey;
  isActive: boolean;
  onClick: (page: PageKey) => void;
}

export interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export interface AvatarBoxProps {
  src: string;
  alt: string;
  size?: number;
}

export interface InfoContentProps {
  name: string;
}

export interface ShowContactsButtonProps {
  _isOpen: boolean;
  onClick: () => void;
}

export interface MainContentProps {
  activePage: PageKey;
  onPageChange: (page: PageKey) => void;
}

export interface PageArticleProps {
  pageKey: PageKey;
  isActive: boolean;
  children: ReactNode;
}

export interface ContentSectionProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export interface ServiceIconProps {
  title: string;
  size?: number;
  weight?: "fill" | "regular" | "bold";
}

export interface TimelineIconProps {
  type: "experience" | "education";
  size?: number;
  weight?: "fill" | "regular" | "bold";
}
