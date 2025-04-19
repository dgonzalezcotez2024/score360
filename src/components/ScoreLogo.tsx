
import React from 'react';

interface ScoreLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const ScoreLogo: React.FC<ScoreLogoProps> = ({ className = "", size = "md" }) => {
  const sizeClasses = {
    sm: "h-8",
    md: "h-12",
    lg: "h-16"
  };

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className={`flex items-center ${sizeClasses[size]}`}>
        <img 
          src="/lovable-uploads/c7ca8d55-775c-4649-a0ec-94f941b07d34.png" 
          alt="Score Logo" 
          className="h-full"
        />
      </div>
    </div>
  );
};

export default ScoreLogo;
