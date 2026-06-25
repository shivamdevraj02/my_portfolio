// ✏️ EDIT HERE — naye projects add karo yahan
const projects = [
  {
    icon: "🛒",
    name: "E-Commerce Platform",
    badge: null,
    desc: "A full-stack e-commerce web application with product listings, cart management, user authentication, and order flow — built and deployed independently.",
    stack: ["Node.js", "Express", "MongoDB", "React", "Tailwind"],
    live: "https://e-commerce-16sa.onrender.com",
    github: null, // GitHub link yahan daalo agar hai
  },
  {
    icon: "📚",
    name: "PrepMate",
    badge: "Hackathon",
    desc: "Smart Exam Preparation & Revision Assistant — built during a hackathon with a team. Features personalized learning paths, course management, progress tracking, and a global student community.",
    stack: ["Node.js", "Express", "MongoDB", "Team Project"],
    live: "https://code-vir-sje5.onrender.com",
    github: null,
  },
];

export default function Projects({ dark }) {
  return (
    <section id="projects" className={`py-24 px-4 ${dark ? "bg-[#0f1521]" : "bg-white"}`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-2">
       
          <span className="mono text-xs text-blue-400 tracking-widest uppercase">Projects</span>
        </div>
        <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight mb-1 ${dark ? "text-white" : "text-gray-900"}`}>
          Things I've Built
        </h2>
        <div className="w-12 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 rounded mb-10" />

        <div className="grid sm:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <div key={i}
              className={`rounded-xl border p-6 flex flex-col relative overflow-hidden
                transition-all duration-200 hover:border-blue-400 hover:-translate-y-1 group
                ${dark ? "bg-[#0a0e17] border-white/5" : "bg-gray-50 border-gray-100"}`}>
              {/* Top gradient line on hover */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex items-start justify-between mb-4">
                <span className="text-2xl">{p.icon}</span>
                <div className="flex gap-2">
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noreferrer"
                      className={`mono text-xs px-2 py-1 rounded border transition-all
                        hover:border-blue-400 hover:text-blue-400
                        ${dark ? "border-white/10 text-gray-400" : "border-gray-200 text-gray-500"}`}>
                      GitHub
                    </a>
                  )}
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer"
                      className={`mono text-xs px-2 py-1 rounded border transition-all
                        hover:border-blue-400 hover:text-blue-400
                        ${dark ? "border-white/10 text-gray-400" : "border-gray-200 text-gray-500"}`}>
                      ↗ Live
                    </a>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-2 mb-2">
                <p className={`font-semibold text-base ${dark ? "text-white" : "text-gray-900"}`}>{p.name}</p>
                {p.badge && (
                  <span className="mono text-xs text-purple-400 bg-purple-400/10 px-1.5 py-0.5 rounded">{p.badge}</span>
                )}
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">{p.desc}</p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {p.stack.map(t => (
                  <span key={t} className={`mono text-xs px-2 py-0.5 rounded
                    ${dark ? "bg-blue-400/10 text-blue-400" : "bg-blue-50 text-blue-600"}`}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
