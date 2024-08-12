import React from 'react';

const About = () => {
  return (
    <div className='flex items-center justify-evenly mt-12'>
      <div
        style={{
          width: '490px',
          height: '490px',
          borderRadius: '245px',
        }}
        className='flex items-center justify-center h-screen bg-sand text-center text-lg flex-col p-4 ml-8'
      >
        <p className='h1 mb-4'>Katja</p>
        <p className='text-base'>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p>

        <button className='btn btn-secondary mt-8'>Termin vereinbaren</button>
      </div>

      <div
        style={{
          width: '490px',
          height: '490px',
          borderRadius: '245px',
        }}
        className='flex items-center justify-center h-screen bg-sand text-center text-lg flex-col p-4 mr-8'
      >
        <p className='h1 mb-4'>Thomas</p>
        <p className='text-base'>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p>

        <button className='bg-teal px-8 mt-8 py-4 rounded-full text-base font-medium'>
          Termin vereinbaren
        </button>
      </div>
    </div>
  );
};

export default About;
