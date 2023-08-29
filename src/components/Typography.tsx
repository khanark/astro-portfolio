// // Typography.tsx
// import React, { HTMLProps } from "react";

// interface TypographyProps
//   extends HTMLProps<
//     HTMLHeadingElement | HTMLParagraphElement | HTMLSpanElement
//   > {
//   variant: "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "span";
// }

// const Typography: React.FC<TypographyProps> = ({
//   variant,
//   className,
//   children,
//   ...rest
// }) => {
//   const classes = `text-${variant} ${className || ""}`;

//   if (variant.startsWith("h")) {
//     return React.createElement(
//       variant,
//       { className: classes, ...rest },
//       children,
//     );
//   } else if (variant === "p") {
//     return (
//       <p className={classes} {...rest}>
//         {children}
//       </p>
//     );
//   } else if (variant === "span") {
//     return (
//       <span className={classes} {...rest}>
//         {children}
//       </span>
//     );
//   }

//   return null;
// };

// export default Typography;
