import "./globals.css";
import { fontCabinet } from "@/helpers/fontCabinet";
import * as C from "@/components";
import Head from "next/head";

export const metadata = {
  title: "Julio Benavente | Portfolio",
  description: "Julio Benavente's portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${fontCabinet.variable}`}>
        <C.Navbar />
        {children}
        <C.Footer />
      </body>
    </html>
  );
}
