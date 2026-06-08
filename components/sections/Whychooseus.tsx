const features = [
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#e8647a" strokeWidth="1.6"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>,
    bg: "linear-gradient(135deg, #fce8ec, #f9d5dc)",
    title: "Premium Decor & Styling",
    desc: "Trendy, luxurious & customized setups",
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#c8861a" strokeWidth="1.6"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>,
    bg: "linear-gradient(135deg, #fdf3e0, #fce8c8)",
    title: "Dedicated Event Managers",
    desc: "Personal support from planning to execution",
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#9b5de5" strokeWidth="1.6"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>,
    bg: "linear-gradient(135deg, #f0ebff, #e8ddf8)",
    title: "Top Quality Assurance",
    desc: "Premium materials & trusted vendors",
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0099cc" strokeWidth="1.6"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
    bg: "linear-gradient(135deg, #e0f5ff, #c8eeff)",
    title: "24/7 Support",
    desc: "We're here whenever you need us",
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00b4a0" strokeWidth="1.6"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>,
    bg: "linear-gradient(135deg, #e0faf5, #c8f0e8)",
    title: "Pan India Services",
    desc: "Celebrating across 100+ cities in India",
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#e8647a" strokeWidth="1.6"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>,
    bg: "linear-gradient(135deg, #fce8ec, #f0d0e8)",
    title: "Personalized Experiences",
    desc: "Tailored events that reflect your story",
  },
];

const stats = [
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#e8647a" strokeWidth="1.6"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>,
    number: "1000+", label: "Happy Clients"
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#c8861a" strokeWidth="1.6"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
    number: "2000+", label: "Events Completed"
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#9b5de5" strokeWidth="1.6"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/></svg>,
    number: "100+", label: "Cities We Serve"
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0099cc" strokeWidth="1.6"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>,
    number: "50+", label: "Expert Designers"
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="#e8a93a" stroke="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>,
    number: "5 ★", label: "Client Rating"
  },
];

export default function WhyChooseUs() {
  return (
    <section style={{ padding: "80px 5%", background: "linear-gradient(180deg, #fffaf8 0%, #fdf0f5 100%)" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "60px", alignItems: "start" }}>
          {/* Left */}
          <div>
            <p className="section-label">Why Choose EventSaaga</p>
            <div className="divider-gold" style={{ justifyContent: "flex-start" }}>
              <span className="divider-dot" /><span className="divider-dot" style={{ opacity: 0.4 }} />
            </div>
            <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 700, color: "#1a1009", marginTop: "16px", lineHeight: 1.3 }}>
              Perfection In Every{" "}
              <span style={{ fontFamily: "Cormorant Garamond, serif", fontStyle: "italic", color: "#c8861a" }}>
                Detail{" "}
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#e8a93a" style={{ display: "inline", verticalAlign: "middle" }}><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              </span>
            </h2>
            <p style={{ color: "#5a4535", fontSize: "0.95rem", lineHeight: 1.8, marginTop: "20px", marginBottom: "32px" }}>
              We don't just plan events, we create emotions. Every detail is crafted with passion to make your moments unforgettable.
            </p>
            <a href="/about" className="btn-primary">
              Know More About Us
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>

          {/* Right – Feature Cards */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            {features.map((f, i) => (
              <div key={i} className="card-hover" style={{
                background: "white",
                borderRadius: "16px",
                padding: "20px",
                border: "1px solid rgba(200,134,26,0.1)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                display: "flex", gap: "14px", alignItems: "flex-start",
              }}>
                <div style={{
                  width: "48px", height: "48px", borderRadius: "14px", flexShrink: 0,
                  background: f.bg,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  {f.icon}
                </div>
                <div>
                  <h4 style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "0.9rem", color: "#1a1009", marginBottom: "4px" }}>{f.title}</h4>
                  <p style={{ fontSize: "0.78rem", color: "#8a7060", lineHeight: 1.5 }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Bar */}
        <div style={{
          marginTop: "60px",
          background: "white",
          borderRadius: "24px",
          padding: "40px",
          display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "30px",
          boxShadow: "0 8px 40px rgba(200,134,26,0.1)",
          border: "1px solid rgba(200,134,26,0.1)",
        }}>
          {stats.map((s, i) => (
            <div key={i} style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
              <div style={{
                width: "56px", height: "56px", borderRadius: "50%",
                background: "linear-gradient(135deg, #fdf3e0, #fce8c8)",
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 4px 16px rgba(200,134,26,0.15)",
              }}>
                {s.icon}
              </div>
              <div style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "1.8rem", color: "#1a1009", lineHeight: 1 }}>{s.number}</div>
              <div style={{ fontSize: "0.8rem", color: "#8a7060", fontFamily: "DM Sans, sans-serif" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          section > div > div:first-child { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          section > div > div:first-child > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}