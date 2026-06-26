import { projects, projectsChallenge } from "../data/resume";
import { ExternalLinkIcon } from "./Icons";

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

              <a
                className="card__link"
                href={project.url}
                target="_blank"
                rel="noreferrer"
              >
                <ExternalLinkIcon /> {project.urlLabel}
              </a>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}
