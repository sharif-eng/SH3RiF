
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="py-24 bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative z-10 rounded-3xl overflow-hidden border border-teal-500/20 shadow-2xl group">
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200" 
                alt="Cybersecurity and AI Technology" 
                className="w-full aspect-square md:aspect-video object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent"></div>
              
              {/* Founder Profile Card Overlay */}
              <div className="absolute bottom-6 left-6 right-6 glass p-4 rounded-2xl flex items-center space-x-4 border-teal-500/30">
                <div className="w-14 h-14 rounded-full border-2 border-teal-400 p-1 bg-slate-950 flex-shrink-0">
                   <img 
                    src="logo.png" 
                    alt="SH3RiF Logo" 
                    className="w-full h-full object-contain rounded-full" 
                    onError={(e) => {
                      e.currentTarget.src = "https://placehold.co/100x100/020617/2dd4bf?text=S";
                    }}
                   />
                </div>
                <div className="overflow-hidden">
                  <div className="text-white font-heading font-bold text-lg truncate">Angole Sharif Abubakar</div>
                  <div className="text-teal-400 text-xs font-bold uppercase tracking-widest flex items-center">
                    <span className="w-2 h-2 bg-teal-500 rounded-full mr-2 animate-pulse"></span>
                    Founder & Lead Architect
                  </div>
                </div>
              </div>
            </div>
            
            {/* HUD Decoration */}
            <div className="absolute -top-6 -left-6 w-32 h-32 border-t-2 border-l-2 border-teal-500/30 rounded-tl-3xl -z-10 hidden md:block"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-teal-500/30 rounded-br-3xl -z-10 hidden md:block"></div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-teal-400 mb-4 inline-block border-b border-teal-500/30 pb-1">The Mission</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold mb-8 leading-tight">
              Scaling Startups with <span className="text-teal-400">Intelligence</span> & <span className="text-cyan-400">Security</span>.
            </h3>
            <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
              <p>
                Founded by <span className="text-slate-100 font-semibold">Angole Sharif Abubakar</span>, SH3RiF AI HUB was built to eliminate the technical friction that slows down visionaries.
              </p>
              <p>
                We provide the digital backbone for modern founders, merging high-performance AI automation with enterprise-grade cybersecurity labs. Our approach ensures that as you scale, your data remains yours and your operations remain effortless.
              </p>
              <div className="pt-6">
                <a 
                  href="https://www.linkedin.com/in/angole-sharif-abubakar" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-3 rounded-full bg-slate-800 text-teal-400 border border-teal-500/20 hover:bg-teal-500 hover:text-slate-950 font-bold transition-all group neon-glow"
                >
                  View Founder Profile
                  <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
