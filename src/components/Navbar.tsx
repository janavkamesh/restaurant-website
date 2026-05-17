"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { RESTAURANT_DATA } from '@/lib/constants';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Menu', href: '/menu' },
    { name: 'Our Story', href: '/story' },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200 bg-milk",
        isScrolled 
          ? "border-b border-curry/20 shadow-[0_4px_20px_-10px_rgba(26,46,30,0.1)]" 
          : "border-b border-border"
      )}
    >
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 h-[72px] flex items-center justify-between">
        
        {/* Logo */}
        <Link 
          href="/" 
          className="font-playfair font-semibold text-[20px] md:text-[24px] text-forest z-50"
        >
          {RESTAURANT_DATA.name}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-inter font-medium text-[15px] text-sage hover:text-forest transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4 z-50">
          <Link
            href="/reserve"
            className="bg-forest text-gold font-inter font-medium text-[14px] px-5 py-2.5 rounded-lg hover:bg-curry transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none"
          >
            Reserve
          </Link>
          
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-forest p-1 focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none rounded"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        ref={menuRef}
        className={cn(
          "absolute top-[72px] left-0 w-full bg-milk border-b border-border transition-all duration-300 overflow-hidden md:hidden shadow-lg",
          isMobileMenuOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0 border-transparent"
        )}
      >
        <nav className="flex flex-col p-4 gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-inter font-medium text-[16px] text-sage hover:text-forest p-2 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
