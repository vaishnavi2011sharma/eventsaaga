"use client";
import { useState } from "react";

const WHATSAPP_NUMBER = "919958475988"; // Replace with actual number
const PHONE_NUMBER = "919958475988";       // Replace with actual number

export default function FloatingCTA() {
  const [wpHovered, setWpHovered] = useState(false);
  const [callHovered, setCallHovered] = useState(false);

  const openWhatsapp = () => {
    const msg = encodeURIComponent("Hi EventSaaga! I want to enquire about your services.");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
  };

  const openCall = () => {
    window.location.href = `tel:${PHONE_NUMBER}`;
  };

  return (
    <>
      {/* WhatsApp – Bottom Left */}
      <div style={{
        position: "fixed",
        bottom: "28px",
        left: "24px",
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "8px",
      }}>
        {/* Tooltip */}
        {wpHovered && (
          <div style={{
            background: "#1a1009",
            color: "white",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.75rem",
            fontWeight: 500,
            padding: "6px 12px",
            borderRadius: "8px",
            whiteSpace: "nowrap",
            boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
            marginBottom: "2px",
            animation: "tooltipFade 0.15s ease",
          }}>
            Chat on WhatsApp
            <div style={{
              position: "absolute",
              bottom: "-5px", left: "18px",
              width: "10px", height: "10px",
              background: "#1a1009",
              transform: "rotate(45deg)",
              borderRadius: "1px",
            }} />
          </div>
        )}

        <button
          onClick={openWhatsapp}
          onMouseEnter={() => setWpHovered(true)}
          onMouseLeave={() => setWpHovered(false)}
          style={{
            width: "58px", height: "58px",
            borderRadius: "50%",
            background: "#25d366",
            border: "none",
            cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 6px 24px rgba(37,211,102,0.45)",
            transition: "transform 0.25s ease, box-shadow 0.25s ease",
            transform: wpHovered ? "scale(1.12)" : "scale(1)",
            position: "relative",
          }}
        >
          {/* Pulse ring */}
          <div style={{
            position: "absolute", inset: "-6px",
            borderRadius: "50%",
            border: "2px solid rgba(37,211,102,0.3)",
            animation: "wpPulse 2s ease-in-out infinite",
          }} />
          <div style={{
            position: "absolute", inset: "-12px",
            borderRadius: "50%",
            border: "1.5px solid rgba(37,211,102,0.15)",
            animation: "wpPulse 2s ease-in-out infinite 0.5s",
          }} />

          {/* WhatsApp SVG icon */}
          <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </button>
      </div>

      {/* Call – Bottom Right */}
      <div style={{
        position: "fixed",
        bottom: "28px",
        right: "24px",
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: "8px",
      }}>
        {/* Tooltip */}
        {callHovered && (
          <div style={{
            background: "#1a1009",
            color: "white",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.75rem",
            fontWeight: 500,
            padding: "6px 12px",
            borderRadius: "8px",
            whiteSpace: "nowrap",
            boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
            marginBottom: "2px",
            position: "relative",
            animation: "tooltipFade 0.15s ease",
          }}>
            Call Us Now
            <div style={{
              position: "absolute",
              bottom: "-5px", right: "18px",
              width: "10px", height: "10px",
              background: "#1a1009",
              transform: "rotate(45deg)",
              borderRadius: "1px",
            }} />
          </div>
        )}

        <button
          onClick={openCall}
          onMouseEnter={() => setCallHovered(true)}
          onMouseLeave={() => setCallHovered(false)}
          style={{
            width: "58px", height: "58px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #7c3aed, #a855f7)",
            border: "none",
            cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 6px 24px rgba(124,58,237,0.45)",
            transition: "transform 0.25s ease, box-shadow 0.25s ease",
            transform: callHovered ? "scale(1.12)" : "scale(1)",
            position: "relative",
          }}
        >
          {/* Pulse ring */}
          <div style={{
            position: "absolute", inset: "-6px",
            borderRadius: "50%",
            border: "2px solid rgba(124,58,237,0.3)",
            animation: "callPulse 2.5s ease-in-out infinite",
          }} />

          {/* Phone SVG icon */}
          <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.82 19.79 19.79 0 01.03 1.18 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
          </svg>
        </button>
      </div>

      <style>{`
        @keyframes wpPulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50%        { transform: scale(1.15); opacity: 0.5; }
        }
        @keyframes callPulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50%        { transform: scale(1.18); opacity: 0.4; }
        }
        @keyframes tooltipFade {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}