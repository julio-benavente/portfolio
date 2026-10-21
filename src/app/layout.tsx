import "./globals.css";
import type { Metadata } from "next";
import { fontCabinet } from "@/helpers/fontCabinet";
import Navbar from "@/ui/Navbar";
import Footer from "@/ui/Footer";

const description = "Software engineer building web products with React, Next.js and TypeScript.";

export const metadata: Metadata = {
  metadataBase: new URL("https://juliobenavente.com"),
  title: {
    default: "Julio Benavente | Software Engineer",
    template: "%s | Julio Benavente",
  },
  description,
  authors: [{ name: "Julio Benavente" }],
  openGraph: {
    type: "website",
    siteName: "Julio Benavente",
    title: "Julio Benavente | Software Engineer",
    description,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Julio Benavente | Software Engineer",
    description,
  },
};

// Runs before first paint: use the saved choice, otherwise follow the browser setting.
const themeScript = `(function(){try{var t=localStorage.getItem("theme");var d=t?t==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.classList.toggle("dark",d)}catch(e){}})()`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      {/* Full-height column: the content grows, so the footer sits at the bottom on short pages like the 404 */}
      <body className={`${fontCabinet.variable} flex min-h-screen flex-col`}>
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
