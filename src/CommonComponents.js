import { useState } from "react";

export function Section({ children }) {
  return <div className="Section">{children}</div>;
}

export function SkillsList({ skills }) {
  const listItems = skills.map((skill) => (
    <li>
      <div>{skill}</div>
    </li>
  ));
  return <ul className="SkillsList">{listItems}</ul>;
}

export function CollapsibleDescription({ fullDesc }) {
  const [showFullDescription, setFullDescription] = useState(false);
  const shouldShowFullDesc = fullDesc.length > 240;

  const showFullDescriptionHandler = () => {
    setFullDescription(!showFullDescription);
  };

  const description = showFullDescription
    ? fullDesc
    : shouldShowFullDesc
    ? fullDesc.slice(0, 240) + "..."
    : fullDesc;

  return (
    <div>
      <p>
        {description}{" "}
        {shouldShowFullDesc && (
          <button
            className="ShowMoreButton"
            onClick={showFullDescriptionHandler}
          >
            Show {showFullDescription ? "Less" : "More"}
          </button>
        )}
      </p>
    </div>
  );
}

export function TimeLineListItem({ date, children }) {
  return (
    <div>
      <div className="Row">
        <div className="DecorativeDot"></div>
        <h3>{date}</h3>
      </div>
      <div className="Row">
        <div className="DecorativeLine"></div>
        <div className="Card">{children}</div>
      </div>
    </div>
  );
}
