import React from 'react';
import Image from 'next/image';
import Button from '@/components/Button';
import { Metadata } from 'next';
import { RESTAURANT_DATA } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Our Story',
  description: 'Discover the legacy of Annamalai Kitchen and Chef Rajkumar Pillai. Eighteen years of authentic Tamil Nadu flavors.',
  openGraph: {
    title: `Our Story | ${RESTAURANT_DATA.name}`,
    description: 'Discover the legacy of Annamalai Kitchen and Chef Rajkumar Pillai. Eighteen years of authentic Tamil Nadu flavors.',
  }
};

export default function StoryPage() {
  return (
    <div className="flex flex-col w-full">
      
      {/* SECTION 1: Cinematic Opening */}
      <section className="relative h-[100dvh] md:h-screen w-full flex items-center justify-center bg-black overflow-hidden border-b-4 border-curry">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBM4GVyAoupVWa9j0AhkxCuEeJ288fyiEiBhZiKhUBIVBGkVwY3AmwzM_B1BTFw2Zd9euzSncDp-94ljV2rJ0G5hQgUdhW9IjGDmx7cxznctBrSmrAyb7WEW3iPVJFTGpCQbW4T2Rm_ucebaBqzqMo7P9S-njD4LrALEh2UX6HW6ZuZdDyzkO5lxlbtDqpqrzzybqd0A_Dgl8dRXpfQ41a6gYZv3yFZggq8DcTQYEDZpirl_6r8XqKvS4Ftn3miJNYosSTj7pgdb-E"
            alt="Heritage South Indian dining room at dusk"
            fill
            className="object-cover opacity-60"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        </div>
        
        <div className="relative z-10 text-center px-4 md:px-12 max-w-4xl mx-auto flex flex-col items-center pt-16">
          <h1 className="font-playfair font-semibold italic text-[40px] md:text-[64px] text-banana mb-8 leading-tight drop-shadow-lg">
            "Good food comes from people who care deeply."
          </h1>
          <p className="font-inter font-normal text-[18px] md:text-[22px] text-milk/90 max-w-2xl leading-relaxed">
            Rooted in the heart of T. Nagar since 2007. A legacy of warmth, brass vessels, and uncompromised South Indian flavors.
          </p>
        </div>
      </section>

      {/* SECTION 2: Origin Story */}
      <section className="bg-milk py-20 md:py-32 px-4 md:px-6 flex justify-center">
        <div className="w-full max-w-[680px] flex flex-col gap-8">
          <div className="flex items-center mb-2">
            <div className="w-8 h-[2px] bg-curry mr-4" />
            <span className="uppercase font-inter font-medium text-[12px] text-curry tracking-[0.1em]">
              The Beginning
            </span>
          </div>
          <h2 className="font-playfair font-semibold text-[36px] md:text-[48px] text-forest leading-tight">
            One brass vessel. Eighteen years.
          </h2>
          
          <div className="font-inter font-normal text-[18px] text-sage flex flex-col gap-6 leading-[1.7]">
            <p>
              It started not with a grand business plan, but with a simple desire to share the meals that defined our childhoods. Annamalai Kitchen was born in a small space where the air was always thick with the scent of roasted coriander and fresh curry leaves.
            </p>
            <p>
              We didn't have much space, but we had a massive brass uruli that had been in our family for three generations. That vessel became the beating heart of our kitchen. Every gravy, every slow-cooked dal, every biryani passed through it, absorbing the history and warmth of the metal.
            </p>
          </div>
          
          <blockquote className="border-l-[3px] border-curry pl-6 py-2 my-6">
            <p className="font-playfair font-medium italic text-[24px] text-forest leading-snug">
              "My mother told me never to write down the spice proportions. She said you must feel the heat of the pan and smell the readiness of the mustard seeds. Cooking is an instinct, not an equation."
            </p>
          </blockquote>
          
          <p className="font-inter font-normal text-[18px] text-sage leading-[1.7]">
            Today, eighteen years later, that same brass vessel sits in our modern kitchen. The fire underneath it burns differently now, but the hands that stir the pot still follow the same instincts.
          </p>
        </div>
      </section>

      {/* SECTION 3: The People (Team Section) */}
      <section className="bg-banana py-20 md:py-32 px-4 md:px-6">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-16">
          <div className="flex flex-col items-center text-center">
            <div className="w-[48px] h-[3px] bg-curry mb-4" />
            <h2 className="font-playfair font-semibold text-[32px] md:text-[48px] text-forest">The hands behind every plate.</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Team Member 1 */}
            <div className="flex flex-col gap-6 group">
              <div className="aspect-[4/5] w-full overflow-hidden rounded-xl border border-border shadow-sm">
                <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuBw8u40HEiEtQvMcxq5m_RX1wUBaOVA0MPMY3BHe0ChBXMvd97OjcTTXjCeoB6YSsJHMuIIMq8mt7L0ZehOJVDPpbVytEs92-EDgH_bIiEnK7uWpIERWrA2SJM9bJ4-rAmy_yBV7PDFdw71283bwWcReHktkDVc2SG-Armzuf2BvjNwGdLeLW7Rhfsm7m2SluqEAouV0omlp0uK-p8zLoFwZuWHUTyxwpBa4WUAn2ai4xN5hmt0pDgWidZMWZ9rB2oyWT18zBoBJHg" alt="Karthikeyan - Head Chef" width={600} height={750} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div>
                <h3 className="font-playfair font-semibold text-[24px] text-forest mb-1">Karthikeyan</h3>
                <p className="font-inter font-medium text-[12px] uppercase tracking-[0.1em] text-curry mb-3">Head Chef</p>
                <p className="font-inter font-normal text-[16px] text-sage leading-[1.6]">
                  Mastering the fire for over three decades. Karthikeyan oversees the daily ritual of grinding fresh masalas before dawn.
                </p>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="flex flex-col gap-6 group">
              <div className="aspect-[4/5] w-full overflow-hidden rounded-xl border border-border shadow-sm">
                <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqVYHpVWefQwo3c0jPwPEJ7QdOIDsT2yp-ShtsF8aAK97mil6lOkDmEan6cEWfoHXpaVySsgr05NWK7rOWFWm6rKnvxAbdvPkxtPPE6dootOgcjVuqjHO9AczYxPEHtcDoO4zjpdZEFeYz7lGtHK5UjQzfNzT1fu5ZNyndvB9s4jXthkkO7_2MFK9J5HhLJErapgBdwl4cLoYoyyHapuT46Gm70D9kJwoLl7bZLLxw8-RXQ8FiWQzHn245ckdNtK6B6zNMG9bYGbU" alt="Meenakshi - Service Director" width={600} height={750} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div>
                <h3 className="font-playfair font-semibold text-[24px] text-forest mb-1">Meenakshi</h3>
                <p className="font-inter font-medium text-[12px] uppercase tracking-[0.1em] text-curry mb-3">Service Director</p>
                <p className="font-inter font-normal text-[16px] text-sage leading-[1.6]">
                  The soul of our dining room. She remembers the favorite table and dietary preferences of guests who have been visiting us for years.
                </p>
              </div>
            </div>
            
            {/* Team Member 3 */}
            <div className="flex flex-col gap-6 group">
              <div className="aspect-[4/5] w-full overflow-hidden rounded-xl border border-border shadow-sm">
                <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfSXWuM_im0XFwx4bhKtG6M4xfBcIET3UdWx-ct0XFiqBuOiXnsrU6casKGrQHfkpezhDF1oG_FdhrHEDKzrr2jrQG2SQRn7g9YBtfVEg2PGNrN-pdcPBtijheyBify1NYHTyC4_2SADAd9usSwF1OpQO5ZhRi4SaWZW_sCBz8BIe0Czlce2bjCdOoKFJIqck7AuWbQirp4BRx4cS8T32h-3vhh6Lr563JvgrvXCn5lJbQgU6WCzEu2Uu2oT8_a4hRj9usvrXbmcU" alt="Siddharth - Sous Chef" width={600} height={750} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div>
                <h3 className="font-playfair font-semibold text-[24px] text-forest mb-1">Siddharth</h3>
                <p className="font-inter font-medium text-[12px] uppercase tracking-[0.1em] text-curry mb-3">Sous Chef</p>
                <p className="font-inter font-normal text-[16px] text-sage leading-[1.6]">
                  Bringing modern techniques to heritage recipes. Siddharth ensures every plate leaving the pass respects both tradition and contemporary aesthetics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Philosophy & Sourcing */}
      <section className="bg-milk py-20 md:py-32 px-4 md:px-6">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="flex flex-col gap-8 order-2 md:order-1">
            <h2 className="font-playfair font-semibold text-[32px] md:text-[44px] text-forest leading-tight">
              We believe sourcing is a decision, not a coincidence.
            </h2>
            <p className="font-inter font-normal text-[18px] text-sage leading-[1.7]">
              Excellence begins long before the stove is lit. We spend countless hours building relationships with farmers in the Western Ghats and fishermen along the Coromandel coast. Our ingredients dictate our menu, never the other way around.
            </p>
            <div className="flex flex-wrap gap-4 mt-2">
              <span className="bg-banana text-forest font-inter font-medium text-[13px] px-5 py-2.5 rounded-full border border-border/60 shadow-sm">
                Stone-ground spices
              </span>
              <span className="bg-banana text-forest font-inter font-medium text-[13px] px-5 py-2.5 rounded-full border border-border/60 shadow-sm">
                Coastal seafood
              </span>
              <span className="bg-banana text-forest font-inter font-medium text-[13px] px-5 py-2.5 rounded-full border border-border/60 shadow-sm">
                No MSG
              </span>
            </div>
          </div>
          
          <div className="h-[400px] md:h-[600px] w-full rounded-2xl overflow-hidden border border-border shadow-lg order-1 md:order-2 relative">
            <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuDC7FNvGxnniBOthjXVCUq6Nlz_fOmXRnnfJvX3oDnDJPJlQzq3S7veTWmx3Vifuy2ut6Z6liUSVHa5eHp05FkSxMO9UAmPLc46Keqfmdz4pQZ_UUZzxNukARLwBHQfdrm4_1vftvNkSM3eniYpMU0C-wUEfQlRG94dksnwAcXaecxdAWO9W8kmCFav95CctKrcRjnbXo1CbpPwJ_zWnqB4nAWi0El87yYm5OXT4c-82XKrZdoqhrCi25JKdfnnemgxii1S14tpJfU" alt="Fresh spices and ingredients" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
        </div>
      </section>

      {/* SECTION 5: Invitation CTA */}
      <section className="bg-forest py-24 md:py-32 px-4 md:px-6 text-center border-t border-curry">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <div className="w-[48px] h-[3px] bg-curry mb-8" />
          <h2 className="font-playfair font-semibold text-[36px] md:text-[56px] text-banana mb-8 leading-tight">
            We'd love to cook for you.
          </h2>
          <p className="font-inter font-normal text-[18px] md:text-[22px] text-sage-light max-w-2xl leading-[1.6] mb-12">
            Whether you are joining us for a quiet dinner or celebrating a milestone, we promise a table full of flavor, warmth, and the unmistakable feeling of home.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
            <Button variant="primary" href="/reserve" className="px-10 group">
              Reserve your table
              <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
            </Button>
            <Button variant="ghost" href="/menu" className="px-10">
              View our menu
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
