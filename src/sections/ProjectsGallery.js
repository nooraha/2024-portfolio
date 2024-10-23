import React, { useState } from "react";
import {
  Section,
  SkillsList,
  CollapsibleDescription,
} from "../CommonComponents.js";
import "../ProjectsGallery.css";
import { projects } from "../data/projectsData.js";
import talvimetsa_gameplay from "../images/talvimetsa_gameplay.png";
import dagon_gameplay from "../images/dagon_gameplay.png";

export default function ProjectsGallery() {
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
              <img src={talvimetsa_gameplay} alt={project.title}></img>
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
            <p>
              <a
                href={selectedProject.link}
                target="_blank"
                title={selectedProject.link}
              >
                View on GitHub
              </a>
            </p>
            <ImageSlideshow
              images={[dagon_gameplay, talvimetsa_gameplay]}
              project_title={selectedProject.title}
            ></ImageSlideshow>
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

function GalleryItem({ project }) {
  <div className="Card Column">
    <header className="ImageHeader">
      <a href={project.link} target="_blank" title={project.link}>
        <img src={talvimetsa_gameplay} alt={project.title}></img>
      </a>
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
      <CollapsibleDescription fullDesc={project.description} />
      <SkillsList skills={project.skills} />
    </div>
  </div>;
}
