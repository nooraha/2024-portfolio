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
      <Card>
        <h3>{edu.title}</h3>
        <h4>{edu.date}</h4>
        <p>{edu.description}</p>
      </Card>
    </li>
  ));
  return (
    <div className="Education-History-List">
      <ul>{listItems}</ul>
    </div>
  );
}
