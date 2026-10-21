import "./globals.css";
import { fontCabinet } from "@/helpers/fontCabinet";
import Navbar from "@/ui/Navbar";
import Footer from "@/ui/Footer";

export const metadata = {
  title: "Julio Benavente | Portfolio",
  description: "Julio Benavente's portfolio",
};

// Runs before first paint: use the saved choice, otherwise follow the browser setting.
const themeScript = `(function(){try{var t=localStorage.getItem("theme");var d=t?t==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.classList.toggle("dark",d)}catch(e){}})()`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={fontCabinet.variable}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
