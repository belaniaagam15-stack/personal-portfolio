import Page from "../components/Page.jsx";

const timeline = [
  ["2025 — 2027", "Master in Computer Application (MCA)", "Dr. Babasaheb Ambedkar Open University", "Currently pursuing postgraduate studies in computer applications."],
  ["2022 — 2025", "Bachelor of Computer Application (BCA)", "President of Computer Application (Gujarat University)", "Completed undergraduate studies in computer applications."],
  ["2022", "Higher Secondary School", "Higher Secondary Education", "Completed higher secondary education."],
];

function Education() {
  return (
    <Page title={<>My <em>education</em><br />journey.</>} eyebrow="02 — EDUCATION">
      <p className="lead">My academic journey in computer applications, from higher secondary school through postgraduate study.</p>
      <div className="timeline">
        {timeline.map(([date, title, place, text]) => (
          <article key={title}>
            <small>{date}</small>
            <div>
              <h2>{title}</h2>
              <label>{place}</label>
              <p>{text}</p>
            </div>
          </article>
        ))}
      </div>
    </Page>
  );
}

export default Education;
