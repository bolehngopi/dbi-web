import React from "react";
import { FaLightbulb, FaCheckCircle, FaUsers } from "react-icons/fa";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
            Tentang DBI
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            DBI (Desain Berinovasi Inspiratif) adalah platform inovatif yang berfokus pada desain kreatif, mulai dari desain grafis hingga produk. Kami berdedikasi untuk memberikan solusi inovatif yang menginspirasi dan memenuhi kebutuhan masyarakat.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Visi Card */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 text-center">
            <div className="text-blue-600 mb-4">
              <FaLightbulb className="text-4xl mx-auto" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Visi Kami</h2>
            <p className="text-gray-600 leading-relaxed">
              Menjadi pusat inovasi desain yang menginspirasi dan memberikan dampak positif bagi dunia kreatif.
            </p>
          </div>

          {/* Misi Card */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 text-center">
            <div className="text-blue-600 mb-4">
              <FaCheckCircle className="text-4xl mx-auto" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Misi Kami</h2>
            <ul className="list-none space-y-3 text-gray-600 leading-relaxed">
              <li className="flex items-center justify-center">
                <span className="text-blue-500 mr-2">•</span>
                Menciptakan desain yang estetis dan fungsional.
              </li>
              <li className="flex items-center justify-center">
                <span className="text-blue-500 mr-2">•</span>
                Menghadirkan solusi kreatif untuk berbagai kebutuhan.
              </li>
              <li className="flex items-center justify-center">
                <span className="text-blue-500 mr-2">•</span>
                Membangun komunitas desainer yang inovatif dan kolaboratif.
              </li>
            </ul>
          </div>

          {/* Kenapa Memilih Kami Card */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 text-center">
            <div className="text-blue-600 mb-4">
              <FaUsers className="text-4xl mx-auto" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Kenapa Memilih Kami?</h2>
            <p className="text-gray-600 leading-relaxed">
              Dengan tim berpengalaman dan pendekatan inovatif, kami berkomitmen memberikan hasil terbaik untuk setiap proyek desain Anda.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};