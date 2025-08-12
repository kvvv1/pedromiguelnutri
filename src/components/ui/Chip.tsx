import React, { ReactNode } from 'react';

interface ChipProps {
  children: ReactNode;
  className?: string;
}

const Chip: React.FC<ChipProps> = ({ children, className = '' }) => {
  const classes = `
    inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium
    bg-highlight-amber/20 text-highlight-amber border border-highlight-amber/30
    ${className}
  `.trim();

  return (
    <span className={classes}>
      {children}
    </span>
  );
};

export default Chip;