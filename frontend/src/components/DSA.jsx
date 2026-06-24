// ✏️ EDIT HERE — apne DSA stats aur topics update karo
const stats = [
  { num: "120+", label: "Problems solved" },
  { num: "JS", label: "Primary language" },
  { num: "Python", label: "Learning for ML" },
  { num: "Active", label: "Practice status" },
];

const topics = [
  "Arrays", "Strings", "Objects & Maps", "Recursion",
  "Sorting", "Linked Lists", "Stacks & Queues",
  "Binary Search", "Two Pointers", "Sliding Window",
];

export default function DSA({ dark }) {
  return (
    <section id="dsa" className={`py-24 px-4 ${dark ? "bg-[#0a0e17]" : "bg-gray-50"}`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-5 h-px bg-blue-400" />
          <span className="mono text-xs text-blue-400 tracking-widest uppercase">DSA</span>
        </div>
        <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight mb-1 ${dark ? "text-white" : "text-gray-900"}`}>
          Data Structures & Algorithms
        </h2>
        <div className="w-12 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 rounded mb-10" />

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {stats.map((s) => (
            <div key={s.label}
              className={`rounded-xl border p-5 text-center transition-all hover:border-blue-400 hover:-translate-y-1
                ${dark ? "bg-[#0f1521] border-white/5" : "bg-white border-gray-100 shadow-sm"}`}>
              <div className="mono text-2xl font-semibold text-blue-400 mb-1">{s.num}</div>
              <div className="text-gray-400 text-xs">{s.label}</div>
            </div>
          ))}
        </div>

        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-5 h-px bg-blue-400" />
            <span className="mono text-xs text-blue-400 tracking-widest uppercase">Topics Covered</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {topics.map((t) => (
              <span key={t}
                className={`mono text-xs px-3 py-1.5 rounded-lg border transition-all hover:border-blue-400
                  ${dark ? "bg-[#0f1521] border-white/5 text-gray-300" : "bg-white border-gray-100 text-gray-600 shadow-sm"}`}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
