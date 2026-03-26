import React from 'react';

const Projects = () => {
  const allProjects = [
    {
      name: "Lumen-ra",
      desc: "Engineered a secure web application featuring a custom authentication system and dynamic user dashboards. Applied HCI and cognitive principles to ensure an accessible, human-centric user experience.",
      tech: ["React", "HCI", "Auth Systems", "Git"]
    },
    {
      name: "Freelancer Platform",
      desc: "Developed a multi-step registration flow with a custom quiz component and functional timer. Optimized state management for complex user inputs and real-time validation.",
      tech: ["React", "State Management", "Validation"]
    },
    {
      name: "The Career Whisperer",
      desc: "Designed and launched the official website ensuring a professional visual layout and clear site structure for optimal user retention and smooth navigation.",
      tech: ["HTML5", "CSS3", "JavaScript"]
    },
    {
      name: "Task Management App",
      desc: "Refactored a vanilla JavaScript application into a modular React architecture. Implemented state-based tracking and completion status for high performance.",
      tech: ["React", "Refactoring", "Modular Design"]
    }
  ];

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header matching your Experience style */}
        <div className="mb-16">
          <h2 className="text-sm font-black uppercase tracking-[0.3em] text-emerald-600 mb-2">
            Technical Work
          </h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tighter">
            Featured <span className="text-emerald-500 italic">Projects.</span>
          </h3>
          <div className="h-1.5 w-20 bg-emerald-500 mt-6 rounded-full"></div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {allProjects.map((project, index) => (
            <div 
              key={index} 
              className="group bg-slate-50/50 p-8 rounded-[2rem] border border-slate-100 hover:bg-white hover:border-emerald-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <h4 className="text-2xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                    {project.name}
                  </h4>
                  <span className="text-2xl text-emerald-500/30 group-hover:text-emerald-500 transition-colors">
                    📂
                  </span>
                </div>
                
                <p className="text-slate-600 text-lg leading-relaxed mb-8 flex-grow">
                  {project.desc}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-200/50">
                  {project.tech.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-white text-slate-500 text-[10px] font-black uppercase tracking-widest rounded-lg border border-slate-200 group-hover:border-emerald-200 group-hover:text-emerald-600 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;