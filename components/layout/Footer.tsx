"use client";

import Link from "next/link";

const socialLinks = [
  {
    name: "Instagram", href: "#",
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
  },
  {
    name: "Facebook", href: "#",
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
  },
  {
    name: "Pinterest", href: "#",
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.65 7.86 6.39 9.29-.09-.78-.17-1.98.04-2.83.18-.77 1.22-5.16 1.22-5.16s-.31-.62-.31-1.55c0-1.45.84-2.54 1.88-2.54.89 0 1.32.67 1.32 1.47 0 .89-.57 2.24-.86 3.49-.25 1.04.51 1.88 1.53 1.88 1.83 0 3.06-2.33 3.06-5.09 0-2.1-1.42-3.67-3.98-3.67-2.9 0-4.72 2.17-4.72 4.58 0 .83.24 1.42.62 1.87.17.2.19.28.13.51-.04.17-.14.56-.18.72-.06.23-.24.32-.44.23-1.24-.51-1.82-1.89-1.82-3.43 0-2.54 2.14-5.59 6.39-5.59 3.43 0 5.69 2.49 5.69 5.17 0 3.54-1.96 6.18-4.84 6.18-.97 0-1.88-.52-2.19-1.1l-.61 2.34c-.19.74-.71 1.67-1.09 2.23.82.25 1.69.39 2.59.39 5.52 0 10-4.48 10-10S17.52 2 12 2z"/></svg>
  },
  {
    name: "YouTube", href: "#",
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" stroke="currentColor" fill="none"/></svg>
  },
];

export default function Footer() {
  return (
    <footer style={{
      background: "linear-gradient(180deg, #fffaf8 0%, #fdf3ec 100%)",
      borderTop: "1px solid rgba(200,134,26,0.12)",
      paddingTop: "60px",
    }}>
      {/* CTA Band */}
      <div style={{
        background: "linear-gradient(135deg, #1a1009 0%, #2d1f10 50%, #1a1009 100%)",
        margin: "0 5% 60px",
        borderRadius: "24px",
        padding: "48px 10%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "24px",
        boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Decorative circles */}
        <div style={{ position: "absolute", top: "-40px", right: "10%", width: "200px", height: "200px", borderRadius: "50%", background: "rgba(200,134,26,0.08)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "-60px", right: "20%", width: "150px", height: "150px", borderRadius: "50%", background: "rgba(232,100,122,0.08)", pointerEvents: "none" }} />

        <div style={{ position: "relative" }}>
          <p style={{ color: "#c8861a", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "8px" }}>Ready to celebrate?</p>
          <h3 style={{ fontFamily: "Playfair Display, serif", color: "white", fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 700, lineHeight: 1.3 }}>
            Let's Create Your{" "}
            <span style={{ color: "#e8a93a" }}>Unforgettable</span>{" "}
            Moment{" "}
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#e8647a" style={{ display: "inline", verticalAlign: "middle" }}><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
          </h3>
        </div>
        <a href="#book" className="btn-primary" style={{ background: "linear-gradient(135deg, #c8861a, #e8a93a)", fontSize: "0.9rem", padding: "14px 32px" }}>
          Book Your Experience Now
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
      </div>

      {/* Footer Body */}
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 5% 40px", display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "40px" }}>
        {/* Brand */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
            <div style={{
              width: "44px", height: "44px",
              background: "linear-gradient(135deg, #c8861a, #e8a93a)",
              borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 4px 15px rgba(200,134,26,0.3)",
            }}>
              <span style={{ color: "white", fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "1.3rem" }}>S</span>
            </div>
            <div>
              <div style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, fontSize: "1rem", color: "#1a1009" }}>EVENTSAAGA</div>
              <div style={{ fontSize: "0.6rem", color: "#c8861a", letterSpacing: "0.1em" }}>Crafting Moments, Creating Memories</div>
            </div>
          </div>
          <p style={{ color: "#5a4535", fontSize: "0.85rem", lineHeight: 1.7, marginBottom: "20px" }}>
            From intimate celebrations to grand affairs, we design experiences that stay in your heart forever.
          </p>
          <div style={{ display: "flex", gap: "10px" }}>
            {socialLinks.map((s) => (
              <a key={s.name} href={s.href}
                style={{
                  width: "38px", height: "38px", borderRadius: "50%",
                  background: "rgba(200,134,26,0.08)",
                  border: "1px solid rgba(200,134,26,0.2)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#c8861a", transition: "all 0.2s", textDecoration: "none",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = "#c8861a"; (e.currentTarget as HTMLAnchorElement).style.color = "white"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(200,134,26,0.08)"; (e.currentTarget as HTMLAnchorElement).style.color = "#c8861a"; }}
              >{s.icon}</a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, color: "#1a1009", marginBottom: "20px", fontSize: "1rem" }}>Quick Links</h4>
          {["Home", "Experiences", "Gallery", "About Us", "Blog", "Contact Us"].map((item) => (
            <Link key={item} href="#" style={{ display: "flex", alignItems: "center", gap: "8px", color: "#5a4535", fontSize: "0.85rem", textDecoration: "none", marginBottom: "10px", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#c8861a")}
              onMouseLeave={e => (e.currentTarget.style.color = "#5a4535")}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#c8861a" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              {item}
            </Link>
          ))}
        </div>

        {/* Services */}
        <div>
          <h4 style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, color: "#1a1009", marginBottom: "20px", fontSize: "1rem" }}>Our Services</h4>
          {["Weddings", "Proposal Setups", "Candlelight Dinners", "Haldi Ceremony", "Sangeet Nights", "Birthday Decorations", "Baby Showers", "Corporate Events"].map((item) => (
            <Link key={item} href="#" style={{ display: "flex", alignItems: "center", gap: "8px", color: "#5a4535", fontSize: "0.85rem", textDecoration: "none", marginBottom: "10px", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#c8861a")}
              onMouseLeave={e => (e.currentTarget.style.color = "#5a4535")}
            >
              <svg width="10" height="10" viewBox="0 0 24 24" fill="#e8647a" stroke="none"><circle cx="12" cy="12" r="4"/></svg>
              {item}
            </Link>
          ))}
        </div>

        {/* Contact */}
        <div>
          <h4 style={{ fontFamily: "Playfair Display, serif", fontWeight: 700, color: "#1a1009", marginBottom: "20px", fontSize: "1rem" }}>Get In Touch</h4>
          {[
            { icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c8861a" strokeWidth="1.8"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>, text: "Pan India Services – 100+ Cities" },
            { icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c8861a" strokeWidth="1.8"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.82 19.79 19.79 0 01.03 1.18 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>, text: "+91 98765 43210" },
            { icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c8861a" strokeWidth="1.8"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>, text: "hello@eventsaaga.com" },
            { icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c8861a" strokeWidth="1.8"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>, text: "24/7 Support Available" },
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", gap: "10px", marginBottom: "14px", alignItems: "flex-start" }}>
              <div style={{ flexShrink: 0, marginTop: "2px" }}>{item.icon}</div>
              <span style={{ color: "#5a4535", fontSize: "0.85rem", lineHeight: 1.5 }}>{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{
        borderTop: "1px solid rgba(200,134,26,0.12)",
        padding: "20px 5%",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        flexWrap: "wrap", gap: "12px",
        maxWidth: "1280px", margin: "0 auto",
      }}>
        <p style={{ color: "#8a7060", fontSize: "0.8rem" }}>
          © 2025 EventSaaga. All Rights Reserved. Made with{" "}
          <svg width="12" height="12" viewBox="0 0 24 24" fill="#e8647a" style={{ display: "inline", verticalAlign: "middle" }}><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
          {" "}for unforgettable memories.
        </p>
        <div style={{ display: "flex", gap: "20px" }}>
          {["Privacy Policy", "Terms of Service", "Sitemap"].map((item) => (
            <Link key={item} href="#" style={{ color: "#8a7060", fontSize: "0.8rem", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#c8861a")}
              onMouseLeave={e => (e.currentTarget.style.color = "#8a7060")}
            >{item}</Link>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer > div:nth-child(2) { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          footer > div:nth-child(2) { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}