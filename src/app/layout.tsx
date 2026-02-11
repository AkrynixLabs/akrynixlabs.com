import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://akrynixlabs.com"),
  title: {
    default: "Akrynix Labs",
    template: "%s · Akrynix Labs",
  },
  description: "Akrynix Labs is a technology and systems engineering lab\
   designing scalable, reliable digital systems across web, mobile, and cloud.",
  icons: {
    icon: [
      { url: "/assets/logo.png", sizes: "any" },
      { url: "/assets/logo.png", sizes: "32x32", type: "image/png" },
      { url: "/assets/logo.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/assets/logo.png",
  },
  openGraph: {
    title: "Akrynix Labs",
    description: "A technology and systems engineering lab designing scalable digital systems.",
    type: "website"
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-neutral-900 antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
