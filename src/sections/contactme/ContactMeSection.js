import { Section } from "../../CommonComponents.js";
import { useRef, useState } from "react";
import "./ContactMe.css";
import emailjs from "@emailjs/browser";

export default function ContactMeSection() {
  return (
    <div>
      <h2 id="contactme" className="SectionTitle">
        Contact
      </h2>
      <Section>
        <div className="ContactRow">
          <ContactInfo />
          <EmailForm />
        </div>
      </Section>
    </div>
  );
}

const EmailForm = () => {
  const form = useRef();
  const [status, setStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_4d9zhha", "template_vsb9y8c", form.current, {
        publicKey: "2m-6uB-7no-h_X0_p",
      })
      .then(
        () => {
          console.log("Email sent successfully!");
          setStatus("success");
          setTimeout(() => setStatus(null), 3000);
        },
        (error) => {
          console.log("Error sending email:", error.text);
          setStatus("error");
          setTimeout(() => setStatus(null), 3000);
        }
      );
  };

  return (
    <div>
      <div className="Card Column">
        <h3>Send me an email</h3>
        <form className="EmailForm" ref={form} onSubmit={sendEmail}>
          <label for="user_name">Name:</label>
          <input
            type="text"
            id="user_name"
            name="user_name"
            size="25"
            required
          ></input>
          <br></br>
          <label for="user_email">Email:</label>
          <input
            type="email"
            id="user_email"
            name="user_email"
            size="25"
            required
          ></input>
          <br></br>
          <label for="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="15"
            cols="60"
            required
          ></textarea>
          <br></br>
          <button type="submit">Send</button>
        </form>
      </div>

      {status === "success" && (
        <div className="Popup Success">
          <p>Email sent successfully!</p>
        </div>
      )}
      {status === "error" && (
        <div className="Popup Error">
          <p>Error sending email. Please try again later.</p>
        </div>
      )}
    </div>
  );
};

function ContactInfo() {
  return (
    <div className="Card Column HalfWidth">
      <h3>Get in touch</h3>
      <p>
        Feel free to reach out by sending me a message or an email! Currently
        seeking new opportunities.
      </p>
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
