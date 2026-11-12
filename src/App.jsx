import { useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import useActiveSection from "./hooks/useActiveSection.js";
import { navLinks } from "./data/portfolioData.js";

const sectionIds = navLinks.map((link) => link.id);

export default function App() {
  const [theme, setTheme] = useState(() =>
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  );
  const activeId = useActiveSection(sectionIds);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <>
      <Navbar activeId={activeId} theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
