'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const links = [
  {
    label: 'Features',
    href: '/',
  },
  {
    label: 'Testimonials',
    href: '/',
  },
  {
    label: 'Pricing',
    href: '/',
  },
  {
    label: 'Blog',
    href: '/',
  },
];

const secondaryLinks = [
  {
    label: 'Contact sales',
    href: '/',
  },
  {
    label: 'Log in',
    href: '/',
  },
  {
    label: 'Get Started',
    href: '/',
  },
];

const MenuButton = ({ toggleMenu, showMenu }) => (
  <button
    type="button"
    aria-controls="mobile-menu"
    aria-expanded={showMenu}
    onClick={toggleMenu}
    className="p-2 text-gray-400"
  >
    <span className="sr-only">Open menu</span>
    {showMenu ? (
      <svg
        className="h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
        width={24}
        height={24}
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    ) : (
      <svg
        className="h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
        width={24}
        height={24}
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    )}
  </button>
);

const MobileMenu = () => (
  <div className="md:hidden">
    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
      {links.map((link) => (
        <Link 
          href={link.href} 
          className="text-gray-500 block px-3 py-2 text-base font-medium" 
          key={link.label}
        >
          {link.label}
        </Link>
      ))}
    </div>
    <div className="pt-4 pb-3 border-t border-gray-400">
      <div className="px-2 space-y-1">
        {secondaryLinks.map((link) => (
          <Link
            key={`mobile-${link.label}`}
            href={link.href}
            className="block px-3 py-2 text-base font-medium text-gray-500"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  </div>
);

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center">
            <div className="flex items-center">
              <Image 
                src="/ap.png" 
                alt="logo" 
                width={250} 
                height={150} 
                className="object-contain"
              />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-gray-500 hover:text-gray-600 px-3 py-2 rounded-md font-medium"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <button className="mr-2 px-4 py-2 text-gray-500 hover:text-gray-600">
                Contact sales
              </button>
              <button className="mr-2 px-4 py-2 text-gray-500 hover:text-gray-600">
                Log in
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Get started
              </button>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <MenuButton showMenu={showMenu} toggleMenu={toggleMenu} />
          </div>
        </div>
      </div>
      {showMenu && <MobileMenu />}
    </nav>
  );
};

export default Navbar; 