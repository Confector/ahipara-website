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

          <center>
            We're under construction. Please check back for an update soon.
          </center>
        </div>
      )}
    </div>
  );
};

export default App;
