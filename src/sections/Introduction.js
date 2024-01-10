import { Section } from "../CommonComponents.js";
import self_portrait from "../images/old_cv_picture.png";

export default function Introduction() {
  return (
    <div className="Sticky">
      <Section>
        <div className="ColumnToRow">
          <div className="Card ColumnToRow">
            <img className="InlineImg" src={self_portrait}></img>
            <div>
              <div className="MainTitle">
                <p>Hello, I'm</p>
                <h1>Noora Halla-aho</h1>
                <p>junior software developer & artist</p>
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
    <button className="Download-CV-Button">
      <a href={self_portrait} download="cv_placeholder.jpg">
        Download my CV
      </a>
    </button>
  );
}

function ContactInfo() {
  return (
    <div className="Card MaxWidth">
      <div className="ContactInfoBox">
        <h2>Get in touch</h2>
        <ul>
          <li>phone:</li>
          <li>email:</li>
          <li>GitHub:</li>
          <li>LinkedIn:</li>
        </ul>
      </div>
    </div>
  );
}
