import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left Side: The "Identity" Statement */}
          <div className="lg:w-1/2">
            <h2 className="text-emerald-600 font-black uppercase tracking-widest text-sm mb-4">
              Professional Profile
            </h2>
            <h3 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight tracking-tighter">
              Engineering with <br />
              <span className="text-emerald-500 italic">Human Insight.</span>
            </h3>
            <div className="h-2 w-24 bg-emerald-500 mt-8 rounded-full"></div>
            
            {/* Quick Fact Badges */}
            <div className="mt-12 flex gap-4">
               <div className="px-4 py-2 bg-slate-50 border border-slate-100 rounded-lg text-slate-500 text-xs font-bold uppercase tracking-widest">
                 Psychology Grad
               </div>
               <div className="px-4 py-2 bg-emerald-50 border border-emerald-100 rounded-lg text-emerald-700 text-xs font-bold uppercase tracking-widest">
                 Systems Architect
               </div>
            </div>
          </div>

          {/* Right Side: The Narrative */}
          <div className="lg:w-1/2">
            <div className="space-y-6">
              <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-medium">
                I am a <span className="text-emerald-600 font-bold underline decoration-2 underline-offset-8">Frontend Engineer</span> specializing in responsive, data-driven interfaces.
              </p>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                My approach is unique: I leverage my background in <span className="font-semibold text-slate-900">Psychology</span> to build intuitive dashboards and visualization components using <span className="text-slate-900 font-medium">React, Vite, and Tailwind CSS.</span>
              </p>

              <p className="text-lg text-slate-600 leading-relaxed">
                I don't just write code; I perform <span className="italic">behavioral analysis</span> to ensure every pixel enhances user engagement and simplifies complex data systems.
              </p>

              {/* Call to Action or Signature */}
              <div className="pt-8 flex items-center gap-4 border-t border-slate-100">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold">
                  GG
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900 uppercase tracking-widest">Goodness Gibendi</p>
                  <p className="text-xs text-slate-400 font-medium">Solving problems through Code & Cognition</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;