import { Section } from "../CommonComponents.js";
import self_portrait from "../images/cropped_cv_picture.png";
import cv_2024 from "../CV.2024.5.pdf";

export default function Introduction() {
  return (
    <div className="Sticky">
      <Section>
        <div className="ColumnToRow">
          <div className="Card ColumnToRow">
            <img
              className="IntroImage"
              src={self_portrait}
              alt="digital painting of Noora Halla-aho"
            ></img>
            <div>
              <div className="MainTitle">
                <p>Hello, I'm</p>
                <h1>Noora Halla-aho</h1>
                <p>a junior software developer & artist</p>
              </div>
              <div>
                <DownloadCVButton />
              </div>
            </div>
          </div>
          <ContactInfo />
        </div>
      </Section>
    </div>
  );
}

function DownloadCVButton() {
  return (
    <div className="Download-CV-Button">
      <a href={cv_2024} download="CV_Noora_Halla-aho">
        Download my CV
      </a>
    </div>
  );
}

function ContactInfo() {
  return (
    <div className="Card MaxWidth">
      <div className="ContactInfoBox">
        <h2>get in touch</h2>
        <ul>
          <li>
            <a href="tel:+358 44 22 30308">+358 44 22 30308</a>
          </li>
          <li>
            <a href="mailto:noora.halla.aho@gmail.com">
              noora.halla.aho@gmail.com
            </a>
          </li>
          <li>
            <a href="https://github.com/nooraha">GitHub</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/noora-halla-aho-2a4418235/">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://sketchfab.com/nooraha">Sketchfab</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
