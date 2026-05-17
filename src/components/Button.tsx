import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export type ButtonVariant = 'primary' | 'secondary' | 'urgent' | 'ghost' | 'textLink' | 'outline';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  href?: string;
  className?: string;
  children: React.ReactNode;
}

export default function Button({
  variant = 'primary',
  href,
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-inter font-medium transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none disabled:opacity-50 disabled:cursor-not-allowed";
  
  const heightStyles = variant === 'textLink' 
    ? "" 
    : "min-h-[48px] md:min-h-[52px] px-6 rounded-lg";

  const variants = {
    primary: "bg-gold text-forest hover:bg-[#E8C26A]",
    secondary: "bg-transparent text-curry border-[1.5px] border-curry hover:bg-mint",
    urgent: "bg-chilli text-white hover:bg-[#9E4A2A]",
    ghost: "bg-transparent text-banana border border-banana hover:bg-white/10",
    outline: "bg-transparent text-forest border border-border hover:bg-mint hover:border-curry hover:text-curry",
    textLink: "bg-transparent border-none text-curry hover:underline underline-offset-4 px-0",
  };

  const classes = cn(baseStyles, heightStyles, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
