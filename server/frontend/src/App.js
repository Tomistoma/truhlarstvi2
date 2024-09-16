// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './Main';
import Dilna from './Dilna';
import Projekty from './Projekty';
import Kontakt from './Kontakt';
import Navbar from './Navbar';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/dilna" element={<Dilna />} />
        <Route path="/projekty" element={<Projekty />} />
        <Route path="/kontakt" element={<Kontakt />} />
      </Routes>
    </div>
  );
}

export default App;
