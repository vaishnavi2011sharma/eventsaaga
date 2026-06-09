"use client";
import { useState } from "react";
import Link from "next/link";

const CITIES_TABS = ["Delhi NCR", "Gurugram/Gurgaon", "Noida", "Bangalore", "Hyderabad", "Mumbai", "Pune", "Ahmedabad", "Lucknow", "Chennai"];

const SERVICES_BY_CITY: Record<string, { name: string; href: string }[]> = {
  default: [
    { name: "Birthday Decorations", href: "/birthday-decorations" },
    { name: "Party Decorations", href: "/party-decorations" },
    { name: "Candlelight Dinner", href: "/candlelight-dinner" },
    { name: "Personalised Gifts", href: "/personalised-gifts" },
    { name: "Party Entertainment", href: "/party-entertainment" },
    { name: "Corporate Events", href: "/corporate-events" },
    { name: "Food Catering", href: "/food-catering" },
    { name: "Photography Services", href: "/photography" },
    { name: "Anniversary Decorations", href: "/anniversary-decorations" },
    { name: "Baby Shower Celebration", href: "/baby-shower" },
    { name: "Baby Welcome Decorations", href: "/baby-welcome" },
    { name: "Christmas/Xmas Decorations", href: "/christmas-decorations" },
    { name: "Kids Birthday Celebration", href: "/kids-birthday" },
    { name: "First Birthday Decoration", href: "/first-birthday" },
    { name: "Diwali Decorations", href: "/diwali-decorations" },
    { name: "Haldi/Mehndi Decorations", href: "/haldi-mehndi" },
    { name: "Halloween Theme Decorations", href: "/halloween" },
    { name: "Casino Game on Rent", href: "/games/casino-game-on-rent" },
    { name: "Games on Rent", href: "/games" },
    { name: "Bouncy Castle on Rent", href: "/games/bouncy-castle-on-rent" },
    { name: "Popcorn Machine on Rent", href: "/games/popcorn-machine-on-rent" },
    { name: "Candy Floss Machine", href: "/games/candy-floss-machine-on-rent" },
    { name: "Chocolate Fountain", href: "/games/chocolate-fountain-on-rent" },
    { name: "Electronic Games on Rent", href: "/games/electronic-games-on-rent" },
  ],
};

const SHOW_LIMIT = 18;

export default function HostPartySection() {
  const [activeCity, setActiveCity] = useState("Delhi NCR");
  const [showAll, setShowAll] = useState(false);

  const services = SERVICES_BY_CITY[activeCity] ?? SERVICES_BY_CITY["default"];
  const displayServices = showAll ? services : services.slice(0, SHOW_LIMIT);

  return (
    <section style={{ padding: "60px 5%", background: "#f9fafb", borderTop: "1px solid #f0f0f0" }}>
      <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
        {/* Title */}
        <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)", color: "#111827", marginBottom: "28px" }}>
          Host Your Next Party With Ease
        </h2>

        {/* City Tabs */}
        <div style={{ display: "flex", gap: "0", borderBottom: "1.5px solid #e5e7eb", marginBottom: "28px", overflowX: "auto", paddingBottom: "0" }}>
          {CITIES_TABS.map(city => (
            <button key={city}
              onClick={() => { setActiveCity(city); setShowAll(false); }}
              style={{
                flexShrink: 0,
                padding: "10px 16px",
                background: "none", border: "none",
                borderBottom: `2.5px solid ${activeCity === city ? "#7c3aed" : "transparent"}`,
                marginBottom: "-1.5px",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.88rem", fontWeight: activeCity === city ? 700 : 400,
                color: activeCity === city ? "#7c3aed" : "#6b7280",
                cursor: "pointer", transition: "all 0.15s", whiteSpace: "nowrap",
              }}>
              {city}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: "6px 0" }}>
          {displayServices.map((svc, i) => (
            <Link key={i} href={svc.href}
              style={{ textDecoration: "none", padding: "10px 0" }}>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "0.88rem", color: "#111827", margin: 0, lineHeight: 1.3, transition: "color 0.15s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#7c3aed")}
                onMouseLeave={e => (e.currentTarget.style.color = "#111827")}
              >
                {svc.name}
              </p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", color: "#9ca3af", margin: "2px 0 0" }}>
                in {activeCity}
              </p>
            </Link>
          ))}

          {/* Show More */}
          {!showAll && services.length > SHOW_LIMIT && (
            <div style={{ padding: "10px 0" }}>
              <button onClick={() => setShowAll(true)}
                style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "0.88rem", color: "#7c3aed", margin: 0 }}>
                  Show More
                </p>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", color: "#9ca3af", margin: "2px 0 0" }}>
                  +{services.length - SHOW_LIMIT} more
                </p>
              </button>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          section > div > div:last-child { grid-template-columns: repeat(4, 1fr) !important; }
        }
        @media (max-width: 640px) {
          section > div > div:last-child { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}