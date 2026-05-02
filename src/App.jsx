import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import JudgesPage from './pages/JudgesPage';

function App() {
  return (
    <BrowserRouter basename="/livros">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/juizes" element={<JudgesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
