import { education } from "../data/educationData.js";
import {
  Section,
  CollapsibleDescription,
  Timeline,
} from "../CommonComponents.js";

export default function EducationSection() {
  return (
    <div>
      <h2 id="education" className="SectionTitle">
        03. my education
      </h2>
      <Section>
        <Timeline items={education}>
          {(item) => (
            <div key={item.id}>
              <h3 className="FlexHeader">
                <div>{item.title}</div>
              </h3>
              <CollapsibleDescription fullDesc={item.description} />
            </div>
          )}
        </Timeline>
      </Section>
    </div>
  );
}
