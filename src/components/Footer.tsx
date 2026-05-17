import React from 'react';
import Link from 'next/link';
import { RESTAURANT_DATA } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-forest border-t border-curry pb-[calc(48px+64px+env(safe-area-inset-bottom))] md:pb-12 pt-12">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 flex flex-col gap-8">
        
        {/* Row 1 */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <Link href="/" className="font-playfair font-semibold text-[24px] text-banana">
            {RESTAURANT_DATA.name}
          </Link>
          <Link 
            href="/reserve"
            className="bg-gold text-forest font-inter font-medium text-[16px] px-6 py-3 rounded-lg hover:bg-[#E8C26A] transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none"
          >
            Reserve your table
          </Link>
        </div>

        {/* Row 2 */}
        <div className="flex flex-wrap gap-x-6 gap-y-4 font-inter font-normal text-[16px] text-sage-light">
          <p>{RESTAURANT_DATA.location.addressLine1}, {RESTAURANT_DATA.location.addressLine2}</p>
          <a href={RESTAURANT_DATA.contact.phoneTelLink} className="hover:text-banana transition-colors">
            {RESTAURANT_DATA.contact.phoneDisplay}
          </a>
          <a href={`mailto:${RESTAURANT_DATA.contact.email}`} className="hover:text-banana transition-colors">
            {RESTAURANT_DATA.contact.email}
          </a>
          <a 
            href={RESTAURANT_DATA.social.instagramUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-banana transition-colors"
          >
            Instagram
          </a>
        </div>

        {/* Row 3 */}
        <div className="font-inter font-normal text-[16px] text-sage-light/60 pt-4 md:pt-0">
          <p>© {RESTAURANT_DATA.legal.copyrightYear} {RESTAURANT_DATA.legal.legalName}. All rights reserved.</p>
          <p className="mt-1">FSSAI License: {RESTAURANT_DATA.legal.fssaiLicense}</p>
        </div>

      </div>
    </footer>
  );
}
