import {
  faMoon,
  faSun,
  faEllipsisH,
} from "@fortawesome/free-solid-svg-icons";

import type { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import YummiDesktop from "../assets/yummi_photos/yummiDesktop.png"
import YummiMobile from "../assets/yummi_photos/YummiMobile.png"

interface IconMap {
  [key: string]: IconDefinition;
}

type Icon = string;

export type SocialLink = {
  link: string;
  iconName: Icon;
};

export type NavLink = {
  id: string;
  text: string;
  iconName: Icon;
  toggleDropDownMenu?: () => void;
  translate?: (id: string) => void;
};

export interface Project {
  projectName: string;
  projectType: string[];
  projectPhotos?: ImageMetadata[];
  projectLink?: string;
  projectStack: string[];
}

type ProjectData = Project[];

interface PageContent {
  dropDownMenu: IconDefinition;
  socialLinks: SocialLink[];
  themeSwitchIcons: IconMap;
  navLinks: NavLink[];
}

export const pageContent: PageContent = {
  dropDownMenu: faEllipsisH,
  socialLinks: [
    {
      link: "https://www.linkedin.com/in/borislav-godumov-7245b61a2/",
      iconName: "fa-linkedin",
    },
    { link: "https://github.com/khanark", iconName: "fa-github" },
    {
      link: "https://www.facebook.com/BeeAyJee/",
      iconName: "fa-facebook",
    },
    { link: "https://www.instagram.com/alqahol1c/", iconName: "fa-instagram" },
  ],
  navLinks: [
    { iconName: "fa-laptop-code", id: "portfolio", text: "portfolio" },
    { iconName: "fa-graduation-cap", id: "experience", text: "experience" },
    { iconName: "fa-paper-plane", id: "contact", text: "contact" },
  ],

  themeSwitchIcons: {
    dark: faMoon,
    light: faSun,
  },
};

export const projectData: ProjectData = [
  {
    projectName: "YummiBG",
    projectType: ["cooking", "product"],
    projectLink: "https://yummibg.netlify.app/",
    projectStack: ["Angular", "TypeScript", "TailwindCSS"],
    projectPhotos: [YummiDesktop, YummiMobile],
  },
  {
    projectName: "Lavacoder",
    projectType: ["portfolio"],
    projectLink: "https://lavacoder.netlify.app/",
    projectStack: ["Astro", "React", "TypeScript", "TailwindCSS"],
  },
  {
    projectName: "DanceGuide",
    projectType: ["community", "dancing"],
    projectLink: "https://danceguide.netlify.app/",
    projectStack: ["React", "JavaScript", "CSS/SCSS"],
  },
];
