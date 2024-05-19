import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center p-4">
      Powered by 
      <a href="https://opencagedata.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 mx-1">
        OpenCage API 
      </a> 
      and 
      <a href="https://sunrise-sunset.org/api" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 ml-1">
        Sunrise-Sunset API
      </a>
    </footer>
  );
}

export default Footer;
