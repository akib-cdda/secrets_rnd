import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Secrets Demo",
  description: "GH Environments + Cloudflare Workers per-env secrets",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          fontFamily:
            "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
          margin: 0,
          padding: 32,
          background: "#0b0b0b",
          color: "#e6e6e6",
          minHeight: "100vh",
        }}
      >
        {children}
      </body>
    </html>
  );
}
