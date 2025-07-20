
import React from 'react';

export const Footer = ({ name }) => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-gray-400">
          © {new Date().getFullYear()} {name}. Built with React & TailwindCSS
        </p>
      </div>
    </footer>
  );
};
