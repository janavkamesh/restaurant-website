import React from 'react';
import { RESTAURANT_DATA } from '@/lib/constants';

export default function FloatingWhatsApp() {
  return (
    <a
      href={RESTAURANT_DATA.contact.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed z-50 bottom-[calc(96px+env(safe-area-inset-bottom))] md:bottom-6 right-4 md:right-6 w-[56px] h-[56px] rounded-full bg-whatsapp flex items-center justify-center hover:scale-110 transition-transform duration-200 shadow-lg focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="28"
        height="28"
        fill="currentColor"
        className="text-white"
      >
        <path d="M12.031 0C5.385 0 0 5.385 0 12.031c0 2.115.548 4.17 1.59 5.986L.073 23.51l5.656-1.482c1.761.94 3.743 1.436 5.803 1.436 6.645 0 12.031-5.385 12.031-12.031S18.675 0 12.031 0zM12.03 21.493c-1.803 0-3.565-.483-5.111-1.401l-.367-.217-3.805.998.986-3.708-.238-.378c-.997-1.587-1.523-3.414-1.523-5.289 0-5.556 4.52-10.076 10.077-10.076 5.557 0 10.078 4.52 10.078 10.077 0 5.556-4.521 10.076-10.076 10.076z" />
        <path d="M17.511 14.153c-.302-.151-1.789-.884-2.066-.985-.278-.101-.48-.151-.681.151-.202.302-.782.985-.959 1.186-.177.202-.354.227-.656.076-1.434-.716-2.529-1.288-3.493-2.612-.258-.354.258-.328.847-1.515.101-.202.051-.379-.025-.531-.076-.151-.681-1.642-.934-2.247-.246-.593-.493-.515-.681-.523-.177-.008-.379-.008-.58-.008-.202 0-.531.076-.808.379-.278.302-1.06 1.035-1.06 2.524 0 1.489 1.085 2.927 1.236 3.129.151.202 2.133 3.256 5.169 4.567 2.188.948 2.87.808 3.398.681.716-.172 1.789-.731 2.042-1.438.252-.707.252-1.312.177-1.438-.076-.127-.278-.202-.58-.354z" />
      </svg>
    </a>
  );
}
