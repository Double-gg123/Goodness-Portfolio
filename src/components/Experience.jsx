import React from 'react';

const Experience = () => {
  const experiences = [
    {
      company: "The Career Whisperer",
      role: "Systems and Integrations Architect",
      period: "Jan 2022 - Present",
      description: "Leading the architectural design of AI-powered ecosystems. I bridge the gap between technical complexity and human psychology to engineer high-conversion, behavior-driven workflows.",
      tags: ["AI Architect", "Systems Design", "Workflow Automation"]
    },
    {
      company: "The Career Whisperer",
      role: "Virtual Assistant",
      period: "2024",
      description: "Orchestrated digital administrative operations and technical support. Specialized in streamlining communication channels and data integrity in high-velocity environments.",
      tags: ["Operations", "SaaS Strategy", "Technical Support"]
    },
    {
      company: "Mount Kenya University",
      role: "Psychology & HCI Research",
      period: "Graduated Dec 2025",
      description: "Focused on Human-Computer Interaction (HCI). Developed a community-centric web platform as a final project, utilizing behavioral research to optimize user retention and accessibility.",
      tags: ["HCI Research", "UX Strategy", "Behavioral Design"]
    }
  ];

  return (
    <section id="experience" className="py-32 bg-white relative overflow-hidden">
      {/* Decorative Background Element for Premium feel */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-50/50 rounded-full blur-3xl -mr-48 -mt-48"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-emerald-600 font-black uppercase tracking-[0.4em] text-xs mb-4">
              Career Journey
            </h2>
            <h3 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tighter leading-none">
              Professional <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Experience.</span>
            </h3>
          </div>
          <p className="text-slate-400 font-medium text-lg md:text-right max-w-xs leading-snug">
            A track record of blending engineering precision with psychological insight.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-100 ml-4 md:ml-0">
          {experiences.map((exp, index) => (
            <div key={index} className="group mb-20 last:mb-0 relative pl-10 md:pl-16">
              
              {/* Premium Timeline Node */}
              <div className="absolute -left-[11px] top-2 w-5 h-5 rounded-full bg-white border-2 border-slate-200 group-hover:border-emerald-500 group-hover:bg-emerald-500 transition-all duration-500 shadow-sm group-hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]"></div>
              
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_2.5fr] gap-8">
                
                {/* Side Info */}
                <div className="pt-2">
                  <span className="text-sm font-black text-slate-400 uppercase tracking-widest group-hover:text-emerald-600 transition-colors">
                    {exp.period}
                  </span>
                  <p className="text-xl font-bold text-slate-900 mt-2">{exp.company}</p>
                </div>

                {/* Content Card */}
                <div className="bg-slate-50/30 p-10 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:border-emerald-200 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] transition-all duration-700 relative">
                  <h4 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">
                    {exp.role}
                  </h4>
                  
                  <p className="text-slate-600 text-lg leading-relaxed mb-8">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-3 pt-6 border-t border-slate-200/50">
                    {exp.tags.map((tag, tIndex) => (
                      <span key={tIndex} className="text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 bg-white text-slate-500 rounded-xl border border-slate-100 group-hover:border-emerald-100 group-hover:text-emerald-700 transition-all">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;