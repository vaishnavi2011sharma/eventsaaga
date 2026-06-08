"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const categoryNav = [
  { label: "Weddings", href: "/weddings", dropdown: ["Wedding Decor", "Mandap Setup", "Floral Arrangements", "LED Lighting"] },
  { label: "Birthdays", href: "/birthdays", dropdown: ["Theme Birthdays", "Balloon Decor", "Cake Table Setup", "Backdrop Setup"] },
  { label: "Games on Rent", href: "/games", dropdown: ["Casino Game", "Hammer Game", "Bouncy Castle", "Electronic Games", "Basketball Machine", "Mega Wire", "Toy Train", "Wooden Games"], highlight: false },
  { label: "Candlelight Dinners", href: "/candlelight", dropdown: ["Rooftop Dining", "Garden Dinner", "Floating Setup", "Tent Dinner"] },
  { label: "Decorations", href: "/decorations", dropdown: ["Balloon Decor", "Floral Decor", "LED Decor", "Theme Decor"] },
  { label: "Baby Shower", href: "/baby-shower", dropdown: ["Classic Setup", "Gender Reveal", "Outdoor Setup", "Indoor Setup"] },
  { label: "Corporate Events", href: "/corporate", dropdown: [], highlight: true },
];

const CITIES = [
  { name: "Delhi NCR",   state: "Delhi",       popular: true  },
  { name: "Mumbai",      state: "Maharashtra",  popular: true  },
  { name: "Bangalore",   state: "Karnataka",    popular: true  },
  { name: "Hyderabad",   state: "Telangana",    popular: true  },
  { name: "Chennai",     state: "Tamil Nadu",   popular: true  },
  { name: "Kolkata",     state: "West Bengal",  popular: true  },
  { name: "Pune",        state: "Maharashtra",  popular: true  },
  { name: "Jaipur",      state: "Rajasthan",    popular: true  },
  { name: "Chandigarh",  state: "Punjab",       popular: false },
  { name: "Ahmedabad",   state: "Gujarat",      popular: false },
  { name: "Lucknow",     state: "U.P.",         popular: false },
  { name: "Noida",       state: "U.P.",         popular: false },
  { name: "Gurgaon",     state: "Haryana",      popular: false },
  { name: "Faridabad",   state: "Haryana",      popular: false },
  { name: "Surat",       state: "Gujarat",      popular: false },
  { name: "Indore",      state: "M.P.",         popular: false },
  { name: "Bhopal",      state: "M.P.",         popular: false },
  { name: "Nagpur",      state: "Maharashtra",  popular: false },
  { name: "Kochi",       state: "Kerala",       popular: false },
  { name: "Coimbatore",  state: "Tamil Nadu",   popular: false },
];

export default function Navbar() {
  const [scrolled, setScrolled]           = useState(false);
  const [mobileOpen, setMobileOpen]       = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [searchFocused, setSearchFocused] = useState(false);
  const [searchVal, setSearchVal]         = useState("");
  const [dropdownPos, setDropdownPos]     = useState({ left: 0, top: 0 });
  const itemRefs  = useRef<(HTMLDivElement | null)[]>([]);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // City modal state
  const [cityOpen, setCityOpen]           = useState(false);
  const [selectedCity, setSelectedCity]   = useState("Delhi NCR");
  const [citySearch, setCitySearch]       = useState("");
  const cityBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close city modal on outside click
  useEffect(() => {
    if (!cityOpen) return;
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest("[data-city-modal]") && !target.closest("[data-city-btn]")) {
        setCityOpen(false);
        setCitySearch("");
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [cityOpen]);

  const openDropdown = (i: number) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    const el = itemRefs.current[i];
    if (el) {
      const rect = el.getBoundingClientRect();
      setDropdownPos({ left: rect.left, top: rect.bottom });
    }
    setActiveDropdown(i);
  };
  const scheduleClose = () => { closeTimer.current = setTimeout(() => setActiveDropdown(null), 120); };
  const cancelClose   = () => { if (closeTimer.current) clearTimeout(closeTimer.current); };
  const activeItems   = activeDropdown !== null ? categoryNav[activeDropdown]?.dropdown ?? [] : [];

  const filteredCities = CITIES.filter(c =>
    c.name.toLowerCase().includes(citySearch.toLowerCase()) ||
    c.state.toLowerCase().includes(citySearch.toLowerCase())
  );
  const popularCities = filteredCities.filter(c => c.popular);
  const otherCities   = filteredCities.filter(c => !c.popular);

  return (
    <>
      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        background: "#fff",
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.1)" : "0 1px 0 rgba(0,0,0,0.08)",
        transition: "box-shadow 0.3s",
      }}>
        {/* TOP BAR */}
        <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", height: "66px", gap: "20px" }}>

          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none", flexShrink: 0, display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{ width: "42px", height: "42px", borderRadius: "50%", background: "linear-gradient(135deg, #c8861a, #a855f7)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 14px rgba(124,58,237,0.35)" }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </div>
            <div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.25rem", color: "#1a1009", letterSpacing: "0.03em", lineHeight: 1 }}>
                EVENT<span style={{ color: "c8861a" }}>SAAGA</span>
              </div>
              <div style={{ fontSize: "0.55rem", color: "#9a8070", letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "'DM Sans', sans-serif" }}>Crafting Moments</div>
            </div>
          </Link>

          {/* Search */}
          <div style={{ flex: 1, maxWidth: "460px" }}>
            <div style={{ display: "flex", alignItems: "center", background: searchFocused ? "#fff" : "#f5f5f5", border: `1.5px solid ${searchFocused ? "#c8861a" : "#e8e8e8"}`, borderRadius: "50px", padding: "0 16px", height: "42px", transition: "all 0.2s", boxShadow: searchFocused ? "0 0 0 3px rgba(124,58,237,0.12)" : "none" }}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke={searchFocused ? "#c8861a" : "#aaa"} strokeWidth="2.2" style={{ flexShrink: 0 }}>
                <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
              </svg>
              <input type="text" value={searchVal} onChange={e => setSearchVal(e.target.value)} onFocus={() => setSearchFocused(true)} onBlur={() => setSearchFocused(false)}
                placeholder='Search For "Games on Rent"'
                style={{ flex: 1, border: "none", background: "transparent", fontFamily: "'DM Sans', sans-serif", fontSize: "0.88rem", color: "#1a1009", outline: "none", padding: "0 10px" }}
              />
              {searchVal && <button onClick={() => setSearchVal("")} style={{ background: "none", border: "none", cursor: "pointer", padding: "0 4px", color: "#aaa" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
              </button>}
            </div>
          </div>

          <div style={{ flex: 1 }} />

          {/* Right Actions */}
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <a href="/help" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2px", textDecoration: "none", color: "#444" }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3M12 17h.01"/></svg>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.62rem", fontWeight: 600, letterSpacing: "0.06em", color: "#555" }}>HELP CENTER</span>
            </a>
            <a href="/login" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2px", textDecoration: "none", color: "#444" }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.62rem", fontWeight: 600, letterSpacing: "0.06em", color: "#555" }}>LOG IN</span>
            </a>

            {/* ── CITY BUTTON ── */}
            <button
              ref={cityBtnRef}
              data-city-btn
              onClick={() => { setCityOpen(o => !o); setCitySearch(""); }}
              style={{
                display: "flex", alignItems: "center", gap: "6px",
                background: cityOpen ? "#f5f0ff" : "none",
                border: `1.5px solid ${cityOpen ? "#7c3aed" : "#7c3aed"}`,
                borderRadius: "50px", padding: "7px 14px",
                cursor: "pointer", color: "#7c3aed",
                fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", fontWeight: 600,
                transition: "background 0.15s",
                boxShadow: cityOpen ? "0 0 0 3px rgba(124,58,237,0.12)" : "none",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#7c3aed">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              {selectedCity}
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2.5"
                style={{ transition: "transform 0.2s", transform: cityOpen ? "rotate(180deg)" : "rotate(0deg)" }}>
                <path d="M6 9l6 6 6-6"/>
              </svg>
            </button>

            {/* Mobile hamburger */}
            <button onClick={() => setMobileOpen(!mobileOpen)} style={{ display: "none", background: "none", border: "none", cursor: "pointer" }} className="mobile-ham">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1a1009" strokeWidth="2">
                {mobileOpen ? <path d="M18 6L6 18M6 6l12 12"/> : <><path d="M3 6h18"/><path d="M3 12h18"/><path d="M3 18h18"/></>}
              </svg>
            </button>
          </div>
        </div>

        {/* CATEGORY NAV */}
        <div style={{ borderTop: "1px solid #f0f0f0", background: "#fff" }}>
          <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", height: "46px", gap: "0px", overflowX: "auto" }}>
            {categoryNav.map((cat, i) => (
              <div key={i} ref={el => { itemRefs.current[i] = el; }} style={{ position: "relative", flexShrink: 0 }}
                onMouseEnter={() => cat.dropdown.length > 0 ? openDropdown(i) : setActiveDropdown(null)}
                onMouseLeave={scheduleClose}>
                <Link href={cat.href} style={{
                  display: "flex", alignItems: "center", gap: "4px",
                  padding: "0 14px", height: "46px", textDecoration: "none",
                  fontFamily: "'DM Sans', sans-serif", fontSize: "0.88rem",
                  fontWeight: activeDropdown === i ? 600 : 500,
                  color: cat.highlight ? "#7c3aed" : activeDropdown === i ? "#7c3aed" : "#333",
                  borderBottom: `2px solid ${cat.highlight || activeDropdown === i ? "#7c3aed" : "transparent"}`,
                  transition: "color 0.15s", whiteSpace: "nowrap", background: "transparent",
                }}>
                  {cat.label}
                  {cat.dropdown.length > 0 && (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                      style={{ transition: "transform 0.2s", transform: activeDropdown === i ? "rotate(180deg)" : "rotate(0deg)" }}>
                      <path d="M6 9l6 6 6-6"/>
                    </svg>
                  )}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* ── CATEGORY DROPDOWN (fixed portal) ── */}
      {activeDropdown !== null && activeItems.length > 0 && (
        <div onMouseEnter={cancelClose} onMouseLeave={scheduleClose}
          style={{ position: "fixed", top: dropdownPos.top, left: dropdownPos.left, zIndex: 1100, background: "#fff", border: "1px solid #ede9fe", borderRadius: "14px", boxShadow: "0 16px 48px rgba(124,58,237,0.15), 0 4px 12px rgba(0,0,0,0.08)", minWidth: "220px", overflow: "hidden", animation: "dropIn 0.18s ease forwards" }}>
          <div style={{ padding: "10px 16px 8px", borderBottom: "1px solid #f3f0ff", display: "flex", alignItems: "center", gap: "7px" }}>
            <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#7c3aed" }} />
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem", fontWeight: 700, color: "#7c3aed", letterSpacing: "0.1em", textTransform: "uppercase" }}>{categoryNav[activeDropdown]?.label}</span>
          </div>
          {activeItems.map((item, j) => (
            <Link key={j} href="#"
              style={{ display: "flex", alignItems: "center", gap: "10px", padding: "11px 18px", fontFamily: "'DM Sans', sans-serif", fontSize: "0.86rem", color: "#2d2d2d", textDecoration: "none", borderBottom: j < activeItems.length - 1 ? "1px solid #faf8ff" : "none", transition: "background 0.12s, color 0.12s" }}
              onMouseEnter={e => { e.currentTarget.style.background = "#f5f0ff"; e.currentTarget.style.color = "#7c3aed"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#2d2d2d"; }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c4b5fd" strokeWidth="2.5" style={{ flexShrink: 0 }}><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              {item}
            </Link>
          ))}
        </div>
      )}

      {/* ── CITY MODAL ── */}
      {cityOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 1200, display: "flex", alignItems: "flex-start", justifyContent: "flex-end", paddingTop: "80px", paddingRight: "24px" }}>
          {/* Backdrop */}
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.35)", backdropFilter: "blur(2px)" }}
            onClick={() => { setCityOpen(false); setCitySearch(""); }} />

          {/* Modal card */}
          <div data-city-modal style={{
            position: "relative", zIndex: 1,
            background: "#fff", borderRadius: "20px",
            width: "460px", maxHeight: "560px",
            boxShadow: "0 24px 64px rgba(124,58,237,0.2), 0 8px 24px rgba(0,0,0,0.12)",
            border: "1px solid #ede9fe",
            display: "flex", flexDirection: "column",
            animation: "modalIn 0.22s cubic-bezier(0.34,1.56,0.64,1) forwards",
            overflow: "hidden",
          }}>
            {/* Modal Header */}
            <div style={{ padding: "20px 20px 16px", borderBottom: "1px solid #f3f0ff", flexShrink: 0 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "14px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "linear-gradient(135deg, #7c3aed, #a855f7)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <div>
                    <p style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.05rem", color: "#1a1009", margin: 0, lineHeight: 1.2 }}>Select Your City</p>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", color: "#9a8070", margin: 0 }}>We serve across 20+ cities in India</p>
                  </div>
                </div>
                <button onClick={() => { setCityOpen(false); setCitySearch(""); }}
                  style={{ width: "32px", height: "32px", borderRadius: "50%", background: "#f5f5f5", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}
                  onMouseEnter={e => (e.currentTarget.style.background = "#fee2e2")}
                  onMouseLeave={e => (e.currentTarget.style.background = "#f5f5f5")}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
                </button>
              </div>

              {/* Search inside modal */}
              <div style={{ display: "flex", alignItems: "center", background: "#f8f5ff", border: "1.5px solid #ede9fe", borderRadius: "12px", padding: "0 14px", height: "40px" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2.2" style={{ flexShrink: 0 }}>
                  <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
                </svg>
                <input type="text" value={citySearch} onChange={e => setCitySearch(e.target.value)}
                  placeholder="Search city..."
                  autoFocus
                  style={{ flex: 1, border: "none", background: "transparent", fontFamily: "'DM Sans', sans-serif", fontSize: "0.88rem", color: "#1a1009", outline: "none", padding: "0 10px" }}
                />
                {citySearch && <button onClick={() => setCitySearch("")} style={{ background: "none", border: "none", cursor: "pointer", padding: 0, color: "#aaa" }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
                </button>}
              </div>
            </div>

            {/* Scrollable city list */}
            <div style={{ overflowY: "auto", flex: 1, padding: "16px 20px 20px" }}>
              {filteredCities.length === 0 ? (
                <div style={{ textAlign: "center", padding: "40px 0", color: "#9a8070", fontFamily: "'DM Sans', sans-serif", fontSize: "0.9rem" }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#d4c5f0" strokeWidth="1.5" style={{ display: "block", margin: "0 auto 12px" }}>
                    <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
                  </svg>
                  No city found for "{citySearch}"
                </div>
              ) : (
                <>
                  {/* Popular Cities */}
                  {popularCities.length > 0 && (
                    <>
                      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.68rem", fontWeight: 700, color: "#7c3aed", letterSpacing: "0.14em", textTransform: "uppercase", margin: "0 0 12px" }}>
                        ⚡ Popular Cities
                      </p>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginBottom: "20px" }}>
                        {popularCities.map((city, i) => (
                          <button key={i}
                            onClick={() => { setSelectedCity(city.name); setCityOpen(false); setCitySearch(""); }}
                            style={{
                              display: "flex", alignItems: "center", gap: "10px",
                              padding: "10px 14px", borderRadius: "12px",
                              background: selectedCity === city.name ? "#f0ebff" : "#faf8ff",
                              border: `1.5px solid ${selectedCity === city.name ? "#7c3aed" : "#ede9fe"}`,
                              cursor: "pointer", textAlign: "left", transition: "all 0.15s",
                            }}
                            onMouseEnter={e => { if (selectedCity !== city.name) { e.currentTarget.style.background = "#f5f0ff"; e.currentTarget.style.borderColor = "#c4b5fd"; } }}
                            onMouseLeave={e => { if (selectedCity !== city.name) { e.currentTarget.style.background = "#faf8ff"; e.currentTarget.style.borderColor = "#ede9fe"; } }}
                          >
                            <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: selectedCity === city.name ? "linear-gradient(135deg, #7c3aed, #a855f7)" : "#ede9fe", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "all 0.15s" }}>
                              <svg width="14" height="14" viewBox="0 0 24 24" fill={selectedCity === city.name ? "white" : "#a78bfa"}>
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                              </svg>
                            </div>
                            <div>
                              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.84rem", fontWeight: 600, color: selectedCity === city.name ? "#7c3aed" : "#1a1009", margin: 0, lineHeight: 1.2 }}>{city.name}</p>
                              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.68rem", color: "#9a8070", margin: 0 }}>{city.state}</p>
                            </div>
                            {selectedCity === city.name && (
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2.5" style={{ marginLeft: "auto", flexShrink: 0 }}>
                                <path d="M20 6L9 17l-5-5"/>
                              </svg>
                            )}
                          </button>
                        ))}
                      </div>
                    </>
                  )}

                  {/* Other Cities */}
                  {otherCities.length > 0 && (
                    <>
                      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.68rem", fontWeight: 700, color: "#9a8070", letterSpacing: "0.14em", textTransform: "uppercase", margin: "0 0 10px" }}>
                        More Cities
                      </p>
                      <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                        {otherCities.map((city, i) => (
                          <button key={i}
                            onClick={() => { setSelectedCity(city.name); setCityOpen(false); setCitySearch(""); }}
                            style={{
                              display: "flex", alignItems: "center", gap: "12px",
                              padding: "10px 14px", borderRadius: "10px",
                              background: selectedCity === city.name ? "#f0ebff" : "transparent",
                              border: `1px solid ${selectedCity === city.name ? "#c4b5fd" : "transparent"}`,
                              cursor: "pointer", textAlign: "left", transition: "all 0.12s", width: "100%",
                            }}
                            onMouseEnter={e => { if (selectedCity !== city.name) e.currentTarget.style.background = "#faf8ff"; }}
                            onMouseLeave={e => { if (selectedCity !== city.name) e.currentTarget.style.background = "transparent"; }}
                          >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={selectedCity === city.name ? "#c8861a" : "#c4b5fd"} strokeWidth="2">
                              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                              <circle cx="12" cy="9" r="2.5"/>
                            </svg>
                            <div style={{ flex: 1 }}>
                              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.86rem", fontWeight: selectedCity === city.name ? 600 : 400, color: selectedCity === city.name ? "#7c3aed" : "#333" }}>{city.name}</span>
                              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", color: "#9a8070", marginLeft: "6px" }}>{city.state}</span>
                            </div>
                            {selectedCity === city.name && (
                              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#c8861a" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>
                            )}
                          </button>
                        ))}
                      </div>
                    </>
                  )}
                </>
              )}
            </div>

            {/* Footer */}
            <div style={{ padding: "12px 20px", borderTop: "1px solid #f3f0ff", background: "#faf8ff", flexShrink: 0, display: "flex", alignItems: "center", gap: "8px" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.72rem", color: "#9a8070", margin: 0 }}>
                Can't find your city? <a href="/contact" style={{ color: "#c8861a", fontWeight: 600, textDecoration: "none" }}>Contact us</a> — we're expanding fast!
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {mobileOpen && (
        <div style={{ position: "fixed", top: "112px", left: 0, right: 0, bottom: 0, background: "rgba(0,0,0,0.5)", zIndex: 999 }} onClick={() => setMobileOpen(false)}>
          <div style={{ background: "#fff", padding: "20px", display: "flex", flexDirection: "column", gap: "4px" }} onClick={e => e.stopPropagation()}>
            {categoryNav.map((cat, i) => (
              <Link key={i} href={cat.href} onClick={() => setMobileOpen(false)}
                style={{ padding: "12px 16px", borderRadius: "8px", textDecoration: "none", color: cat.highlight ? "c8861a" : "#333", fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: "0.95rem" }}>
                {cat.label}
              </Link>
            ))}
          </div>
        </div>
      )}

      <style>{`
        @keyframes dropIn {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes modalIn {
          from { opacity: 0; transform: translateY(-16px) scale(0.96); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @media (max-width: 768px) { .mobile-ham { display: flex !important; } }
        header > div:last-child > div { scrollbar-width: none; }
        header > div:last-child > div::-webkit-scrollbar { display: none; }
        [data-city-modal] ::-webkit-scrollbar { width: 4px; }
        [data-city-modal] ::-webkit-scrollbar-track { background: #f8f5ff; }
        [data-city-modal] ::-webkit-scrollbar-thumb { background: #c4b5fd; border-radius: 4px; }
      `}</style>
    </>
  );
}