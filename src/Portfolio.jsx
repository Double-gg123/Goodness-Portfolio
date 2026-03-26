import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';

const Portfolio = () => (
  <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-emerald-100 selection:text-emerald-900 overflow-x-hidden relative">
    
    {/* Navigation & Hero */}
    <Header /> 

    <main className="relative">
      {/* Narrative Section */}
      <div className="max-w-7xl mx-auto py-24 px-6">
        <About />
      </div>

      {/* Skills Section - Soft Contrast */}
      <div className="bg-slate-50/80 border-y border-slate-100 py-32">
        <div className="max-w-7xl mx-auto px-6">
          <Skills />
        </div>
      </div>
      
      {/* Experience Section */}
      <div className="max-w-7xl mx-auto py-32 px-6">
        <Experience /> 
      </div>

      {/* Projects Section */}
      <div className="bg-white py-32 border-t border-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <Projects />
        </div>
      </div>

      {/* Education - Premium Refined Block */}
      <section id="education" className="max-w-5xl mx-auto px-6 mb-40">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition duration-1000"></div>
          
          <div className="relative bg-white border border-slate-100 rounded-[2.5rem] p-8 md:p-12 shadow-sm hover:shadow-xl hover:border-emerald-100/50 transition-all duration-500 overflow-hidden">
            <div className="absolute top-0 right-0 p-8 text-[120px] font-black text-slate-50 select-none pointer-events-none leading-none">25</div>
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-12">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-8 h-px bg-emerald-500/30"></span>
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-600">Academic Background</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tighter leading-tight">
                  Bachelor of Arts in <span className="text-emerald-600">Psychology</span>
                </h3>
                <p className="text-lg text-slate-500 font-medium mt-2">Mount Kenya University • Dec 2025</p>
                <div className="mt-8 flex gap-3">
                  <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-[10px] font-black uppercase tracking-widest rounded-md border border-emerald-100">Behavioral Science</span>
                  <span className="px-3 py-1 bg-slate-50 text-slate-600 text-[10px] font-black uppercase tracking-widest rounded-md border border-slate-100">Cognitive Research</span>
                </div>
              </div>
              <div className="w-full md:w-80 bg-slate-900 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
                <p className="text-emerald-400 text-[9px] font-black uppercase tracking-[0.3em] mb-4">Specialization</p>
                <h4 className="text-white text-xl font-bold leading-tight mb-4">Human-Computer Interaction</h4>
                <p className="text-slate-400 text-xs leading-relaxed">Applying cognitive load theories to architect superior digital systems and intuitive UI performance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    {/* Footer */}
    <footer className="py-24 bg-[#010409] text-white border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="text-center md:text-left">
          <h4 className="text-3xl font-black tracking-tighter"> GOODNESS <span className="text-emerald-500">GIBENDI</span></h4>
          <p className="text-slate-500 text-[10px] font-bold tracking-[0.4em] uppercase mt-2">Systems Architect • Frontend Engineer</p>
        </div>
        <div className="flex flex-col items-center md:items-end gap-6">
          <a href="mailto:gibendigoodness@gmail.com?subject=Project Inquiry" className="group text-xl font-bold tracking-tight text-white hover:text-emerald-400 transition-all">
            Let's build something <span className="underline decoration-emerald-500/30 group-hover:decoration-emerald-400 underline-offset-8">together</span> →
          </a>
          <div className="text-slate-600 text-[9px] font-black tracking-[0.5em] uppercase">Thika, Kenya • 2026</div>
        </div>
      </div>
    </footer>
  </div>
);

export default Portfolio;