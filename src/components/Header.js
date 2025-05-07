'use client';

import Image from 'next/image';
import Button from '@/components/button';
import Netlify from '@/constants/svg/netlify.svg';
import Nike from '@/constants/svg/nike.svg';
import Figma from '@/constants/svg/figma.svg';
import Aws from '@/constants/svg/aws.svg';

const Header = () => (
  <header className="relative bg-white min-h-[calc(100vh-6rem)] overflow-hidden">
    {/* Video Background */}
    <video 
      className="absolute top-0 left-0 w-full h-full object-cover z-0" 
      autoPlay 
      muted 
      loop 
      playsInline 
      src="homepage.mp4" 
    />

    {/* Content Overlay */}
    <div className="relative z-1">
      <div className="max-w-4xl mx-auto py-16 px-14 sm:px-6 lg:px-8">
        <h1 className="font-sans font-bold text-4xl md:text-5xl lg:text-8xl text-center leading-snug text-white">
          Your Trusted IT Partner for Business Growth
        </h1>
        <div className="max-w-xl mx-auto">
          <p className="mt-10 text-white text-center text-xl lg:text-3xl">
            Empowering businesses with cutting-edge IT solutions and expert support.
          </p>
        </div>
        <div className="mt-10 flex justify-center items-center w-full mx-auto">
          <Button primary>Contact us</Button>
        </div>
      </div>

      <div className="flex justify-center w-full">
        <div className="mt-4 w-full">
          <p className="font-mono uppercase text-center font-medium text-sm text-white mb-5">
            These folks get it
          </p>
          <div className="flex items-center justify-center mx-auto flex-wrap bg-black bg-opacity-40">
            <Image
              src={Aws}
              alt="AWS"
              className="m-12 mb-8"
              width={120}
              height={120}
            />
            <Image
              src={Netlify}
              alt="Netlify"
              className="m-12"
              width={140}
              height={140}
            />
            <Image
              src={Nike}
              alt="Nike"
              className="m-12"
              width={140}
              height={140}
            />
            <Image
              src={Figma}
              alt="Figma"
              className="m-12"
              width={140}
              height={140}
            />
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Header; 