import { ImageResponse } from "next/og";

export const alt =
  "TheMusicTree — open-source ecosystem for understanding global music";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const description =
    locale === "fr"
      ? "Écosystème open source pour comprendre la musique mondiale"
      : "Open-source ecosystem for understanding global music";

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
        {/* eslint-disable-next-line react/jsx-no-literals -- brand name, not translatable text */}
        <div style={{ fontSize: 56, fontWeight: 700 }}>{"TheMusicTree"}</div>
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
          {description}
        </div>
      </div>
    ),
    { ...size },
  );
}
