import type { Metadata } from "next";
import { inter } from "./ui/fonts";
import "./ui/global.css";

export const metadata: Metadata = {
  title: "Intiweb",
  description: "Dedicated to creating high-quality informational websites.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
