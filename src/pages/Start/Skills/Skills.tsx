import React from 'react';
import * as s from './Skills.module.css';

const Skills = () => {
  return (
    <div>
      <p className='h1 text-center mb-8'>Unser Know How für Ihren Erfolg</p>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 m-6'>
        <div>
          <div className='flex items-center'>
            <div className={s.icon}></div>
            <h2 className='uppercase'>UX Design</h2>
          </div>
          <h3>Research, Personas, Prototyping, User Testing, ...</h3>
          <p>
            Ist Ihr digitales Produkt oder Ihr Service bereits konsequent vom
            &nbsp;<a href='#'>Bedürfnis des Nutzers</a> gedacht? Ist es einfach,
            sinnvoll, zufriedenstellen?
          </p>
        </div>
        <div>
          <div className='flex items-center'>
            <div className={s.icon}></div>
            <h2 className='uppercase'>Visual Design</h2>
          </div>
          <h3>Branding, UI-Design, Styleguides, Marketing Vorlagen, ...</h3>
          <p>
            Welche Werte und Überzeugungen verbindet der Nutzer mit Ihrer Marke?
            Hat sie eine eigenständige <a href='#'>Visuelle Sprache</a> und gibt
            es Vorlagen und klare Regeln für die Anwendung?
          </p>
        </div>
        <div>
          <div className='flex items-center'>
            <div className={s.icon}></div>
            <h2 className='uppercase'>Design Systems</h2>
          </div>
          <h3>Responsive Design, Figma, Pattern Library, Dev Handover, ...</h3>
          <p>
            Haben Sie ein zermürbendes Chaos in Ihren Design Dateien? Oder gibt
            es ein klare <a href='#'>Quelle der Wahrheit</a> für das gesamte
            Team?
          </p>
        </div>

        <div>
          <div className='flex items-center'>
            <div className={s.icon}></div>
            <h2 className='uppercase'>UI Styling</h2>
          </div>
          <h3>Design Tokens, Responsive Design, Atomic Design, Konventionen</h3>
          <p>
            Design Systeme / Pattern Libraries (Storybook), Grid & Flex Layout,
            Semantic Web / Accessibility, Mobile First, CSS, SCSS Modules,
            Styled Components, JSS, Animationen, komplexes Event-Handling,
            Gesten, Tastatur, Houdini, Storybook, Web Animation API, Tailwind
            CSS, Kapselung, Struktur, Architektur. Teamübergreifende
            Organisation des Design, Flexible Komposition in unterschiedlichen
            Designs, Struktur, Kapselung von Markup und Code,
            Wiederverwendbarkeit, Wartbarkeit
          </p>
        </div>
        <div>
          <div className='flex items-center'>
            <div className={s.icon}></div>
            <h2 className='uppercase'>Micro Frontends</h2>
          </div>
          <h3>Module Federation, komponentenbasierte Frontend-Architekturen</h3>
          <p>
            Komponentenbasierte Web Apps mit gängigen Frameworks wie Next.js
            (SSR), React (CSR), React Native, NodeJS, Web Components. Dabei
            spielt die Datenverwaltung und effektives State Management (Redux)
            zusammen mit dem sinnvollen Schneiden von Komponenten und der
            Realisierbarkeit einer guten Testbarkeit/Testautomatisierung eine
            zentrale Rolle
          </p>
        </div>
        <div>
          <div className='flex items-center'>
            <div className={s.icon}></div>
            <h2 className='uppercase'>Web 3 & Blockchain</h2>
          </div>
          <h3>Smart Contracts, DeFi, Ethereum, NFT</h3>
          <p>
            Professionelle Dienstleistungen rund um die Themen Blockchain und
            Smart Contracts. Wir entwickeln Web3 Anwendungen welche auf Etherum
            basieren.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
