'use client';

import { useState } from 'react';
import Image from 'next/image';
import Quote from '@/constants/svg/quote.svg';

const socialProofs = [
  {
    name: 'Daniel Pierce',
    company: 'LumoTech Solutions',
    image: '/images/social-1.webp',
    text: `From the very first call, we knew we were in expert hands. 
    The way they translated our vision into a scalable, 
    beautifully crafted product was impressive. 
    Their attention to user experience helped us double 
    our engagement within just a few months.`,
  },
  {
    name: 'Jack Smith',
    company: 'BrightNest Homes',
    image: '/images/social-2.webp',
    text: `We were struggling with slow load times and poor mobile performance.
     Their team rebuilt our entire platform with speed and scalability in mind.
      Our bounce rate dropped by 35% — and the difference was felt immediately.`,
  },
  {
    name: 'Sarah Johnson',
    company: 'Nexora Health',
    image: '/images/social-3.jpg',
    text: `We approached them with a complex product and tight deadlines — 
    they delivered beyond expectations. The platform they built for us now 
    serves thousands of patients every day. Reliable, thoughtful, and truly innovative.`,
  },
];

const SocialProof = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % socialProofs.length);
  };

  const previous = () => {
    setCurrentIndex((prev) => (prev - 1 + socialProofs.length) % socialProofs.length);
  };

  const prevIndex = (currentIndex - 1 + socialProofs.length) % socialProofs.length;
  const nextIndex = (currentIndex + 1) % socialProofs.length;

  return (
    <div className="bg-[#0b0d35] py-24">
      <div className="max-w-4xl mx-auto flex items-center justify-between relative px-4">
        {/* Left Arrow with Image */}
        <button 
          onClick={previous} 
          className="z-10 hover:scale-105 transition-transform duration-300"
        >
          <img
            src={socialProofs[prevIndex].image}
            alt="prev"
            className="w-16 h-16 rounded-full border-4 border-white object-cover shadow-lg"
          />
        </button>

        {/* Main Card */}
        <div
          className="relative bg-white rounded-2xl shadow-xl px-8 pt-16 pb-10 text-center w-full max-w-xl mx-4
            transition-all duration-500 ease-in-out hover:shadow-2xl"
        >
          {/* Quote Icon */}
          <Image
            src={Quote}
            alt="Quote"
            className="w-8 absolute top-4 left-4 text-gray-300"
            width={32}
            height={32}
          />

          {/* User Image Overlapping Top */}
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
            <img
              src={socialProofs[currentIndex].image}
              alt={socialProofs[currentIndex].name}
              className="w-24 h-24 rounded-full border-4 border-white object-cover shadow-lg"
            />
          </div>

          {/* Name + Company */}
          <div className="mt-4">
            <p className="text-xl font-bold text-gray-800">
              {socialProofs[currentIndex].name}
            </p>
            <p className="text-gray-500 text-sm">{socialProofs[currentIndex].company}</p>
          </div>

          {/* Testimonial Text */}
          <p className="mt-6 text-gray-600 text-base leading-relaxed">
            {socialProofs[currentIndex].text}
          </p>
        </div>

        {/* Right Arrow with Image */}
        <button 
          onClick={next} 
          className="z-10 hover:scale-105 transition-transform duration-300"
        >
          <img
            src={socialProofs[nextIndex].image}
            alt="next"
            className="w-16 h-16 rounded-full border-4 border-white object-cover shadow-lg"
          />
        </button>
      </div>
    </div>
  );
};

export default SocialProof; 