import React from 'react';
import './styles/globals.css';
import Start from './pages/Start/Start';

const App = () => {
  const websiteIsAvailable = false;
  return (
    <div>
      {websiteIsAvailable ? (
        <Start />
      ) : (
        <div>
          <h1>
            <center>ahipara.de</center>
          </h1>
          <h2>
            <center>Wir gestalten gerade um.</center>
          </h2>
          <p>
            <center>
              Bitte schauen Sie bald wieder vorbei für aktuelle Informationen.
              <br />
              Vielen Dank für Ihr Verständnis!
            </center>
          </p>
        </div>
      )}
    </div>
  );
};

export default App;
