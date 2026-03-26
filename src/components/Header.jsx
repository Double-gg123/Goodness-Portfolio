import React from 'react';

const Header = () => {
  return (
    <header className="bg-[#0f172a] text-white py-24 px-6 border-b-4 border-emerald-500 shadow-2xl">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-12">
        
        {/* Left Side: Branding & Bold Headline */}
        <div className="text-center lg:text-left flex-1">
          <div className="inline-block px-4 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase tracking-[0.3em] mb-6">
            Systems Architect & Frontend Engineer
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-6">
            GOODNESS <br />
            <span className="text-emerald-400">GIBENDI</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 font-light max-w-xl leading-relaxed">
            Bridging complex software systems with 
            <span className="text-white font-medium"> human psychology</span>. 
            Designing interfaces that are as intuitive as they are powerful.
          </p>
        </div>
        
        {/* Right Side: High-Contrast Contact Card */}
        <div className="bg-slate-800/50 backdrop-blur-xl p-8 rounded-[2.5rem] border border-slate-700/50 shadow-2xl w-full md:w-[400px]">
          <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 mb-8">Direct Contact</h3>
          
          <ul className="space-y-6 text-sm md:text-base text-slate-300">
            <li className="flex items-center gap-4 group">
              <div className="p-3 bg-emerald-500/10 rounded-2xl group-hover:bg-emerald-500 group-hover:text-white transition-all">
                <span className="text-emerald-400 group-hover:text-white">📍</span>
              </div>
              <span className="font-medium">Thika, Kenya</span>
            </li>
            <li className="flex items-center gap-4 group">
              <div className="p-3 bg-emerald-500/10 rounded-2xl group-hover:bg-emerald-500 group-hover:text-white transition-all">
                <span className="text-emerald-400 group-hover:text-white">📞</span>
              </div>
              <span className="font-medium">+254 718 175283</span>
            </li>
            <li className="flex items-center gap-4 group">
              <div className="p-3 bg-emerald-500/10 rounded-2xl group-hover:bg-emerald-500 group-hover:text-white transition-all">
                <span className="text-emerald-400 group-hover:text-white">✉️</span>
              </div>
              <a href="mailto:gibendigoodness@gmail.com" className="hover:text-emerald-400 transition-colors font-medium">
                gibendigoodness@gmail.com
              </a>
            </li>
            
            {/* Social Action Grid */}
            <li className="flex gap-3 mt-8 pt-8 border-t border-slate-700/50">
              <a href="https://github.com/Double-gg123" target="_blank" rel="noreferrer" 
                 className="flex-1 text-center py-3 rounded-xl bg-slate-700 hover:bg-white hover:text-slate-900 font-black text-[10px] uppercase tracking-widest transition-all">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/goodness-gibendi/" target="_blank" rel="noreferrer" 
                 className="flex-1 text-center py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-black text-[10px] uppercase tracking-widest transition-all shadow-lg shadow-emerald-500/20">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;