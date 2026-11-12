import { useState } from "react";
import ProjectCard from "./ProjectCard.jsx";
import SectionHeader from "./SectionHeader.jsx";
import { projects, sectionIntros } from "../data/portfolioData.js";

const categories = ["All", ...new Set(projects.map((p) => p.category))];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const visibleProjects =
    activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeader title="Projects" intro={sectionIntros.projects} />
        <div className="filters" role="group" aria-label="Filter projects">
          {categories.map((c) => (
            <button
              key={c}
              className={`chip ${activeCategory === c ? "chip--on" : ""}`}
              aria-pressed={activeCategory === c}
              onClick={() => setActiveCategory(c)}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="projects__grid">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
