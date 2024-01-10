import { Section, SkillsList } from "../CommonComponents.js";
import { projects } from "../data/projectsData.js";
import placeholderimg from "../images/test_img.jpg";

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
  const listItems = newestProjectsFirst.map((project) => (
    <li className="Card Column">
      <header className="ImageHeader">
        <img src={placeholderimg}></img>
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
