import { education } from "./educationData.js";
import { SectionTitle, Section, Card } from "./App.js";

export default function EducationSection() {
  return (
    <div>
      <SectionTitle title="03. my education" />
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
      <header>{edu.date}</header>
      <div>
        <h3>{edu.title}</h3>
      </div>
      <p>{edu.description}</p>
    </li>
  ));
  return <ul>{listItems}</ul>;
}
