import { Section } from "../CommonComponents.js";

export default function ContactMeSection() {
  return (
    <div>
      <h2 id="contactme" className="SectionTitle">
        contact me
      </h2>
      <Section>
        <EmailForm />
      </Section>
    </div>
  );
}

function EmailForm() {
  return (
    <div>
      <form>
        <button type="submit">Send</button>
      </form>
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
