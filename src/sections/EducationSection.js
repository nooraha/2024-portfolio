import { education } from "../data/educationData.js";
import { Section, CollapsibleDescription } from "../CommonComponents.js";

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
    <li className="Card">
      <div>
        <h3>{edu.title}</h3>
        <CollapsibleDescription fullDesc={edu.description} />
      </div>
      <header>{edu.date}</header>
    </li>
  ));
  return <ul className="CardList">{listItems}</ul>;
}
