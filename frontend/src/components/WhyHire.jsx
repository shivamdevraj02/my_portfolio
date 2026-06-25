// ✏️ EDIT HERE — apne hisaab se reasons change karo
const reasons = [
  { icon: "🔁", title: "Backend → AI Bridge", text: "I understand systems deeply. Transitioning into AI/ML means I bring engineering discipline — clean APIs, database design, deployment — to data work from day one." },
  { icon: "✨", title: "Ships Under Pressure", text: "I built and deployed PrepMate in a hackathon setting with a team — proving I can deliver real working software when it counts, not just code in isolation." },
  { icon: "📐", title: "Full Stack Foundation", text: "From HTML/CSS to React on frontend, Node/Express/MongoDB on backend — I can own a feature end-to-end without needing to hand off across the stack." },
  { icon: "🤝", title: "Coordination Skills", text: "As T&P Cell coordinator, I've worked across students, faculty, and industry — making me effective in cross-functional teams, not just solo engineering." },
  { icon: "📈", title: "Growth Mindset", text: "I'm actively investing in Python and ML fundamentals. I don't wait to be taught — I identify the gap and start filling it with purpose and consistency." },
  { icon: "🔭", title: "Long-term Commitment", text: "My goal is AI/ML engineering — not a detour but a deliberate career direction. You're getting someone whose ambition aligns with where tech is heading." },
];

export default function WhyHire({ dark }) {
  return (
    <section id="why-hire" className={`py-24 px-4 ${dark ? "bg-[#0a0e17]" : "bg-gray-50"}`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-2">
         
          <span className="mono text-xs text-blue-400 tracking-widest uppercase">Why Hire me</span>
        </div>
        <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight mb-1 ${dark ? "text-white" : "text-gray-900"}`}>
          What I Bring to the Table
        </h2>
        <div className="w-12 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 rounded mb-10" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {reasons.map((r, i) => (
            <div key={i}
              className={`rounded-xl border p-5 transition-all duration-200 hover:border-purple-400 hover:-translate-y-1
                ${dark ? "bg-[#0f1521] border-white/5" : "bg-white border-gray-100 shadow-sm"}`}>
              <div className="text-2xl mb-3">{r.icon}</div>
              <p className={`font-semibold text-sm mb-2 ${dark ? "text-white" : "text-gray-900"}`}>{r.title}</p>
              <p className="text-gray-400 text-sm leading-relaxed">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
