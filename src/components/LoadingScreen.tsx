import React from 'react';

interface LoadingScreenProps {
  message?: string;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ message = "Loading..." }) => {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <div className="text-center">
        <div className="mb-8 animate-pulse">
          <img 
            src="/wyvern-logo.png" 
            alt="Wyvern Audit" 
            className="h-24 w-auto mx-auto object-contain"
            style={{ minWidth: '200px' }}
          />
        </div>
        
        {/* Loading spinner */}
        <div className="flex justify-center mb-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
        </div>
        
        <p className="text-gray-600 text-lg font-medium">{message}</p>
      </div>
    </div>
  );
};

export default LoadingScreen;