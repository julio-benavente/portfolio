import { ImageResponse } from "next/server";

// Social share image, used when the link is pasted into LinkedIn, Slack, etc.
export const runtime = "edge";
export const alt = "Julio Benavente, Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 96,
          background: "#0a0a0a",
          color: "#ededed",
          border: "2px solid #4d4d4d",
        }}
      >
        <div style={{ fontSize: 104, fontWeight: 600, letterSpacing: -2 }}>Julio Benavente</div>
        <div style={{ fontSize: 52, marginTop: 16, color: "#9e9e9e" }}>Software Engineer</div>
      </div>
    ),
    size
  );
}
