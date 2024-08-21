import React from 'react';
import Logo from '@/components/elements/Logo/Logo';
import * as s from './Title.module.css';

const Title = () => {
  return (
    <div>
      <div style={{ position: 'absolute', top: '24px', left: '24px' }}>
        <Logo />
      </div>
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
      {/* Ahipara bietet umfassende digitale Lösungen und Dienstleistungen, die UX
      Design, Visual Design und Design Systeme nahtlos miteinander verbinden.
      Wir entwickeln konsistente Component Libraries und sorgen durch unsere
      Expertise in Web Accessibility für barrierefreie und nutzerfreundliche
      Anwendungen. Mit modernsten Ansätzen wie Micro Frontends und Cloud Native
      Architekturen schaffen wir skalierbare und flexible Lösungen, die den
      individuellen Anforderungen unserer Kunden gerecht werden. Ergänzend dazu
      bieten wir maßgeschneidertes Consulting und Coaching, um unsere Kunden in
      ihrer digitalen Transformation und technischen Weiterentwicklung optimal
      zu unterstützen. */}
    </div>
  );
};

export default Title;
