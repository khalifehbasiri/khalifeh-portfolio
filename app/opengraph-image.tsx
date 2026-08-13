import { ImageResponse } from "next/og";

export const alt = "Khalifeh Basiri - Software Developer portfolio";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0c0c0e",
          color: "#ededed",
          padding: "72px",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{
              border: "1px solid #2a2a32",
              borderRadius: "999px",
              color: "#6ee7b7",
              fontSize: 28,
              padding: "14px 24px",
            }}
          >
            Portfolio
          </div>
          <div
            style={{
              color: "#8b8b96",
              fontSize: 26,
            }}
          >
            Ottawa, ON
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#6ee7b7",
              fontSize: 34,
              marginBottom: 22,
            }}
          >
            Software Developer
          </div>
          <div
            style={{
              fontSize: 92,
              fontWeight: 700,
              letterSpacing: "-2px",
              lineHeight: 1,
              maxWidth: 900,
            }}
          >
            Khalifeh Basiri
          </div>
          <div
            style={{
              color: "#8b8b96",
              fontSize: 34,
              lineHeight: 1.35,
              marginTop: 30,
              maxWidth: 920,
            }}
          >
            Python, Azure, machine learning, and full-stack web applications.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 16,
            color: "#0c0c0e",
            fontSize: 24,
            fontWeight: 700,
          }}
        >
          {["Python", "TypeScript", "React", "Azure", "AI"].map((label) => (
            <div
              key={label}
              style={{
                background: "#6ee7b7",
                borderRadius: 10,
                padding: "12px 18px",
              }}
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
