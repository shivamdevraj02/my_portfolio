// ✏️ EDIT HERE — apni skills aur levels update kar
const skillCategories = [
  {
    label: " Frontend",
    skills: [
      { name: "HTML & CSS", level: 90 },
      { name: "Tailwind CSS", level: 82 },
      { name: "Bootstrap", level: 80 },
      { name: "JavaScript", level: 78 },
      { name: "React", level: 70 },
    ],
  },
  {
    label: " Backend",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 80 },
      { name: "MongoDB", level: 75 },
      { name: "REST APIs", level: 78 },
    ],
  },
  {
    label: " AI / ML",
    learning: true,
    skills: [
      { name: "Python", level: 35 },
      { name: "NumPy", level: 25 },
      { name: "Pandas", level: 15 },
      { name: "ML Fundamentals", level: 20 },
    ],
  },
];

export default function Skills({ dark }) {
  return (
    <section id="skills" className={`py-24 px-4 ${dark ? "bg-[#0f1521]" : "bg-white"}`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-2">
          {/* <div className="w-5 h-px bg-blue-400" /> */}
          <span className="mono text-xs text-blue-400 tracking-widest uppercase">Skills</span>
        </div>
        <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight mb-1 ${dark ? "text-white" : "text-gray-900"}`}>
          Tech Stack
        </h2>
        <div className="w-12 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 rounded mb-10" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat) => (
            <div key={cat.label}
              className={`rounded-xl border p-5 transition-all duration-200 hover:border-blue-400 hover:-translate-y-1
                ${dark ? "bg-[#0a0e17] border-white/5" : "bg-gray-50 border-gray-100"}`}>
              <div className="flex items-center gap-2 mb-4">
                <p className="mono text-xs text-blue-400 tracking-widest uppercase">{cat.label}</p>
                {cat.learning && (
                  <span className="mono text-xs text-purple-400 bg-purple-400/10 px-1.5 py-0.5 rounded">learning</span>
                )}
              </div>
              {cat.skills.map((s) => (
                <div key={s.name} className="flex items-center justify-between mb-3 last:mb-0">
                  <span className={`text-sm font-medium ${dark ? "text-gray-200" : "text-gray-700"}`}>{s.name}</span>
                  <div className={`w-24 h-1 rounded-full overflow-hidden ${dark ? "bg-blue-400/10" : "bg-gray-200"}`}>
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-blue-400 to-purple-500"
                      style={{ width: `${s.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
