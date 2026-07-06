import { projects, projectsChallenge } from "../data/resume";
import { ExternalLinkIcon, ArrowRightIcon } from "./Icons";

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="section__head">
        <span className="section__kicker">03 — Projects</span>
        <h2 className="section__title">{projectsChallenge.title}</h2>
        <p className="section__lead">{projectsChallenge.intro}</p>
        <p className="projects__rule">
          <span className="projects__ruleBadge">Published only</span>
          {projectsChallenge.rule}
        </p>
      </div>

      <ol className="timeline">
        {projects.map((project) => (
          <li className="timeline__item" key={project.number}>
            <div className="timeline__marker" aria-hidden="true" />
            <div className="timeline__period">
              <span className="timeline__end">
                Project {String(project.number).padStart(2, "0")}
              </span>
            </div>

            <article className="card">
              <header className="card__head">
                <h3 className="card__title">
                  {project.name}{" "}
                  <span className="card__team">· {project.tagline}</span>
                </h3>
              </header>

              <p className="card__product">{project.description}</p>

              {project.tags && project.tags.length > 0 && (
                <ul className="chips card__tags">
                  {project.tags.map((tag) => (
                    <li className="chip chip--badge" key={tag}>
                      {tag}
                    </li>
                  ))}
                </ul>
              )}

              {project.thumbnail && (
                <div className="card__thumb" aria-hidden="true">
                  {/* TODO: replace placeholder with a real photo at {project.thumbnail} */}
                  <span className="card__thumbLabel">Photo coming soon</span>
                </div>
              )}

              {project.pageHash ? (
                <a className="card__cta btn btn--primary" href={project.pageHash}>
                  Learn More <ArrowRightIcon />
                </a>
              ) : (
                project.url && (
                  <a
                    className="card__link"
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ExternalLinkIcon /> {project.urlLabel}
                  </a>
                )
              )}
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}
