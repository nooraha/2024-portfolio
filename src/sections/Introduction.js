import { Section } from "../CommonComponents.js";
import self_portrait from "../images/old_cv_picture.png";

export default function Introduction() {
  return (
    <div className="Sticky">
      <Section>
        <div className="ColumnToRow">
          <div className="ColumnToRow">
            <img className="InlineImg" src={self_portrait}></img>
            <div>
              <div>
                <p>Hello, I'm</p>
                <h1>Noora Halla-aho</h1>
                <p>junior software developer & artist</p>
              </div>
              <div>
                <p></p>
                <DownloadCVButton />
              </div>
            </div>
          </div>
          <div>
            <ContactInfo />
          </div>
        </div>
      </Section>
    </div>
  );
}

function DownloadCVButton() {
  return <button className="Download-CV-Button">Download my CV</button>;
}

function ContactInfo() {
  return (
    <div className="ContactInfoBox">
      <h2>contact me</h2>
      <ul>
        <li>phone:</li>
        <li>email:</li>
        <li>GitHub:</li>
        <li>LinkedIn:</li>
      </ul>
    </div>
  );
}
