"use client";

import { useEffect, useState } from "react";

const petalsData = [
  { left: "3%",  delay: "0s",   dur: "7s",  size: 18, color: "#f5a0ae", rotate: 20 },
  { left: "8%",  delay: "1.5s", dur: "9s",  size: 12, color: "#e8a93a", rotate: 45 },
  { left: "14%", delay: "3s",   dur: "8s",  size: 14, color: "#f9d5dc", rotate: 10 },
  { left: "20%", delay: "0.5s", dur: "11s", size: 10, color: "#c5b0e8", rotate: 60 },
  { left: "55%", delay: "2s",   dur: "8.5s",size: 16, color: "#f5a0ae", rotate: 30 },
  { left: "65%", delay: "0s",   dur: "10s", size: 11, color: "#fce8ec", rotate: 15 },
  { left: "75%", delay: "4s",   dur: "7.5s",size: 13, color: "#e8a93a", rotate: 50 },
  { left: "85%", delay: "1s",   dur: "9.5s",size: 9,  color: "#b8e4d8", rotate: 25 },
  { left: "92%", delay: "3.5s", dur: "8s",  size: 15, color: "#f9d5dc", rotate: 70 },
];

const featurePills = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c8861a" strokeWidth="2">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    label: "Premium Decor", sub: "Experts",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e8647a" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    label: "Personalized", sub: "Experiences",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9b5de5" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.82 19.79 19.79 0 01.03 1.18 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
      </svg>
    ),
    label: "24/7 Support", sub: "Assistance",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0099cc" strokeWidth="2">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
      </svg>
    ),
    label: "Pan India", sub: "Services",
  },
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <section style={{
      minHeight: "100vh",
      paddingTop: "72px",
      position: "relative",
      overflow: "hidden",
      background: "linear-gradient(135deg, #fff8f5 0%, #fef2f7 30%, #f8f2ff 60%, #f0f8ff 100%)",
      display: "flex",
      alignItems: "center",
    }}>

      {/* ── Background gradient blobs ── */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}>
        {/* Top left pink blob */}
        <div style={{
          position: "absolute", top: "-80px", left: "-60px",
          width: "420px", height: "420px",
          borderRadius: "60% 40% 55% 45% / 50% 60% 40% 50%",
          background: "radial-gradient(circle, rgba(249,213,220,0.6) 0%, rgba(249,213,220,0) 70%)",
          filter: "blur(30px)",
        }} />
        {/* Center right rose blob */}
        <div style={{
          position: "absolute", top: "10%", right: "-40px",
          width: "500px", height: "500px",
          borderRadius: "40% 60% 45% 55% / 55% 45% 55% 45%",
          background: "radial-gradient(circle, rgba(232,100,122,0.18) 0%, rgba(232,100,122,0) 70%)",
          filter: "blur(40px)",
        }} />
        {/* Bottom right golden blob */}
        <div style={{
          position: "absolute", bottom: "0", right: "20%",
          width: "350px", height: "350px",
          borderRadius: "50% 50% 60% 40% / 40% 50% 50% 60%",
          background: "radial-gradient(circle, rgba(200,134,26,0.12) 0%, rgba(200,134,26,0) 70%)",
          filter: "blur(35px)",
        }} />
        {/* Left center lilac blob */}
        <div style={{
          position: "absolute", bottom: "20%", left: "5%",
          width: "300px", height: "300px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(197,176,232,0.2) 0%, rgba(197,176,232,0) 70%)",
          filter: "blur(30px)",
        }} />
      </div>

      {/* ── Floating Petals ── */}
      {mounted && petalsData.map((p, i) => (
        <div key={i} style={{
          position: "fixed",
          top: "-30px",
          left: p.left,
          width: `${p.size}px`,
          height: `${p.size}px`,
          background: p.color,
          borderRadius: "50% 10% 50% 10%",
          transform: `rotate(${p.rotate}deg)`,
          animation: `petalFall ${p.dur} ${p.delay} linear infinite`,
          opacity: 0.75,
          pointerEvents: "none",
          zIndex: 1,
          boxShadow: `0 2px 8px ${p.color}60`,
        }} />
      ))}

      {/* ── Decorative corner flowers ── */}
      <div style={{
        position: "absolute", top: "72px", left: 0,
        width: "180px", opacity: 0.5, pointerEvents: "none", zIndex: 1,
      }}>
        <svg viewBox="0 0 180 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Stem */}
          <path d="M40 300 Q50 200 80 150 Q100 110 90 60" stroke="#b8d8a0" strokeWidth="3" fill="none"/>
          {/* Leaves */}
          <ellipse cx="65" cy="220" rx="30" ry="14" fill="#c8e8a8" transform="rotate(-30 65 220)"/>
          <ellipse cx="80" cy="170" rx="25" ry="11" fill="#d0e8b0" transform="rotate(20 80 170)"/>
          {/* Flowers */}
          {[...Array(5)].map((_, j) => (
            <g key={j} transform={`translate(${70 + j*10}, ${80 - j*12}) rotate(${j*30})`}>
              <circle cx="0" cy="-10" r="6" fill="#f5a0ae" opacity="0.8"/>
              <circle cx="10" cy="-3" r="6" fill="#f9c0cc" opacity="0.8"/>
              <circle cx="6" cy="8" r="6" fill="#e8647a" opacity="0.7"/>
              <circle cx="-6" cy="8" r="6" fill="#f5a0ae" opacity="0.8"/>
              <circle cx="-10" cy="-3" r="6" fill="#f9d5dc" opacity="0.8"/>
              <circle cx="0" cy="0" r="4" fill="#c8861a" opacity="0.9"/>
            </g>
          ))}
        </svg>
      </div>

      <div style={{
        position: "absolute", top: "72px", right: 0,
        width: "160px", opacity: 0.45, pointerEvents: "none", zIndex: 1,
        transform: "scaleX(-1)",
      }}>
        <svg viewBox="0 0 180 280" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M40 280 Q55 190 85 140 Q105 100 95 50" stroke="#b8d8a0" strokeWidth="3" fill="none"/>
          <ellipse cx="68" cy="200" rx="28" ry="12" fill="#c8e8a8" transform="rotate(-25 68 200)"/>
          <ellipse cx="82" cy="155" rx="22" ry="10" fill="#d0e8b0" transform="rotate(18 82 155)"/>
          {[...Array(4)].map((_, j) => (
            <g key={j} transform={`translate(${72 + j*8}, ${70 - j*10}) rotate(${j*35})`}>
              <circle cx="0" cy="-9" r="7" fill="#e8a93a" opacity="0.8"/>
              <circle cx="9" cy="-3" r="7" fill="#f0c060" opacity="0.8"/>
              <circle cx="5" cy="7" r="7" fill="#c8861a" opacity="0.7"/>
              <circle cx="-5" cy="7" r="7" fill="#e8d090" opacity="0.8"/>
              <circle cx="-9" cy="-3" r="7" fill="#e8a93a" opacity="0.8"/>
              <circle cx="0" cy="0" r="4" fill="#9a6310" opacity="0.9"/>
            </g>
          ))}
        </svg>
      </div>

      {/* ── Main Content ── */}
      <div style={{
        maxWidth: "1280px",
        margin: "0 auto",
        padding: "40px 5% 60px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "50px",
        alignItems: "center",
        position: "relative",
        zIndex: 2,
        width: "100%",
      }}>

        {/* LEFT: Text Content */}
        <div style={{
          animation: mounted ? "heroFadeLeft 0.9s ease forwards" : "none",
          opacity: mounted ? 1 : 0,
        }}>
          {/* Welcome Label */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "10px",
            marginBottom: "22px",
          }}>
            <div style={{ width: "36px", height: "1.5px", background: "linear-gradient(to right, transparent, #c8861a)" }} />
            <span style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.72rem", fontWeight: 700,
              letterSpacing: "0.22em", textTransform: "uppercase",
              color: "#c8861a",
            }}>Welcome to EventSaaga</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#c8861a">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <div style={{ width: "36px", height: "1.5px", background: "linear-gradient(to left, transparent, #c8861a)" }} />
          </div>

          {/* Main Heading */}
          <h1 style={{ marginBottom: "20px", lineHeight: 1.15 }}>
            <span style={{
              display: "block",
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.2rem, 4vw, 3.6rem)",
              fontWeight: 700,
              color: "#1a1009",
              letterSpacing: "-0.01em",
            }}>Celebrating Moments</span>
            <span style={{
              display: "block",
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.2rem, 4vw, 3.6rem)",
              fontWeight: 700,
              color: "#1a1009",
              letterSpacing: "-0.01em",
            }}>Preserving Memories on</span>
            <span style={{
              display: "flex", alignItems: "center", gap: "10px",
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontSize: "clamp(2.8rem, 5vw, 4.4rem)",
              fontWeight: 600,
              background: "linear-gradient(135deg, #c8861a 0%, #e8a93a 40%, #c8407a 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              letterSpacing: "-0.02em",
            }}>
              Time
              <svg width="30" height="30" viewBox="0 0 24 24" fill="#e8647a" style={{ WebkitTextFillColor: "unset", flexShrink: 0 }}>
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </span>
          </h1>

          {/* Subtitle */}
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            color: "#5a4535",
            fontSize: "1rem",
            lineHeight: 1.85,
            marginBottom: "36px",
            maxWidth: "460px",
          }}>
            From intimate celebrations to grand affairs, we design<br/>
            experiences that stay in your heart forever.
          </p>

          {/* CTA Buttons */}
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginBottom: "44px" }}>
            <a href="#book" style={{
              display: "inline-flex", alignItems: "center", gap: "9px",
              padding: "14px 28px",
              background: "linear-gradient(135deg, #c8861a, #e8a93a)",
              color: "white",
              borderRadius: "50px",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600, fontSize: "0.9rem",
              textDecoration: "none",
              boxShadow: "0 6px 24px rgba(200,134,26,0.4)",
              transition: "all 0.3s ease",
              border: "none",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 10px 32px rgba(200,134,26,0.5)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 6px 24px rgba(200,134,26,0.4)"; }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              Book Your Experience
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>

            <a href="#experiences" style={{
              display: "inline-flex", alignItems: "center", gap: "9px",
              padding: "13px 26px",
              background: "rgba(255,255,255,0.85)",
              color: "#1a1009",
              borderRadius: "50px",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 500, fontSize: "0.9rem",
              textDecoration: "none",
              border: "1.5px solid rgba(200,134,26,0.3)",
              backdropFilter: "blur(8px)",
              boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "#c8861a"; (e.currentTarget as HTMLAnchorElement).style.color = "#c8861a"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(200,134,26,0.3)"; (e.currentTarget as HTMLAnchorElement).style.color = "#1a1009"; }}
            >
              Explore Events
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>

          {/* Feature Pills Row */}
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            {featurePills.map((f, i) => (
              <div key={i} style={{
                display: "flex", alignItems: "center", gap: "8px",
                padding: "8px 15px",
                background: "rgba(255,255,255,0.82)",
                borderRadius: "50px",
                border: "1px solid rgba(200,134,26,0.18)",
                backdropFilter: "blur(10px)",
                boxShadow: "0 2px 14px rgba(200,134,26,0.08)",
                animationDelay: `${0.2 + i * 0.1}s`,
              }}>
                <div style={{
                  width: "30px", height: "30px", borderRadius: "50%",
                  background: "rgba(249,213,220,0.5)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  {f.icon}
                </div>
                <div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", fontWeight: 700, color: "#1a1009", lineHeight: 1.2 }}>{f.label}</div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.62rem", color: "#8a7060", lineHeight: 1 }}>{f.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Hero Image */}
        <div style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          animation: mounted ? "heroFadeRight 1s ease forwards" : "none",
          opacity: mounted ? 1 : 0,
          minHeight: "560px",
        }}>
          {/* Outer soft ring */}
          <div style={{
            position: "absolute",
            width: "92%", height: "92%",
            borderRadius: "42% 58% 55% 45% / 48% 44% 56% 52%",
            border: "1.5px solid rgba(232,100,122,0.2)",
            animation: "slowRotate 20s linear infinite",
          }} />

          {/* Mid ring with dashes */}
          <div style={{
            position: "absolute",
            width: "96%", height: "96%",
            borderRadius: "55% 45% 48% 52% / 44% 56% 44% 56%",
            border: "1px dashed rgba(200,134,26,0.2)",
            animation: "slowRotate 30s linear infinite reverse",
          }} />

          {/* Main image container */}
          <div style={{
            width: "clamp(300px, 44vw, 490px)",
            height: "clamp(380px, 56vw, 620px)",
            borderRadius: "42% 58% 55% 45% / 48% 44% 56% 52%",
            overflow: "hidden",
            position: "relative",
            boxShadow: "0 30px 80px rgba(232,100,122,0.25), 0 0 0 8px rgba(249,213,220,0.4), 0 0 0 16px rgba(249,213,220,0.15)",
            border: "3px solid rgba(255,255,255,0.9)",
          }}>
            <img
              src="/hero.jpg"
              alt="Beautiful wedding mandap with floral decorations"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              onError={(e) => { e.currentTarget.style.display = "none"; }}
            />
            {/* Fallback beautiful gradient scene */}
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(160deg, #fce8ec 0%, #fdf3ec 30%, #fffaf8 50%, #f0eaff 75%, #e8f5ff 100%)",
              display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center",
              gap: "16px",
            }}>
              {/* Mandap illustration SVG */}
              <svg width="240" height="260" viewBox="0 0 240 260" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Canopy arch top */}
                <path d="M20 110 Q120 20 220 110" stroke="#c8861a" strokeWidth="2.5" fill="rgba(249,213,220,0.3)"/>
                {/* Curtain drapes */}
                <path d="M20 110 Q35 160 30 200 L50 200 Q55 155 45 115Z" fill="rgba(245,160,174,0.4)"/>
                <path d="M220 110 Q205 160 210 200 L190 200 Q185 155 195 115Z" fill="rgba(245,160,174,0.4)"/>
                {/* Floral arch left */}
                {[0,1,2,3,4].map(i => (
                  <circle key={i} cx={22 + i*8} cy={105 + i*20} r={i%2===0?7:5} fill={i%3===0?"#e8647a":i%3===1?"#f9d5dc":"#e8a93a"} opacity="0.85"/>
                ))}
                {/* Floral arch right */}
                {[0,1,2,3,4].map(i => (
                  <circle key={i} cx={218 - i*8} cy={105 + i*20} r={i%2===0?7:5} fill={i%3===0?"#c5b0e8":i%3===1?"#e8a93a":"#e8647a"} opacity="0.85"/>
                ))}
                {/* Floral arch top */}
                {[0,1,2,3,4,5,6].map(i => (
                  <circle key={i} cx={40 + i*27} cy={60 + Math.sin(i*0.7)*25} r={i%2===0?8:6} fill={i%4===0?"#e8647a":i%4===1?"#e8a93a":i%4===2?"#c5b0e8":"#f9d5dc"} opacity="0.85"/>
                ))}
                {/* Chandelier */}
                <line x1="120" y1="30" x2="120" y2="70" stroke="#c8861a" strokeWidth="1.5"/>
                <ellipse cx="120" cy="72" rx="12" ry="5" fill="rgba(200,134,26,0.3)"/>
                {[0,1,2,3,4,5].map(i => (
                  <line key={i} x1="120" y1="72" x2={100 + i*8} y2="90" stroke="#e8a93a" strokeWidth="1" opacity="0.7"/>
                ))}
                {/* Pillars */}
                <rect x="28" y="110" width="14" height="100" rx="7" fill="rgba(200,134,26,0.15)" stroke="#c8861a" strokeWidth="1"/>
                <rect x="198" y="110" width="14" height="100" rx="7" fill="rgba(200,134,26,0.15)" stroke="#c8861a" strokeWidth="1"/>
                {/* Ground flowers */}
                {[0,1,2,3,4,5].map(i => (
                  <circle key={i} cx={22 + i*40} cy="210" r="8" fill={i%3===0?"#f9d5dc":i%3===1?"#e8a93a":"#c5b0e8"} opacity="0.7"/>
                ))}
                {/* Throne sofa */}
                <rect x="80" y="170" width="80" height="35" rx="10" fill="rgba(200,134,26,0.15)" stroke="#c8861a" strokeWidth="1.5"/>
                <rect x="75" y="155" width="90" height="25" rx="8" fill="rgba(249,213,220,0.5)" stroke="rgba(200,134,26,0.3)" strokeWidth="1"/>
                {/* Sofa cushion detail */}
                <circle cx="120" cy="162" r="6" fill="rgba(200,134,26,0.2)"/>
                {/* Rose petals on ground */}
                {[0,1,2,3,4,5,6,7].map(i => (
                  <ellipse key={i} cx={50 + i*20} cy="215" rx="5" ry="3" fill={i%2===0?"#f5a0ae":"#e8a93a"} opacity="0.6" transform={`rotate(${i*20} ${50+i*20} 215)`}/>
                ))}
              </svg>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", color: "#c8861a", fontSize: "0.95rem", opacity: 0.7 }}>Add hero.jpg to /public</p>
            </div>
          </div>

          {/* Floating Stat Cards */}
          {/* Card 1 – Happy Clients (top left) */}
          <div style={{
            position: "absolute", top: "12%", left: "-8%",
            background: "rgba(255,255,255,0.95)",
            borderRadius: "18px",
            padding: "14px 18px",
            boxShadow: "0 12px 40px rgba(232,100,122,0.2)",
            border: "1px solid rgba(249,213,220,0.6)",
            display: "flex", alignItems: "center", gap: "12px",
            backdropFilter: "blur(12px)",
            animation: "floatCard 4s ease-in-out infinite",
            zIndex: 3,
          }}>
            <div style={{
              width: "44px", height: "44px", borderRadius: "14px",
              background: "linear-gradient(135deg, #fce8ec, #f9d5dc)",
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0,
            }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#e8647a"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
            </div>
            <div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.2rem", color: "#1a1009", lineHeight: 1 }}>1000+</div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem", color: "#8a7060", marginTop: "2px" }}>Happy Clients</div>
            </div>
          </div>

          {/* Card 2 – Client Rating (bottom right) */}
          <div style={{
            position: "absolute", bottom: "14%", right: "-10%",
            background: "rgba(255,255,255,0.95)",
            borderRadius: "18px",
            padding: "14px 18px",
            boxShadow: "0 12px 40px rgba(200,134,26,0.2)",
            border: "1px solid rgba(253,243,224,0.8)",
            display: "flex", alignItems: "center", gap: "12px",
            backdropFilter: "blur(12px)",
            animation: "floatCard 4s ease-in-out infinite 2s",
            zIndex: 3,
          }}>
            <div style={{
              width: "44px", height: "44px", borderRadius: "14px",
              background: "linear-gradient(135deg, #fdf3e0, #fce8c8)",
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0,
            }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#e8a93a"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            </div>
            <div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.2rem", color: "#1a1009", lineHeight: 1 }}>5.0 ★</div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem", color: "#8a7060", marginTop: "2px" }}>Client Rating</div>
            </div>
          </div>

          {/* Card 3 – Events (left center) */}
          <div style={{
            position: "absolute", top: "52%", left: "-12%",
            background: "rgba(255,255,255,0.95)",
            borderRadius: "18px",
            padding: "14px 18px",
            boxShadow: "0 12px 40px rgba(155,93,229,0.18)",
            border: "1px solid rgba(240,235,255,0.8)",
            display: "flex", alignItems: "center", gap: "12px",
            backdropFilter: "blur(12px)",
            animation: "floatCard 5s ease-in-out infinite 1s",
            zIndex: 3,
          }}>
            <div style={{
              width: "44px", height: "44px", borderRadius: "14px",
              background: "linear-gradient(135deg, #f0ebff, #e8ddf8)",
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0,
            }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#9b5de5" strokeWidth="1.8">
                <rect x="3" y="4" width="18" height="18" rx="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
            </div>
            <div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.2rem", color: "#1a1009", lineHeight: 1 }}>2000+</div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem", color: "#8a7060", marginTop: "2px" }}>Events Done</div>
            </div>
          </div>

          {/* Card 4 – Cities (top right) */}
          <div style={{
            position: "absolute", top: "6%", right: "-8%",
            background: "rgba(255,255,255,0.95)",
            borderRadius: "18px",
            padding: "12px 16px",
            boxShadow: "0 10px 34px rgba(0,153,204,0.18)",
            border: "1px solid rgba(224,245,255,0.8)",
            display: "flex", alignItems: "center", gap: "10px",
            backdropFilter: "blur(12px)",
            animation: "floatCard 4.5s ease-in-out infinite 3s",
            zIndex: 3,
          }}>
            <div style={{
              width: "38px", height: "38px", borderRadius: "12px",
              background: "linear-gradient(135deg, #e0f5ff, #c8eeff)",
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0,
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0099cc" strokeWidth="1.8">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                <circle cx="12" cy="9" r="2.5"/>
              </svg>
            </div>
            <div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.1rem", color: "#1a1009", lineHeight: 1 }}>100+</div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.68rem", color: "#8a7060", marginTop: "2px" }}>Cities</div>
            </div>
          </div>

          {/* Decorative sparkles */}
          {mounted && [
            { top: "5%",  left: "15%",  size: 14, color: "#e8a93a", delay: "0s" },
            { top: "20%", right: "5%",  size: 10, color: "#e8647a", delay: "0.8s" },
            { top: "75%", left: "10%",  size: 12, color: "#9b5de5", delay: "1.5s" },
            { bottom: "10%", right: "5%", size: 8, color: "#0099cc", delay: "2s" },
          ].map((s: any, i) => (
            <div key={i} style={{
              position: "absolute",
              ...s,
              width: `${s.size}px`, height: `${s.size}px`,
              animation: `sparkle 2s ease-in-out infinite ${s.delay}`,
              zIndex: 4,
            }}>
              <svg viewBox="0 0 24 24" fill={s.color} width={s.size} height={s.size}>
                <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17 5.8 21.3l2.4-7.4L2 9.4h7.6z"/>
              </svg>
            </div>
          ))}
        </div>
      </div>

      {/* ── CSS Keyframes ── */}
      <style>{`
        @keyframes petalFall {
          0%   { transform: translateY(-30px) rotate(0deg) translateX(0px);   opacity: 0; }
          10%  { opacity: 0.8; }
          90%  { opacity: 0.6; }
          100% { transform: translateY(110vh) rotate(400deg) translateX(50px); opacity: 0; }
        }
        @keyframes heroFadeLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes heroFadeRight {
          from { opacity: 0; transform: translateX(40px) scale(0.95); }
          to   { opacity: 1; transform: translateX(0) scale(1); }
        }
        @keyframes floatCard {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }
        @keyframes slowRotate {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes sparkle {
          0%, 100% { opacity: 1;   transform: scale(1) rotate(0deg); }
          50%       { opacity: 0.3; transform: scale(0.6) rotate(180deg); }
        }

        @media (max-width: 900px) {
          section[data-hero] > div:last-child {
            grid-template-columns: 1fr !important;
          }
          section[data-hero] > div:last-child > div:last-child {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}