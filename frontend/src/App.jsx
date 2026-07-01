import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

import Workflows from "./components/Workflows";
import DSA from "./components/DSA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "dark" : ""}>
      <div className={dark ? "bg-[#0a0e17] text-white" : "bg-gray-50 text-gray-900"}>
        <Navbar dark={dark} setDark={setDark} />
        <Hero dark={dark} />
        <About dark={dark} />
        <Skills dark={dark} />
        <Experience dark={dark} />
        <Projects dark={dark} />
     
        <Workflows dark={dark} />
        <DSA dark={dark} />
        <Contact dark={dark} />
        <Footer dark={dark} />
      </div>
    </div>
  );
}
