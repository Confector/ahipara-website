import React from 'react';
import * as s from './Offer.module.css';

const Offer = () => {
  return (
    <div>
      <h1>Lorem ipsum dolor sit amet, consetetur sadipscing </h1>
      <div className={`flex items-center justify-end gap-10 bg-cover ${s.eye}`}>
        <div
          style={{
            width: '490px',
            height: '490px',
            borderRadius: '245px',
          }}
          className='circle flex items-center justify-center h-screen bg-white text-center text-lg flex-col p-4 ml-8'
        >
          <p className='h1 mb-4'>Design</p>
          <p className='text-base'>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </p>

          <button className='btn btn-primary mt-8'>Mehr zu Design</button>
        </div>

        <div
          style={{
            width: '490px',
            height: '490px',
            borderRadius: '245px',
            marginBottom: '250px',
            marginRight: '100px',
          }}
          className='flex items-center justify-center h-screen bg-white text-center text-lg flex-col p-4 mr-8'
        >
          <p className='h1 mb-4'>Tech</p>
          <p className='text-base'>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </p>

          <button className='btn btn-primary mt-8'>Mehr zu Tech</button>
        </div>
      </div>
    </div>
  );
};

export default Offer;
