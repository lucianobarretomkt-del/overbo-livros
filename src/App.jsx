import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import JudgesPage from './pages/JudgesPage';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/juizes" element={<JudgesPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
