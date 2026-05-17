"use client";

import React, { useState } from 'react';

const CATEGORIES = [
  "Starters",
  "Main Course",
  "Biryani & Rice",
  "Drinks & Juices",
  "Desserts"
];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("Starters");

  return (
    <div className="flex flex-col w-full min-h-screen">
      
      {/* SECTION 1: CATEGORY TABS (Sticky) */}
      <div className="bg-milk sticky top-[72px] z-30 border-b border-border overflow-x-auto no-scrollbar shadow-sm">
        <div className="flex items-center gap-4 px-4 md:px-6 py-4 max-w-[1200px] mx-auto min-w-max">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-inter font-medium text-[14px] transition-colors duration-200 ${
                activeCategory === category
                  ? "bg-forest text-milk"
                  : "bg-mint text-forest hover:bg-[#D1E2D6]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area placeholder */}
      <main className="flex-grow w-full bg-milk py-12">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 text-center text-sage">
          <p>Select a category above. (More sections coming soon)</p>
        </div>
      </main>

    </div>
  );
}
