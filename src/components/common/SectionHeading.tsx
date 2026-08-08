import React from 'react';
import { cn } from '../../utils/cn';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  darkBg?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  align = 'center',
  darkBg = false,
  className,
}) => {
  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  };

  return (
    <div className={cn('flex flex-col max-w-3xl mb-12', alignmentClasses[align], className)}>
      {eyebrow && (
        <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 bg-amber-500/10 text-amber-600 dark:bg-amber-400/20 dark:text-amber-400 border border-amber-500/20">
          {eyebrow}
        </div>
      )}
      <h2
        className={cn(
          'text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight',
          darkBg ? 'text-white' : 'text-slate-900'
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-4 text-base sm:text-lg leading-relaxed font-normal',
            darkBg ? 'text-slate-300' : 'text-slate-600'
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
};
