export const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        const rect = element.getBoundingClientRect();
        window.scrollTo({
            top: rect.top + window.scrollY - 100,
            behavior: "smooth",
        });
    }
};
