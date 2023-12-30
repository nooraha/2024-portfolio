import "./App.css";
import AboutMeSection from "./AboutMeSection.js";
import WorkExperienceSection from "./WorkExperienceSection.js";

function App() {
  return (
    <div className="App">
      <Title />
      <AboutMeSection />
      <WorkExperienceSection />
    </div>
  );
}

function Title() {
  return (
    <div className="Title">
      <h4>Hello, I'm</h4>
      <h1>Noora Halla-aho</h1>
      <h4>junior software developer & artist</h4>
    </div>
  );
}

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

export default App;
