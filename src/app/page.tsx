import React from 'react';
import Image from 'next/image';
import Button from '@/components/Button';
import DietaryIndicator from '@/components/DietaryIndicator';
import { RESTAURANT_DATA } from '@/lib/constants';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Authentic Tamil Cuisine in T. Nagar, Chennai',
  openGraph: {
    title: `Home | ${RESTAURANT_DATA.name}`,
    description: 'Authentic Chettinad and Tamil Nadu cuisine in T. Nagar, Chennai. Reserve your table directly. Confirmed within 90 minutes.',
  }
};

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* SECTION 1: HERO */}
      <section className="relative min-h-[100dvh] md:min-h-[800px] flex items-center justify-center border-b-4 border-curry overflow-hidden">
        
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDy9k_LMRg4e4_Ra3WCypdFInVKcYJzrHhpO-48Z9v6Ij7X4h0rJu2zLTJbdCLzg_JiWu6RmPKcgrQM7BptL2KMFmAwGXwvJi5CPos8cUBJGInOX_U2HSyfTGQusBkWkrO6yNCWJpGeQ8OQ2ZZmO9JlYQ2XU2BfVqRU_oIId83Te-PuD0Iz7tPsb-l8mzeJREpno8IjV3BLkplxHOQIUk6oX2zXbkNxP1WwJhB6rTPIQWnS7Ky4y3iSlV5YkqlB-TpCH8oNlzuz7CU"
            alt={`${RESTAURANT_DATA.name} signature Chettinad feast`}
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
            quality={90}
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-forest/40 md:bg-forest/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 md:px-6 text-center text-milk flex flex-col items-center pt-24 pb-16">
          
          {/* Trust Badge */}
          <div className="inline-flex items-center space-x-2 bg-forest/40 backdrop-blur-md rounded-full py-2 px-4 mb-6 border border-border/20">
            <span className="text-curry">★</span>
            <span className="font-inter font-medium text-[14px]">
              {RESTAURANT_DATA.trust.googleRating} on Google
            </span>
          </div>

          {/* Eyebrow */}
          <div className="font-inter font-medium text-[12px] uppercase tracking-[0.1em] mb-4 text-banana/90">
            Chennai · {RESTAURANT_DATA.cuisine}
          </div>

          {/* H1 */}
          <h1 className="font-playfair font-semibold text-[40px] leading-[1.1] md:text-[64px] md:leading-[1.1] md:tracking-[-0.02em] max-w-4xl mx-auto mb-6 text-balance text-milk drop-shadow-md">
            {RESTAURANT_DATA.tagline}
          </h1>

          {/* Subheading */}
          <p className="font-inter font-normal text-[16px] md:text-[18px] leading-[1.6] text-banana/90 max-w-2xl mx-auto mb-10 text-balance">
            Authentic Chettinad and coastal Tamil classics in the heart of T. Nagar. {RESTAURANT_DATA.hours.display}.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <Button variant="primary" href="/reserve" className="w-full sm:w-auto group">
              Reserve your table
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Button>
            <Button variant="ghost" href="/menu" className="w-full sm:w-auto bg-forest/20 backdrop-blur-sm">
              View our menu
            </Button>
          </div>

        </div>
      </section>

      {/* SECTION 2: PROOF BAR */}
      <section className="bg-milk border-b border-border py-8 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
          <p className="font-inter font-normal italic text-[16px] text-sage text-center max-w-md">
            "Rated Chennai's top 10 authentic Tamil restaurants" — The Hindu
          </p>
          <div className="flex items-center justify-center gap-8 font-inter font-semibold text-[14px] text-forest uppercase tracking-wider flex-wrap">
            <span>MICHELIN</span>
            <span className="w-1 h-1 rounded-full bg-border md:hidden" />
            <span>TIMES FOOD</span>
            <span className="w-1 h-1 rounded-full bg-border md:hidden" />
            <span>ZOMATO</span>
          </div>
        </div>
      </section>

      {/* SECTION 3: SIGNATURES */}
      <section className="bg-milk py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="w-[48px] h-[3px] bg-curry mb-4" aria-hidden="true" />
            <h2 className="font-playfair font-semibold text-[32px] md:text-[40px] text-forest">Our signatures</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Dish 1 */}
            <div className="bg-white rounded-xl border border-border overflow-hidden hover:border-curry transition-colors group cursor-pointer flex flex-col h-full shadow-sm hover:shadow-md">
              <div className="relative aspect-square w-full">
                <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAPvtE7V_W6tHUtCChFz1RSawJtmfUkQ_w2rHBfq2eyCAjlDRjSzIl8k7jnBFCGCvmyVFEOTyB3Qz2aR0eG4985trakn6OjmbO6dkrnR_NcV-DT39hxa6ti_UlmLd4VtDAAG3C8acMKP3x_QkNycSoJYPW8tt9j2Zg_mfXxex6TTEp0mE1HjJIojSLo1u0vtSg7CfntNtbk2ueefeEvGLWWE7W4bB9ajoit8dK4bTogTRfxwPHhMMxHG29jMg_obRxw20jMyJETRQ" alt="Chettinad Kozhi Curry" fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className="p-6 flex flex-col items-center text-center flex-grow">
                <DietaryIndicator type="nonveg" className="mb-4" />
                <h3 className="font-playfair font-semibold text-[22px] text-forest mb-2">Chettinad Kozhi Curry</h3>
                <p className="font-inter text-[15px] text-sage mb-6 line-clamp-3">A robust chicken curry simmered with hand-pounded spices, black pepper, and fresh coconut.</p>
                <span className="font-space font-bold text-[18px] text-gold mt-auto">₹420</span>
              </div>
            </div>

            {/* Dish 2 */}
            <div className="bg-white rounded-xl border border-border overflow-hidden hover:border-curry transition-colors group cursor-pointer flex flex-col h-full shadow-sm hover:shadow-md">
              <div className="relative aspect-square w-full">
                <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuCz_W7DNQjeDWyAmUOqKFxZmHVectMxYpGxJtlvAsBu942SKUQbAuDa3QvDH_abL0sm3r6gqmOpXuBHefXwJZk3DFUGIdH3NsEvuZ1QgFE5Ty8RrLXYhb-VxomTZHKp2McdJfks3oN4_sKUPYZhZg_szvjScJ6Jkwd4Wz1GaDjFq9053ywx6OUgkf3r4EQ065qWxohZStT_8FpjgE-cwZ1Nl9qDJ0fm2WyMMjQX9HWfODvoctFlZ4LMSI2YViQ3ZWmj6Ar_kiEz0XU" alt="Ghee Roast Dosa" fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className="p-6 flex flex-col items-center text-center flex-grow">
                <DietaryIndicator type="veg" className="mb-4" />
                <h3 className="font-playfair font-semibold text-[22px] text-forest mb-2">Ghee Roast Dosa</h3>
                <p className="font-inter text-[15px] text-sage mb-6 line-clamp-3">Crispy crepe made from fermented rice and lentil batter, roasted in pure homemade ghee.</p>
                <span className="font-space font-bold text-[18px] text-gold mt-auto">₹280</span>
              </div>
            </div>

            {/* Dish 3 */}
            <div className="bg-white rounded-xl border border-border overflow-hidden hover:border-curry transition-colors group cursor-pointer flex flex-col h-full shadow-sm hover:shadow-md">
              <div className="relative aspect-square w-full">
                <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOrpKc8EWdQO7XP3BPVI1Pe9bIFSr2vD1pV-U7yUrU6hRArCM7IsPkL2sipJu9iQUY5VGW4CT38IO5z9cNqCjA18RoGfiTpeuIdkbnY-mcHOY2KcsKSw-P4MPhOs-SzOZnS3AXQFbvbAZNWPSiC6raGIqNXpCx4BO2m_hgbRT5bDRJmNButFch7wc6hY0MeCLa6-D8amqDQRBHCkVgktU3xPydLGp-Ooltu_8-vZy7K-TWmoWfc4giw7EdHhYSqkyqThzmk5XCZf4" alt="Dindigul Mutton Biryani" fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className="p-6 flex flex-col items-center text-center flex-grow">
                <DietaryIndicator type="nonveg" className="mb-4" />
                <h3 className="font-playfair font-semibold text-[22px] text-forest mb-2">Dindigul Mutton Biryani</h3>
                <p className="font-inter text-[15px] text-sage mb-6 line-clamp-3">Short-grain seeraga samba rice cooked with tender mutton and a secret blend of aromatic spices.</p>
                <span className="font-space font-bold text-[18px] text-gold mt-auto">₹550</span>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Button variant="textLink" href="/menu" className="group">
              Explore the full menu
              <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 4: STORY TEASER */}
      <section className="bg-banana py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 pr-0 md:pr-12">
            <div className="flex items-center mb-6">
              <div className="w-8 h-[2px] bg-curry mr-4" />
              <span className="uppercase font-inter font-medium text-[12px] text-curry tracking-[0.1em]">
                Our story
              </span>
            </div>
            <h2 className="font-playfair font-semibold text-[32px] md:text-[40px] text-forest mb-6 leading-tight">
              This kitchen was built on one obsession.
            </h2>
            <p className="font-inter font-normal text-[18px] text-sage mb-6 leading-[1.6]">
              Before Annamalai Kitchen was a restaurant, it was a legacy kept alive in a small kitchen in Karaikudi. Rajkumar Pillai spent his childhood watching his mother dry red chilies in the sun and hand-pound masalas on a stone grinder.
            </p>
            <p className="font-inter font-normal text-[16px] text-sage mb-8 leading-[1.6]">
              Today, we preserve those exacting standards. No shortcuts. No commercial spice blends. Just the authentic taste of a Tamil home, served with the refined elegance it deserves.
            </p>
            <Button variant="textLink" href="/story" className="group">
              Read our full story
              <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
            </Button>
          </div>
          
          <div className="order-1 md:order-2 relative mb-8 md:mb-0">
            <div className="relative aspect-[3/4] w-full rounded-lg overflow-hidden shadow-lg">
              <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeDGXxp-JubxhNmK3BKj3WBNPKRaWodycJO-uwR1PfUtPUzy6BYmiCixzB59EqcpFFyLMtG1Mb3FNIi63DMGthmX1sDFi3EDtVKnNmglTlhJRpWHbUUjjxfdxrPQ9F2X9S_ynz5qQDKwaf8eUb6elu1wIBs5Gq9AFM4OVcUspjakQXo6FtcchxHgdsFMZFsOWfkucIwzOc2T7b19y-L036Zp4NtWF008ucKGyjRxKMhfX5Ck1GoKOR6tdAh4oH7lyc5q4vEI_dBcQ" alt="Chef Rajkumar Pillai" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            {/* Floating Quote */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 md:p-8 border border-border hidden md:block shadow-xl max-w-[280px]">
              <p className="font-playfair font-medium italic text-[20px] text-forest mb-2 leading-tight">
                "Tradition takes time."
              </p>
              <p className="font-inter font-medium uppercase text-[11px] text-sage tracking-wider">
                — Chef Rajkumar Pillai
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: RESERVE / VISIT */}
      <section className="bg-forest text-banana py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 text-center">
          <h2 className="font-playfair font-semibold text-[36px] md:text-[48px] mb-8">Reserve your table</h2>
          
          <Button variant="primary" href="/reserve" className="mb-16 group px-10">
            Reserve now
            <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
          </Button>

          {/* Contact Details row */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 mb-16 font-inter font-normal text-[15px] border-y border-white/10 py-10">
            <div className="flex flex-col md:flex-row items-center gap-3">
              <span className="text-curry hidden md:inline">●</span>
              <span>{RESTAURANT_DATA.hours.display}</span>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-3">
              <span className="text-curry hidden md:inline">●</span>
              <span>{RESTAURANT_DATA.location.addressLine1}, {RESTAURANT_DATA.location.addressLine2}</span>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-3">
              <span className="text-curry hidden md:inline">●</span>
              <span>{RESTAURANT_DATA.contact.phoneDisplay}</span>
            </div>
          </div>

          {/* Trust Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[900px] mx-auto">
            <div className="bg-white/5 border border-white/10 p-8 rounded-xl flex flex-col items-center hover:bg-white/10 transition-colors">
              <span className="font-playfair font-semibold text-[32px] text-banana mb-2">{RESTAURANT_DATA.trust.googleRating} ★</span>
              <span className="font-inter uppercase text-[12px] tracking-[0.1em] text-banana/70">Guest Rating</span>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-xl flex flex-col items-center hover:bg-white/10 transition-colors">
              <span className="font-playfair font-semibold text-[32px] text-banana mb-2">{RESTAURANT_DATA.trust.yearsInOperation} yrs</span>
              <span className="font-inter uppercase text-[12px] tracking-[0.1em] text-banana/70">Culinary Legacy</span>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-xl flex flex-col items-center hover:bg-white/10 transition-colors">
              <span className="font-playfair font-semibold text-[32px] text-banana mb-2">{RESTAURANT_DATA.trust.bookingConfirmation}</span>
              <span className="font-inter uppercase text-[12px] tracking-[0.1em] text-banana/70">Confirmation Time</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
