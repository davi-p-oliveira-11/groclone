import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Groclone – Automate Research, Capture Insights, Move Faster",
  description:
    "Groclone helps teams collect, organize, and replicate research workflows with precision. Streamline discovery, centralize knowledge, and accelerate decision-making with an intelligent, unified platform.",
  icons: {
    icon: "./images/logo.svg",
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
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
