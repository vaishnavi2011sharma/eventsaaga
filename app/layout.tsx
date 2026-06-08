import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Floatingcta from "@/components/ui/Floatingcta";

export const metadata = {
  title: "EventSaaga – Crafting Moments Into Timeless Memories",
  description: "Games on rent, wedding decor, birthday decorations & more across India.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400;1,600&family=DM+Sans:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <main style={{ paddingTop: "112px" }}>{children}</main>
        <Footer />

        {/* Floating WhatsApp + Call buttons — visible on ALL pages */}
        <Floatingcta />
      </body>
    </html>
  );
}