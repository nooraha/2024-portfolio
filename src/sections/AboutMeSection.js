import { Section } from "../CommonComponents.js";
import monnit from "../images/monnit.JPG";

export default function AboutMeSection() {
  return (
    <div>
      <h2 id="aboutme">01. about me</h2>
      <Section>
        <div className="Card">
          <p>
            Hi! I’m a Finnish final-year software development student, based in
            Oulu. I've had a passion for programming since I was in primary
            school, beginning with Vex IQ robotics (my team and I won the
            Finnish national championship in 2019, by the way). Since then I've
            built many applications and games of my own utilizing a range of
            languages and tools like C#, C++, Python, JavaScript, React and
            Unity. And speaking of languages, I'm a native Finnish speaker but
            also consider myself fluent in English and proficient in German and
            Swedish.
          </p>
        </div>
        <div className="Card">
          <p>
            When I'm not coding, I enjoy playing the flute, swimming and doing
            various crafts - from crocheting to building swords. I have an
            especially strong interest in drawing, design and 3D modeling: I
            actually have a section showcasing some of my work in case you're
            interested. I'm hoping to study physics once I finish my software
            development studies!
          </p>
        </div>
      </Section>
    </div>
  );
}
