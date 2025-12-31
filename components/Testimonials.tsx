
import React from 'react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Mariam & Peers',
    role: 'Collaborative Partners',
    company: 'ALX Projects',
    content: "Sharif was the backbone of our ALX projects. Whether tackling cybersecurity labs or building VA workflows, he brought clarity and smart tools to the table. He helped us stay secure and productive under tight deadlines.",
    avatar: ''
  },
  {
    id: 't2',
    name: 'Daniel K.',
    role: 'Cybersecurity Analyst',
    company: 'ALX Alumni',
    content: "His leadership in cybersecurity labs ensured our project architectures were secure from the ground up. Sharif's technical support and structural thinking are exactly what founders need.",
    avatar: ''
  },
  {
    id: 't3',
    name: 'Nana & Pesh',
    role: 'Startup Founders',
    company: 'ALX Cohort',
    content: "The virtual assistant workflows Sharif designed saved our team hours of coordination. His ability to integrate smart digital tools and maintain clarity is a game-changer for any scaling team.",
    avatar: ''
  }
];

const Testimonials: React.FC = () => {
  return (
    <div className="py-24 bg-slate-900/30 overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-teal-500/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-teal-400 mb-4">Social Proof</h2>
          <h3 className="text-4xl font-heading font-bold mb-4">Trusted by Collaborative Teams</h3>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Real feedback from partners and classmates who have experienced the SH3RiF advantage firsthand.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="p-8 rounded-3xl bg-slate-950 border border-slate-800 flex flex-col justify-between hover:border-teal-500/30 transition-colors duration-300">
              <div>
                <div className="flex text-teal-500 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-300 italic mb-8 leading-relaxed">"{t.content}"</p>
              </div>
              <div className="flex items-center pt-6 border-t border-slate-900">
                <div className="w-10 h-10 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-400 mr-4 border border-teal-500/20">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-slate-100">{t.name}</div>
                  <div className="text-xs text-slate-500">{t.role}</div>
                  <div className="text-[10px] text-teal-400 font-bold uppercase tracking-widest">{t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
