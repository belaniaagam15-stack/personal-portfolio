function SocialLinks() {
  return (
    <div className="social-links">
      <a
        className="social-link"
        href="https://www.linkedin.com/in/aagambelani"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        title="LinkedIn"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667h-3.554V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
        </svg>
      </a>
      <a
        className="social-link"
        href="https://github.com/belaniaagam15-stack"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        title="GitHub"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 .5C5.648.5.5 5.648.5 12c0 5.084 3.292 9.394 7.86 10.916.575.106.785-.25.785-.554 0-.274-.01-1.001-.015-1.964-3.197.694-3.873-1.541-3.873-1.541-.523-1.329-1.278-1.683-1.278-1.683-1.044-.714.08-.699.08-.699 1.155.081 1.763 1.186 1.763 1.186 1.026 1.759 2.693 1.251 3.35.957.104-.744.402-1.251.73-1.539-2.553-.29-5.238-1.277-5.238-5.686 0-1.256.45-2.283 1.187-3.088-.12-.29-.514-1.462.112-3.048 0 0 .967-.31 3.17 1.18a10.98 10.98 0 0 1 2.885-.388c.98.005 1.966.133 2.886.388 2.201-1.49 3.167-1.18 3.167-1.18.628 1.586.233 2.758.114 3.048.738.805 1.185 1.832 1.185 3.088 0 4.42-2.69 5.393-5.253 5.677.413.356.78 1.06.78 2.136 0 1.542-.014 2.785-.014 3.164 0 .307.207.665.79.552C20.21 21.39 23.5 17.082 23.5 12c0-6.352-5.148-11.5-11.5-11.5z" />
        </svg>
      </a>
      <a
        className="social-link"
        href="mailto:belaniaagam15@gmail.com"
        aria-label="Email"
        title="Email"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="2.5" y="4.5" width="19" height="15" rx="2.3" />
          <path d="M3.5 6.2 12 12.8l8.5-6.6" />
        </svg>
      </a>
    </div>
  );
}

export default SocialLinks;
