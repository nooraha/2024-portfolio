import { education } from "../data/educationData.js";
import {
  Section,
  CollapsibleDescription,
  Timeline,
  BulletDescription,
} from "../CommonComponents.js";

export default function EducationSection() {
  return (
    <Section>
      <h2 id="education" className="SectionTitle">
        03. Education & studies
      </h2>
      <Timeline items={education}>
        {(item) => (
          <div key={item.id}>
            <h3 className="ItemHeader">
              <div>{item.title}</div>
              <div>{item.type}</div>
            </h3>
            <BulletDescription fullDesc={item.description} />
          </div>
        )}
      </Timeline>
    </Section>
  );
}
