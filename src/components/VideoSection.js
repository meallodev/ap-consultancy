'use client';

import Image from 'next/image';

const PlayButton = () => (
  <button
    type="button"
    className="w-64 lg:w-auto absolute top-full left-1/2 flex items-center transform
      -translate-y-1/2 -translate-x-1/2 bg-white rounded-full font-medium group p-4 shadow-xl"
    aria-label="play video"
  >
    <svg 
      className="w-6 h-6 fill-current text-gray-400 group-hover:text-blue-600 flex-shrink-0" 
      viewBox="0 0 24 24"
    >
      <path d="M8 5.14V19.14L19 12.14L8 5.14Z" fill="currentColor"/>
    </svg>
    <span className="ml-3">Watch the video (5 min)</span>
  </button>
);

const VideoSection = () => (
  <section className="bg-gradient-to-b from-gray-50 to-white shadow-inner my-20 bg-[#0b0d35]">
    <div className="max-w-7xl mx-auto bg-[#0b0d35]">
      <div className="flex flex-col max-w-4xl mx-auto pt-28">
        <div className="w-full">
          <div className="relative shadow-2xl mx-6 lg:mx-0">
            <svg width="100%" height="100%" viewBox="0 0 1200 675" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="1200" height="675" fill="#0B0D35"/>
              <path d="M600 337.5C600 523.5 443.5 675 257.5 675C71.5 675 0 523.5 0 337.5C0 151.5 71.5 0 257.5 0C443.5 0 600 151.5 600 337.5Z" fill="#1A1D4E"/>
              <path d="M1200 337.5C1200 523.5 1043.5 675 857.5 675C671.5 675 600 523.5 600 337.5C600 151.5 671.5 0 857.5 0C1043.5 0 1200 151.5 1200 337.5Z" fill="#1A1D4E"/>
            </svg>
            <PlayButton />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default VideoSection; 