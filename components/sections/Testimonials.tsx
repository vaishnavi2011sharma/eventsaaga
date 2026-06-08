const testimonials = [
  {
    name: "Ananya & Rohan",
    location: "New Delhi",
    rating: 5,
    text: "EventSaaga turned our dream wedding into a fairytale! Every detail was perfect.",
    avatar: "AR",
    avatarBg: "linear-gradient(135deg, #fce8ec, #f9d5dc)",
    avatarColor: "#e8647a",
  },
  {
    name: "Priya & Vikram",
    location: "Mumbai",
    rating: 5,
    text: "The sangeet night was absolutely stunning. Our guests couldn't stop talking about it!",
    avatar: "PV",
    avatarBg: "linear-gradient(135deg, #f0ebff, #e8ddf8)",
    avatarColor: "#9b5de5",
  },
  {
    name: "Meera Sharma",
    location: "Jaipur",
    rating: 5,
    text: "The candlelight proposal setup was beyond magical. He said yes immediately!",
    avatar: "MS",
    avatarBg: "linear-gradient(135deg, #fdf3e0, #fce8c8)",
    avatarColor: "#c8861a",
  },
];

const images = [
  { bg: "linear-gradient(135deg, #fce8ec, #f9c0cc)", label: "Wedding Mandap" },
  { bg: "linear-gradient(135deg, #fff8e0, #ffe0a0)", label: "Haldi Decor" },
  { bg: "linear-gradient(135deg, #f0ebff, #ddd0ff)", label: "Reception" },
  { bg: "linear-gradient(135deg, #e0f5ff, #b8d8f0)", label: "Anniversary" },
];

export function Testimonials() {
  return (
    <section style={{ padding: "80px 5%", background: "linear-gradient(135deg, #fffaf8, #fdf0f5)" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr 1fr", gap: "40px", alignItems: "start" }}>
          {/* Testimonials */}
          <div>
            <p className="section-label">Client Stories</p>
            <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(1.5rem, 2.5vw, 2.1rem)", fontWeight: 700, color: "#1a1009", marginTop: "8px", marginBottom: "28px" }}>
              Heartfelt Words From Our{" "}
              <span className="font-script" style={{ color: "#e8647a" }}>Happy Clients</span>
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {testimonials.map((t, i) => (
                <div key={i} style={{
                  background: "white",
                  borderRadius: "20px",
                  padding: "24px",
                  boxShadow: "0 4px 24px rgba(200,134,26,0.1)",
                  border: "1px solid rgba(200,134,26,0.1)",
                  position: "relative",
                }}>
                  <div style={{
                    position: "absolute", top: "20px", left: "20px",
                    color: "#e8647a", fontSize: "2.5rem", lineHeight: 1, fontFamily: "Georgia, serif", opacity: 0.5,
                  }}>&ldquo;</div>
                  <p style={{ color: "#5a4535", fontSize: "0.9rem", lineHeight: 1.7, paddingLeft: "24px", marginBottom: "16px" }}>{t.text}</p>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div style={{
                      width: "40px", height: "40px", borderRadius: "50%",
                      background: t.avatarBg,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: t.avatarColor, fontWeight: 700, fontSize: "0.8rem",
                      fontFamily: "DM Sans, sans-serif",
                    }}>{t.avatar}</div>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: "0.88rem", color: "#1a1009" }}>{t.name}</div>
                      <div style={{ fontSize: "0.72rem", color: "#8a7060" }}>{t.location}</div>
                    </div>
                    <div style={{ marginLeft: "auto", display: "flex", gap: "2px" }}>
                      {[...Array(t.rating)].map((_, j) => (
                        <svg key={j} width="14" height="14" viewBox="0 0 24 24" fill="#e8a93a" stroke="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Photo Collage */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", paddingTop: "40px" }}>
            {images.map((img, i) => (
              <div key={i} style={{
                height: i < 2 ? "160px" : "120px",
                borderRadius: "16px",
                background: img.bg,
                display: "flex", alignItems: "flex-end",
                overflow: "hidden",
                boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
                gridColumn: i === 2 ? "1 / -1" : "auto",
              }}>
                <div style={{ padding: "10px 12px", background: "linear-gradient(transparent, rgba(0,0,0,0.4))", width: "100%" }}>
                  <p style={{ color: "white", fontSize: "0.7rem", fontWeight: 600 }}>{img.label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Cities */}
          <div>
            <p className="section-label">Our Presence</p>
            <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: "1.5rem", fontWeight: 700, color: "#1a1009", marginTop: "8px", marginBottom: "24px" }}>
              We Are In Your City
            </h3>
            <CityGrid />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1000px) {
          section > div > div { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 640px) {
          section > div > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

const cityList = [
  {
    name: "Delhi NCR",
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#e8647a" strokeWidth="1.5"><path d="M3 21h18M5 21V9l7-6 7 6v12M10 21v-4h4v4"/><rect x="9" y="11" width="2" height="3"/><rect x="13" y="11" width="2" height="3"/></svg>,
    color: "#e8647a", bg: "rgba(232,100,122,0.08)"
  },
  {
    name: "Mumbai",
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#c8861a" strokeWidth="1.5"><path d="M3 21h18M5 21V9l7-6 7 6v12M10 21v-4h4v4"/><path d="M8 13h1M15 13h1"/></svg>,
    color: "#c8861a", bg: "rgba(200,134,26,0.08)"
  },
  {
    name: "Jaipur",
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#9b5de5" strokeWidth="1.5"><path d="M2 20h20M4 20V10l8-7 8 7v10"/><path d="M9 20v-5h6v5"/></svg>,
    color: "#9b5de5", bg: "rgba(155,93,229,0.08)"
  },
  {
    name: "Bangalore",
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0099cc" strokeWidth="1.5"><path d="M2 20h20M5 20V8l7-5 7 5v12"/><rect x="9" y="13" width="6" height="7"/></svg>,
    color: "#0099cc", bg: "rgba(0,153,204,0.08)"
  },
  {
    name: "Hyderabad",
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00b4a0" strokeWidth="1.5"><path d="M3 21h18M4 21V8l8-6 8 6v13"/><path d="M9 21v-6h6v6"/></svg>,
    color: "#00b4a0", bg: "rgba(0,180,160,0.08)"
  },
  {
    name: "Pune",
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#c8407a" strokeWidth="1.5"><path d="M3 21h18M5 21V9l7-5 7 5v12"/><circle cx="12" cy="14" r="2"/></svg>,
    color: "#c8407a", bg: "rgba(200,64,122,0.08)"
  },
  {
    name: "Chandigarh",
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1a7ab5" strokeWidth="1.5"><path d="M2 20h20M4 20V11l8-8 8 8v9"/><rect x="8" y="14" width="3" height="6"/><rect x="13" y="14" width="3" height="6"/></svg>,
    color: "#1a7ab5", bg: "rgba(26,122,181,0.08)"
  },
  {
    name: "More Cities",
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#8a7060" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>,
    color: "#8a7060", bg: "rgba(138,112,96,0.08)"
  },
];

export function CityGrid() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "12px" }}>
      {cityList.map((city, i) => (
        <div key={i} className="card-hover" style={{
          borderRadius: "16px",
          padding: "14px 8px",
          background: city.bg,
          border: `1px solid ${city.color}25`,
          display: "flex", flexDirection: "column",
          alignItems: "center", gap: "6px",
          cursor: "pointer",
        }}>
          {city.icon}
          <p style={{ fontSize: "0.68rem", fontWeight: 600, color: "#1a1009", textAlign: "center", lineHeight: 1.2 }}>{city.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Testimonials;