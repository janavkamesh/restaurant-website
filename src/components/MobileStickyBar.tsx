import React from 'react';
import Link from 'next/link';
import { RESTAURANT_DATA } from '@/lib/constants';

export default function MobileStickyBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full z-40 bg-forest pb-[env(safe-area-inset-bottom)]">
      <div className="h-[64px] flex items-center px-2 gap-2">
        <Link 
          href="/reserve"
          className="flex-1 h-[48px] flex items-center justify-center bg-gold text-forest font-inter font-medium text-[14px] rounded-lg active:scale-95 transition-transform"
        >
          Book table
        </Link>
        <a 
          href={RESTAURANT_DATA.contact.phoneTelLink}
          className="flex-1 h-[48px] flex items-center justify-center bg-chilli text-white font-inter font-medium text-[14px] rounded-lg active:scale-95 transition-transform"
        >
          Call
        </a>
        <a 
          href={RESTAURANT_DATA.contact.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 h-[48px] flex items-center justify-center bg-whatsapp text-white font-inter font-medium text-[14px] rounded-lg active:scale-95 transition-transform"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
}
