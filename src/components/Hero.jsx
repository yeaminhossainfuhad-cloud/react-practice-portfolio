import { useState } from "react";
import { profile, quickFacts } from "../data/portfolioData.js";

const testRun = [
  "Troubleshoot network fault",
  "Write test cases from requirements",
  "Reproduce and report the bug",
  "Run Selenium regression suite",
];

export default function Hero() {
  const [photoFailed, setPhotoFailed] = useState(false);

  return (
    <section id="home" className="section hero">
      <div className="container hero__grid">
        <div className="hero__text">
          <h1>{profile.name}</h1>
          <p className="hero__title">{profile.title}</p>
          <p className="hero__intro">{profile.intro}</p>
          <ul className="badges hero__facts">
            {quickFacts.map((f) => (
              <li key={f} className="badge">{f}</li>
            ))}
          </ul>
          <div className="hero__buttons">
            <a className="btn btn--primary" href={profile.cv} download>
              Download CV
            </a>
            <a className="btn btn--ghost" href="#projects">
              View Projects
            </a>
          </div>
        </div>

        <div className="hero__side">
          {photoFailed ? (
            <div className="avatar avatar--fallback" aria-label="Profile placeholder">YF</div>
          ) : (
            <img className="avatar" src={profile.photo} alt={`Portrait of ${profile.name}`} onError={() => setPhotoFailed(true)} />
          )}
          <ul className="testrun" aria-label="Sample daily test run">
            {testRun.map((item, i) => (
              <li key={item} style={{ animationDelay: `${0.5 + i * 0.45}s` }}>
                <span className="testrun__badge">Pass</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
