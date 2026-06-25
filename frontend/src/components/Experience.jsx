// ✏️ EDIT HERE — naukri/internship add karna ho toh yahan add karo
const experiences = [
  {
    icon: "🏛️",
    role: "Student Coordinator — Training & Placement Cell",
    org: "Government Engineering College, Siwan",
    duration: "Sep 2025 – Present · 10 months",
    location: "Siwan, Bihar · On-site",
    desc: "Serving as Student Coordinator at the T&P Cell at GEC Siwan. Responsibilities include assisting in placement-related activities, coordinating with recruiters, and helping peers with career preparation and interview readiness.",
    tags: ["Coordination", "Placement Prep", "Recruiter Liaison", "Peer Mentoring"],
  },
];

export default function Experience({ dark }) {
  return (
    <section id="experience" className={`py-24 px-4 ${dark ? "bg-[#0a0e17]" : "bg-gray-50"}`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-2">
        
          <span className="mono text-xs text-blue-400 tracking-widest uppercase"> Experience</span>
        </div>
        <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight mb-1 ${dark ? "text-white" : "text-gray-900"}`}>
          Where I've Contributed
        </h2>
        <div className="w-12 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 rounded mb-10" />

        <div className="flex flex-col gap-5">
          {experiences.map((exp, i) => (
            <div key={i}
              className={`rounded-xl border p-6 grid sm:grid-cols-[auto_1fr] gap-5 transition-all hover:border-blue-400
                ${dark ? "bg-[#0f1521] border-white/5" : "bg-white border-gray-100 shadow-sm"}`}>
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0
                border ${dark ? "bg-blue-400/10 border-white/5" : "bg-blue-50 border-blue-100"}`}>
                {exp.icon}
              </div>
              <div>
                <p className={`text-base font-semibold mb-0.5 ${dark ? "text-white" : "text-gray-900"}`}>{exp.role}</p>
                <p className="text-blue-400 text-sm font-medium mb-2">{exp.org}</p>
                <div className="flex flex-wrap gap-4 mono text-xs text-gray-400 mb-3">
                  <span>📅 {exp.duration}</span>
                  <span>📍 {exp.location}</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{exp.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map(t => (
                    <span key={t} className={`mono text-xs px-2 py-0.5 rounded
                      ${dark ? "bg-blue-400/10 text-blue-400" : "bg-blue-50 text-blue-600"}`}>
                      {t}
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
}
