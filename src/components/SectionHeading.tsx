import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  eyebrow: string;
  heading: string;
  subheading?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  heading,
  subheading,
  align = 'left',
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("flex flex-col", align === 'center' ? 'items-center text-center' : 'items-start text-left', className)}>
      <span className="uppercase font-inter font-medium text-[12px] text-sage tracking-[0.1em] mb-3">
        {eyebrow}
      </span>
      <div className="w-[48px] h-[3px] bg-curry mb-3" aria-hidden="true" />
      <h2 className="font-playfair font-semibold text-[28px] md:text-[36px] text-forest mb-4 leading-tight">
        {heading}
      </h2>
      {subheading && (
        <p className="font-inter font-normal text-[16px] text-sage max-w-2xl">
          {subheading}
        </p>
      )}
    </div>
  );
}
