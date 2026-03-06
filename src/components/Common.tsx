import React from 'react';
import { motion } from 'motion/react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Section: React.FC<SectionProps> = ({ children, className = "", id }) => {
  return (
    <section id={id} className={`py-20 px-6 md:px-12 lg:px-24 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
};

export const Button: React.FC<{
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  onClick?: () => void;
}> = ({ children, variant = 'primary', className = "", onClick }) => {
  const baseStyles = "px-8 py-3 rounded-full font-bold transition-all duration-300 text-sm uppercase tracking-widest";
  const variants = {
    primary: "bg-primary text-white hover:bg-accent hover:text-primary shadow-md hover:shadow-lg",
    secondary: "bg-secondary text-white hover:bg-accent hover:text-primary shadow-md hover:shadow-lg",
    outline: "border-2 border-primary text-warm-text hover:bg-primary hover:text-white"
  };

  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};
