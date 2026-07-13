import { seeHandshake } from "../data/resume";
import { ArrowLeftIcon, ExternalLinkIcon } from "./Icons";

export default function SeeHandshakeProject() {
  const sh = seeHandshake;

  return (
    <article className="project">
      <header className="project__hero">
        <div className="project__heroInner">
          <a className="project__back" href="#projects">
            <ArrowLeftIcon /> Back to projects
          </a>
          <span className="section__kicker">Project 05 / TLS tooling</span>
          <h1 className="project__title">{sh.name}</h1>
          <p className="project__tagline">{sh.tagline}</p>
          <p className="project__intro">{sh.intro}</p>

          <ul className="chips project__heroChips">
            {sh.highlights.map((h) => (
              <li className="chip" key={h}>
                {h}
              </li>
            ))}
          </ul>
        </div>
      </header>

      {/* ---------- Screenshots ---------- */}
      <section className="section">
        <div className="section__head">
          <span className="section__kicker">See it in action</span>
          <h2 className="section__title">A handshake, broken open</h2>
        </div>

        {sh.screenshots.map((s) => (
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
                <span className="gallery__label">Screenshot coming soon</span>
              </div>
            </div>
            <figcaption className="shot__caption">{s.caption}</figcaption>
          </figure>
        ))}
      </section>

      {/* ---------- Install (primary CTA, right after the screenshot) ---------- */}
      <section className="section section--install">
        <div className="section__head">
          <span className="section__kicker">Download and install</span>
          <h2 className="section__title section__title--xl">Get it on your machine</h2>
          <p className="section__lead">
            Grab a prebuilt binary or package for your platform, or install from source with Cargo.
            Every block is copy-paste ready. Live capture always needs one privilege step, shown
            in the commands.
          </p>
        </div>

        <div className="install__grid">
          {sh.install.map((i) => (
            <article className="card feature install__card" key={i.platform}>
              <h3 className="feature__title install__platform">{i.platform}</h3>
              {i.note && <p className="feature__text">{i.note}</p>}
              <pre className="demo__pre install__pre">{i.commands.join("\n")}</pre>
            </article>
          ))}
        </div>
      </section>

      {/* ---------- Why it's interesting ---------- */}
      <section className="section">
        <div className="section__head">
          <span className="section__kicker">What makes it interesting</span>
          <h2 className="section__title">It shows you exactly what it can, and cannot, see</h2>
          <p className="section__lead">{sh.whyInteresting}</p>
        </div>

        <div className="feature__grid">
          {sh.features.map((f) => (
            <article className="card feature" key={f.label}>
              <h3 className="feature__title">{f.label}</h3>
              <p className="feature__text">{f.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ---------- Run it ---------- */}
      <section className="section">
        <div className="section__head">
          <span className="section__kicker">Run it</span>
          <h2 className="section__title">From install to first handshake</h2>
        </div>

        <div className="feature__grid">
          {sh.runSteps.map((r) => (
            <article className="card feature" key={r.label}>
              <h3 className="feature__title">{r.label}</h3>
              <p className="feature__text">{r.text}</p>
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
            href={sh.cratesUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="View SeeHandshake on crates.io"
          >
            <h3 className="feature__title">crates.io</h3>
            <p className="feature__text">Install with a single `cargo install seehandshake`.</p>
            <div className="card__link">
              <ExternalLinkIcon /> crates.io/crates/seehandshake
            </div>
          </a>
          <a
            className="card feature card--linkBlock"
            href={sh.releasesUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Download SeeHandshake prebuilt binaries and packages"
          >
            <h3 className="feature__title">Downloads</h3>
            <p className="feature__text">
              Prebuilt binaries and Debian packages for Linux, macOS, and Windows.
            </p>
            <div className="card__link">
              <ExternalLinkIcon /> Latest release
            </div>
          </a>
          <a
            className="card feature card--linkBlock"
            href={sh.githubUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="View SeeHandshake source code on GitHub"
          >
            <h3 className="feature__title">Source code</h3>
            <p className="feature__text">Full implementation, written in Rust, on GitHub.</p>
            <div className="card__link">
              <ExternalLinkIcon /> github.com/AustinJAkerley/SeeHandshake
            </div>
          </a>
        </div>
      </section>
    </article>
  );
}
