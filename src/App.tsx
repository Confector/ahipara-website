import React from 'react';
import '@/styles/globals.css';
import Start from '@/pages/Start/Start';
import WebsiteIsNotAvailable from '@/pages/Status/WebsiteNotAvailable';

const App = () => {
  const websiteIsAvailable = false;
  return (
    <div>{websiteIsAvailable ? <Start /> : <WebsiteIsNotAvailable />}</div>
  );
};

export default App;
