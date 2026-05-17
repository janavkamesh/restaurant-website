"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Button from '@/components/Button';
import { RESTAURANT_DATA } from '@/lib/constants';

export default function ReservePage() {
  const [partySize, setPartySize] = useState(2);
  const [selectedTime, setSelectedTime] = useState("19:00");

  const handlePartySizeChange = (increment: boolean) => {
    if (increment && partySize < 10) setPartySize(p => p + 1);
    if (!increment && partySize > 1) setPartySize(p => p - 1);
  };

  const timeSlots = ["18:00", "18:30", "19:00", "19:30"];

  const handleReservationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit the reservation. 
    // The requirement states "success state", so we could show an alert or a state change.
    alert("Reservation confirmed! You will receive a confirmation via WhatsApp shortly.");
  };

  const handlePrivateEventSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Inquiry sent! Our events team will contact you within 24 hours.");
  };

  const POLICIES = [
    { title: "Cancellation Policy", description: "We require 24 hours notice for any cancellations or changes to your reservation. Late cancellations may incur a fee." },
    { title: "Dietary Requirements", description: "Please inform us of any severe allergies at least 48 hours in advance so our kitchen can prepare accordingly. We offer robust vegetarian and vegan options." },
    { title: "Dress Code", description: "Smart casual. We kindly ask guests to refrain from wearing sportswear or beachwear." },
    { title: "Parking", description: "Valet parking is available at the main entrance. Self-parking is available in the adjacent lot." }
  ];

  return (
    <div className="flex flex-col w-full min-h-screen">
      
      {/* SECTION 1: Reservation Widget */}
      <section className="bg-milk py-20 md:py-32 px-4 md:px-6">
        <div className="max-w-[560px] mx-auto bg-white border border-border rounded-[24px] p-6 md:p-12 shadow-sm hover:shadow-md transition-shadow duration-300">
          <h1 className="font-playfair font-semibold text-[36px] md:text-[48px] text-center text-forest mb-8 leading-tight">
            Reserve your table
          </h1>
          
          <form className="space-y-6" onSubmit={handleReservationSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Date */}
              <div>
                <label className="block font-inter font-medium text-[14px] text-sage mb-2 uppercase tracking-wide">Date</label>
                <input 
                  type="date" 
                  className="w-full bg-milk border border-border rounded-lg px-4 py-3 font-inter text-forest focus:outline-none focus:border-curry focus:ring-1 focus:ring-curry transition-colors"
                  required
                />
              </div>
              
              {/* Party Size */}
              <div>
                <label className="block font-inter font-medium text-[14px] text-sage mb-2 uppercase tracking-wide">Guests</label>
                <div className="flex items-center justify-between border border-border rounded-lg px-4 py-3 bg-milk">
                  <button 
                    type="button" 
                    onClick={() => handlePartySizeChange(false)}
                    className="text-curry hover:text-forest transition-colors p-1"
                    aria-label="Decrease party size"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" /></svg>
                  </button>
                  <span className="font-inter font-medium text-forest">{partySize} Guests</span>
                  <button 
                    type="button" 
                    onClick={() => handlePartySizeChange(true)}
                    className="text-curry hover:text-forest transition-colors p-1"
                    aria-label="Increase party size"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                  </button>
                </div>
              </div>
            </div>
            
            {/* Time */}
            <div>
              <label className="block font-inter font-medium text-[14px] text-sage mb-2 uppercase tracking-wide">Time</label>
              <div className="grid grid-cols-4 gap-3">
                {timeSlots.map(time => (
                  <button 
                    key={time}
                    type="button"
                    onClick={() => setSelectedTime(time)}
                    className={`border rounded-lg py-3 font-inter font-medium text-[14px] transition-colors ${
                      selectedTime === time 
                        ? 'bg-curry border-curry text-white shadow-sm' 
                        : 'border-border bg-white text-forest hover:border-curry'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label className="block font-inter font-medium text-[14px] text-sage mb-2 uppercase tracking-wide">Name</label>
                <input 
                  type="text" 
                  placeholder="Your name"
                  className="w-full bg-milk border border-border rounded-lg px-4 py-3 font-inter text-forest focus:outline-none focus:border-curry focus:ring-1 focus:ring-curry transition-colors"
                  required
                />
              </div>
              
              {/* Phone */}
              <div>
                <label className="block font-inter font-medium text-[14px] text-sage mb-2 uppercase tracking-wide">Phone</label>
                <div className="flex">
                  <span className="bg-milk border border-r-0 border-border rounded-l-lg px-4 py-3 font-inter text-sage select-none">
                    +91
                  </span>
                  <input 
                    type="tel" 
                    placeholder="Mobile number"
                    className="w-full bg-milk border border-border rounded-r-lg px-4 py-3 font-inter text-forest focus:outline-none focus:border-curry focus:ring-1 focus:ring-curry transition-colors"
                    required
                  />
                </div>
              </div>
            </div>
            
            {/* Special Requests */}
            <div>
              <label className="block font-inter font-medium text-[14px] text-sage mb-2 uppercase tracking-wide">Special Requests (Optional)</label>
              <textarea 
                rows={2}
                placeholder="Allergies, celebrations, etc."
                className="w-full bg-milk border border-border rounded-lg px-4 py-3 font-inter text-forest focus:outline-none focus:border-curry focus:ring-1 focus:ring-curry transition-colors resize-none"
              ></textarea>
            </div>
            
            <Button variant="primary" type="submit" className="w-full py-4 mt-4 text-[16px] group">
              Confirm reservation
              <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
            </Button>
            
            <p className="text-center text-[16px] text-sage font-inter mt-4">
              You will receive a confirmation via WhatsApp within 90 minutes.
            </p>
          </form>
        </div>
      </section>

      {/* SECTION 2: Experience Options */}
      <section className="bg-banana py-20 md:py-32 px-4 md:px-6 border-y border-border/50">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="w-[48px] h-[3px] bg-curry mb-4" />
            <h2 className="font-playfair font-semibold text-[32px] md:text-[48px] text-forest">Something more than dinner?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Tasting Menu Card */}
            <div className="bg-white border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col group">
              <div className="aspect-video w-full relative overflow-hidden bg-milk">
                <Image 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJ9Sh61t3l9ryTP7LGklhpZ9pbUkFujVJ4U8XLY9j44LzPObJR97owDtjlmUxMpBVfgSOEdgzFeMGPMYC5E9nNEuR4LOABuuaoF-nhWDZ9TvEvqC4Ry0oDb_zNR_GFsbKnVnt363a9geDx-pig3JH6t8X-_8o1n2GOkILxz2Ia51XyBYl1VSuRSov_4ZFcrR9kL5i8lEDH19S3c1u6tLGG0f6LcxgzhBQj588WswyfyPNblbcJauKkFr4ctP8ZJCUFkrGU5KWgRnM" 
                  alt="Tasting Menu Experience" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute top-4 left-4 bg-banana text-forest font-inter font-medium text-[12px] uppercase tracking-wide px-4 py-1.5 rounded-full shadow-sm">
                  Signature
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="font-playfair font-semibold text-[28px] text-forest mb-4">The Chettinad Tasting Menu</h3>
                <p className="font-inter font-normal text-[16px] text-sage leading-[1.6] mb-8 flex-grow">
                  A curated 7-course journey through the bold, complex flavors of the Chettinad region, featuring heritage recipes reimagined for modern fine dining.
                </p>
                <Button variant="outline" className="w-full justify-center group-hover:bg-curry group-hover:text-white group-hover:border-curry transition-all">
                  Book Experience
                </Button>
              </div>
            </div>
            
            {/* Private Events Card */}
            <div className="bg-white border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col group">
              <div className="aspect-video w-full relative overflow-hidden bg-milk">
                <Image 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIfqsLGqkJl1XtnsdQCe26DJKAhceg5yidu2NykocDPSd96JDbzx2DbL2jkd5BIFOqGQ-uSCUI-g9UHiCcPhhIglsxpE8hsrI603Yf5ab4YP4X5un4Fbm1qcDBcFjgYjiPQUyhirzceBWAZVKdoagvK-U2U6cLrNm7K1III4Y6a4F8A-qnbquETyHZkfPrYhqROTcydYdszFfMj9ajb5yOefgb_zg4nfwnbTwYYg0ACNRI58FCvNuDQT26hQxnpvTB8kRnaGghYd8" 
                  alt="Private Dining Room" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute top-4 left-4 bg-banana text-forest font-inter font-medium text-[12px] uppercase tracking-wide px-4 py-1.5 rounded-full shadow-sm">
                  Exclusive
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="font-playfair font-semibold text-[28px] text-forest mb-4">Private Dining & Events</h3>
                <p className="font-inter font-normal text-[16px] text-sage leading-[1.6] mb-8 flex-grow">
                  Intimate spaces tailored for your special occasions. Dedicated service, customizable menus, and an atmosphere of refined elegance for up to 30 guests.
                </p>
                <Button variant="outline" href={`https://wa.me/${RESTAURANT_DATA.contact.phone.replace(/[^0-9]/g, '')}`} className="w-full justify-center group-hover:bg-curry group-hover:text-white group-hover:border-curry transition-all">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                  WhatsApp Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Private Dining Feature & Form */}
      <section className="bg-milk py-20 md:py-32 px-4 md:px-6">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <div className="order-2 lg:order-1 rounded-2xl overflow-hidden shadow-lg border border-border">
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDncLeLiDLjfy5ph0wbq-btGm0z8hjc8GhAiMG5jnZfbimiM6dlWlobpTocTxYUPU1V8YGuQIhE2FeYAPGhZMDAwpfJXasAmITD0VMSYHyC7laWDuwp4gLX11z8oZAAN5nRejjLGxBPXhnXrw8L-ViqccqJeyuyBKjC5w2R24G2sQdx1ZyHCeCT0Upwb6tFJ9tIjjdwjGIQTTdhUkdinJ09EUCoF0bGBUkkwOcK29xk-ZZH5Rtp57CJ94UEbm-YtIYf8zc78lD6GRI" 
              alt="Private Dining Event Space" 
              width={800} 
              height={1000} 
              className="w-full h-auto object-cover aspect-[4/5]" 
            />
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="font-playfair font-semibold text-[36px] md:text-[48px] text-forest mb-8 leading-tight">
              Host your next occasion with us
            </h2>
            
            <ul className="space-y-5 mb-10 font-inter font-normal text-[18px] text-sage">
              <li className="flex items-start gap-4">
                <svg className="w-6 h-6 text-curry mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Bespoke menus crafted by our executive chef</span>
              </li>
              <li className="flex items-start gap-4">
                <svg className="w-6 h-6 text-curry mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Dedicated sommelier and service team</span>
              </li>
              <li className="flex items-start gap-4">
                <svg className="w-6 h-6 text-curry mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Flexible seating arrangements for 10-30 guests</span>
              </li>
            </ul>
            
            <div className="bg-white border border-border rounded-xl p-6 md:p-8 shadow-sm">
              <h4 className="font-inter font-medium text-[14px] text-forest mb-6 uppercase tracking-widest">Inquire Now</h4>
              
              <form className="space-y-4" onSubmit={handlePrivateEventSubmit}>
                <input 
                  type="text" 
                  placeholder="Name" 
                  className="w-full bg-milk border border-border rounded-lg px-4 py-3 font-inter text-forest focus:outline-none focus:border-curry transition-colors"
                  required
                />
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="w-full bg-milk border border-border rounded-lg px-4 py-3 font-inter text-forest focus:outline-none focus:border-curry transition-colors"
                  required
                />
                <div className="relative">
                  <select 
                    className="w-full bg-milk border border-border rounded-lg px-4 py-3 font-inter text-sage focus:outline-none focus:border-curry appearance-none transition-colors"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>Event Type</option>
                    <option value="corporate">Corporate Dinner</option>
                    <option value="birthday">Birthday Celebration</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="other">Other</option>
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                    <svg className="w-5 h-5 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-rust text-white font-inter font-medium text-[14px] py-4 rounded-lg hover:bg-[#8e3f28] transition-colors mt-2"
                >
                  Request a callback
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Policies FAQ */}
      <section className="bg-milk py-20 md:py-32 px-4 md:px-6 border-t border-border">
        <div className="max-w-[800px] mx-auto">
          <h2 className="font-playfair font-semibold text-[32px] md:text-[40px] text-center text-forest mb-16">
            Everything you need before you visit.
          </h2>
          
          <div className="space-y-10">
            {POLICIES.map((policy, index) => (
              <div key={index} className="border-b border-border/60 pb-8 last:border-0">
                <h4 className="font-inter font-semibold text-[18px] text-forest mb-3">
                  {policy.title}
                </h4>
                <p className="font-inter font-normal text-[16px] text-sage leading-[1.6]">
                  {policy.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16 pt-10 border-t border-border/60">
            <p className="font-inter font-normal text-[16px] text-sage mb-4">Have other questions?</p>
            <a 
              href={`https://wa.me/${RESTAURANT_DATA.contact.phone.replace(/[^0-9]/g, '')}`}
              className="inline-flex items-center gap-2 text-curry font-inter font-medium text-[14px] hover:text-forest transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
              Chat with us on WhatsApp
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
