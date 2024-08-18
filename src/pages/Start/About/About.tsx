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
          Freelance UX/UI Spezialist – Herausragendes UX- und UI-Design kann den
          Erfolg Ihres Unternehmens maßgeblich beeinflussen. Ich unterstütze Sie
          dabei, ein erstklassiges Online-Erlebnis für Ihre Nutzer zu gestalten,
          das Zufriedenheit schafft und langfristige Loyalität fördert.
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
          Freelance Frontend-Engineering-Spezialist - Entwicklung mobiler
          Webanwendungen mit React und TypeScript. Dabei fließt umfassende
          Erfahrung in den Bereichen Web-UIs, Micro Frontends, SPA, PWA,
          UX/UI-Design und Web-Performance ein. Das Wissen wird als Berater und
          Entwickler aktiv weitergegeben.
        </p>

        <button className='bg-teal px-8 mt-8 py-4 rounded-full text-base font-medium'>
          Termin vereinbaren
        </button>
      </div>
    </div>
  );
};

export default About;
