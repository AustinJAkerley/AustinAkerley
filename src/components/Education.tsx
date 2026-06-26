import { education, research } from "../data/resume";

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="section__head">
        <span className="section__kicker">04 — Education</span>
        <h2 className="section__title">Academic background</h2>
      </div>

      <div className="edu__grid">
        {education.map((e) => (
          <article className="edu" key={e.school}>
            <h3 className="edu__school">{e.school}</h3>
            <p className="edu__degree">{e.degree}</p>
            <p className="edu__field">{e.field}</p>
            {e.note && <p className="edu__note">{e.note}</p>}
            {e.extras && (
              <ul className="edu__extras">
                {e.extras.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            )}
          </article>
        ))}

        <article className="edu edu--research">
          <h3 className="edu__school">{research.title}</h3>
          <ul className="edu__extras">
            {research.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
