
import React from 'react';

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative pt-32 pb-20 md:pt-48 md:pb-40 overflow-hidden">
      {/* High-end realistic background image with overlay */}
      <div className="absolute inset-0 -z-20">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
          alt="Modern Tech Office" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950"></div>
      </div>
      
      {/* Ambient glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-cyan-500/5 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center px-4 py-1.5 mb-8 rounded-full border border-teal-500/20 bg-teal-500/5 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-teal-500 mr-3 animate-pulse"></span>
          <span className="text-xs font-semibold uppercase tracking-widest text-teal-400">Scaling Smart Startups</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-6 tracking-tight">
          Smart AI, <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-teal-300 to-cyan-400">
            Cybersecurity & Automation
          </span>
          <br /> for Founders
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">
          Empowering modern startups with enterprise-grade AI intelligence and iron-clad security. Focus on growth while we handle the digital infrastructure.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => scrollToSection('contact')}
            className="w-full sm:w-auto px-10 py-4 bg-teal-500 text-slate-950 rounded-full font-bold text-lg hover:bg-teal-400 transition-all duration-300 neon-glow"
          >
            Get Started
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="w-full sm:w-auto px-10 py-4 border border-slate-700 text-slate-300 rounded-full font-bold text-lg hover:border-teal-500/50 hover:text-teal-400 transition-all duration-300"
          >
            Explore Services
          </button>
        </div>

        {/* Stats / Proof */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto pt-12 border-t border-slate-800">
          <div>
            <div className="text-3xl font-heading font-bold text-teal-400">50+</div>
            <div className="text-slate-500 text-sm mt-1">Startups Scaled</div>
          </div>
          <div>
            <div className="text-3xl font-heading font-bold text-teal-400">99%</div>
            <div className="text-slate-500 text-sm mt-1">Security Score</div>
          </div>
          <div>
            <div className="text-3xl font-heading font-bold text-teal-400">10k+</div>
            <div className="text-slate-500 text-sm mt-1">Hours Automated</div>
          </div>
          <div>
            <div className="text-3xl font-heading font-bold text-teal-400">24/7</div>
            <div className="text-slate-500 text-sm mt-1">AI Monitoring</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
