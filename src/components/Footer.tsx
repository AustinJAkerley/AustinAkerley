import { profile } from "../data/resume";
import { MailIcon, LinkedInIcon, PhoneIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer__inner">
        <h2 className="footer__title">Let's build something secure.</h2>
        <p className="footer__sub">
          Open to conversations about cryptography, distributed systems, and cloud platforms.
        </p>

        <div className="footer__links">
          <a className="btn btn--primary" href={`mailto:${profile.email}`}>
            <MailIcon /> Email me
          </a>
          <a
            className="btn btn--ghost"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon /> LinkedIn
          </a>
          <a
            className="btn btn--ghost"
            href={`tel:${profile.phone.replace(/[^0-9]/g, "")}`}
          >
            <PhoneIcon /> Call
          </a>
        </div>

        <p className="footer__copy">
          © {new Date().getFullYear()} {profile.name}. Built with React & hosted on Azure
          Static Web Apps.
        </p>
      </div>
    </footer>
  );
}
