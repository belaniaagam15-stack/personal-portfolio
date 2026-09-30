import SocialLinks from "../components/SocialLinks.jsx";

function Home({ navigate }) {
  return (
    <main>
      <section className="hero wrap">
        <div>
          <p className="eyebrow">PROFILE PORTFOLIO</p>
          <h1>Aagam <em>Belani</em></h1>
          <h2 className="hero-role">Frontend Developer</h2>
          <p className="hero-tagline"><strong>Turning ideas into interactive web experiences.</strong></p>
          <p className="intro">Welcome to my portfolio. Explore my journey, discover my skills, and take a look at the projects I&apos;ve built along the way.</p>
          <div className="hero-actions">
            <button className="pill dark" onClick={() => navigate("experience")}>Explore Portfolio <b>→</b></button>
            <SocialLinks />
          </div>
        </div>
        <div className="portrait">
          <div className="circle" />
          <div className="portrait-card"><strong>AB</strong><small>FRONTEND<br />DEVELOPER</small></div>
        </div>
      </section>
      <section className="dark-section">
        <div className="wrap about">
          <div className="about-copy">
            <p className="eyebrow">A LITTLE ABOUT ME</p>
            <p className="large-copy">I care about the space where strategy, visual design, and technology meet. My goal is always the same: make something people enjoy using.</p>
            <div className="stats"><span><b>0</b>Years experience</span><span><b>0</b>Projects shipped</span></div>
          </div>
          <div className="about-photo"><img src="/aagam-belani.jpeg" alt="Aagam Belani" /></div>
        </div>
      </section>
      <section className="wrap explore">
        <p className="eyebrow">EXPLORE THE PROFILE</p>
        <div className="cards">
          {[
            ["education", "Education", "The foundations and ideas that shaped my practice."],
            ["experience", "Experience", "The skills and direction I'm developing."],
            ["skills", "Skills", "The languages and tools I use to build for the web."],
            ["contact", "Contact", "Have a project in mind? I'd love to hear about it."],
          ].map(([key, title, text], i) => (
            <button className={"card " + (i === 1 ? "lime" : "")} onClick={() => navigate(key)} key={key}>
              <small>0{i + 1}</small>
              <h2>{title}</h2>
              <p>{text}</p>
              <b>↗</b>
            </button>
          ))}
        </div>
      </section>
      <section className="home-skills">
        <div className="wrap skills-stage">
          <div className="skills-stage-heading">
            <p className="eyebrow">A SNAPSHOT OF MY SKILLS</p>
            <h2>Ideas become<br /><em>interactive.</em></h2>
            <button className="text-button" onClick={() => navigate("skills")}>View all skills <span>↗</span></button>
          </div>
          <div className="floating-skills">
            <span className="float-skill float-html">HTML</span>
            <span className="float-skill float-css">CSS</span>
            <span className="float-skill float-js">JS</span>
            <span className="float-skill float-react">React.js</span>
            <span className="float-skill float-vscode">VS Code</span>
            <span className="float-skill float-sql">SQL</span>
          </div>
        </div>
        <div className="skill-marquee">
          <div>HTML&nbsp;&nbsp; / &nbsp;&nbsp;CSS&nbsp;&nbsp; / &nbsp;&nbsp;JAVASCRIPT&nbsp;&nbsp; / &nbsp;&nbsp;REACT.JS&nbsp;&nbsp; / &nbsp;&nbsp;VS CODE&nbsp;&nbsp; / &nbsp;&nbsp;SQL&nbsp;&nbsp; / &nbsp;&nbsp;</div>
          <div aria-hidden="true">HTML&nbsp;&nbsp; / &nbsp;&nbsp;CSS&nbsp;&nbsp; / &nbsp;&nbsp;JAVASCRIPT&nbsp;&nbsp; / &nbsp;&nbsp;REACT.JS&nbsp;&nbsp; / &nbsp;&nbsp;VS CODE&nbsp;&nbsp; / &nbsp;&nbsp;SQL&nbsp;&nbsp; / &nbsp;&nbsp;</div>
        </div>
      </section>
    </main>
  );
}

export default Home;
  