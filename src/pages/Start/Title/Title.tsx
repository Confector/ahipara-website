import React from 'react';
import Logo from '@/components/elements/Logo/Logo';
import * as s from './Title.module.css';

const Title = () => {
  // console.log('styles: ' + styles);
  return (
    <div>
      <Logo />
      <div
        className={`flex items-center justify-center h-screen bg-center bg-cover ${s.carpet}`}
      >
        <div
          className={`${s.titleCircle} flex items-center justify-center bg-white text-center text-lg flex-col`}
        >
          <p className='h2'>Als Experten in</p>
          <h1>Tech & Design</h1>
          <p className='h2'>geben wir Ihrem</p>
          <p className='h2'>Unternehmen frische</p>
          <p className='h1 mb-8'>Strahlkraft</p>
          <button className='btn btn-primary'>Kennenlernen vereinbaren</button>
        </div>
      </div>
    </div>
  );
};

export default Title;
