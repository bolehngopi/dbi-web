import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-gray-100">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        {/* Left Text Section */}
        <div className="mx-auto max-w-2xl text-center lg:text-left lg:max-w-lg">
          <h1 className="text-4xl font-bold sm:text-6xl leading-tight text-gray-900">
            Transformasi Bisnis Anda dengan{" "}
            <span className="text-blue-700 underline decoration-wavy">
              DBI
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 sm:text-xl">
            Meningkatkan efisiensi dan inovasi melalui integrasi digital yang
            cerdas. Bersama DBI, wujudkan potensi penuh bisnis Anda.
          </p>

          {/* Call-to-Actions */}
          <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
            <a
              href="#Footer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-8 py-3 text-white text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all"
            >
              <FaPhoneAlt />
              Kontak Kami
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-blue-600 px-8 py-3 text-blue-600 text-sm font-medium hover:bg-blue-100 hover:border-blue-700 transition-all"
            >
              Pelajari Layanan
            </a>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="hidden lg:flex lg:flex-1 justify-center">
          <img
            src="/images/hero-image.svg" /* Replace with your image */
            alt="Digital Transformation"
            className="w-full max-w-md transform hover:scale-105 transition-all duration-500"
          />
        </div>
      </div>

      {/* Background Shape */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 800 600"
        >
          <circle
            cx="400"
            cy="300"
            r="300"
            fill="url(#paint0_radial)"
            opacity="0.3"
          />
          <defs>
            <radialGradient
              id="paint0_radial"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(400 300) scale(300)"
            >
              <stop stopColor="#3b82f6" />
              <stop offset="1" stopColor="#9333ea" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};
