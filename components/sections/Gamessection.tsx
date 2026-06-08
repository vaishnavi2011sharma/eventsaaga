"use client";
import { useState, useRef } from "react";

const WHATSAPP_NUMBER = "919876543210";
const PHONE_NUMBER = "9876543210";

const games = [
  {
    id: 1,
    name: "Casino Game on Rent",
    desc: "Full casino setup – roulette, poker tables, chips & more for your event.",
    badge: "Most Popular",
    badgeColor: "#e8647a",
    gradientBg: "linear-gradient(160deg, #1a0a2e 0%, #3d1060 60%, #6b21a8 100%)",
    iconBg: "rgba(255,255,255,0.12)",
    icon: (
      <svg width="52" height="52" viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="32" r="28" stroke="rgba(255,255,255,0.4)" strokeWidth="2"/>
        <circle cx="32" cy="32" r="20" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5"/>
        <circle cx="32" cy="32" r="5" fill="rgba(255,255,255,0.9)"/>
        {[0,45,90,135,180,225,270,315].map((deg,i) => (
          <rect key={i} x="30.5" y="7" width="3" height="9" rx="1.5"
            fill={i%2===0 ? "#e8647a" : "rgba(255,255,255,0.7)"}
            transform={`rotate(${deg} 32 32)`}/>
        ))}
        <text x="32" y="37" textAnchor="middle" fill="rgba(255,255,255,0.9)" fontSize="10" fontWeight="bold">♠</text>
      </svg>
    ),
  },
  {
    id: 2,
    name: "Hammer Game on Rent",
    desc: "Test your strength! Classic high striker hammer game for all ages.",
    badge: "Fun for All",
    badgeColor: "#f59e0b",
    gradientBg: "linear-gradient(160deg, #1c1008 0%, #4a2800 60%, #c8861a 100%)",
    iconBg: "rgba(255,255,255,0.12)",
    icon: (
      <svg width="52" height="52" viewBox="0 0 64 64" fill="none">
        <rect x="28" y="20" width="8" height="30" rx="4" fill="rgba(255,255,255,0.8)"/>
        <rect x="18" y="14" width="28" height="14" rx="4" fill="rgba(255,220,100,0.9)"/>
        <circle cx="32" cy="14" r="5" fill="rgba(255,220,100,0.7)"/>
        {[0,1,2,3].map(i => (
          <circle key={i} cx={20 + i*8} cy="44" r="2" fill="rgba(255,220,100,0.5)"/>
        ))}
      </svg>
    ),
  },
  {
    id: 3,
    name: "Bouncy Castle on Rent",
    desc: "Colorful inflatable bouncy castles – kids' favourite at any party!",
    badge: "Kids Favourite",
    badgeColor: "#10b981",
    gradientBg: "linear-gradient(160deg, #0a2a1a 0%, #0d4a28 60%, #10b981 100%)",
    iconBg: "rgba(255,255,255,0.12)",
    icon: (
      <svg width="52" height="52" viewBox="0 0 64 64" fill="none">
        <rect x="8" y="34" width="48" height="20" rx="6" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/>
        <path d="M8 34 Q16 16 24 24 Q32 12 40 24 Q48 16 56 34" stroke="rgba(255,255,255,0.8)" strokeWidth="2" fill="rgba(255,255,255,0.1)"/>
        <circle cx="20" cy="26" r="4" fill="rgba(255,200,100,0.8)"/>
        <circle cx="32" cy="20" r="5" fill="rgba(255,150,150,0.8)"/>
        <circle cx="44" cy="26" r="4" fill="rgba(150,200,255,0.8)"/>
        <line x1="8" y1="54" x2="8" y2="58" stroke="rgba(255,255,255,0.5)" strokeWidth="2"/>
        <line x1="56" y1="54" x2="56" y2="58" stroke="rgba(255,255,255,0.5)" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    id: 4,
    name: "Electronic Games on Rent",
    desc: "Arcade classics, racing simulators & interactive digital entertainment setups.",
    badge: "Trending",
    badgeColor: "#3b82f6",
    gradientBg: "linear-gradient(160deg, #0a1628 0%, #1e3a6e 60%, #3b82f6 100%)",
    iconBg: "rgba(255,255,255,0.12)",
    icon: (
      <svg width="52" height="52" viewBox="0 0 64 64" fill="none">
        <rect x="10" y="18" width="44" height="30" rx="6" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/>
        <circle cx="44" cy="28" r="5" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5"/>
        <circle cx="20" cy="30" r="6" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5"/>
        <line x1="20" y1="24" x2="20" y2="36" stroke="rgba(255,255,255,0.8)" strokeWidth="2"/>
        <line x1="14" y1="30" x2="26" y2="30" stroke="rgba(255,255,255,0.8)" strokeWidth="2"/>
        <circle cx="40" cy="35" r="2" fill="rgba(255,100,100,0.9)"/>
        <circle cx="46" cy="32" r="2" fill="rgba(100,255,100,0.9)"/>
        <circle cx="48" cy="38" r="2" fill="rgba(100,100,255,0.9)"/>
      </svg>
    ),
  },
  {
    id: 5,
    name: "Electronic Basketball on Rent",
    desc: "Score big! Electronic scoring basketball hoop – perfect for indoor events.",
    badge: "Sports Fun",
    badgeColor: "#f97316",
    gradientBg: "linear-gradient(160deg, #1a0a00 0%, #4a1800 60%, #f97316 100%)",
    iconBg: "rgba(255,255,255,0.12)",
    icon: (
      <svg width="52" height="52" viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="36" r="16" fill="rgba(249,115,22,0.7)" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5"/>
        <path d="M16 36 Q24 28 32 36 Q40 44 48 36" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" fill="none"/>
        <path d="M32 20 L32 52" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5"/>
        <ellipse cx="32" cy="16" rx="12" ry="4" stroke="rgba(255,255,255,0.9)" strokeWidth="2" fill="none"/>
        <line x1="20" y1="12" x2="20" y2="20" stroke="rgba(255,255,255,0.7)" strokeWidth="2"/>
        <line x1="44" y1="12" x2="44" y2="20" stroke="rgba(255,255,255,0.7)" strokeWidth="2"/>
        <rect x="20" y="8" width="24" height="4" rx="2" fill="rgba(255,255,255,0.4)"/>
      </svg>
    ),
  },
  {
    id: 6,
    name: "Mega Wire on Rent",
    desc: "The electric maze! Navigate the wire without touching – thrilling for guests.",
    badge: "Thrilling",
    badgeColor: "#eab308",
    gradientBg: "linear-gradient(160deg, #0a0a00 0%, #2a2800 60%, #eab308 100%)",
    iconBg: "rgba(255,255,255,0.12)",
    icon: (
      <svg width="52" height="52" viewBox="0 0 64 64" fill="none">
        <path d="M12 20 Q20 14 20 26 Q20 38 28 34 Q36 30 36 40 Q36 50 44 46 Q52 42 52 32" stroke="rgba(234,179,8,0.9)" strokeWidth="3" fill="none" strokeLinecap="round"/>
        <circle cx="30" cy="30" r="7" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="2"/>
        <path d="M27 30 L30 24 L33 30" stroke="rgba(255,255,255,0.9)" strokeWidth="1.5" fill="none"/>
        {[0,1,2].map(i => (
          <circle key={i} cx={14 + i*18} cy={20 + i*8} r="3" fill="rgba(255,220,50,0.7)"/>
        ))}
      </svg>
    ),
  },
  {
    id: 7,
    name: "Electronic Toy Train on Rent",
    desc: "Delightful mini train ride for kids – a must-have at birthday parties.",
    badge: "Kids Love It",
    badgeColor: "#8b5cf6",
    gradientBg: "linear-gradient(160deg, #0e0820 0%, #2d1570 60%, #8b5cf6 100%)",
    iconBg: "rgba(255,255,255,0.12)",
    icon: (
      <svg width="52" height="52" viewBox="0 0 64 64" fill="none">
        <rect x="10" y="24" width="44" height="22" rx="6" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/>
        <rect x="38" y="16" width="16" height="12" rx="4" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/>
        <circle cx="20" cy="48" r="5" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.7)" strokeWidth="2"/>
        <circle cx="44" cy="48" r="5" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.7)" strokeWidth="2"/>
        <line x1="20" y1="46" x2="44" y2="46" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
        <circle cx="46" cy="20" r="3" fill="rgba(255,200,50,0.9)"/>
        {[0,1,2].map(i => (
          <rect key={i} x={16 + i*10} y={28} width="6" height="8" rx="2" fill="rgba(255,255,255,0.3)"/>
        ))}
      </svg>
    ),
  },
  {
    id: 8,
    name: "Wooden Games on Rent",
    desc: "Giant Jenga, Ring Toss, Connect4 & classic wooden party games.",
    badge: "Classic",
    badgeColor: "#78716c",
    gradientBg: "linear-gradient(160deg, #1a1008 0%, #3d2808 60%, #92400e 100%)",
    iconBg: "rgba(255,255,255,0.12)",
    icon: (
      <svg width="52" height="52" viewBox="0 0 64 64" fill="none">
        {[0,1,2,3,4].map(i => (
          <rect key={i} x={18} y={12 + i*9} width={28} height={7} rx="2"
            fill={i%2===0 ? "rgba(255,220,150,0.8)" : "rgba(200,160,80,0.8)"}
            stroke="rgba(255,255,255,0.2)" strokeWidth="0.5"
            transform={i%2===0 ? "" : `translate(4,0)`}
          />
        ))}
        <rect x="26" y="56" width="12" height="4" rx="2" fill="rgba(255,220,150,0.5)"/>
      </svg>
    ),
  },
  {
    id: 9,
    name: "Cricket Machine on Rent",
    desc: "Automatic ball-throwing cricket machine with netting cage – batters ready!",
    badge: "Sport Special",
    badgeColor: "#16a34a",
    gradientBg: "linear-gradient(160deg, #081a0a 0%, #0d3a12 60%, #16a34a 100%)",
    iconBg: "rgba(255,255,255,0.12)",
    icon: (
      <svg width="52" height="52" viewBox="0 0 64 64" fill="none">
        <ellipse cx="32" cy="32" rx="10" ry="18" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" transform="rotate(-30 32 32)"/>
        <line x1="26" y1="20" x2="38" y2="44" stroke="rgba(255,255,255,0.5)" strokeWidth="1"/>
        <circle cx="46" cy="18" r="8" fill="rgba(255,50,50,0.7)" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/>
        <path d="M46 14 Q50 18 46 22" stroke="rgba(255,200,200,0.8)" strokeWidth="1.5" fill="none"/>
        <line x1="10" y1="52" x2="20" y2="30" stroke="rgba(139,90,43,0.9)" strokeWidth="4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 10,
    name: "Columbus on Rent",
    desc: "Giant swinging Columbus boat ride – the crowd-puller at any mela or fest.",
    badge: "Crowd Puller",
    badgeColor: "#0891b2",
    gradientBg: "linear-gradient(160deg, #020c1a 0%, #0c2a4a 60%, #0891b2 100%)",
    iconBg: "rgba(255,255,255,0.12)",
    icon: (
      <svg width="52" height="52" viewBox="0 0 64 64" fill="none">
        <line x1="32" y1="10" x2="32" y2="30" stroke="rgba(255,255,255,0.7)" strokeWidth="2"/>
        <path d="M10 40 Q20 28 32 30 Q44 28 54 40 Q44 46 32 44 Q20 46 10 40Z" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5"/>
        <path d="M10 40 L10 46 Q32 54 54 46 L54 40" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.4)" strokeWidth="1"/>
        {[0,1,2,3].map(i => (
          <circle key={i} cx={16 + i*12} cy={40} r="3" fill="rgba(255,200,50,0.8)"/>
        ))}
        <line x1="32" y1="10" x2="10" y2="28" stroke="rgba(255,255,255,0.4)" strokeWidth="1" strokeDasharray="3,3"/>
        <line x1="32" y1="10" x2="54" y2="28" stroke="rgba(255,255,255,0.4)" strokeWidth="1" strokeDasharray="3,3"/>
      </svg>
    ),
  },
  {
    id: 11,
    name: "Giant Wheel on Rent",
    desc: "Majestic rotating ferris wheel – the iconic centrepiece for big events & fairs.",
    badge: "Iconic",
    badgeColor: "#e8647a",
    gradientBg: "linear-gradient(160deg, #1a0814 0%, #4a0a28 60%, #be185d 100%)",
    iconBg: "rgba(255,255,255,0.12)",
    icon: (
      <svg width="52" height="52" viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="28" r="20" stroke="rgba(255,255,255,0.6)" strokeWidth="2" fill="none"/>
        <circle cx="32" cy="28" r="5" fill="rgba(255,255,255,0.5)"/>
        {[0,45,90,135,180,225,270,315].map((deg, i) => (
          <g key={i} transform={`rotate(${deg} 32 28)`}>
            <line x1="32" y1="23" x2="32" y2="8" stroke="rgba(255,255,255,0.5)" strokeWidth="1.2"/>
            <rect x="29" y="5" width="6" height="5" rx="2" fill={i%2===0 ? "rgba(232,100,122,0.8)" : "rgba(255,200,50,0.8)"}/>
          </g>
        ))}
        <line x1="22" y1="48" x2="42" y2="48" stroke="rgba(255,255,255,0.5)" strokeWidth="2"/>
        <line x1="26" y1="48" x2="28" y2="28" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/>
        <line x1="38" y1="48" x2="36" y2="28" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    id: 12,
    name: "Popcorn Machine on Rent",
    desc: "Freshly popped popcorn machine – the perfect snack station for events.",
    badge: "Snack Hit",
    badgeColor: "#ca8a04",
    gradientBg: "linear-gradient(160deg, #1a1000 0%, #3d2c00 60%, #ca8a04 100%)",
    iconBg: "rgba(255,255,255,0.12)",
    icon: (
      <svg width="52" height="52" viewBox="0 0 64 64" fill="none">
        <rect x="18" y="28" width="28" height="26" rx="6" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/>
        <rect x="22" y="10" width="20" height="20" rx="4" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/>
        {[0,1,2,3,4,5].map(i => (
          <circle key={i} cx={24 + (i%3)*8} cy={12 + Math.floor(i/3)*8} r="3"
            fill={i%3===0 ? "rgba(255,220,50,0.9)" : i%3===1 ? "rgba(255,255,255,0.7)" : "rgba(255,180,50,0.8)"}/>
        ))}
        <rect x="28" y="30" width="8" height="12" rx="2" fill="rgba(255,220,50,0.4)"/>
      </svg>
    ),
  },
  {
    id: 13,
    name: "Candy Floss Machine on Rent",
    desc: "Fluffy cotton candy machine – kids & adults both go crazy for it!",
    badge: "Sweet Fun",
    badgeColor: "#ec4899",
    gradientBg: "linear-gradient(160deg, #1a0814 0%, #4a0a2a 60%, #ec4899 100%)",
    iconBg: "rgba(255,255,255,0.12)",
    icon: (
      <svg width="52" height="52" viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="22" r="18" fill="rgba(255,150,200,0.35)" stroke="rgba(255,200,230,0.5)" strokeWidth="1.5"/>
        <circle cx="26" cy="18" r="10" fill="rgba(255,100,180,0.35)"/>
        <circle cx="38" cy="20" r="11" fill="rgba(255,150,210,0.35)"/>
        <circle cx="30" cy="26" r="9" fill="rgba(255,180,220,0.4)"/>
        <line x1="32" y1="38" x2="32" y2="56" stroke="rgba(255,255,255,0.7)" strokeWidth="2.5" strokeLinecap="round"/>
        <ellipse cx="32" cy="56" rx="8" ry="3" fill="rgba(255,255,255,0.2)"/>
      </svg>
    ),
  },
  {
    id: 14,
    name: "Chocolate Fountain on Rent",
    desc: "Flowing chocolate fountain with dipping treats – pure luxury for guests.",
    badge: "Premium",
    badgeColor: "#92400e",
    gradientBg: "linear-gradient(160deg, #1a0800 0%, #3d1800 60%, #92400e 100%)",
    iconBg: "rgba(255,255,255,0.12)",
    icon: (
      <svg width="52" height="52" viewBox="0 0 64 64" fill="none">
        <ellipse cx="32" cy="14" rx="12" ry="5" fill="rgba(180,90,20,0.8)" stroke="rgba(255,200,100,0.4)" strokeWidth="1"/>
        <path d="M20 14 Q18 22 22 26" stroke="rgba(180,90,20,0.8)" strokeWidth="4" strokeLinecap="round"/>
        <path d="M44 14 Q46 22 42 26" stroke="rgba(180,90,20,0.8)" strokeWidth="4" strokeLinecap="round"/>
        <ellipse cx="32" cy="28" rx="9" ry="4" fill="rgba(160,80,10,0.8)" stroke="rgba(255,200,100,0.4)" strokeWidth="1"/>
        <path d="M23 28 Q21 34 25 38" stroke="rgba(160,80,10,0.8)" strokeWidth="3.5" strokeLinecap="round"/>
        <path d="M41 28 Q43 34 39 38" stroke="rgba(160,80,10,0.8)" strokeWidth="3.5" strokeLinecap="round"/>
        <ellipse cx="32" cy="40" rx="7" ry="3" fill="rgba(140,70,8,0.9)" stroke="rgba(255,200,100,0.4)" strokeWidth="1"/>
        <rect x="28" y="42" width="8" height="8" rx="2" fill="rgba(120,60,6,0.8)"/>
        <ellipse cx="32" cy="52" rx="10" ry="3" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
      </svg>
    ),
  },
  {
    id: 15,
    name: "Bungee Jumping on Rent",
    desc: "Safe, professional bungee jumping setup – the ultimate adrenaline rush!",
    badge: "Adrenaline",
    badgeColor: "#dc2626",
    gradientBg: "linear-gradient(160deg, #1a0000 0%, #4a0808 60%, #dc2626 100%)",
    iconBg: "rgba(255,255,255,0.12)",
    icon: (
      <svg width="52" height="52" viewBox="0 0 64 64" fill="none">
        <line x1="32" y1="8" x2="32" y2="24" stroke="rgba(255,255,255,0.8)" strokeWidth="2" strokeDasharray="3,2"/>
        <circle cx="32" cy="28" r="8" fill="rgba(255,100,100,0.5)" stroke="rgba(255,255,255,0.7)" strokeWidth="2"/>
        <path d="M28 26 L32 20 L36 26" stroke="rgba(255,255,255,0.9)" strokeWidth="1.5" fill="none"/>
        <line x1="28" y1="36" x2="24" y2="44" stroke="rgba(255,255,255,0.6)" strokeWidth="2" strokeLinecap="round"/>
        <line x1="36" y1="36" x2="40" y2="44" stroke="rgba(255,255,255,0.6)" strokeWidth="2" strokeLinecap="round"/>
        <line x1="10" y1="8" x2="54" y2="8" stroke="rgba(255,255,255,0.5)" strokeWidth="3" strokeLinecap="round"/>
        <line x1="10" y1="8" x2="10" y2="16" stroke="rgba(255,255,255,0.4)" strokeWidth="2"/>
        <line x1="54" y1="8" x2="54" y2="16" stroke="rgba(255,255,255,0.4)" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    id: 16,
    name: "Toy Clay Machine on Rent",
    desc: "Automated clay moulding station – kids make their own souvenirs!",
    badge: "Creative",
    badgeColor: "#7c3aed",
    gradientBg: "linear-gradient(160deg, #0e0820 0%, #2d1570 60%, #7c3aed 100%)",
    iconBg: "rgba(255,255,255,0.12)",
    icon: (
      <svg width="52" height="52" viewBox="0 0 64 64" fill="none">
        <rect x="14" y="20" width="36" height="28" rx="6" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/>
        <circle cx="32" cy="34" r="8" fill="rgba(124,58,237,0.5)" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5"/>
        <path d="M28 34 Q32 28 36 34 Q32 40 28 34" fill="rgba(255,255,255,0.5)"/>
        <rect x="22" y="10" width="20" height="12" rx="3" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/>
        <circle cx="26" cy="16" r="2.5" fill="rgba(255,100,200,0.8)"/>
        <circle cx="32" cy="16" r="2.5" fill="rgba(100,200,255,0.8)"/>
        <circle cx="38" cy="16" r="2.5" fill="rgba(255,220,50,0.8)"/>
      </svg>
    ),
  },
];

const VISIBLE_CARDS = 4;

export default function GamesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = games.length - VISIBLE_CARDS;

  const prev = () => setCurrentIndex(i => Math.max(0, i - 1));
  const next = () => setCurrentIndex(i => Math.min(maxIndex, i + 1));

  const openWhatsapp = (gameName: string) => {
    const msg = encodeURIComponent(`Hi! I want to book "${gameName}" for my event. Please share details.`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
  };
  const openCall = () => { window.location.href = `tel:${PHONE_NUMBER}`; };
  const openBooking = (gameName: string) => {
    window.open(`/book?game=${encodeURIComponent(gameName)}`, "_blank");
  };

  return (
    <section style={{ padding: "80px 0", background: "#fff" }}>
      <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
            <div style={{ width: "32px", height: "2px", background: "linear-gradient(to right, transparent, #7c3aed)" }} />
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#7c3aed" }}>
              Fun & Entertainment
            </span>
            <div style={{ width: "32px", height: "2px", background: "linear-gradient(to left, transparent, #7c3aed)" }} />
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 700, color: "#1a1009", lineHeight: 1.2, marginBottom: "14px" }}>
            Make Every Occasion{" "}
            <span style={{ color: "#7c3aed" }}>Extra Special</span>
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", color: "#6b5a4e", fontSize: "1rem", maxWidth: "520px", margin: "0 auto", lineHeight: 1.7 }}>
            Rent premium games & entertainment for birthdays, weddings, fairs & corporate events across India.
          </p>
        </div>

        {/* Slider Container */}
        <div style={{ position: "relative" }}>
          {/* Prev Button */}
          <button
            onClick={prev}
            disabled={currentIndex === 0}
            style={{
              position: "absolute", left: "-20px", top: "50%", transform: "translateY(-50%)",
              zIndex: 10, width: "46px", height: "46px", borderRadius: "50%",
              background: currentIndex === 0 ? "#f0f0f0" : "#fff",
              border: "1.5px solid " + (currentIndex === 0 ? "#e0e0e0" : "#7c3aed"),
              cursor: currentIndex === 0 ? "default" : "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: currentIndex === 0 ? "none" : "0 4px 16px rgba(124,58,237,0.2)",
              transition: "all 0.2s",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={currentIndex === 0 ? "#ccc" : "#7c3aed"} strokeWidth="2.5">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>

          {/* Cards Track */}
          <div style={{ overflow: "hidden" }}>
            <div style={{
              display: "flex", gap: "20px",
              transform: `translateX(calc(-${currentIndex} * (25% + 5px)))`,
              transition: "transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)",
            }}>
              {games.map((game) => (
                <div key={game.id} style={{
                  flexShrink: 0,
                  width: "calc(25% - 15px)",
                  borderRadius: "20px",
                  overflow: "hidden",
                  background: game.gradientBg,
                  boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
                  transition: "transform 0.25s ease, box-shadow 0.25s ease",
                  cursor: "pointer",
                  position: "relative",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(-6px)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 18px 48px rgba(0,0,0,0.28)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 32px rgba(0,0,0,0.18)";
                }}
                >
                  {/* Badge */}
                  <div style={{
                    position: "absolute", top: "14px", left: "14px", zIndex: 2,
                    background: game.badgeColor,
                    color: "white",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.62rem", fontWeight: 700,
                    letterSpacing: "0.06em", textTransform: "uppercase",
                    padding: "4px 10px", borderRadius: "50px",
                    boxShadow: `0 2px 10px ${game.badgeColor}60`,
                  }}>{game.badge}</div>

                  {/* Image / Illustration Area */}
                  <div style={{
                    height: "200px",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    position: "relative",
                    overflow: "hidden",
                  }}>
                    {/* Decorative background circles */}
                    <div style={{
                      position: "absolute", width: "160px", height: "160px", borderRadius: "50%",
                      background: "rgba(255,255,255,0.05)",
                      top: "50%", left: "50%", transform: "translate(-50%, -50%)",
                    }} />
                    <div style={{
                      position: "absolute", width: "110px", height: "110px", borderRadius: "50%",
                      background: "rgba(255,255,255,0.07)",
                      top: "50%", left: "50%", transform: "translate(-50%, -50%)",
                    }} />
                    {/* Icon */}
                    <div style={{
                      background: game.iconBg,
                      borderRadius: "50%",
                      width: "90px", height: "90px",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      border: "1.5px solid rgba(255,255,255,0.2)",
                      backdropFilter: "blur(8px)",
                      position: "relative", zIndex: 1,
                    }}>
                      {game.icon}
                    </div>

                    {/* Sparkling dots */}
                    {[
                      { top: "15%", left: "15%", size: 4 },
                      { top: "20%", right: "18%", size: 3 },
                      { bottom: "20%", left: "18%", size: 3 },
                      { bottom: "15%", right: "14%", size: 5 },
                    ].map((dot: any, k) => (
                      <div key={k} style={{
                        position: "absolute",
                        ...dot,
                        width: dot.size, height: dot.size,
                        borderRadius: "50%",
                        background: "rgba(255,255,255,0.5)",
                      }} />
                    ))}
                  </div>

                  {/* Card Body */}
                  <div style={{
                    padding: "18px 18px 20px",
                    background: "rgba(0,0,0,0.25)",
                    backdropFilter: "blur(4px)",
                  }}>
                    <h3 style={{
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: 700, fontSize: "1rem",
                      color: "white", marginBottom: "8px", lineHeight: 1.3,
                    }}>{game.name}</h3>
                    <p style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.78rem", color: "rgba(255,255,255,0.75)",
                      lineHeight: 1.6, marginBottom: "18px",
                    }}>{game.desc}</p>

                    {/* Action Buttons */}
                    <div style={{ display: "flex", gap: "8px" }}>
                      {/* Book Now */}
                      <button
                        onClick={() => openBooking(game.name)}
                        style={{
                          flex: 1,
                          padding: "9px 12px",
                          background: "white",
                          color: "#7c3aed",
                          border: "none",
                          borderRadius: "50px",
                          fontFamily: "'DM Sans', sans-serif",
                          fontWeight: 700, fontSize: "0.78rem",
                          cursor: "pointer",
                          transition: "all 0.2s",
                          display: "flex", alignItems: "center", justifyContent: "center", gap: "5px",
                        }}
                        onMouseEnter={e => (e.currentTarget.style.background = "#f0ebff")}
                        onMouseLeave={e => (e.currentTarget.style.background = "white")}
                      >
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2.5">
                          <rect x="3" y="4" width="18" height="18" rx="2"/>
                          <line x1="16" y1="2" x2="16" y2="6"/>
                          <line x1="8" y1="2" x2="8" y2="6"/>
                          <line x1="3" y1="10" x2="21" y2="10"/>
                        </svg>
                        Book Now
                      </button>

                      {/* WhatsApp */}
                      <button
                        onClick={() => openWhatsapp(game.name)}
                        style={{
                          width: "36px", height: "36px", borderRadius: "50%",
                          background: "#25d366",
                          border: "none", cursor: "pointer",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          flexShrink: 0,
                          transition: "transform 0.2s",
                          boxShadow: "0 2px 10px rgba(37,211,102,0.4)",
                        }}
                        onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.1)")}
                        onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                        title="Chat on WhatsApp"
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                      </button>

                      {/* Call */}
                      <button
                        onClick={openCall}
                        style={{
                          width: "36px", height: "36px", borderRadius: "50%",
                          background: "#7c3aed",
                          border: "none", cursor: "pointer",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          flexShrink: 0,
                          transition: "transform 0.2s",
                          boxShadow: "0 2px 10px rgba(124,58,237,0.4)",
                        }}
                        onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.1)")}
                        onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                        title="Call Us"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.82 19.79 19.79 0 01.03 1.18 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={next}
            disabled={currentIndex >= maxIndex}
            style={{
              position: "absolute", right: "-20px", top: "50%", transform: "translateY(-50%)",
              zIndex: 10, width: "46px", height: "46px", borderRadius: "50%",
              background: currentIndex >= maxIndex ? "#f0f0f0" : "#7c3aed",
              border: "none",
              cursor: currentIndex >= maxIndex ? "default" : "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: currentIndex >= maxIndex ? "none" : "0 4px 16px rgba(124,58,237,0.35)",
              transition: "all 0.2s",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={currentIndex >= maxIndex ? "#ccc" : "white"} strokeWidth="2.5">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        </div>

        {/* Dot Indicators */}
        <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginTop: "32px" }}>
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button key={i} onClick={() => setCurrentIndex(i)} style={{
              width: i === currentIndex ? "28px" : "8px",
              height: "8px", borderRadius: "50px",
              background: i === currentIndex ? "#7c3aed" : "#d0c8e8",
              border: "none", cursor: "pointer",
              transition: "all 0.3s ease", padding: 0,
            }} />
          ))}
        </div>

        {/* View All CTA */}
        <div style={{ textAlign: "center", marginTop: "36px" }}>
          <a href="/games" style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            padding: "13px 30px",
            border: "2px solid #7c3aed",
            borderRadius: "50px",
            color: "#7c3aed",
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 700, fontSize: "0.9rem",
            textDecoration: "none",
            transition: "all 0.25s",
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = "#7c3aed"; (e.currentTarget as HTMLAnchorElement).style.color = "white"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = "transparent"; (e.currentTarget as HTMLAnchorElement).style.color = "#7c3aed"; }}
          >
            View All Games
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          /* Show 3 cards */
        }
        @media (max-width: 768px) {
          section > div > div:last-of-type > div > div > div {
            width: calc(80% - 10px) !important;
          }
        }
      `}</style>
    </section>
  );
}