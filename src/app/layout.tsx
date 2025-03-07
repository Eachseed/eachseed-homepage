import type { Metadata } from "next";
import { bodyFont } from "@/lib/constants/fonts";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "../components/footer";

export const metadata: Metadata = {
  title: "Eachseed | Early access",
  description: "Be one of the first sustainable startups to be listed when we launch our platform",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bodyFont.className} antialiased text-lg`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
