import "./App.css";

function App() {
  return (
    <div className="App">
      <Title />
      <Section>
        <Card>
          <AboutMe />
          <DownloadCVButton />
        </Card>
        <Card>
          <AboutMe />
        </Card>
      </Section>
      <Section>
        <SectionTitle title="02. where I've worked" />
      </Section>
    </div>
  );
}

function AboutMe() {
  return (
    <div className="About-Me">
      <p>
        I’m currently in my second year of studies at OSAO, but I’ve been
        programming since I was 10 years old. I also have a passion for art and
        design both 2D and 3D. I love to learn new things and have a vast range
        of interests within the field of ICT, so I’m up for all kinds of work!{" "}
      </p>
    </div>
  );
}

function Title() {
  return (
    <div className="Title">
      <h4>hello! I'm</h4>
      <h1>Noora Halla-aho</h1>
      <h4>a software development student & artist</h4>
    </div>
  );
}

function SectionTitle({ title }) {
  return (
    <div className="Section-Title">
      <h2>{title}</h2>
    </div>
  );
}

function Section({ children }) {
  return <div className="Section">{children}</div>;
}

function Card({ children }) {
  return <div className="Card">{children}</div>;
}

function DownloadCVButton() {
  return <button className="Download-CV-Button">Download my CV</button>;
}

export default App;
