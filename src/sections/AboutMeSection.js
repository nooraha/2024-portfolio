import { Section } from "../CommonComponents.js";
import monnit from "../images/monnit.JPG";

export default function AboutMeSection() {
  return (
    <div>
      <h2 id="aboutme">01. about me</h2>
      <Section>
        <div className="Card">
          <p>
            Hi! I’m a Finnish final-year software development student based in
            Oulu. I've loved programming since primary school, beginning with
            Vex IQ robotics (Finnish National Champion 2019). Since then I've
            built many applications and games of my own utilizing languages and
            tools like C#, C++, Python, JavaScript, React and Unity. I'm a
            native Finnish speaker but also consider myself fluent in English
            and proficient in German and Swedish.
          </p>
        </div>
        <div className="Card">
          <p>
            When I'm not coding, I do a little bit of everything - from playing
            the flute and sax, swimming and textile crafts to lego architecture.
            I also have a burning passion for drawing, design and 3D modeling,
            and actually have a section showcasing some of my work in case
            you're interested. I'm hoping to study particle or astrophysics once
            I finish my software development studies!
          </p>
        </div>
      </Section>
    </div>
  );
}
