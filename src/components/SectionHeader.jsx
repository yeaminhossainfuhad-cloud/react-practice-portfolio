export default function SectionHeader({ title, intro }) {
  return (
    <div className="section-header">
      <h2>{title}</h2>
      {intro && <p className="muted">{intro}</p>}
    </div>
  );
}
