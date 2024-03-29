import { style } from "../../constants/style";

const Title = ({ children, classes }: { children: React.ReactNode; classes: string }) => {
    return (
        <h1
            className={`before font-Poppins relative mb-8 bg-gradient-to-br from-cyan-900 to-cyan-600 bg-clip-text pb-8 text-5xl font-extrabold text-transparent before:absolute before:bottom-0 before:h-2 before:w-20 text-center sm:text-start before:rounded-full before:bg-cyan-600 dark:from-cyan-600 dark:to-cyan-300 md:text-8xl before:left-1/2 before:-translate-x-1/2 sm:before:left-0 sm:before:translate-x-0 ${classes}`}
        >
            {children}
        </h1>
    );
};

const PrimaryHeading = ({ children, classes }: { classes?: string; children: React.ReactNode }) => {
    return (
        <h2 className={`${style.textPrimary} font-semibold text-3xl mb-8 ${classes}`}>
            {children}
        </h2>
    );
};

const SecondaryHeading = ({
    children,
    classes,
}: {
    children: React.ReactNode;
    classes: string;
}) => {
    return <h3 className={`${style.textPrimary} text-2xl mb-8 ${classes}`}>{children}</h3>;
};

const Paragraph = ({ children, classes }: { classes?: string; children: React.ReactNode }) => {
    return <p className={`${style.textSecondary} mb-8 ${classes}`}>{children}</p>;
};

const SectionHeading = ({ children, classes }: { classes?: string; children: React.ReactNode }) => {
    return (
        <h5
            className={`${style.textSecondary} font-FiraCode block mb-4 text-base font-bold tracking-widest ${classes}`}
        >
            {children}
        </h5>
    );
};

type TypographyVariant = "h1" | "h2" | "h3" | "p" | "span";

const Typography = ({
    variant = "p",
    children,
    className = "",
}: {
    className?: string;
    variant?: TypographyVariant;
    children: React.ReactNode;
}) => {
    const components = {
        h1: Title,
        h2: PrimaryHeading,
        h3: SecondaryHeading,
        p: Paragraph,
        span: SectionHeading,
    };

    const Component = components[variant] || Paragraph;

    return <Component classes={className}>{children}</Component>;
};

export default Typography;
