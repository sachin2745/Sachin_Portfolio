import React from 'react';
import './Preloader.css';

const Preloader = () => {
  return (
    <div className="preloader fixed inset-0 flex items-center justify-center  bg-black z-50">
      <div className="text-6xl font-bold b text-primary">
        <span className="animate-letter">S</span>
        <span className="animate-letter">a</span>
        <span className="animate-letter">c</span>
        <span className="animate-letter">h</span>
        <span className="animate-letter">i</span>
        <span className="animate-letter">n</span>
        <span className="animate-letter">.</span>
      </div>
    </div>
  );
};

export default Preloader;
