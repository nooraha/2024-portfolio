import { Section } from "../CommonComponents.js";
import self_portrait from "../images/cropped_cv_picture.png";
import cv_2024 from "../CV.2024.5.pdf";
import "../Introduction.css";

export default function Introduction() {
  return (
    <Section>
      <HeroPage />
    </Section>
  );
}

function HeroPage() {
  return (
    <div className="HeroCard">
      <div className="HeroLeft">
        <p>Hello! I'm</p>
        <h1>Noora Halla-aho</h1>
        <h2>Junior Software Developer & 2D/3D Artist</h2>
      </div>
      <div className="HeroRight">
        <ContactMeButton />
        <DownloadCVButton />
      </div>
    </div>
  );
}

function DownloadCVButton() {
  return (
    <div className="Download-CV-Button HeroButton">
      <a href={cv_2024} download="CV_Noora_Halla-aho">
        Download my CV
      </a>
    </div>
  );
}

function ContactMeButton() {
  return (
    <div className="ContactMeButton HeroButton">
      <a href="#contactme">Contact me</a>
    </div>
  );
}

function ContactInfo() {
  return (
    <div className="Card MaxWidth">
      <div className="ContactInfoBox">
        <ul>
          <li>
            <a
              href="tel:+358 44 22 30308"
              target="_blank"
              title="+358 44 22 30308"
            >
              +358 44 22 30308
            </a>
          </li>
          <li>
            <a
              href="mailto:noora.halla.aho@gmail.com"
              target="_blank"
              title="noora.halla.aho@gmail.com"
            >
              noora.halla.aho@gmail.com
            </a>
          </li>
          <li>
            <a
              href="https://github.com/nooraha"
              target="_blank"
              title="https://github.com/nooraha"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/noora-halla-aho-2a4418235/"
              target="_blank"
              title="https://www.linkedin.com/in/noora-halla-aho-2a4418235/"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://sketchfab.com/nooraha"
              target="_blank"
              title="https://sketchfab.com/nooraha"
            >
              Sketchfab
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
