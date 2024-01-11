import { Section, SkillsList } from "../CommonComponents.js";
import { projects } from "../data/projectsData.js";
import testimg from "../images/test_img.jpg";
import dagon_gameplay from "../images/dagon_gameplay.png";
import portfolio_image from "../images/portfolio_image.png";
import exodus_gameplay from "../images/exodus_gameplay.png";
import talvimetsa_gameplay from "../images/talvimetsa_gameplay.png";

export default function ProjectsSection() {
  return (
    <div>
      <h2 id="projects" className="SectionTitle">
        04. some of my projects
      </h2>
      <Section>
        <ProjectsList />
      </Section>
    </div>
  );
}

function ProjectsList() {
  const newestProjectsFirst = projects.sort(function (a, b) {
    return b.id - a.id;
  });

  const projectImages = {
    0: talvimetsa_gameplay,
    1: exodus_gameplay,
    2: dagon_gameplay,
    3: portfolio_image,
  };

  const listItems = newestProjectsFirst.map((project) => (
    <li className="Card Column">
      <header className="ImageHeader">
        <a href={project.link}>
          <img src={projectImages[project.id]} alt={project.title}></img>
        </a>
      </header>
      <div>
        <h3>
          <div>
            <a href={project.link}>{project.title}</a>
          </div>
          <div>{project.date}</div>
        </h3>
        <p>{project.description}</p>
        <SkillsList skills={project.skills} />
      </div>
    </li>
  ));
  return <ul className="CardList">{listItems}</ul>;
}
