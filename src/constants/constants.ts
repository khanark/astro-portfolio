import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faMoon,
  faSun,
  faDownload,
  faGraduationCap,
  faLaptopCode,
  faPaperPlane,
  faEllipsisH,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface IconMap {
  [key: string]: IconDefinition;
}

export type SocialLink = {
  link: string;
  icon: IconDefinition;
};

export type NavLink = {
  id: string;
  text: string;
  icon: IconDefinition;
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
  arrowRight: IconDefinition;
  socialLinks: SocialLink[];
  themeSwitchIcons: IconMap;
  utilityIcons: IconMap;
  navLinks: NavLink[];
}

export const pageContent: PageContent = {
  dropDownMenu: faEllipsisH,
  arrowRight: faArrowRight,
  socialLinks: [
    {
      link: "https://www.linkedin.com/in/borislav-godumov-7245b61a2/",
      icon: faLinkedin,
    },
    { link: "https://github.com/khanark", icon: faGithub },
    { link: "https://www.facebook.com/BeeAyJee/", icon: faFacebook },
    { link: "https://www.instagram.com/alqahol1c/", icon: faInstagram },
  ],
  navLinks: [
    { icon: faLaptopCode, id: "portfolio", text: "portfolio" },
    { icon: faGraduationCap, id: "experience", text: "experience" },
    { icon: faPaperPlane, id: "contact", text: "contact" },
  ],
  utilityIcons: {
    download: faDownload,
  },
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
