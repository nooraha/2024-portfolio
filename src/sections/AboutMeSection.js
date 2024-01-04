import { Section } from "../CommonComponents.js";
import cv_pic from "../images/old_cv_picture.png";

export default function AboutMeSection() {
  return (
    <div>
      <Section>
        <div>
          <p id="aboutme" className="SectionTitle">
            Hello, I'm
          </p>
          <h1>Noora Halla-aho</h1>
          <p>junior software developer & artist</p>
        </div>
        <div className="Invisible Card">
          <img src={cv_pic} alt="me" />
          <div>
            <p>
              I’m a second-year ICT and software development student at OSAO,
              but I’ve had a passion for programming since I was around 10 years
              old. At school, I specialize in software development, but I’ve
              also dabbled in web design and development, AI & machine learning
              and 3D modelling, as well as unit testing through my internship at
              Nokia. In addition to programming, I’m interested in illustration
              and UI/UX design.
            </p>
            <DownloadCVButton />
          </div>
        </div>
      </Section>
    </div>
  );
}

function DownloadCVButton() {
  return <button className="Download-CV-Button">Download my CV</button>;
}
