import { skills, languages } from "../data/resume";

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="section__head">
        <span className="section__kicker">05 — Skills & Languages</span>
        <h2 className="section__title">What I bring to the table</h2>
      </div>

      <div className="skills__grid">
        <div className="skills__col">
          <h3 className="skills__subtitle">Core strengths</h3>
          <ul className="skills__list">
            {skills.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>

        <div className="skills__col">
          <h3 className="skills__subtitle">Languages & tooling</h3>
          <ul className="chips">
            {languages.map((l) => (
              <li className="chip" key={l}>
                {l}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
