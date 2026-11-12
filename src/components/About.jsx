import SectionHeader from "./SectionHeader.jsx";
import { aboutText, careerGoal, education, experience, profile, sectionIntros } from "../data/portfolioData.js";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeader title="About me" intro={sectionIntros.about} />
        <div className="about__grid">
          <div>
            {aboutText.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <h3>Career goal</h3>
            <p>{careerGoal}</p>
            <h3>Profile</h3>
            <dl className="profile-info">
              <div><dt>Email</dt><dd>{profile.email}</dd></div>
              <div><dt>Phone</dt><dd>{profile.phone}</dd></div>
              <div><dt>Address</dt><dd>{profile.address}</dd></div>
            </dl>
          </div>
          <div>
            <h3 className="first">Experience</h3>
            <ul className="timeline">
              {experience.map((job) => (
                <li key={job.role}>
                  <strong>{job.role}</strong>
                  <span>{job.place}</span>
                  <span className="muted">{job.period}</span>
                  <ul className="plain-list">
                    {job.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
            <h3>Education & courses</h3>
            <ul className="timeline">
              {education.map((e) => (
                <li key={e.degree}>
                  <strong>{e.degree}</strong>
                  <span>{e.place}</span>
                  <span className="muted">{e.period}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
