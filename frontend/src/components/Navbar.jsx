import { useState, useEffect } from "react";

const links = ["About", "Skills", "Experience", "Projects", "Why Hire me", "Workflows", "DSA", "Contact"];

export default function Navbar({ dark = false, setDark }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase().replace(" ", "-"));
    if (el) window.scrollTo({ top: el.offsetTop - 64, behavior: "smooth" });
    setMenuOpen(false);
  };

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Shivam_Devraj_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
      ${scrolled ? (dark ? "bg-[#0a0e17]/90 shadow-lg" : "bg-white/90 shadow-md") : "bg-transparent"}
      backdrop-blur-md border-b ${dark ? "border-white/5" : "border-black/5"}`}>
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">

        {/* Logo */}
        <a href="#hero" onClick={() => scrollTo("hero")}
          className="mono text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors">
          Welcome <span className="text-purple-400">you</span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden lg:flex gap-5">
          {links.map(l => (
            <li key={l}>
              <button onClick={() => scrollTo(l)}
                className={`text-xs font-medium uppercase tracking-widest transition-colors
                  ${dark ? "text-gray-400 hover:text-blue-400" : "text-gray-500 hover:text-blue-500"}`}>
                {l}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {/* Resume Download */}
          <button onClick={downloadResume}
            className={`mono text-xs px-3 py-1.5 rounded-full border transition-all
              ${dark
                ? "border-white/10 text-gray-300 hover:border-purple-400 hover:text-purple-400" : "border-black/10 text-gray-600 hover:border-purple-500 hover:text-purple-500"}`}>
            Resume
          </button>

          {/* Theme Toggle */}
          <button onClick={() => setDark(!dark)}
            className={`mono text-xs px-3 py-1.5 rounded-full border transition-all
              ${dark
                ? "border-white/10 text-gray-300 hover:border-blue-400 hover:text-blue-400" : "border-black/10 text-gray-600 hover:border-blue-500 hover:text-blue-500"}`}>
            {dark ? "☀️ Light" : "🌙 Dark"}
          </button>

          {/* Mobile Menu */}
          <button className="lg:hidden p-1" onClick={() => setMenuOpen(!menuOpen)}>
            <div className={`w-5 h-0.5 mb-1 transition-all ${dark ? "bg-gray-300" : "bg-gray-600"} ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
            <div className={`w-5 h-0.5 mb-1 transition-all ${dark ? "bg-gray-300" : "bg-gray-600"} ${menuOpen ? "opacity-0" : ""}`} />
            <div className={`w-5 h-0.5 transition-all ${dark ? "bg-gray-300" : "bg-gray-600"} ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className={`lg:hidden px-4 pb-4 ${dark ? "bg-[#0a0e17]/95" : "bg-white/95"} border-t ${dark ? "border-white/5" : "border-black/5"}`}>
          {links.map(l => (
            <button key={l} onClick={() => scrollTo(l)}
              className={`block w-full text-left py-2.5 text-sm font-medium border-b transition-colors
                ${dark ? "border-white/5 text-gray-300 hover:text-blue-400" : "border-black/5 text-gray-600 hover:text-blue-500"}`}>
              {l}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
