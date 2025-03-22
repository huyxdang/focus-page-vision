
import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <section className="pt-16 md:pt-24 pb-16 md:pb-24 w-full">
      <div className="layout-container">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6 text-center sm:text-left animate-fade-up" style={{ animationDelay: '200ms' }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Meet Feynman,<br />
              your personal AI tutor
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 mt-4 max-w-2xl">
              Genesis makes learning easy — using voice interaction and visual 
              walkthroughs to simplify complex concepts in real time.
            </p>
            
            <div className="mt-8 sm:mt-10">
              <Link 
                to="/login" 
                className="btn-primary inline-block animate-button-glow text-lg"
              >
                Start Learning
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
