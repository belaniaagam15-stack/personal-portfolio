import { useState } from "react";
import Page from "../components/Page.jsx";

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <Page title={<>Let&apos;s make<br /><em>something useful.</em></>} eyebrow="05 — CONTACT">
      <div className="contact">
        <div>
          <p className="lead">Whether you have a clear brief or just a good question, my inbox is open.</p>
          <p className="details">hello@alexmorgan.design<br />New York · Available worldwide</p>
        </div>
        <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
          <label>Name<input required placeholder="Your name" /></label>
          <label>Email<input required type="email" placeholder="you@email.com" /></label>
          <label>Message<textarea required rows="4" placeholder="Tell me a little about your project" /></label>
          <button className="pill dark">{sent ? "Message sent ✓" : "Send message"} <b>→</b></button>
        </form>
      </div>
    </Page>
  );
}

export default Contact;
