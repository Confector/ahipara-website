import React from 'react';
import * as s from './Skills.module.css';

const Skills = () => {
  return (
    <div>
      <h2 className='text-center mb-8'>Unser Know How für Ihren Erfolg</h2>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 m-6'>
        <div>
          <h3>UX Design</h3>
          <h4>Research, Personas, Prototyping, User Testing, ...</h4>
          <p>
            Ist Ihr digitales Produkt oder Ihr Service bereits konsequent vom{' '}
            <a href='#'>Bedürfnis des Nutzers</a> gedacht? Ist es einfach,
            sinnvoll, zufriedenstellen?
          </p>
        </div>

        <div>
          <h3>Visual Design</h3>
          <h4>Branding, UI-Design, Styleguides, Marketing Vorlagen, ...</h4>
          <p>
            Welche Werte und Überzeugungen verbindet der Nutzer mit Ihrer Marke?
            Hat sie eine eigenständige <a href='#'>Visuelle Sprache</a> und gibt
            es Vorlagen und klare Regeln für die Anwendung?
          </p>
        </div>

        <div>
          <h3>Design Systems</h3>
          <h4>Responsive Design, Figma, Pattern Library, Dev Handover, ...</h4>
          <p>
            Haben Sie ein zermürbendes Chaos in Ihren Design Dateien? Oder gibt
            es ein klare <a href='#'>Quelle der Wahrheit</a> für das gesamte
            Team?
          </p>
        </div>

        <div>
          <h3>Design Tokens</h3>
          <h4>Standardisierte Werte, konsistente Elemente & Komponenten</h4>
          <p>
            Wir verwenden Design Tokens, um Multibrand-Design-Systeme sowie
            Whitelabel- und Theming-Lösungen zu entwickeln, wobei wir
            verschiedene Tokenisierungslevel auf Elemente und Komponenten
            anwenden. So gewährleisten wir eine konsistente und flexible
            Gestaltung.
          </p>
          {/*<div className='flex items-center'>
            <div className={s.icon}></div>
            <h2 className='uppercase'>UI Styling</h2>
          </div>
           <h3>Design Tokens, Responsive Design, Atomic Design, Konventionen</h3>
          <p>
            Component Libraries in React ermöglichen eine schnelle, konsistente
            und wiederverwendbare Entwicklung von Benutzeroberflächen, wodurch
            die Effizienz gesteigert und die Wartung vereinfacht wird, während
            gleichzeitig die Flexibilität und Skalierbarkeit von Projekten
            erhöht wird.

            Design Systeme / Pattern Libraries (Storybook), Grid & Flex Layout,
            Semantic Web / Accessibility, Mobile First, CSS, SCSS Modules,
            Styled Components, JSS, Animationen, komplexes Event-Handling,
            Gesten, Tastatur, Houdini, Storybook, Web Animation API, Tailwind
            CSS, Kapselung, Struktur, Architektur. Teamübergreifende
            Organisation des Design, Flexible Komposition in unterschiedlichen
            Designs, Struktur, Kapselung von Markup und Code,
            Wiederverwendbarkeit, Wartbarkeit
          </p> */}
        </div>

        <div>
          <h3>Micro Frontends</h3>
          <h4>Komponentenbasierte Frontend-Architekturen</h4>
          <p>
            Micro Frontends in Cloud Native Anwendungen zerlegen große
            Anwendungen in kleinere, unabhängige Module, die flexibel und
            wartbar in der Cloud skaliert werden. Wir entwickeln und beraten zu
            komponentenbasierten Web Apps mit Frameworks wie Next.js, React, und
            Web Components, mit Fokus auf effektives State Management, sinnvolle
            Komponentenaufteilung und robuste Testbarkeit.
          </p>
          {/*<div className='flex items-center'>
            <div className={s.icon}></div>
            <h2 className='uppercase'>Frontend-Architekturen</h2>
          </div>
          <h2 className='uppercase'>
            Micro Frontends in Cloud Native Anwendungen ermöglichen es, große
            Anwendungen in kleinere, unabhängig entwickelte Module zu zerlegen,
            die nahtlos in der Cloud skaliert und bereitgestellt werden können,
            was die Flexibilität, Wartbarkeit und Ausfallsicherheit der gesamten
            Anwendung erheblich steigert.
          </h2>
          <p></p>
           <h3>Module Federation, komponentenbasierte Frontend-Architekturen</h3>
          <p>
            Komponentenbasierte Web Apps mit gängigen Frameworks wie Next.js
            (SSR), React (CSR), React Native, NodeJS, Web Components. Dabei
            spielt die Datenverwaltung und effektives State Management (Redux)
            zusammen mit dem sinnvollen Schneiden von Komponenten und der
            Realisierbarkeit einer guten Testbarkeit/Testautomatisierung eine
            zentrale Rolle
          </p> */}
        </div>

        <div>
          <h3>Web Accessibility</h3>
          <h4>Inklusives Design, barrierefreie Navigation, WCAG-Standards</h4>
          <p>
            Wir integrieren Barrierefreiheit von Anfang an, indem wir
            WCAG-Standards anwenden, klare Navigationsstrukturen und
            barrierefreie Inhalte entwickeln, um eine inklusive Nutzung für alle
            zu gewährleisten.
          </p>
          {/*<h3>Smart Contracts, DeFi, Ethereum, NFT</h3>
          <p>
            Professionelle Dienstleistungen rund um die Themen Blockchain und
            Smart Contracts. Wir entwickeln Web3 Anwendungen welche auf Etherum
            basieren.
          </p>
          <div className='flex items-center'>
            <div className={s.icon}></div>
            <h2 className='uppercase'>Web 3 & Blockchain</h2>
          </div>
          <h2 className='uppercase'></h2>
          <p>
            Wir integrieren Barrierefreiheit von Anfang an, indem wir
            WCAG-Standards anwenden, klare Navigationsstrukturen und
            barrierefreie Inhalte entwickeln, um eine inklusive Nutzung für alle
            zu gewährleisten.
          </p>
           <h3>Smart Contracts, DeFi, Ethereum, NFT</h3>
          <p>
            Professionelle Dienstleistungen rund um die Themen Blockchain und
            Smart Contracts. Wir entwickeln Web3 Anwendungen welche auf Etherum
            basieren.
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Skills;
