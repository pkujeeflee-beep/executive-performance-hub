import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Executive Performance Hub",
  description: "Executive dashboard for business performance monitoring."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
