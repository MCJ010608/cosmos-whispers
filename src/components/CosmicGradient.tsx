
import React from 'react';

const CosmicGradient: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden">
      {/* Deep space base */}
      <div className="absolute inset-0 bg-cosmic-deep-space"></div>
      
      {/* Animated nebula */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 rounded-full bg-cosmic-nebula-purple blur-[100px] animate-float-slow"></div>
        <div className="absolute bottom-1/3 right-1/3 w-1/3 h-1/3 rounded-full bg-cosmic-nebula-blue blur-[80px] animate-float-medium"></div>
      </div>
      
      {/* Distant galaxy elements */}
      <div className="absolute top-1/5 right-1/4 w-32 h-32 rounded-full bg-cosmic-aurora-blue opacity-20 blur-[50px] animate-pulse-light"></div>
      <div className="absolute bottom-1/5 left-1/5 w-40 h-40 rounded-full bg-cosmic-aurora-green opacity-10 blur-[70px] animate-pulse-light"></div>
      
      {/* Subtle cosmic dust */}
      <div className="absolute inset-0 bg-black opacity-30 mix-blend-overlay"></div>
    </div>
  );
};

export default CosmicGradient;
