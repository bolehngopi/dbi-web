import { servicesData } from "@/data";
import Image from "next/image";
import React from "react";



const Services: React.FC = () => {
  const adminWhatsApp = "6281234567890"; // Ganti dengan nomor WhatsApp admin Anda.

  return (
    <section id="services" className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto text-center">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-10 text-gray-800">
          Layanan Kami
        </h1>

        {/* Services Grid */}
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-white p-4 md:p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl group"
            >
              {/* Service Image */}
              <div className="relative overflow-hidden rounded-lg mb-4 aspect-video">
                <Image
                  src={service.image}
                  alt={service.alt}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg group-hover:rotate-3 group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Service Title */}
              <h2 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800">
                {service.title}
              </h2>

              {/* Service Description */}
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
                {service.description}
              </p>

              {/* WhatsApp Button */}
              <a
                href={`https://wa.me/${adminWhatsApp}?text=Halo,%20saya%20tertarik%20untuk%20memesan%20layanan%20"${service.message}".%20Bisa%20berikan%20informasi%20lebih%20lanjut?`}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-md shadow-md hover:opacity-90 hover:shadow-lg transition-all text-sm sm:text-base"
              >
                Pesan Sekarang
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
