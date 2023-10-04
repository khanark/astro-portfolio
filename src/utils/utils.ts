export const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const rect = element.getBoundingClientRect();
    window.scrollTo({
      top: rect.top + window.scrollY - 20,
      behavior: "smooth",
    });
  }
};

export const formatDate = (date: string) => {
  const d = new Date(date);
  return d.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};
