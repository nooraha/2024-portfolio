import "./App.css";
import AboutMeSection from "./sections/AboutMeSection.js";
import WorkExperienceSection from "./sections/WorkExperienceSection.js";
import EducationSection from "./sections/EducationSection.js";
import ProjectsSection from "./sections/ProjectsSection.js";

function App() {
  return (
    <div className="App">
      <div className="Section-Holder">
        <Title />
        <AboutMeSection />
        <WorkExperienceSection />
        <EducationSection />
        <ProjectsSection />
      </div>
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

export default App;
