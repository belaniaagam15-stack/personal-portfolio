import { useEffect, useState } from "react";
import Home from "./pages/Home.jsx";
import Education from "./pages/Education.jsx";
import Experience from "./pages/Experience.jsx";
import Skills from "./pages/Skills.jsx";
import Contact from "./pages/Contact.jsx";
import ThemeToggle from "./components/ThemeToggle.jsx";

const pages = ["home", "education", "experience", "skills", "contact"];

function App() {
  const [page, setPage] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  const navigate = (next) => {
    setPage(next);
    setMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <header className="header">
        <button className="logo" onClick={() => navigate("home")}><span className="logo-name">Aagam <b>Belani</b></span></button>
        <div className="header-actions">
          <nav className={menuOpen ? "open" : ""}>
            {pages.map((item) => (
              <button className={page === item ? "active" : ""} key={item} onClick={() => navigate(item)}>{item}</button>
            ))}
            <a className="resume-button" href="/resume.pdf" download="Aagam-Belani-Resume.pdf" onClick={() => setMenuOpen(false)}>Resume</a>
          </nav>
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? "Close ×" : "Menu ☰"}</button>
        </div>
      </header>
      {page === "home" && <Home navigate={navigate} />}
      {page === "education" && <Education />}
      {page === "experience" && <Experience />}
      {page === "skills" && <Skills />}
      {page === "contact" && <Contact />}
      <footer />
    </>
  );
}

export default App;
