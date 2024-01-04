import {
  Card,
  SectionTitle,
  Section,
  SkillsList,
} from "../CommonComponents.js";
import { projects } from "../data/projectsData.js";

export default function ProjectsSection() {
  return (
    <div>
      <SectionTitle title="04. some of my projects & work" />
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
    <li className="Card">
      <header>image</header>
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
  return <ul>{listItems}</ul>;
}
