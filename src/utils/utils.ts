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

type Frontmatter = {
    date: string;
};

type Post = {
    frontmatter: Frontmatter;
};

type FormatOptions = {
    limit?: number | undefined;
    formatDate?: boolean | undefined;
};

export function formarBlogPosts(posts: any[], formatOptios: any | undefined): any[] | undefined {
    let filteredPosts = undefined;
    const { limit = undefined, formatDate = true } = formatOptios;

    // Sort posts by date
    if (formatDate) {
        filteredPosts = posts.sort(
            (a: Post, b: Post) =>
                Number(new Date(b.frontmatter.date)) - Number(new Date(a.frontmatter.date))
        );
    }

    // if there is a limit, slice the array
    if (typeof limit === "number") {
        filteredPosts = filteredPosts?.slice(0, limit);
    }

    return filteredPosts;
}

export const observeElements = (htmlCollection: any, animation: string) => {
    console.log(htmlCollection);

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(animation);
                }
            });
        },
        { threshold: 0.5 }
    );

    [...htmlCollection].forEach((element) => observer.observe(element));
};
