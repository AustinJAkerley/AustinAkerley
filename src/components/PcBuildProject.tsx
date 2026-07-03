import { pcBuild } from "../data/resume";
import { ArrowLeftIcon } from "./Icons";

export default function PcBuildProject() {
  return (
    <article className="project">
      <header className="project__hero">
        <div className="project__heroInner">
          <a className="project__back" href="#projects">
            <ArrowLeftIcon /> Back to projects
          </a>
          <span className="section__kicker">Project 03 — Physical Build</span>
          <h1 className="project__title">{pcBuild.name}</h1>
          <p className="project__tagline">{pcBuild.tagline}</p>
          <p className="project__intro">{pcBuild.intro}</p>

          <ul className="chips project__heroChips">
            {pcBuild.highlights.slice(0, 6).map((h) => (
              <li className="chip" key={h}>
                {h}
              </li>
            ))}
          </ul>
        </div>
      </header>

      {/* ---------- Overview ---------- */}
      <section className="section">
        <div className="section__head">
          <span className="section__kicker">Overview</span>
          <h2 className="section__title">Why build instead of buy?</h2>
          <p className="section__lead">{pcBuild.overview.lead}</p>
        </div>

        <div className="feature__grid">
          {pcBuild.overview.reasons.map((r) => (
            <article className="card feature" key={r.label}>
              <h3 className="feature__title">{r.label}</h3>
              <p className="feature__text">{r.text}</p>
            </article>
          ))}
        </div>

        <h3 className="project__subhead">Goals for the build</h3>
        <ul className="skills__list project__goals">
          {pcBuild.overview.goals.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </section>

      {/* ---------- Hardware ---------- */}
      <section className="section">
        <div className="section__head">
          <span className="section__kicker">Hardware</span>
          <h2 className="section__title">The major components</h2>
          <p className="section__lead">{pcBuild.hardwareNote}</p>
        </div>

        <div className="spec__grid">
          {pcBuild.hardware.map((h) => (
            <article className="card spec" key={h.category + h.name}>
              <div className="spec__thumb" aria-hidden="true">
                {/* TODO: add product/build imagery for {h.name} */}
                <span className="spec__thumbLabel">Image</span>
              </div>
              <span className="spec__category">{h.category}</span>
              <h3 className="spec__name">{h.name}</h3>
              <p className="spec__detail">{h.detail}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ---------- Build Process ---------- */}
      <section className="section">
        <div className="section__head">
          <span className="section__kicker">Build Process</span>
          <h2 className="section__title">From plan to power-on</h2>
        </div>

        <ol className="timeline">
          {pcBuild.buildProcess.map((s) => (
            <li className="timeline__item" key={s.step}>
              <div className="timeline__marker" aria-hidden="true" />
              <div className="timeline__period">
                <span className="timeline__end">Step {s.step}</span>
              </div>
              <article className="card">
                <header className="card__head">
                  <h3 className="card__title">{s.title}</h3>
                </header>
                <p className="card__product">{s.text}</p>
              </article>
            </li>
          ))}
        </ol>
      </section>

      {/* ---------- Lessons Learned ---------- */}
      <section className="section">
        <div className="section__head">
          <span className="section__kicker">Lessons Learned</span>
          <h2 className="section__title">What the build taught me</h2>
        </div>

        <div className="feature__grid">
          {pcBuild.lessons.map((l) => (
            <article className="card feature" key={l.label}>
              <h3 className="feature__title">{l.label}</h3>
              <p className="feature__text">{l.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ---------- Gallery ---------- */}
      <section className="section">
        <div className="section__head">
          <span className="section__kicker">Gallery</span>
          <h2 className="section__title">Photos from the build</h2>
          <p className="section__lead">
            {/* TODO: drop real photos into /public/pc-build to replace these placeholders. */}
            Placeholder gallery — real photos of the build will replace these tiles.
          </p>
        </div>

        <div className="gallery">
          {pcBuild.gallery.map((g) => (
            <figure className="gallery__item" key={g.caption}>
              <div className="gallery__placeholder" aria-hidden="true">
                {/* TODO: replace with <img src={g.image} alt={g.caption} /> */}
                <span className="gallery__label">Photo coming soon</span>
              </div>
              <figcaption className="gallery__caption">{g.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ---------- Technical Highlights ---------- */}
      <section className="section">
        <div className="section__head">
          <span className="section__kicker">Technical Highlights</span>
          <h2 className="section__title">Under the hood</h2>
        </div>

        <ul className="chips">
          {pcBuild.highlights.map((h) => (
            <li className="chip chip--badge" key={h}>
              {h}
            </li>
          ))}
        </ul>
      </section>

      {/* ---------- Future Upgrades ---------- */}
      <section className="section">
        <div className="section__head">
          <span className="section__kicker">Future Upgrades</span>
          <h2 className="section__title">Where it goes next</h2>
        </div>

        <div className="feature__grid">
          {pcBuild.futureUpgrades.map((u) => (
            <article className="card feature" key={u.label}>
              <h3 className="feature__title">{u.label}</h3>
              <p className="feature__text">{u.text}</p>
            </article>
          ))}
        </div>
      </section>
    </article>
  );
}
