import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Real Finance Dashboard",
  description: "Real Finance Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="h-full">
      <body className="h-full">{children}</body>
    </html>
);
}
