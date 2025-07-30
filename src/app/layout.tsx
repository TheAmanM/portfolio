import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.css";

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://amanmeherally.com"),
  title: "Aman Meherally",
  description: "User-centric Design & Web Development.",
  openGraph: {
    title: "Aman Meherally",
    description: "User-centric Design & Web Development.",
    url: "https://amanmeherally.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${publicSans.className} antialiased overflow-x-clip  h-svh`}
      >
        {children}
      </body>
    </html>
  );
}
