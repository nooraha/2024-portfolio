export function Section({ children }) {
  return <div className="Section">{children}</div>;
}

export function SkillsList({ skills }) {
  const listItems = skills.map((skill) => (
    <li>
      <div>{skill}</div>
    </li>
  ));
  return <ul>{listItems}</ul>;
}
