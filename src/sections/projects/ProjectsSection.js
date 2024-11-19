import React, { useState } from "react";
import {
  Section,
  SkillsList,
  CollapsibleDescription,
} from "../../CommonComponents.js";
import "./ProjectsGallery.css";
import { projects } from "../../data/projectsData.js";

export default function ProjectsSection() {
  return (
    <div>
      <Section>
        <h2 id="projects" className="SectionTitle">
          04. some of my projects
        </h2>

        <ProjectsGallery />
      </Section>
    </div>
  );
}

function ProjectsGallery() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedType, setSelectedType] = useState("all");

  const newestProjectsFirst = projects.sort(function (a, b) {
    return b.id - a.id;
  });

  const filteredProjects =
    selectedType === "all"
      ? newestProjectsFirst
      : newestProjectsFirst.filter((project) => project.type === selectedType);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const handleFilterClick = (type) => {
    setSelectedType(type);
  };

  return (
    <div className="ProjectsGallery">
      {/* Filter */}
      <div className="FilterBar">
        <button
          className={`FilterButton ${selectedType === "all" ? "active" : ""}`}
          onClick={() => handleFilterClick("all")}
        >
          All
        </button>
        <button
          className={`FilterButton ${selectedType === "game" ? "active" : ""}`}
          onClick={() => handleFilterClick("game")}
        >
          Game
        </button>
        <button
          className={`FilterButton ${selectedType === "web" ? "active" : ""}`}
          onClick={() => handleFilterClick("web")}
        >
          Web App
        </button>
        <button
          className={`FilterButton ${selectedType === "3d" ? "active" : ""}`}
          onClick={() => handleFilterClick("3d")}
        >
          3D
        </button>
      </div>

      {/* Gallery Grid */}
      <div className="GalleryGrid">
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            className="Card Column GalleryItem"
            onClick={() => handleProjectClick(project)}
          >
            <header className="ImageHeader">
              <img src={project.headerImage} alt={project.title}></img>
            </header>
            <div>
              <h3>
                <div>
                  <a href={project.link} target="_blank" title={project.link}>
                    {project.title}
                  </a>
                </div>
                <div>{project.date}</div>
              </h3>
              <SkillsList skills={project.skills} />
            </div>
          </div>
        ))}
      </div>

      {/* Details Modal */}
      {selectedProject && (
        <div className="Modal" onClick={closeModal}>
          <div className="ModalContent" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedProject.title}</h2>
            <h3>{selectedProject.date}</h3>

            <ImageSlideshow
              images={selectedProject.images}
              project_title={selectedProject.title}
            ></ImageSlideshow>
            <p>
              <a
                href={selectedProject.link}
                target="_blank"
                title={selectedProject.link}
              >
                View on GitHub
              </a>
            </p>
            <p>{selectedProject.description}</p>

            <button className="CloseModalButton" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function ImageSlideshow({ images, project_title }) {
  const [displayedImage, setDisplayedImage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionDirection, setTransitionDirection] = useState("");
  const [nextImage, setNextImage] = useState(displayedImage);

  const maxIndex = images.length - 1;

  const handleTransitionEnd = () => {
    setDisplayedImage(nextImage);
    setIsTransitioning(false);
  };

  const handlePrevButtonClick = () => {
    const prevIndex = displayedImage === 0 ? maxIndex : displayedImage - 1;
    setNextImage(prevIndex);
    setTransitionDirection("previous");
    setIsTransitioning(true);
  };

  const handleNextButtonClick = () => {
    const nextIndex = displayedImage === maxIndex ? 0 : displayedImage + 1;
    setNextImage(nextIndex);
    setTransitionDirection("next");
    setIsTransitioning(true);
  };

  return (
    <div className="SlideshowContainer">
      <div className="ButtonContainer">
        <button
          className="SlideshowButton Prev"
          onClick={handlePrevButtonClick}
        >
          &lt;
        </button>
        <button
          className="SlideshowButton Next"
          onClick={handleNextButtonClick}
        >
          &gt;
        </button>
      </div>
      <div
        className={`SlideshowImageWrapper ${
          isTransitioning ? `Transitioning ${transitionDirection}` : ""
        }`}
      >
        <img
          src={images[displayedImage]}
          alt={`${project_title} screenshot ${displayedImage + 1}`}
          className="SlideshowImage CurrentImage"
          onAnimationEnd={handleTransitionEnd}
        />
        {isTransitioning && (
          <img
            src={images[nextImage]}
            alt={`${project_title} screenshot ${nextImage + 1}`}
            className="SlideshowImage NextImage"
          />
        )}
      </div>
    </div>
  );
}
