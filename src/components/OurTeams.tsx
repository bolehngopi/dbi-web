import React from 'react';
import { teamMembers } from '@/data';

export const OurTeams: React.FC = () => {
  return (
    <section id='our-teams' className='py-20'>
      <div className='max-w-7xl mx-auto px-6 sm:px-8 text-center'>
        <h2 className='text-4xl font-bold mb-12'>Our Teams</h2>
        <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-4'>
          {teamMembers.map((member, index) => (
            <a href='#' className='group relative block bg-black' key={index}>
              <img
                src={member.image}
                alt={member.name}
                className='absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50'
              />

              <div className='relative p-4 sm:p-6 lg:p-8'>
                <p className='text-sm font-medium uppercase tracking-widest text-blue-500'>
                  {member.role}
                </p>

                <p className='text-xl font-bold text-white sm:text-2xl'>
                  {member.name}
                </p>

                <div className='mt-32 sm:mt-48 lg:mt-64'>
                  <div className='translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100'>
                    <p className='text-sm text-white'>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Omnis perferendis hic asperiores quibusdam quidem
                      voluptates doloremque reiciendis nostrum harum.
                      Repudiandae?
                    </p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
