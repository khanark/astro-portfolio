export const style = {
    textPrimary: "dark:text-gray-50 text-gray-900",
    textSecondary: "dark:text-gray-400 text-gray-700",
};

// !FIX: Fix the white theme colors, pick better variations
const layout = {
    maxWidth: "max-w-screen-xl mx-auto px-4",
    maxWidthSecondary: "max-w-6xl mx-auto px-4",
    section: {
        light: "py-16 md:py-24 bg-[#e0e6ed] dark:bg-[#414652]",
        dark: "py-16 md:py-24 bg-[#cbd5e1] dark:bg-[#292f3d]",
    },
};

export default layout;
