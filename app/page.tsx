export default function Home() {
  return (
    <main className="dashboard-shell">
      <iframe
        src="/dashboard.html"
        title="AgroVolt — Centro de Operações"
        className="dashboard-frame"
      />
    </main>
  );
}
