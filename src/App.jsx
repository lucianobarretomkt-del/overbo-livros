import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import JudgesPage from './pages/JudgesPage';

function App() {
  return (
    <BrowserRouter basename="/overbo">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/livros/juizes" element={<JudgesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
