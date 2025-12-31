
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    }, 1500);
  };

  return (
    <div className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-500/30 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-teal-400 mb-4">Initialize Contact</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold mb-8">Ready to secure your startup's future?</h3>
            <p className="text-slate-400 text-lg mb-12 max-w-md">
              Whether you need a full cybersecurity audit or custom AI workflows, we're ready to deploy.
            </p>
            
            <div className="space-y-10">
              <div className="flex items-center space-x-6 group">
                <div className="w-14 h-14 rounded-full bg-slate-900 flex items-center justify-center text-teal-400 border border-slate-800 group-hover:border-teal-400 transition-all duration-300 shadow-lg">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-slate-500 text-xs uppercase font-bold tracking-widest mb-1">Direct Communication</div>
                  <a href="mailto:sharifidris8@gmail.com" className="text-xl text-slate-100 hover:text-teal-400 transition-colors font-medium">sharifidris8@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center space-x-6 group">
                <div className="w-14 h-14 rounded-full bg-slate-900 flex items-center justify-center text-teal-400 border border-slate-800 group-hover:border-teal-400 transition-all duration-300 shadow-lg">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-slate-500 text-xs uppercase font-bold tracking-widest mb-1">Global Support</div>
                  <a href="tel:+256765721427" className="text-xl text-slate-100 hover:text-teal-400 transition-colors font-medium">+256 765 721427</a>
                </div>
              </div>
              
              <div className="flex items-center space-x-6 group">
                <div className="w-14 h-14 rounded-full bg-slate-900 flex items-center justify-center border border-slate-800 group-hover:border-teal-400 transition-all duration-300 shadow-lg overflow-hidden p-3">
                  <img 
                    src="logo.png" 
                    alt="SH3RiF Logo" 
                    className="w-full h-full object-contain rounded-full" 
                    onError={(e) => {
                      e.currentTarget.src = "https://placehold.co/100x100/020617/2dd4bf?text=S";
                    }}
                  />
                </div>
                <div>
                  <div className="text-slate-500 text-xs uppercase font-bold tracking-widest mb-1">Professional Network</div>
                  <a href="https://www.linkedin.com/in/angole-sharif-abubakar" target="_blank" rel="noopener noreferrer" className="text-xl text-teal-400 hover:text-teal-300 transition-colors font-bold underline decoration-teal-500/30">Connect on LinkedIn</a>
                </div>
              </div>
            </div>
          </div>

          <div className="glass p-8 md:p-12 rounded-[2rem] shadow-2xl relative">
            {status === 'success' && (
              <div className="absolute inset-0 z-20 flex items-center justify-center bg-slate-950/95 rounded-[2rem]">
                <div className="text-center animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(45,212,191,0.4)]">
                    <svg className="w-10 h-10 text-slate-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-3xl font-heading font-bold mb-3">Transmission Successful</h4>
                  <p className="text-slate-400">Our concierge will contact you within 24 hours.</p>
                </div>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-teal-400/70 ml-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="E.g. Jane Foster"
                    className="w-full px-6 py-4 bg-slate-950/50 border border-slate-800 rounded-2xl focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/50 outline-none transition-all placeholder:text-slate-700"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-teal-400/70 ml-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="jane@founder.co"
                    className="w-full px-6 py-4 bg-slate-950/50 border border-slate-800 rounded-2xl focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/50 outline-none transition-all placeholder:text-slate-700"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-teal-400/70 ml-1">Message Details</label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={5}
                  placeholder="What challenges is your startup facing?"
                  className="w-full px-6 py-4 bg-slate-950/50 border border-slate-800 rounded-2xl focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/50 outline-none transition-all resize-none placeholder:text-slate-700"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-5 bg-teal-500 text-slate-950 font-bold rounded-2xl hover:bg-teal-400 disabled:opacity-50 transition-all shadow-xl font-heading text-lg tracking-wide group"
              >
                {status === 'sending' ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-slate-950" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Establishing Link...
                  </span>
                ) : 'Securely Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
