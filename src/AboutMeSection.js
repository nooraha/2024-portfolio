import { Card, Section } from "./App.js";

export default function AboutMeSection() {
  return (
    <div>
      <Section>
        <Card>
          <p>
            I’m a second-year ICT and software development student at OSAO, but
            I’ve had a passion for programming since I was around 10 years old.
            At school, I specialize in software development, but I’ve also
            dabbled in web design and development, AI & machine learning and 3D
            modelling, as well as unit testing through my internship at Nokia.
            In addition to programming, I’m interested in illustration and UI/UX
            design.
          </p>
          <DownloadCVButton />
        </Card>
      </Section>
    </div>
  );
}

function DownloadCVButton() {
  return <button className="Download-CV-Button">Download my CV</button>;
}
