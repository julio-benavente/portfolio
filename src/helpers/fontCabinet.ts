import localFont from "next/font/local";

export const fontCabinet = localFont({
  src: [
    {
      path: "../fonts/CabinetGrotesk-Thin.woff2",
      weight: "100",
      style: "thin",
    },
    {
      path: "../fonts/CabinetGrotesk-Extralight.woff2",
      weight: "200",
      style: "extra-light",
    },
    {
      path: "../fonts/CabinetGrotesk-Light.woff2",
      weight: "300",
      style: "light",
    },
    {
      path: "../fonts/CabinetGrotesk-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/CabinetGrotesk-Medium.woff2",
      weight: "500",
      style: "medium",
    },
    {
      path: "../fonts/CabinetGrotesk-Bold.woff2",
      weight: "700",
      style: "bold",
    },
    {
      path: "../fonts/CabinetGrotesk-Extrabold.woff2",
      weight: "800",
      style: "extra-bold",
    },
    {
      path: "../fonts/CabinetGrotesk-Black.woff2",
      weight: "900",
      style: "black",
    },
  ],
  variable: "--font-cabinet",
  display: "swap",
});
