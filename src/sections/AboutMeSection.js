import { Section } from "../CommonComponents.js";
import monnit from "../images/monnit.JPG";

export default function AboutMeSection() {
  return (
    <div>
      <h2 id="aboutme">01. about me</h2>
      <Section>
        <div className="Card">
          <p>
            I’m an ICT and software development student at OSAO, currently in my
            second year. I've had a real passion for programming since I was in
            primary school, beginning with my participation in our school's Vex
            IQ robotics team as the team's programmer (we won the Finnish
            national championship in 2019, by the way). Since then I've built
            many applications and games of my own utilizing a range of languages
            and tools like C#, C++, Python, JavaScript, React and Unity. And
            speaking of languages, on top of being a native Finnish speaker, I'm
            fluent in English and proficient in German and Swedish.
          </p>
        </div>
        <div className="Card">
          <p>
            When I'm not coding, I enjoy playing the flute, swimming and doing
            various crafts - from crocheting to building swords. I have an
            especially strong interest in drawing, design and 3D modeling: I
            actually have a section showcasing some of my work in case you're
            interested. I also LOVE physics and mathematics. I'm hoping to study
            physics once I graduate from vocational school and incorporate it
            into my future career!
          </p>
        </div>

        <div className="Card Column">
          <img
            src={monnit}
            alt="two bristlenose plecos doing a cute pose"
          ></img>
          <p>Here's also a picture of my plecos being cute for good measure</p>
        </div>
      </Section>
    </div>
  );
}
