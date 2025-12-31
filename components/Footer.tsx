
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-slate-800 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-8 md:mb-0">
            <div className="w-12 h-12 flex items-center justify-center rounded-full border border-teal-500/20 p-2 bg-slate-900 shadow-inner">
              <img 
                src="logo.png" 
                alt="SH3RiF AI HUB Logo" 
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.currentTarget.src = "https://placehold.co/40x40/020617/5eead4?text=S";
                }}
              />
            </div>
            <span className="font-heading font-bold text-lg tracking-tight">SH3RiF AI HUB</span>
          </div>
          
          <div className="flex space-x-8 text-sm text-slate-500">
            <a href="#" className="hover:text-teal-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-teal-400 transition-colors">Terms of Service</a>
            <a href="https://www.linkedin.com/in/angole-sharif-abubakar" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors">LinkedIn</a>
          </div>
          
          <div className="mt-8 md:mt-0 text-sm text-slate-600">
            &copy; {new Date().getFullYear()} SH3RiF AI HUB. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
