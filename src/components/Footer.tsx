import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Logo dan Deskripsi */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="flex items-center space-x-4">
            <img src="/log.jpg" alt="Logo" className="h-12 w-12 rounded-full" />
            <div>
              <h2 className="text-lg font-semibold">Your Company</h2>
              <p className="text-sm text-gray-400">
                Connecting people, building dreams.
              </p>
            </div>
          </div>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-teal-400"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/123456789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-teal-400"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-teal-400"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Links */}
        <div className="border-t border-gray-700 pt-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-4 md:mb-0">
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-teal-400">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-400">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-400">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Your Company. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
