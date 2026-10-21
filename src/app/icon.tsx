import { readFile } from "fs/promises";
import path from "path";
import { ImageResponse } from "next/server";

// Favicon: single heavy, slanted "J" in Climate Crisis on the site's black.
// Node runtime (not edge): the font file is over 1 MB, too big for an edge bundle.
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default async function Icon() {
  const font = await readFile(path.join(process.cwd(), "src/fonts/ClimateCrisis.ttf"));

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0a",
          borderRadius: 10,
          color: "#ffffff",
          fontFamily: "Climate Crisis",
          fontSize: 50,
          fontWeight: 400,
        }}
      >
        {/* Slant the letter only; skewing the tile would turn the background into a parallelogram */}
        <div style={{ display: "flex", transform: "skewX(-10deg)" }}>J</div>
      </div>
    ),
    { ...size, fonts: [{ name: "Climate Crisis", data: font, weight: 400, style: "normal" }] }
  );
}
