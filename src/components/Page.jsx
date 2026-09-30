function Page({ eyebrow, title, children }) {
  return (
    <main className="wrap page">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      {children}
    </main>
  );
}

export default Page;
