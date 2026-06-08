const galleryItems = [
  { label: "Haldi Ceremony", gradient: "linear-gradient(135deg, #fff8e0, #ffe0b0, #ffd080)", icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#d4900a" strokeWidth="1.5"><path d="M12 22C6.5 22 2 17.5 2 12S6.5 2 12 2s10 4.5 10 10-4.5 10-10 10z"/><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/></svg> },
  { label: "Sangeet Night", gradient: "linear-gradient(135deg, #f0e0ff, #e0c0ff, #d090ff)", icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#9b5de5" strokeWidth="1.5"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg> },
  { label: "Dream Weddings", gradient: "linear-gradient(135deg, #fce8ec, #f9d5dc, #e8647a)", isCenter: true, icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="white" stroke="none"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg> },
  { label: "Birthday Bash", gradient: "linear-gradient(135deg, #e0f5ff, #c0e8ff, #80ccff)", icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0099cc" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> },
  { label: "Candlelight Dinner", gradient: "linear-gradient(135deg, #fdf3e0, #fce8c8, #f0d090)", icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#c8861a" strokeWidth="1.5"><path d="M12 2c0 0-3 3-3 6a3 3 0 006 0c0-3-3-6-3-6z"/><line x1="12" y1="11" x2="12" y2="22"/><line x1="9" y1="22" x2="15" y2="22"/></svg> },
];

export default function Gallery() {
  return (
    <section style={{ padding: "80px 5%", background: "#fffaf8" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 700, color: "#1a1009" }}>
            A Glimpse Of Our{" "}
            <span style={{ fontFamily: "Cormorant Garamond, serif", fontStyle: "italic", color: "#c8861a" }}>Creations</span>
          </h2>
          <div className="divider-gold" style={{ marginTop: "16px" }}><span className="divider-dot" /></div>
        </div>

        {/* Gallery Row */}
        <div style={{
          display: "flex",
          gap: "16px",
          alignItems: "stretch",
          height: "320px",
          borderRadius: "24px",
          overflow: "hidden",
          boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
        }}>
          {galleryItems.map((item, i) => (
            <div key={i} className="card-hover" style={{
              flex: item.isCenter ? 1.8 : 1,
              borderRadius: "20px",
              background: item.gradient,
              position: "relative",
              overflow: "hidden",
              cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "flex 0.4s ease",
              minWidth: "80px",
            }}>
              {/* Overlay for center */}
              {item.isCenter && (
                <div style={{
                  position: "absolute", inset: 0,
                  background: "rgba(232,100,122,0.15)",
                  backdropFilter: "blur(1px)",
                }} />
              )}

              {/* Play button for center */}
              {item.isCenter && (
                <div style={{
                  position: "absolute",
                  width: "60px", height: "60px", borderRadius: "50%",
                  background: "rgba(255,255,255,0.9)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
                  zIndex: 2,
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#c8861a" stroke="none"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                </div>
              )}

              {/* Icon */}
              <div style={{
                position: "absolute", top: "50%", left: "50%",
                transform: "translate(-50%, -50%)",
                width: "80px", height: "80px", borderRadius: "50%",
                background: "rgba(255,255,255,0.3)",
                backdropFilter: "blur(8px)",
                display: "flex", alignItems: "center", justifyContent: "center",
                opacity: item.isCenter ? 0 : 0.9,
              }}>
                {item.icon}
              </div>

              {/* Label */}
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0,
                background: "linear-gradient(transparent, rgba(26,16,9,0.7))",
                padding: "32px 16px 16px",
                zIndex: 1,
              }}>
                <p style={{ color: "white", fontFamily: "DM Sans, sans-serif", fontWeight: 600, fontSize: "0.85rem", textAlign: "center" }}>
                  {item.label}
                </p>
              </div>

              {/* Top right icon */}
              <div style={{
                position: "absolute", top: "10px", right: "10px",
                background: "rgba(255,255,255,0.8)", borderRadius: "8px",
                padding: "4px",
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1a1009" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}