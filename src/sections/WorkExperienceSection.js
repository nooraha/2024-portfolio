import {
  Section,
  SkillsList,
  CollapsibleDescription,
  TimeLineListItem,
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
    <li>
      <TimeLineListItem date={work.date}>
        <div>
          <h3 className="FlexHeader">
            <div>
              <div>{work.title}</div>
              <div>{work.type}</div>
            </div>
          </h3>
          <CollapsibleDescription fullDesc={work.description} />
          <SkillsList skills={work.skills} />
        </div>
      </TimeLineListItem>
    </li>
  ));
  return <ul className="CardList">{listItems}</ul>;
}
