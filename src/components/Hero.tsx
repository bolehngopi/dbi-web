import React from 'react';

const Home: React.FC = () => {
  return (
    <>
      <section className='bg-gray-50'>
        <div className='mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center'>
          <div className='mx-auto max-w-xl text-center'>
            <h1 className='text-3xl font-extrabold sm:text-5xl'>
              Transformasi Bisnis Anda dengan{' '}
              <strong className='font-extrabold text-blue-700'>DBI</strong>
            </h1>

            <p className='mt-4 sm:text-xl/relaxed'>
              Meningkatkan efisiensi dan inovasi melalui integrasi digital yang
              cerdas.
            </p>

            <div className='mt-8 flex flex-wrap justify-center gap-4'>
              <a
                className='block w-full rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto'
                href='#Footer'>
                Kontak Kami
              </a>
            </div>
          </div>
        </div>
      </section>

     
    </>
  );
};

export default Home;
