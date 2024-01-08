import { education } from "../data/educationData.js";
import { Section } from "../CommonComponents.js";

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
        <p>{edu.description}</p>
      </div>
      <header>{edu.date}</header>
    </li>
  ));
  return <ul className="CardList">{listItems}</ul>;
}
