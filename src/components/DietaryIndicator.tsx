import React from 'react';
import { cn } from '@/lib/utils';

interface DietaryIndicatorProps {
  type: 'veg' | 'nonveg';
  className?: string;
}

export default function DietaryIndicator({ type, className }: DietaryIndicatorProps) {
  const isVeg = type === 'veg';
  
  return (
    <div
      aria-label={isVeg ? 'Vegetarian' : 'Non-vegetarian'}
      title={isVeg ? 'Vegetarian' : 'Non-vegetarian'}
      className={cn(
        "flex items-center justify-center w-[14px] h-[14px] border-[1.5px]",
        isVeg ? "border-veg" : "border-nonveg",
        className
      )}
    >
      <div 
        className={cn(
          "w-[6px] h-[6px] rounded-full",
          isVeg ? "bg-veg" : "bg-nonveg"
        )} 
      />
    </div>
  );
}
