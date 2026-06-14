import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Secrets Demo",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "monospace", padding: 32, background: "#111", color: "#eee" }}>
        {children}
      </body>
    </html>
  );
}
