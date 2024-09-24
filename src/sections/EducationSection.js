import { education } from "../data/educationData.js";
import {
  Section,
  CollapsibleDescription,
  TimeLineListItem,
} from "../CommonComponents.js";

export default function EducationSection() {
  return (
    <div>
      <h2 id="education" className="SectionTitle">
        03. my education
      </h2>
      <Section>
        <EducationHistoryList />
      </Section>
    </div>
  );
}

function EducationHistoryList() {
  const newestEduFirst = education.sort(function (a, b) {
    return b.id - a.id;
  });
  const listItems = newestEduFirst.map((edu) => (
    <li>
      <TimeLineListItem date={edu.date}>
        <div>
          <h3 className="FlexHeader">
            <div>{edu.title}</div>
          </h3>
          <CollapsibleDescription fullDesc={edu.description} />
        </div>
      </TimeLineListItem>
    </li>
  ));
  return <ul className="CardList">{listItems}</ul>;
}
