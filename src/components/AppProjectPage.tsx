import type { AppProject } from "../data/resume";
import { ArrowLeftIcon, ExternalLinkIcon } from "./Icons";

export default function AppProjectPage({ project }: { project: AppProject }) {
  const p = project;

  return (
    <article className="project">
      <header className="project__hero">
        <div className="project__heroInner">
          <a className="project__back" href="#projects">
            <ArrowLeftIcon /> Back to projects
          </a>
          <span className="section__kicker">{p.kicker}</span>
          <h1 className="project__title">{p.name}</h1>
          <p className="project__tagline">{p.tagline}</p>
          <p className="project__intro">{p.intro}</p>

          <ul className="chips project__heroChips">
            {p.highlights.map((h) => (
              <li className="chip" key={h}>
                {h}
              </li>
            ))}
          </ul>
        </div>
      </header>

      {/* ---------- Focus ---------- */}
      <section className="section">
        <div className="section__head">
          <span className="section__kicker">What this project is about</span>
          <h2 className="section__title">{p.focus.label}</h2>
          <p className="section__lead">{p.focus.text}</p>
          <p className="projects__rule">
            <span className="projects__ruleBadge">Status</span>
            {p.status}
          </p>
        </div>
      </section>

      {/* ---------- Features ---------- */}
      <section className="section">
        <div className="section__head">
          <span className="section__kicker">What it does</span>
          <h2 className="section__title">Inside the app</h2>
        </div>

        <div className="feature__grid">
          {p.features.map((f) => (
            <article className="card feature" key={f.label}>
              <h3 className="feature__title">{f.label}</h3>
              <p className="feature__text">{f.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ---------- Publishing path ---------- */}
      <section className="section">
        <div className="section__head">
          <span className="section__kicker">Shipping it</span>
          <h2 className="section__title">{p.publishTitle}</h2>
          <p className="section__lead">{p.publishLead}</p>
        </div>

        <div className="feature__grid">
          {p.publishSteps.map((s) => (
            <article className="card feature" key={s.step}>
              <h3 className="feature__title">
                <span className="card__team">{s.step} ·</span> {s.title}
              </h3>
              <p className="feature__text">{s.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ---------- Links ---------- */}
      <section className="section">
        <div className="section__head">
          <span className="section__kicker">Links</span>
          <h2 className="section__title">Where to find it</h2>
        </div>

        <div className="feature__grid">
          <a
            className="card feature card--linkBlock"
            href={p.githubUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`View ${p.name} source code on GitHub`}
          >
            <h3 className="feature__title">Source code</h3>
            <p className="feature__text">Full implementation, built with Expo and React Native, on GitHub.</p>
            <div className="card__link">
              <ExternalLinkIcon /> {p.githubUrl.replace("https://", "")}
            </div>
          </a>
          <a
            className="card feature card--linkBlock"
            href={p.privacyUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`Read the ${p.name} privacy policy`}
          >
            <h3 className="feature__title">Privacy policy</h3>
            <p className="feature__text">
              No data collected. The public policy required by the app stores.
            </p>
            <div className="card__link">
              <ExternalLinkIcon /> {p.privacyUrl.replace("https://", "")}
            </div>
          </a>
          {p.storeUrl && (
            <a
              className="card feature card--linkBlock"
              href={p.storeUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`Get ${p.name} from the store`}
            >
              <h3 className="feature__title">{p.storeUrlLabel ?? "Get the app"}</h3>
              <p className="feature__text">Download the published app.</p>
              <div className="card__link">
                <ExternalLinkIcon /> {p.storeUrlLabel ?? "App store"}
              </div>
            </a>
          )}
        </div>
      </section>
    </article>
  );
}
