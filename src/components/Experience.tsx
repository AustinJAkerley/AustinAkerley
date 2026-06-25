import { experiences } from "../data/resume";

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="section__head">
        <span className="section__kicker">02 — Work Experience</span>
        <h2 className="section__title">Where I've made an impact</h2>
      </div>

      <ol className="timeline">
        {experiences.map((exp) => (
          <li className="timeline__item" key={`${exp.company}-${exp.start}`}>
            <div className="timeline__marker" aria-hidden="true" />
            <div className="timeline__period">
              <span className="timeline__end">{exp.end}</span>
              <span className="timeline__dash">—</span>
              <span className="timeline__start">{exp.start}</span>
            </div>

            <article className="card">
              <header className="card__head">
                <h3 className="card__title">
                  {exp.company} <span className="card__team">· {exp.team}</span>
                </h3>
                <p className="card__role">{exp.role}</p>
              </header>

              <p className="card__product">
                <span className="card__label">Product:</span> {exp.product}
              </p>

              <ul className="card__bullets">
                {exp.bullets.map((b) => (
                  <li key={b.label}>
                    <span className="card__label">{b.label}:</span> {b.text}
                  </li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}
