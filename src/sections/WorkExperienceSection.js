import {
  Section,
  SkillsList,
  Timeline,
  BulletDescription,
} from "../CommonComponents.js";
import { workExperience } from "../data/workexperienceData.js";

export default function WorkExperienceSection() {
  return (
    <Section>
      <h2 id="workexperience" className="SectionTitle">
        02. Work experience
      </h2>
      <Timeline items={workExperience}>
        {(item) => (
          <div key={item.id}>
            <h3 className="ItemHeader">
              <div>{item.title}</div>
              <div>{item.type}</div>
            </h3>
            <BulletDescription fullDesc={item.description} />
            <SkillsList skills={item.skills} />
          </div>
        )}
      </Timeline>
    </Section>
  );
}
