export function SectionTitle({ title }) {
  return (
    <div className="Section-Title">
      <h2>{title}</h2>
    </div>
  );
}

export function Section({ children }) {
  return <div className="Section">{children}</div>;
}

export function Card({ children }) {
  return <div className="Card">{children}</div>;
}

export function SkillsList({ skills }) {
  const listItems = skills.map((skill) => (
    <li>
      <div>{skill}</div>
    </li>
  ));
  return <ul>{listItems}</ul>;
}
