// ✏️ EDIT HERE — apne workflow steps update karo
const workflows = [
  {
    title: "⚙️ Backend API Development",
    steps: [
      { num: "01", strong: "Design the schema", text: "Model data in MongoDB, plan relationships and indexes." },
      { num: "02", strong: "Build REST endpoints", text: "Express routes, middleware, error handling." },
      { num: "03", strong: "Add auth & validation", text: "JWT, input sanitization, security headers." },
      { num: "04", strong: "Deploy & test", text: "Render/Vercel, Postman API testing, iterate." },
    ],
  },
  {
    title: "🤖 ML Learning Workflow",
    steps: [
      { num: "01", strong: "Theory first", text: "Understand the concept, math intuition behind algorithms." },
      { num: "02", strong: "Code from scratch", text: "Implement in NumPy before using high-level libraries." },
      { num: "03", strong: "Apply to real data", text: "Use public datasets, experiment, observe results." },
      { num: "04", strong: "Build a project", text: "Turn every concept into something deployable and shareable." },
    ],
  },
];

export default function Workflows({ dark }) {
  return (
    <section id="workflows" className={`py-24 px-4 ${dark ? "bg-[#0f1521]" : "bg-white"}`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-5 h-px bg-blue-400" />
          <span className="mono text-xs text-blue-400 tracking-widest uppercase">Workflows</span>
        </div>
        <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight mb-1 ${dark ? "text-white" : "text-gray-900"}`}>
          How I Work
        </h2>
        <div className="w-12 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 rounded mb-10" />

        <div className="grid sm:grid-cols-2 gap-5">
          {workflows.map((w, i) => (
            <div key={i}
              className={`rounded-xl border p-6 transition-all hover:border-blue-400
                ${dark ? "bg-[#0a0e17] border-white/5" : "bg-gray-50 border-gray-100"}`}>
              <p className={`font-semibold text-sm mb-5 pb-4 border-b ${dark ? "text-white border-white/5" : "text-gray-900 border-gray-100"}`}>
                {w.title}
              </p>
              {w.steps.map((s) => (
                <div key={s.num} className="flex gap-3 mb-4 last:mb-0">
                  <span className="mono text-xs text-blue-400 bg-blue-400/10 px-1.5 py-0.5 rounded h-fit mt-0.5 flex-shrink-0">
                    {s.num}
                  </span>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    <strong className={dark ? "text-white" : "text-gray-800"}>{s.strong}</strong> — {s.text}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
