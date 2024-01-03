import { Card, Section, SectionTitle } from "./App.js";
import { workExperience } from "./workexperienceData.js";

export default function WorkExperienceSection() {
  return (
    <div>
      <SectionTitle title="02. where I've worked" />
      <Section>
        <WorkExperienceList />
      </Section>
    </div>
  );
}

function WorkExperienceList() {
  const newestWorkFirst = workExperience.sort(function (a, b) {
    return b.id - a.id;
  });
  const listItems = newestWorkFirst.map((work) => (
    <li>
      <Card>
        <h3>{work.title}</h3>
        <h4>{work.type}</h4>
        <h4>{work.date}</h4>
        <div className="Parallel">
          <img alt={work.title} />
          <p>{work.description}</p>
        </div>
      </Card>
    </li>
  ));
  return (
    <div className="Work-Experience-List">
      <ul>{listItems}</ul>
    </div>
  );
}
