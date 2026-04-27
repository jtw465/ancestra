import "./App.css";

function App() {
  return (
    <main className="app-shell">
      <aside className="sidebar">
        <div className="brand-mark">A</div>

        <div>
          <h1>Ancestra</h1>
          <p>Legacy Intelligence Studio</p>
        </div>

        <nav className="studio-nav">
          <button className="nav-item active">Fast Path</button>
          <button className="nav-item">Intake</button>
          <button className="nav-item">Transcription</button>
          <button className="nav-item">Correction</button>
          <button className="nav-item">Export</button>
        </nav>
      </aside>

      <section className="workspace">
        <header className="workspace-header">
          <div>
            <p className="eyebrow">Tier 1 Focus</p>
            <h2>Data Entry Acceleration</h2>
            <p className="subtitle">
              Convert real-world genealogy materials into structured, usable data.
            </p>
          </div>

          <button className="primary-button">Start Import</button>
        </header>

        <section className="fast-path-card">
          <div className="step-card">
            <span>01</span>
            <h3>Import</h3>
            <p>Bring in text, PDFs, scans, images, charts, reports, or certificates.</p>
          </div>

          <div className="step-card">
            <span>02</span>
            <h3>Extract</h3>
            <p>Use OCR and text parsing to find names, dates, places, and relationships.</p>
          </div>

          <div className="step-card">
            <span>03</span>
            <h3>Fix</h3>
            <p>Edit OCR text and extracted fields before anything is exported.</p>
          </div>

          <div className="step-card">
            <span>04</span>
            <h3>Export</h3>
            <p>Prepare clean data for genealogy programs using GEDCOM, JSON, or CSV.</p>
          </div>
        </section>

        <section className="status-panel">
          <h3>Current Build Goal</h3>
          <p>
            Build the simplest useful workflow first: import genealogy material, extract
            draft data, correct it, then export it.
          </p>

          <div className="status-grid">
            <div>
              <strong>Primary Bottleneck</strong>
              <span>Manual data entry</span>
            </div>
            <div>
              <strong>Current Tier</strong>
              <span>Tier 1 — EliteDesk Alpha</span>
            </div>
            <div>
              <strong>Core Rule</strong>
              <span>Speed first, correction always</span>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}

export default App;
