import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover3D?: boolean;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hover3D = false 
}) => {
  const baseClasses = `
    bg-white dark:bg-gray-800 rounded-2xl shadow-xs border border-gray-100 dark:border-gray-700
    transition-all duration-300
  `;

  const hover3DClasses = hover3D ? `
    hover:shadow-md hover:-translate-y-1 hover:scale-[1.02]
    transform-gpu perspective-1000
  ` : '';

  const classes = `${baseClasses} ${hover3DClasses} p-6 ${className}`.trim();

  return (
    <div className={classes}>
      {children}
    </div>
  );
};

export default Card;