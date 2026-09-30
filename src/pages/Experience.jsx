import Page from "../components/Page.jsx";

const timeline = [
  
  ["  2026— Present", "Software devloper", "work24. ", "stared my career as a software devloper in work24. "],
  
];

function Experience() {
  return (
    <Page title={<>A few places<br /><em>I&apos;ve made things.</em></>} eyebrow="03 — EXPERIENCE">
      <div className="timeline">
        {timeline.map(([date, title, place, text]) => (
          <article key={title}>
            <small>{date}</small>
            <div>
              <h2>{title}</h2>
              <label>{place}</label>
              <p>{text}</p>
              <div className="tags"><span>Product strategy</span><span>UX / UI design</span><span>Prototyping</span></div>
            </div>
          </article>
        ))}
      </div>
    </Page>
  );
}

export default Experience;
