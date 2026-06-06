import React from 'react';
import Hero from '../components/Hero';
import Foundation from '../components/Foundation';
import JudgesCycle from '../components/JudgesCycle';
import LiberatorsGallery from '../components/LiberatorsGallery';
import MonarchyTransition from '../components/MonarchyTransition';
import Header from '../components/Header';
import Footer from '../components/Footer';

const JudgesPage = () => {
  return (
    <div className="bg-bg min-h-screen">
      <Header />

      {/* Main Content */}
      <main>
        <Hero />
        <Foundation />
        <JudgesCycle />
        <LiberatorsGallery />
        <MonarchyTransition />
      </main>

      <Footer />
    </div>
  );
};

export default JudgesPage;
