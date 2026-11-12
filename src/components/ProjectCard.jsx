export default function ProjectCard({ project }) {
  const { title, description, technologies, hue, demo, github } = project;
  const initials = title.split(" ").slice(0, 2).map((w) => w[0]).join("");

  return (
    <article className="card project">
      <div className="project__image" style={{ "--hue": hue }} role="img" aria-label={`${title} preview`}>
        <span>{initials}</span>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <ul className="badges">
        {technologies.map((t) => (
          <li key={t} className="badge">{t}</li>
        ))}
      </ul>
      <div className="project__links">
        {demo && <a className="btn btn--primary btn--sm" href={demo} target="_blank" rel="noreferrer">Live Demo</a>}
        <a className="btn btn--ghost btn--sm" href={github} target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </article>
  );
}
