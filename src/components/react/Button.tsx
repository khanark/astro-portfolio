import type React from 'react';

const Button = ({
    variant,
    children,
}: {
    variant?: string;
    children: React.ReactNode;
    classes?: string;
}) => {
    let defaultVarint = 'primary';
    variant === 'primary'
        ? 'bg-gradient-to-br from-cyan-600 to-cyan-900 text-white shadow-2xl shadow-cyan-800 transition-transform duration-300 hover:scale-105'
        : '';
    if (variant === 'primary') {
    }
    return (
        <a
            href="path/to/your/file.ext"
            download="filename.ext"
            className="mx-auto sm:mx-0 'inline-flex items-center gap-3 rounded-md bg-gradient-to-br from-cyan-600 to-cyan-900 px-6 py-3 text-white shadow-2xl shadow-cyan-800 transition-transform duration-300 hover:scale-105"
        >
            {children}
        </a>
    );
};

export default Button;
