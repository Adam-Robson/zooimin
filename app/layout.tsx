import type { Metadata } from "next";
import {
  Fira_Sans
} from "next/font/google";
import "./page.css";
import "./colors.css";
import "./globals.css";

const FiraSans = Fira_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-fira-code",
});

export const metadata: Metadata = {
  title: "Le Fog",
  description: "Website for Le Fog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={FiraSans.className}
      >
        {children}
      </body>
    </html>
  );
}
