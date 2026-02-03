import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "Akrynix Labs",
    template: "%s · Akrynix Labs",
  },
  description:
   "Akrynix Labs is a technology and systems engineering lab designing\
    scalable, reliable digital systems across web, mobile, and cloud.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Akrynix Labs",
    description: "A technology and systems engineering lab designing scalable digital systems.",
    type: "website"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
