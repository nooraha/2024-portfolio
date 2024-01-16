import {
  Section,
  SkillsList,
  CollapsibleDescription,
} from "../CommonComponents.js";
import { workExperience } from "../data/workexperienceData.js";

export default function WorkExperienceSection() {
  return (
    <div>
      <h2 id="workexperience" className="SectionTitle">
        02. my work experience
      </h2>
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
        <CollapsibleDescription fullDesc={work.description} />
        <SkillsList skills={work.skills} />
      </div>
    </li>
  ));
  return <ul className="CardList">{listItems}</ul>;
}
