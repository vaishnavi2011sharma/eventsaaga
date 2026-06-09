"use client";
import { useState } from "react";
import Link from "next/link";
import BookingForm from "./Bookingform";
import RelatedGamesSection from "./Relatedgamessection";
import HostPartySection from "./Hostpartysection";
import { GameData, getRelatedGames } from "@/lib/gamesData";

const WHATSAPP = "919876543210";
const PHONE    = "9876543210";

interface Props {
  game: GameData;
}

export default function GameDetailPage({ game }: Props) {
  const [activeTab, setActiveTab] = useState<"features" | "includes" | "faq">("features");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [imgErr, setImgErr] = useState(false);
  const relatedGames = getRelatedGames(game.relatedSlugs);

  const tab = (id: typeof activeTab, label: string) => (
    <button onClick={() => setActiveTab(id)}
      style={{
        padding: "10px 22px", border: "none", background: "none",
        borderBottom: `2.5px solid ${activeTab === id ? game.accentColor : "transparent"}`,
        fontFamily: "'DM Sans', sans-serif", fontWeight: activeTab === id ? 700 : 500,
        fontSize: "0.9rem", color: activeTab === id ? game.accentColor : "#6b7280",
        cursor: "pointer", transition: "all 0.15s", whiteSpace: "nowrap",
      }}>
      {label}
    </button>
  );

  return (
    <>
      {/* ── BREADCRUMB ── */}
      <div style={{ background: "#f9fafb", borderBottom: "1px solid #f0f0f0", padding: "12px 5%" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
          {[{ label: "Home", href: "/" }, { label: "Games on Rent", href: "/games" }, { label: game.name, href: "#" }].map((crumb, i, arr) => (
            <span key={i} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              {i > 0 && <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#d1d5db" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>}
              {i < arr.length - 1
                ? <Link href={crumb.href} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem", color: "#6b7280", textDecoration: "none" }}
                    onMouseEnter={e => (e.currentTarget.style.color = game.accentColor)}
                    onMouseLeave={e => (e.currentTarget.style.color = "#6b7280")}>{crumb.label}</Link>
                : <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem", color: game.accentColor, fontWeight: 600 }}>{crumb.label}</span>
              }
            </span>
          ))}
        </div>
      </div>

      {/* ── HERO SECTION: Image left + Info right ── */}
      <section style={{ padding: "48px 5% 40px", background: "#fff" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "flex-start" }}>

          {/* LEFT: Image */}
          <div>
            <div style={{
              borderRadius: "24px", overflow: "hidden",
              aspectRatio: "4/3",
              background: `linear-gradient(160deg, ${game.gradientFrom} 0%, ${game.gradientTo} 100%)`,
              position: "relative",
              boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
            }}>
              {!imgErr ? (
                <img src={`/images/games/${game.slug}.jpg`} alt={game.name}
                  onError={() => setImgErr(true)}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              ) : (
                /* Stylised illustration fallback */
                <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "16px" }}>
                  {/* Outer glow rings */}
                  <div style={{ position: "absolute", width: "60%", paddingTop: "60%", borderRadius: "50%", background: "rgba(255,255,255,0.05)", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} />
                  <div style={{ position: "absolute", width: "42%", paddingTop: "42%", borderRadius: "50%", background: "rgba(255,255,255,0.07)", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} />
                  <div style={{ position: "relative", zIndex: 1, width: "110px", height: "110px", borderRadius: "50%", background: "rgba(255,255,255,0.14)", border: "2px solid rgba(255,255,255,0.25)", display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(8px)", boxShadow: `0 8px 32px ${game.accentColor}40` }}>
                    <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.92)" strokeWidth="1.4">
                      <path d={game.features[0]?.icon || "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"}/>
                    </svg>
                  </div>
                  <p style={{ position: "relative", zIndex: 1, fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", color: "rgba(255,255,255,0.65)", fontSize: "0.9rem" }}>
                    Add /public/images/games/{game.slug}.jpg
                  </p>
                </div>
              )}

              {/* Badge overlay */}
              <div style={{ position: "absolute", top: "16px", left: "16px", background: game.badgeColor, color: "white", fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "5px 14px", borderRadius: "50px", boxShadow: `0 3px 12px ${game.badgeColor}60` }}>
                {game.badge}
              </div>

              {/* Category chip */}
              <div style={{ position: "absolute", bottom: "16px", left: "16px", background: "rgba(0,0,0,0.5)", backdropFilter: "blur(8px)", color: "rgba(255,255,255,0.9)", fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", fontWeight: 600, padding: "5px 12px", borderRadius: "50px", border: "1px solid rgba(255,255,255,0.2)" }}>
                {game.category}
              </div>
            </div>

            {/* Thumbnail strip placeholder */}
            <div style={{ display: "flex", gap: "10px", marginTop: "12px" }}>
              {[1, 2, 3, 4].map(n => (
                <div key={n} style={{ flex: 1, aspectRatio: "1", borderRadius: "12px", background: `linear-gradient(135deg, ${game.gradientFrom}aa, ${game.gradientTo}aa)`, border: `2px solid ${n === 1 ? game.accentColor : "transparent"}`, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5">
                    <rect x="3" y="3" width="18" height="18" rx="2"/>
                    <circle cx="8.5" cy="8.5" r="1.5"/>
                    <path d="M21 15l-5-5L5 21"/>
                  </svg>
                </div>
              ))}
            </div>

            {/* Quick Contact row */}
            <div style={{ display: "flex", gap: "10px", marginTop: "16px" }}>
              <a href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`Hi! I want to enquire about ${game.name}.`)}`}
                target="_blank" rel="noopener noreferrer"
                style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", padding: "12px", background: "#25d366", color: "white", borderRadius: "12px", fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "0.85rem", textDecoration: "none", boxShadow: "0 4px 16px rgba(37,211,102,0.3)", transition: "transform 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-2px)")}
                onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Chat on WhatsApp
              </a>
              <a href={`tel:${PHONE}`}
                style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", padding: "12px", background: `linear-gradient(135deg, ${game.accentColor}, ${game.accentColor}bb)`, color: "white", borderRadius: "12px", fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "0.85rem", textDecoration: "none", boxShadow: `0 4px 16px ${game.accentColor}40`, transition: "transform 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-2px)")}
                onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.82 19.79 19.79 0 01.03 1.18 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
                Call Now
              </a>
            </div>
          </div>

          {/* RIGHT: Info + Booking Form */}
          <div>
            {/* Title block */}
            <div style={{ marginBottom: "20px" }}>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: game.accentColor }}>
                {game.category}
              </span>
              <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "clamp(1.6rem, 3vw, 2.4rem)", color: "#111827", margin: "8px 0 8px", lineHeight: 1.2 }}>
                {game.name}
              </h1>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: "1.15rem", color: game.accentColor, margin: "0 0 14px" }}>
                {game.tagline}
              </p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.95rem", color: "#6b7280", lineHeight: 1.8, margin: 0 }}>
                {game.longDescription}
              </p>
            </div>

            {/* Trust badges */}
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "24px" }}>
              {[
                { icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z", label: "Verified Service" },
                { icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z", label: "Safe & Insured" },
                { icon: "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z", label: "Pan India" },
                { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", label: "On-Time Setup" },
              ].map((b, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "6px", padding: "6px 12px", background: `${game.accentColor}0f`, border: `1px solid ${game.accentColor}22`, borderRadius: "50px" }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={game.accentColor} strokeWidth="2"><path d={b.icon}/></svg>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", fontWeight: 600, color: game.accentColor }}>{b.label}</span>
                </div>
              ))}
            </div>

            {/* Tabs: Features / Includes / FAQ */}
            <div style={{ borderBottom: "1.5px solid #f0f0f0", display: "flex", gap: "0", marginBottom: "20px", overflowX: "auto" }}>
              {tab("features", "Features")}
              {tab("includes", "What's Included")}
              {tab("faq", "FAQ")}
            </div>

            {/* Features tab */}
            {activeTab === "features" && (
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                {game.features.map((f, i) => (
                  <div key={i} style={{ display: "flex", gap: "10px", padding: "14px", background: "#f9fafb", borderRadius: "12px", border: "1px solid #f0f0f0", alignItems: "flex-start" }}>
                    <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: `${game.accentColor}15`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke={game.accentColor} strokeWidth="2"><path d={f.icon}/></svg>
                    </div>
                    <div>
                      <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "0.82rem", color: "#111827", margin: "0 0 3px" }}>{f.title}</p>
                      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.74rem", color: "#9ca3af", margin: 0, lineHeight: 1.5 }}>{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Includes tab */}
            {activeTab === "includes" && (
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {game.includes.map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "11px 14px", background: "#f9fafb", borderRadius: "10px", border: "1px solid #f0f0f0" }}>
                    <div style={{ width: "22px", height: "22px", borderRadius: "50%", background: `${game.accentColor}18`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={game.accentColor} strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>
                    </div>
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.88rem", color: "#374151" }}>{item}</span>
                  </div>
                ))}
              </div>
            )}

            {/* FAQ tab */}
            {activeTab === "faq" && (
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {game.faqs.map((faq, i) => (
                  <div key={i} style={{ border: `1px solid ${openFaq === i ? game.accentColor + "44" : "#f0f0f0"}`, borderRadius: "12px", overflow: "hidden", transition: "border-color 0.2s" }}>
                    <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", padding: "14px 16px", background: openFaq === i ? `${game.accentColor}08` : "#fff", border: "none", cursor: "pointer", textAlign: "left" }}>
                      <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: "0.88rem", color: "#111827" }}>{faq.q}</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={game.accentColor} strokeWidth="2.5" style={{ flexShrink: 0, transition: "transform 0.2s", transform: openFaq === i ? "rotate(180deg)" : "rotate(0)" }}>
                        <path d="M6 9l6 6 6-6"/>
                      </svg>
                    </button>
                    {openFaq === i && (
                      <div style={{ padding: "0 16px 14px", background: `${game.accentColor}08` }}>
                        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem", color: "#6b7280", margin: 0, lineHeight: 1.7 }}>{faq.a}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── BOOKING FORM SECTION ── */}
      <section style={{ padding: "48px 5%", background: "#f9fafb", borderTop: "1px solid #f0f0f0" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "48px", alignItems: "flex-start" }}>
            {/* Left info */}
            <div>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: game.accentColor }}>Book Now</span>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "clamp(1.4rem, 2.5vw, 2rem)", color: "#111827", margin: "8px 0 14px", lineHeight: 1.3 }}>
                Ready to Book<br />
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", color: game.accentColor }}>{game.name}?</span>
              </h2>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem", color: "#6b7280", lineHeight: 1.8, marginBottom: "28px" }}>
                Fill in your details and our team will get back to you within <strong>30 minutes</strong> to confirm availability and pricing.
              </p>

              {/* Process steps */}
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {[
                  { step: "01", title: "Fill the Form", desc: "Share your event details below" },
                  { step: "02", title: "We Call You", desc: "Our team confirms within 30 mins" },
                  { step: "03", title: "Pay & Confirm", desc: "50% advance secures your booking" },
                  { step: "04", title: "We Show Up", desc: "On-time setup at your venue" },
                ].map((s, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
                    <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: `linear-gradient(135deg, ${game.accentColor}, ${game.accentColor}bb)`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: `0 4px 12px ${game.accentColor}35` }}>
                      <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "0.72rem", color: "white" }}>{s.step}</span>
                    </div>
                    <div>
                      <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "0.88rem", color: "#111827", margin: "0 0 2px" }}>{s.title}</p>
                      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.78rem", color: "#9ca3af", margin: 0 }}>{s.desc}</p>
                    </div>
                    {i < 3 && <div style={{ position: "absolute", left: "17px", marginTop: "36px", width: "2px", height: "16px", background: `${game.accentColor}30` }} />}
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Form card */}
            <div style={{ background: "#fff", borderRadius: "20px", padding: "32px", boxShadow: "0 8px 40px rgba(0,0,0,0.07)", border: "1px solid #f0f0f0" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "24px", paddingBottom: "18px", borderBottom: "1px solid #f9f9f9" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "12px", background: `linear-gradient(135deg, ${game.accentColor}, ${game.accentColor}bb)`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                </div>
                <div>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "0.95rem", color: "#111827", margin: 0 }}>Book {game.name}</p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", color: "#9ca3af", margin: 0 }}>Free consultation • No hidden charges</p>
                </div>
              </div>
              <BookingForm serviceName={game.name} accentColor={game.accentColor} />
            </div>
          </div>
        </div>
      </section>

      {/* ── RELATED GAMES ── */}
      <RelatedGamesSection games={relatedGames} accentColor={game.accentColor} />

      {/* ── HOST YOUR PARTY ── */}
      <HostPartySection />

      <style>{`
        @media (max-width: 900px) {
          section > div > div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
          section > div > div[style*="grid-template-columns: 1fr 1.2fr"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}