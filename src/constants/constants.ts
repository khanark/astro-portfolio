import {
  faMoon,
  faSun,
  faGraduationCap,
  faLaptopCode,
  faPaperPlane,
  faEllipsisH,
} from "@fortawesome/free-solid-svg-icons";

import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

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
};

export interface Project {
  projectName: string;
  projectType: string[];
  projectPhoto?: string;
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
