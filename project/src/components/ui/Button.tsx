import React, { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';

interface BaseButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
}

interface ButtonAsButton extends BaseButtonProps, ButtonHTMLAttributes<HTMLButtonElement> {
  href?: never;
  target?: never;
  rel?: never;
}

interface ButtonAsAnchor extends BaseButtonProps, AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  href,
  ...props
}) => {
  const baseClasses = `
    inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-blue
    transform hover:scale-105 active:scale-95
    disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
  `;

  const variantClasses = {
    primary: `
      bg-primary-blue hover:bg-primary-blue/90 text-white shadow-sm hover:shadow-md
      border border-primary-blue hover:border-primary-blue/90
    `,
    secondary: `
      bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 
      text-primary-dark dark:text-gray-100 shadow-sm hover:shadow-md
      border border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500
    `,
    outline: `
      bg-transparent hover:bg-primary-blue/5 dark:hover:bg-primary-blue/10
      text-primary-blue border border-primary-blue hover:border-primary-blue/80
    `
  };

  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2.5 text-base',
    lg: 'px-6 py-3 text-lg'
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button
      className={classes}
      disabled={disabled}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
};

export default Button;