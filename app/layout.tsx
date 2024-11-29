import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Will Graham | Portfolio",
  description: "Will Graham's personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-main dark">
      <body>
        {children}
      </body>
    </html>
  );
}
