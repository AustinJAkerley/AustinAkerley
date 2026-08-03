import type { AppProject } from "../data/resume";
import { ArrowLeftIcon, ExternalLinkIcon } from "./Icons";

export default function AppProjectPage({ project }: { project: AppProject }) {
  const p = project;

  const shots = p.screenshots ?? [];
  // Portrait shots (phone screenshots) ride alongside the problem on the right.
  const portraitShot = shots.find((s) => s.orientation === "portrait");
  // Everything else (landscape photos) gets a full-width section of its own.
  const landscapeShots = shots.filter((s) => s.orientation !== "portrait");
  const sourceText =
    p.sourceText ?? "Full implementation, built with Expo and React Native, on GitHub.";
  const hasLinks = Boolean(p.githubUrl || p.privacyUrl || p.storeUrl);

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

      {/* ---------- Problem (portrait screenshot rides on the right) ---------- */}
      <section className="section">
        <div className={portraitShot ? "showcase" : undefined}>
          <div className="section__head showcase__body">
            <span className="section__kicker">Why I built it</span>
            <h2 className="section__title">{p.problem.label}</h2>
            <p className="section__lead">{p.problem.text}</p>
            <p className="projects__rule">
              <span className="projects__ruleBadge">Status</span>
              {p.status}
            </p>
          </div>

          {portraitShot && (
            <figure className="shot shot--portrait showcase__media">
              <div className="shot__frame">
                <img
                  src={portraitShot.image}
                  alt={portraitShot.caption}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    const fallback = e.currentTarget
                      .nextElementSibling as HTMLElement | null;
                    if (fallback) fallback.style.display = "flex";
                  }}
                />
                <div className="shot__fallback" style={{ display: "none" }}>
                  <span className="gallery__label">Screenshot coming soon</span>
                </div>
              </div>
              <figcaption className="shot__caption">{portraitShot.caption}</figcaption>
            </figure>
          )}
        </div>
      </section>

      {/* ---------- Solution ---------- */}
      <section className="section">
        <div className="section__head">
          <span className="section__kicker">The solution</span>
          <h2 className="section__title">{p.solution.label}</h2>
          <p className="section__lead">{p.solution.text}</p>
        </div>
      </section>

      {/* ---------- Features ---------- */}
      <section className="section">
        <div className="section__head">
          <span className="section__kicker">What it does</span>
          <h2 className="section__title">What's inside</h2>
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

      {/* ---------- Challenges ---------- */}
      <section className="section">
        <div className="section__head">
          <span className="section__kicker">The hard part</span>
          <h2 className="section__title">{p.challengesTitle}</h2>
          <p className="section__lead">{p.challengesLead}</p>
        </div>

        <div className="feature__grid">
          {p.challenges.map((c) => (
            <article className="card feature" key={c.title}>
              <h3 className="feature__title">{c.title}</h3>
              <p className="feature__text">{c.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ---------- Screenshots (landscape / full width) ---------- */}
      {landscapeShots.length > 0 && (
        <section className="section">
          <div className="section__head">
            <span className="section__kicker">See it in action</span>
            <h2 className="section__title">A closer look</h2>
          </div>

          {landscapeShots.map((s) => (
            <figure className="shot" key={s.image}>
              <div className="shot__frame">
                <img
                  src={s.image}
                  alt={s.caption}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    const fallback = e.currentTarget
                      .nextElementSibling as HTMLElement | null;
                    if (fallback) fallback.style.display = "flex";
                  }}
                />
                <div className="shot__fallback" style={{ display: "none" }}>
                  <span className="gallery__label">Photo coming soon</span>
                </div>
              </div>
              <figcaption className="shot__caption">{s.caption}</figcaption>
            </figure>
          ))}
        </section>
      )}

      {/* ---------- Links ---------- */}
      {hasLinks && (
        <section className="section">
          <div className="section__head">
            <span className="section__kicker">Links</span>
            <h2 className="section__title">Where to find it</h2>
          </div>

          <div className="feature__grid">
            {p.githubUrl && (
              <a
                className="card feature card--linkBlock"
                href={p.githubUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${p.name} source code on GitHub`}
              >
                <h3 className="feature__title">Source code</h3>
                <p className="feature__text">{sourceText}</p>
                <div className="card__link">
                  <ExternalLinkIcon /> {p.githubUrl.replace("https://", "")}
                </div>
              </a>
            )}
            {p.privacyUrl && (
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
            )}
            {p.storeUrl && (
              <a
                className="card feature card--linkBlock"
                href={p.storeUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`Get ${p.name} from the store`}
              >
                <h3 className="feature__title">{p.storeUrlLabel ?? "Get the app"}</h3>
                <p className="feature__text">{p.storeText ?? "Download the published app."}</p>
                <div className="card__link">
                  <ExternalLinkIcon /> {p.storeUrlLabel ?? "App store"}
                </div>
              </a>
            )}
          </div>
        </section>
      )}
    </article>
  );
}
