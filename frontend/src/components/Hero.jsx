export default function Hero({ dark }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 64, behavior: "smooth" });
  };

  return (
    <section id="hero" className={`min-h-screen flex flex-col justify-center pt-16 px-4 relative overflow-hidden
      ${dark ? "bg-[#0a0e17]" : "bg-gray-50"}`}>

      {/* Background glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-10 bg-blue-400 pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full blur-3xl opacity-8 bg-purple-500 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 grid lg:grid-cols-2 gap-10 items-center">
        {/* Left side - Content */}
        <div>
          {/* Eyebrow */}


          {/* Name */}
          <h1 className={`text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-tight mb-3
            ${dark ? "text-white" : "text-gray-900"}`}>
            Shivam<br />
            <span className="text-blue-400">Devraj.</span>
          </h1>

          {/* Title */}
          <p className="mono text-base sm:text-lg text-gray-400 mb-6">
           AI ML Engineer <span className="text-purple-400 mx-2"></span>
          </p>

          {/* Bio */}
          <p className="text-gray-400 text-base leading-relaxed max-w-lg mb-10">
            I build robust backend systems and I'm actively transitioning into AI/ML engineering —
            combining software engineering discipline with data intelligence.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap gap-4">
            <button onClick={() => scrollTo("projects")}
              className="bg-blue-400 text-gray-900 font-semibold px-7 py-3 rounded-lg
                hover:bg-blue-300 transition-all hover:-translate-y-0.5 text-sm">
              View Projects
            </button>
            <button onClick={() => scrollTo("contact")}
              className={`border px-7 py-3 rounded-lg font-medium text-sm transition-all hover:-translate-y-0.5
                ${dark
                  ? "border-white/10 text-gray-200 hover:border-blue-400 hover:text-blue-400"
                  : "border-gray-200 text-gray-700 hover:border-blue-400 hover:text-blue-400"}`}>
              Get in Touch
            </button>
          </div>
        </div>

        {/* Right side - Profile Image */}
        <div className="flex justify-center">
          {/* Purple background circle */}
          <div className="absolute w-96 h-96 rounded-full bg-gradient-to-br from-purple-500/40 to-blue-500/20 blur-3xl" />

          <div className={`relative w-96 h-96 rounded-full overflow-hidden border-2 
            ${dark ? "border-blue-400/30" : "border-blue-400/20"}
            shadow-2xl hover:shadow-blue-400/20 transition-all duration-300`}>
            <img
              src="/profile.jpeg"
              alt="Shivam Devraj"
              className="w-full h-full object-cover object-center scale-110 hover:scale-125 transition-transform duration-300"
            />
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce">
        <span className="mono text-xs text-gray-500 tracking-widest">scroll</span>
        <span className="text-blue-400 text-lg">↓</span>
      </div>
    </section>
  );
}
