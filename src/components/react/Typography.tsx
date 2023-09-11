import { style } from '../../constants/style';

const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1 className="before relative mb-8 bg-gradient-to-br from-cyan-900 to-cyan-600 bg-clip-text pb-8  text-5xl font-bold text-transparent before:absolute before:bottom-0 before:h-2 before:w-20 text-center sm:text-start before:rounded-full before:bg-cyan-600 dark:from-cyan-600 dark:to-cyan-300 md:text-8xl before:left-1/2 before:-translate-x-1/2 sm:before:left-0 sm:before:translate-x-0">
      {children}
    </h1>
  );
};

const PrimaryHeading = ({
  children,
  classes,
}: {
  classes?: string;
  children: React.ReactNode;
}) => {
  return (
    <h2 className={`${style.textPrimary} text-3xl mb-8 ${classes}`}>
      {children}
    </h2>
  );
};

const SecondaryHeading = ({ children }: { children: React.ReactNode }) => {
  return <h3 className={`${style.textPrimary} text-2xl mb-8`}>{children}</h3>;
};

const Paragraph = ({
  children,
  classes,
}: {
  classes?: string;
  children: React.ReactNode;
}) => {
  return <p className={`${style.textSecondary} mb-8 ${classes}`}>{children}</p>;
};

const SectionHeading = ({ children }: { children: React.ReactNode }) => {
  return (
    <span
      className={`${style.textSecondary} font-FiraCode block mb-4 text-base font-bold tracking-widest`}
    >
      {children}
    </span>
  );
};

type TypographyVariant = 'h1' | 'h2' | 'h3' | 'p' | 'span';

const Typography = ({
  variant,
  children,
  className,
}: {
  className?: string;
  variant?: TypographyVariant;
  children: React.ReactNode;
}) => {
  switch (variant) {
    case 'h1':
      return <Title>{children}</Title>;
    case 'h2':
      return <PrimaryHeading classes={className}>{children}</PrimaryHeading>;
    case 'h3':
      return <SecondaryHeading>{children}</SecondaryHeading>;
    case 'p':
      return <Paragraph classes={className}>{children}</Paragraph>;
    case 'span':
      return <SectionHeading>{children}</SectionHeading>;
    default:
      return <Paragraph>{children}</Paragraph>;
  }
};

export default Typography;
