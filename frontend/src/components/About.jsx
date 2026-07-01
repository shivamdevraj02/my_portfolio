const stats = [
  { num: "4+", label: "Projects shipped" },
  { num: "2+", label: "Hackathon built" },
  { num: "10mo", label: "T&P Coordinator" },
  { num: "AI/ML", label: "Current focus" },
];

const journey = [
  { icon: "1", title: "Started with Frontend", desc: "HTML, CSS, Tailwind, Bootstrap, React — built the visual side first." },
  { icon: "2", title: "Went Deep on Backend", desc: "Node.js, Express, MongoDB — APIs, auth, databases, deployment." },
  { icon: "3", title: "Hackathon Experience", desc: "Built PrepMate with a team under pressure — shipped and deployed." },
  { icon: "4", title: "Now: AI/ML Transition", desc: "Python & NumPy started. Goal: ML engineering combining backend + intelligence." },
];

export default function About({ dark }) {
  const card = `rounded-xl border p-5 transition-all duration-200 hover:border-blue-400
    ${dark ? "bg-[#0f1521] border-white/5" : "bg-white border-gray-100 shadow-sm"}`;

  return (
    <section id="about" className={`py-24 px-4 ${dark ? "bg-[#0a0e17]" : "bg-gray-50"}`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-2">
      
          <span className="mono text-xs text-blue-400 tracking-widest uppercase">About</span>
        </div>
        <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight mb-1 ${dark ? "text-white" : "text-gray-900"}`}>
          Who I Am
        </h2>
        <div className="w-12 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 rounded mb-10" />

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left: text + stats */}
          <div>
            <p className="text-gray-400 leading-relaxed mb-4 text-sm sm:text-base">
              I'm <strong className={dark ? "text-white font-semibold" : "text-gray-800 font-semibold"}>Shivam Devraj</strong>, a computer engineering student at{" "}
              <strong className={dark ? "text-white font-semibold" : "text-gray-800 font-semibold"}>Government Engineering College, Siwan</strong> with a strong foundation in full-stack and backend development.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4 text-sm sm:text-base">
              I've built production-grade web applications using Node.js, Express, and MongoDB — and now I'm deliberately pivoting into{" "}
              <strong className="text-blue-400 font-semibold">AI/ML engineering</strong>, combining my backend instincts with data science fundamentals.
            </p>
            <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
              As a <strong className={dark ? "text-white font-semibold" : "text-gray-800 font-semibold"}>Student Coordinator at the T&P Cell</strong>, I work closely with peers on career preparation and industry connections — sharpening communication skills alongside technical growth.
            </p>

            <div className="grid grid-cols-2 gap-3 mt-7">
              {stats.map((s) => (
                <div key={s.label} className={card}>
                  <div className="mono text-2xl font-semibold text-blue-400 leading-none">{s.num}</div>
                  <div className="text-gray-400 text-xs mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: journey */}
          <div className={`rounded-xl border p-6 ${dark ? "bg-[#0f1521] border-white/5" : "bg-white border-gray-100 shadow-sm"}`}>
            <p className="mono text-xs text-purple-400 tracking-widest uppercase mb-5">My Journey</p>
            {journey.map((j, i) => (
              <div key={i} className="flex gap-3 mb-5 last:mb-0">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-base flex-shrink-0 mt-0.5
                  border ${dark ? "bg-blue-400/10 border-white/5" : "bg-blue-50 border-blue-100"}`}>
                  {j.icon}
                </div>
                <div>
                  <p className={`text-sm font-semibold mb-0.5 ${dark ? "text-white" : "text-gray-800"}`}>{j.title}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{j.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
