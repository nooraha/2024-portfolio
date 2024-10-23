import {
  Section,
  SkillsList,
  CollapsibleDescription,
  TimeLineListItem,
  Timeline,
} from "../CommonComponents.js";
import { workExperience } from "../data/workexperienceData.js";

export default function WorkExperienceSection() {
  return (
    <Section>
      <h2 id="workexperience" className="SectionTitle">
        02. my work experience
      </h2>
      <Timeline items={workExperience}>
        {(item) => (
          <div key={item.id}>
            <h3 className="ItemHeader">
              <div>{item.title}</div>
              <div>{item.type}</div>
            </h3>
            <CollapsibleDescription fullDesc={item.description} />
            <SkillsList skills={item.skills} />
          </div>
        )}
      </Timeline>
    </Section>
  );
}
