import { ImageResponse } from "next/og";

export const alt =
  "TheMusicTree — open-source ecosystem for understanding global music";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#fafafa",
          color: "#18181b",
        }}
      >
        <div style={{ fontSize: 56, fontWeight: 700 }}>TheMusicTree</div>
        <div
          style={{
            fontSize: 24,
            marginTop: 20,
            color: "#52525b",
            textAlign: "center",
            maxWidth: 900,
            lineHeight: 1.35,
          }}
        >
          Open-source ecosystem for understanding global music
        </div>
      </div>
    ),
    { ...size },
  );
}
