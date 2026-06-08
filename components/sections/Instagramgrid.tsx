const moments = [
  { bg: "linear-gradient(135deg, #fce8ec, #f9c0cc)", label: "Wedding" },
  { bg: "linear-gradient(135deg, #fff8e0, #ffe0a0)", label: "Haldi" },
  { bg: "linear-gradient(135deg, #1a1009, #3a2010)", label: "Night Event" },
  { bg: "linear-gradient(135deg, #fce8ec, #ffb8c8)", label: "Sangeet" },
  { bg: "linear-gradient(135deg, #fdf3e0, #ffd080)", label: "Ceremony" },
  { bg: "linear-gradient(135deg, #e0f0ff, #80ccff)", label: "Birthday" },
  { bg: "linear-gradient(135deg, #f0ebff, #c8a0ff)", label: "Decor" },
];

const icons = [
  <svg key="0" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="rgba(255,255,255,0.7)" stroke="none"/></svg>,
  <svg key="1" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="rgba(255,255,255,0.7)" stroke="none"/></svg>,
  <svg key="2" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="rgba(255,255,255,0.7)" stroke="none"/></svg>,
];

export default function InstagramGrid() {
  return (
    <section style={{ padding: "80px 5%", background: "#fffaf8" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 700, color: "#1a1009" }}>
            Moments We{" "}
            <span style={{ fontFamily: "Cormorant Garamond, serif", fontStyle: "italic", color: "#c8861a" }}>Crafted</span>
          </h2>
          <div className="divider-gold" style={{ marginTop: "12px" }}><span className="divider-dot" /></div>
        </div>

        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          gap: "12px",
          height: "220px",
        }}>
          {moments.map((m, i) => (
            <div key={i} className="card-hover" style={{
              borderRadius: "16px",
              background: m.bg,
              position: "relative",
              overflow: "hidden",
              cursor: "pointer",
              display: "flex", alignItems: "flex-end",
            }}>
              {/* Instagram icon */}
              <div style={{
                position: "absolute", top: "10px", right: "10px",
                background: "rgba(255,255,255,0.3)", borderRadius: "8px", padding: "4px",
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="rgba(255,255,255,0.9)" stroke="none"/></svg>
              </div>
              {/* Label */}
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0,
                background: "linear-gradient(transparent, rgba(26,16,9,0.6))",
                padding: "20px 10px 10px",
              }}>
                <p style={{ color: "white", fontSize: "0.7rem", fontWeight: 600 }}>{m.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Follow CTA */}
        <div style={{ textAlign: "center", marginTop: "32px" }}>
          <a href="https://instagram.com/eventsaaga" target="_blank" rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              padding: "12px 28px",
              background: "linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
              color: "white", borderRadius: "50px",
              fontFamily: "DM Sans, sans-serif", fontWeight: 600, fontSize: "0.88rem",
              textDecoration: "none",
              boxShadow: "0 4px 20px rgba(220,39,67,0.3)",
              transition: "all 0.3s ease",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none"/></svg>
            Follow Us @eventsaaga
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          section > div > div:nth-child(2) {
            grid-template-columns: repeat(3, 1fr) !important;
            height: auto !important;
          }
          section > div > div:nth-child(2) > div {
            height: 120px;
          }
        }
        @media (max-width: 480px) {
          section > div > div:nth-child(2) {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}