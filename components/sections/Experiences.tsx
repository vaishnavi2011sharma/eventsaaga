"use client";

const categories = [
  {
    label: "Weddings",
    color: "#e8647a",
    bg: "linear-gradient(135deg, #fce8ec, #f9d5dc)",
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#e8647a" strokeWidth="1.6"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM8 12l3 3 5-5"/></svg>,
    ringIcon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e8647a" strokeWidth="1.8"><circle cx="9" cy="9" r="6"/><circle cx="15" cy="15" r="6"/></svg>,
  },
  {
    label: "Proposal Setups",
    color: "#c8407a",
    bg: "linear-gradient(135deg, #f8e0ef, #f0d0e8)",
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="#c8407a" stroke="none"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>,
    ringIcon: <svg width="22" height="22" viewBox="0 0 24 24" fill="#c8407a" stroke="none"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>,
  },
  {
    label: "Candlelight Dinners",
    color: "#c8861a",
    bg: "linear-gradient(135deg, #fdf3e0, #fce8c8)",
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#c8861a" strokeWidth="1.8"><path d="M12 2c0 0-3 3-3 6a3 3 0 006 0c0-3-3-6-3-6z"/><line x1="12" y1="11" x2="12" y2="22"/><line x1="9" y1="22" x2="15" y2="22"/></svg>,
    ringIcon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c8861a" strokeWidth="2"><path d="M12 2c0 0-3 3-3 6a3 3 0 006 0c0-3-3-6-3-6z"/><line x1="12" y1="11" x2="12" y2="18"/></svg>,
  },
  {
    label: "Haldi Ceremony",
    color: "#d4900a",
    bg: "linear-gradient(135deg, #fff8e0, #fef0c0)",
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#d4900a" strokeWidth="1.8"><path d="M12 22C6.5 22 2 17.5 2 12S6.5 2 12 2s10 4.5 10 10-4.5 10-10 10z"/><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/></svg>,
    ringIcon: <svg width="22" height="22" viewBox="0 0 24 24" fill="#d4900a" stroke="none"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17 5.8 21.3l2.4-7.4L2 9.4h7.6z"/></svg>,
  },
  {
    label: "Sangeet Nights",
    color: "#9b5de5",
    bg: "linear-gradient(135deg, #f0ebff, #e8ddf8)",
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#9b5de5" strokeWidth="1.8"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>,
    ringIcon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#9b5de5" strokeWidth="2"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/></svg>,
  },
  {
    label: "Birthday Decorations",
    color: "#0099cc",
    bg: "linear-gradient(135deg, #e0f5ff, #c8eeff)",
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0099cc" strokeWidth="1.8"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/><path d="M12 3v1M8 5l1 1M16 5l-1 1"/></svg>,
    ringIcon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0099cc" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>,
  },
  {
    label: "Baby Showers",
    color: "#00b4a0",
    bg: "linear-gradient(135deg, #e0faf5, #c8f0e8)",
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00b4a0" strokeWidth="1.8"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>,
    ringIcon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00b4a0" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>,
  },
  {
    label: "Corporate Events",
    color: "#1a7ab5",
    bg: "linear-gradient(135deg, #e0f0ff, #c8e4f8)",
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1a7ab5" strokeWidth="1.8"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></svg>,
    ringIcon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1a7ab5" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></svg>,
  },
];

export default function Experiences() {
  return (
    <section id="experiences" style={{ padding: "80px 5%", background: "#fffaf8" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <p className="section-label">Our Experiences</p>
          <div className="divider-gold"><span className="divider-dot" /></div>
          <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 700, color: "#1a1009", marginTop: "12px" }}>
            Celebrations Crafted Just For You
          </h2>
        </div>

        {/* View All */}
        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "24px" }}>
          <a href="/experiences" style={{
            display: "flex", alignItems: "center", gap: "6px",
            color: "#c8861a", fontFamily: "DM Sans, sans-serif", fontSize: "0.85rem",
            fontWeight: 600, textDecoration: "none",
          }}>
            View All Categories
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>

        {/* Categories Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
          gap: "20px",
        }}>
          {categories.map((cat, i) => (
            <div key={i} className="card-hover" style={{
              borderRadius: "20px",
              overflow: "hidden",
              cursor: "pointer",
              border: "1px solid rgba(200,134,26,0.1)",
              background: "white",
              boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
            }}>
              {/* Image placeholder with gradient */}
              <div style={{
                height: "140px",
                background: cat.bg,
                display: "flex", alignItems: "center", justifyContent: "center",
                position: "relative", overflow: "hidden",
              }}>
                <div style={{
                  width: "70px", height: "70px", borderRadius: "50%",
                  background: "rgba(255,255,255,0.6)",
                  backdropFilter: "blur(8px)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  boxShadow: `0 4px 20px ${cat.color}30`,
                }}>
                  {cat.icon}
                </div>
                {/* Decorative dots */}
                <div style={{ position: "absolute", top: "10px", right: "12px", opacity: 0.4 }}>{cat.ringIcon}</div>
              </div>
              {/* Label */}
              <div style={{
                padding: "14px 14px",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexDirection: "column", gap: "6px",
              }}>
                <div style={{
                  width: "36px", height: "36px", borderRadius: "50%",
                  background: cat.bg,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginTop: "-26px",
                  border: "2px solid white",
                  boxShadow: `0 2px 10px ${cat.color}25`,
                }}>
                  {cat.ringIcon}
                </div>
                <p style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 600, fontSize: "0.82rem", color: "#1a1009", textAlign: "center", lineHeight: 1.3 }}>
                  {cat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}