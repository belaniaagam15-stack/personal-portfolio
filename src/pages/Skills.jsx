import Page from "../components/Page.jsx";

function Skills() {
  return (
    <Page title={<>Tools for<br /><em>building ideas.</em></>} eyebrow="04 — SKILLS">
      <p className="lead">The technologies and tools I use to turn concepts into responsive, interactive web experiences.</p>
      <div className="skills-grid">
        <section>
          <p className="skill-heading">Frontend development</p>
          <div className="skill-list">
            <span><i className="skill-logo html-logo">5</i>HTML</span>
            <span><i className="skill-logo css-logo">3</i>CSS</span>
            <span><i className="skill-logo js-logo">JS</i>JavaScript</span>
            <span><i className="skill-logo react-logo">⚛</i>React.js</span>
          </div>
        </section>
        <section>
          <p className="skill-heading">Tools & database</p>
          <div className="skill-list">
            <span><img className="skill-image vscode-image" src="/vscode-logo.png" alt="" />VS Code</span>
            <span><img className="skill-image sql-image" src="/sql-logo.png" alt="" />SQL</span>
          </div>
        </section>
      </div>
    </Page>
  );
}

export default Skills;
