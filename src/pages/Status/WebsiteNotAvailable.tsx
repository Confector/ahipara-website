import Logo from '@/components/elements/Logo/Logo';
import React from 'react';

const websiteIsNotAvailable = () => {
  return (
    <div className='content-center text-center h-screen'>
      <div>
        <div className='flex justify-center'>
          <div style={{ width: '152px' }}>
            <Logo />
          </div>
        </div>
        <h2 className='font-bold m-4'>Wir gestalten gerade um.</h2>
        <p style={{ lineHeight: 1.5 }}>
          Bitte schauen Sie bald wieder vorbei.
          <br />
          Vielen Dank für Ihr Verständnis!
        </p>
      </div>
    </div>
  );
};

export default websiteIsNotAvailable;
