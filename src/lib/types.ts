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
  title: string;
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
