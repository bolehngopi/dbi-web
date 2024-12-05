'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaTimes, FaBars } from 'react-icons/fa';
import { navMenu } from '@/data';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolling(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`${
        isScrolling ? 'shadow-lg bg-blue-600 text-white' : 'bg-white text-black'
      } p-4 md:sticky fixed w-full top-0 left-0 z-50 transition-all duration-300`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-2">
          <Image
            src="/log.jpg"
            alt="Logo DBI"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-2xl font-bold">DBI</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {navMenu.map((item, index) => (
            <li key={index}>
              <a
                href={item.link}
                className={`hover:text-gray-500 transition-colors duration-300 ${
                  isScrolling ? 'text-white' : 'text-black'
                }`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <FaTimes size={24} className={`${isScrolling ? 'text-white' : 'text-black'}`} />
          ) : (
            <FaBars size={24} className={`${isScrolling ? 'text-white' : 'text-black'}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <ul
        className={`${
          isOpen ? 'flex' : 'hidden'
        } md:hidden flex-col items-center space-y-4 mt-4 p-4 rounded-lg`}
        role="menu"
        aria-label="Mobile navigation"
      >
        {navMenu.map((item, index) => (
          <li key={index} role="menuitem">
            <a
              href={item.link}
              className={`${isScrolling ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-300'} transition-colors duration-300`}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
