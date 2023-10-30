import { faMoon, faSun, faEllipsisH } from "@fortawesome/free-solid-svg-icons";

import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface IconMap {
    [key: string]: IconDefinition;
}

export type SocialLink = {
    link: string;
    iconName: string;
};

export type NavLink = {
    id?: string;
    text?: string;
    iconName: string;
    toggleDropDownMenu?: () => void;
    translate?: (id: string) => void;
    type?: string;
    path?: string;
} & ({ type: string; path: string } | { type?: never; path?: string });

export interface Project {
    projectName: string;
    projectType: string[];
    projectPhotos?: string[];
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
        projectPhotos: [
            "https://ik.imagekit.io/9kvf2hm8f/yummibg%20website%20images/tr:w-300/screencapture-yummibg-netlify-app-2023-10-16-18_40_13.jpg?updatedAt=1697474464148",
            "https://ik.imagekit.io/9kvf2hm8f/yummibg%20website%20images/tr:w-300/screencapture-yummibg-netlify-app-2023-10-16-18_40_31.jpg?updatedAt=1697474461908",
        ],
    },
    {
        projectName: "Lavacoder",
        projectType: ["portfolio", "blog"],
        projectLink: "https://lavacoder.netlify.app/",
        projectStack: ["Astro", "React", "TypeScript", "TailwindCSS"],
        projectPhotos: [
            "https://ik.imagekit.io/9kvf2hm8f/lavacoder%20website%20images/tr:w-300/screencapture-lavacoderv2-netlify-app-2023-10-16-18_13_32.jpg",
            "https://ik.imagekit.io/9kvf2hm8f/lavacoder%20website%20images/tr:w-300/screencapture-lavacoderv2-netlify-app-2023-10-16-18_14_42.jpg?updatedAt=1697473171385",
        ],
    },
    {
        projectName: "DanceGuide",
        projectType: ["community", "dancing"],
        projectLink: "https://danceguide.netlify.app/",
        projectStack: ["React", "JavaScript", "CSS/SCSS"],
        projectPhotos: [
            "https://ik.imagekit.io/9kvf2hm8f/dance%20guide%20website%20images/tr:w-800/screencapture-danceguide-netlify-app-2023-10-16-18_43_42.jpg?updatedAt=1697474701480",
            "https://ik.imagekit.io/9kvf2hm8f/dance%20guide%20website%20images/tr:w-800/screencapture-danceguide-netlify-app-catalog-2023-10-16-18_44_17.jpg?updatedAt=1697474700747",
        ], // TODO: fix the desktop photo
    },
];
