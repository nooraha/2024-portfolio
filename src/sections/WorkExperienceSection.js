import {
  Card,
  Section,
  SectionTitle,
  SkillsList,
} from "../CommonComponents.js";
import { workExperience } from "../data/workexperienceData.js";

export default function WorkExperienceSection() {
  return (
    <div>
      <SectionTitle title="02. where I've worked" />
      <Section>
        <WorkExperienceList />
      </Section>
    </div>
  );
}

function WorkExperienceList() {
  const newestWorkFirst = workExperience.sort(function (a, b) {
    return b.id - a.id;
  });
  const listItems = newestWorkFirst.map((work) => (
    <li className="Card">
      <header>{work.date}</header>
      <div>
        <h3>
          <div>{work.title}</div>
          <div>{work.type}</div>
        </h3>
        <p>{work.description}</p>
        <SkillsList skills={work.skills} />
      </div>
    </li>
  ));
  return (
    <div className="Work-Experience-List">
      <ul>{listItems}</ul>
    </div>
  );
}
