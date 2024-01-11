import { useState } from "react";
import "./App.css";
import Introduction from "./sections/Introduction.js";
import AboutMeSection from "./sections/AboutMeSection.js";
import WorkExperienceSection from "./sections/WorkExperienceSection.js";
import EducationSection from "./sections/EducationSection.js";
import ProjectsSection from "./sections/ProjectsSection.js";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="PageHolder">
        <div className="MainHeader">
          <Introduction />
        </div>
        <div className="SectionHolder">
          <AboutMeSection />
          <WorkExperienceSection />
          <EducationSection />
          <ProjectsSection />
        </div>
      </div>
    </div>
  );
}

function NavBar() {
  const [isVisible, setVisibility] = useState(false);

  function handleSetVisibility() {
    setVisibility(!isVisible);
  }
  return (
    <div className="NavBar">
      <button className="CloseNavBarButton" onClick={handleSetVisibility}>
        <span class="material-symbols-outlined">menu</span>
      </button>
      {isVisible && (
        <div className="NavBarItems">
          <a href="#aboutme">about me</a>
          <a href="#workexperience">work experience</a>
          <a href="#education">education</a>
          <a href="#projects">projects</a>
        </div>
      )}
    </div>
  );
}

export default App;
