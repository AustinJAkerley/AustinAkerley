import { profile } from "../data/resume";

const highlights = [
  { value: "6+", label: "Years building secure systems" },
  { value: "1000+", label: "Physical servers managed" },
  { value: "4", label: "Industry-leading teams" },
];

export default function About() {
  return (
    <section className="section" id="about">
      <div className="section__head">
        <span className="section__kicker">01 — About</span>
        <h2 className="section__title">Security at scale, end to end</h2>
      </div>

      <div className="about__grid">
        <p className="about__lead">{profile.about}</p>

        <div className="about__stats">
          {highlights.map((h) => (
            <div className="stat" key={h.label}>
              <span className="stat__value">{h.value}</span>
              <span className="stat__label">{h.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
