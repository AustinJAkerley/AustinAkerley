import { profile } from "../data/resume";
import { MailIcon, LinkedInIcon, PhoneIcon, LocationIcon } from "./Icons";

export default function Hero() {
  return (
    <header className="hero" id="home">
      <div className="hero__bg" aria-hidden="true">
        <span className="hero__blob hero__blob--1" />
        <span className="hero__blob hero__blob--2" />
        <span className="hero__blob hero__blob--3" />
      </div>

      <div className="hero__inner">
        <p className="hero__eyebrow">{profile.location}</p>
        <h1 className="hero__name">{profile.name}</h1>
        <p className="hero__title">{profile.title}</p>
        <p className="hero__tagline">{profile.tagline}</p>

        <div className="hero__cta">
          <a className="btn btn--primary" href={`mailto:${profile.email}`}>
            Get in touch
          </a>
          <a className="btn btn--ghost" href="#experience">
            View experience
          </a>
        </div>

        <ul className="hero__contacts">
          <li>
            <LocationIcon />
            <span>{profile.location}</span>
          </li>
          <li>
            <a href={`mailto:${profile.email}`}>
              <MailIcon />
              <span>{profile.email}</span>
            </a>
          </li>
          <li>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <LinkedInIcon />
              <span>{profile.linkedinLabel}</span>
            </a>
          </li>
          <li>
            <a href={`tel:${profile.phone.replace(/[^0-9]/g, "")}`}>
              <PhoneIcon />
              <span>{profile.phone}</span>
            </a>
          </li>
        </ul>
      </div>

      <a className="hero__scroll" href="#about" aria-label="Scroll to about">
        <span />
      </a>
    </header>
  );
}
