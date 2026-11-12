import { profile, socialLinks } from "../data/portfolioData.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <strong>{profile.name}</strong>
        <nav aria-label="Social links" className="footer__social">
          {socialLinks.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer">{s.label}</a>
          ))}
        </nav>
        <small>© {new Date().getFullYear()} {profile.name}. All rights reserved.</small>
      </div>
    </footer>
  );
}
