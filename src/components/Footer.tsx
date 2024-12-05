import React from "react";
import Image from "next/image";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-600 text-white" id="footer">
      <div className="container mx-auto px-6 py-10">
        {/* Logo and Description */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-6 md:space-y-0">
          <div className="flex items-center space-x-4">
            <Image
              src="/log.jpg"
              alt="Company Logo"
              width={48}
              height={48}
              className="rounded-full"
            />
            <div>
              <h2 className="text-lg font-semibold">DBI</h2>
              <p className="text-sm text-gray-100">
                Connecting people, building dreams.
              </p>
            </div>
          </div>

          {/* Social Links */}
          <ul className="flex space-x-6">
            <li>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-100 hover:text-teal-400 transition duration-300"
                aria-label="Visit us on Instagram"
              >
                <FaInstagram size={24} />
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-100 hover:text-teal-400 transition duration-300"
                aria-label="Chat with us on WhatsApp"
              >
                <FaWhatsapp size={24} />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-100 hover:text-teal-400 transition duration-300"
                aria-label="Follow us on Twitter"
              >
                <FaXTwitter size={24} />
              </a>
            </li>
          </ul>
        </div>

        {/* Links and Copyright */}
        <div className="border-t border-gray-100 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <ul className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0 mb-4 md:mb-0">
              <li>
                <a
                  href="#"
                  className="text-gray-100 hover:text-teal-400 transition duration-300"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-100 hover:text-teal-400 transition duration-300"
                >
                  Terms of Service
                </a>
              </li>
            </ul>

            <p className="text-gray-100 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} DBI. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};