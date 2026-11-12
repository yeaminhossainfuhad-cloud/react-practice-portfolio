import SectionHeader from "./SectionHeader.jsx";
import { skillGroups, sectionIntros } from "../data/portfolioData.js";

export default function Skills() {
  return (
    <section id="skills" className="section section--alt">
      <div className="container">
        <SectionHeader title="Skills" intro={sectionIntros.skills} />
        <div className="skills__grid">
          {skillGroups.map((g) => (
            <article key={g.group} className="card">
              <h3>{g.group}</h3>
              <ul className="badges">
                {g.items.map((item) => (
                  <li key={item} className="badge">{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
