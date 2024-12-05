import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold mb-4">About DBI</h1>
          <p className="text-lg leading-relaxed">
            DBI (Desain Berinovasi Inspiratif) adalah sebuah platform yang berfokus pada inovasi dalam dunia desain. Kami
            berdedikasi untuk menyediakan solusi desain kreatif yang menginspirasi dan mendukung berbagai kebutuhan
            masyarakat, mulai dari desain grafis, interior, hingga desain produk.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Visi Card */}
          <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">Visi Kami</h2>
            <p className="text-lg">
              Menjadi pusat inovasi desain yang menginspirasi dan memberikan dampak positif bagi dunia kreatif.
            </p>
          </div>

          {/* Misi Card */}
          <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">Misi Kami</h2>
            <ul className="list-disc list-inside space-y-3 text-lg">
              <li>Menciptakan desain yang estetis dan fungsional.</li>
              <li>Menghadirkan solusi kreatif untuk berbagai kebutuhan.</li>
              <li>Membangun komunitas desainer yang inovatif dan kolaboratif.</li>
            </ul>
          </div>

          {/* Info Card */}
          <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">Kenapa Memilih Kami?</h2>
            <p className="text-lg">
              Dengan tim yang berpengalaman dan pendekatan inovatif, kami berkomitmen untuk memberikan hasil terbaik
              untuk setiap proyek desain Anda.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
