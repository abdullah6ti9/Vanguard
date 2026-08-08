import React from 'react';
import { cn } from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  fullWidth = false,
  children,
  className,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none rounded-lg';

  const variants = {
    // Primary: High contrast Amber/Gold Accent button (primary CTA)
    primary: 'bg-amber-500 text-slate-950 hover:bg-amber-400 active:bg-amber-600 shadow-md hover:shadow-lg shadow-amber-500/20 border border-amber-400',
    // Secondary: Dark Charcoal surface with crisp contrast
    secondary: 'bg-slate-900 text-white hover:bg-slate-800 active:bg-slate-950 border border-slate-700 shadow-sm',
    // Accent: Pure vibrant construction safety amber or warm contrast
    accent: 'bg-amber-600 text-white hover:bg-amber-500 active:bg-amber-700 shadow-md shadow-amber-600/25',
    // Outline: Clean bordered button
    outline: 'bg-transparent text-slate-800 border-2 border-slate-300 hover:border-slate-900 hover:bg-slate-50',
    // Ghost: Text-only or light hover
    ghost: 'bg-transparent text-slate-700 hover:bg-slate-100 hover:text-slate-900',
    // Danger: For alert or emergency
    danger: 'bg-red-600 text-white hover:bg-red-500 active:bg-red-700',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-xs font-semibold gap-1.5',
    md: 'px-4 py-2.5 text-sm font-semibold gap-2',
    lg: 'px-6 py-3.5 text-base font-bold gap-2.5',
    xl: 'px-8 py-4 text-lg font-bold gap-3 tracking-wide',
  };

  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        fullWidth && 'w-full',
        className
      )}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </button>
  );
};
