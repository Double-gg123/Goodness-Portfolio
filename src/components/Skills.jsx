import React from 'react';

const Skills = () => {
  const skillGroups = [
    {
      category: "Engineering",
      icon: "⚡",
      skills: ["React", "JavaScript", "Tailwind CSS", "PHP / Laravel", "Python", "Vite"]
    },
    {
      category: "Systems Architecture",
      icon: "⚙️",
      skills: ["Workflow Automation", "Shopify Flow", "CRM Integrations", "API Management", "Mailchimp"]
    },
    {
      category: "UX & Psychology",
      icon: "🧠",
      skills: ["HCI Principles", "User Behavior", "Figma", "Prototyping", "Responsive Design"]
    },
    {
      category: "Operations",
      icon: "💼",
      skills: ["Virtual Assistance", "Project Management", "Technical Support", "Client Relations"]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-white border-t border-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header Structure */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-emerald-600 font-black uppercase tracking-[0.2em] text-sm mb-3">
              Technical Stack
            </h2>
            <h3 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tighter">
              Tools <span className="text-emerald-500">&</span> Expertise
            </h3>
          </div>
          <p className="text-slate-500 font-medium md:text-right max-w-xs text-lg leading-snug">
            Combining psychological insights with robust engineering.
          </p>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillGroups.map((group, i) => (
            <div 
              key={i} 
              className="group p-8 bg-slate-50/50 rounded-[2rem] border border-slate-100 hover:bg-white hover:border-emerald-200 hover:shadow-2xl transition-all duration-500"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="p-4 bg-white rounded-2xl shadow-sm group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 text-3xl">
                  {group.icon}
                </div>
                <span className="text-xs font-black text-slate-300 group-hover:text-emerald-300 tracking-widest uppercase">
                  0{i + 1}
                </span>
              </div>

              <h4 className="text-2xl font-bold text-slate-900 mb-6 tracking-tight">
                {group.category}
              </h4>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, index) => (
                  <span 
                    key={index} 
                    className="px-4 py-2 bg-white text-slate-600 text-xs font-bold uppercase tracking-wider rounded-xl border border-slate-100 group-hover:border-emerald-100 group-hover:text-emerald-700 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;