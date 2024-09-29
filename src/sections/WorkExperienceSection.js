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
    <div>
      <h2 id="workexperience" className="SectionTitle">
        02. my work experience
      </h2>
      <Section>
        <Timeline items={workExperience}>
          {(item) => (
            <div key={item.id}>
              <h3 className="FlexHeader">
                <div>
                  <div>{item.title}</div>
                  <div>{item.type}</div>
                </div>
              </h3>
              <CollapsibleDescription fullDesc={item.description} />
              <SkillsList skills={item.skills} />
            </div>
          )}
        </Timeline>
      </Section>
    </div>
  );
}
