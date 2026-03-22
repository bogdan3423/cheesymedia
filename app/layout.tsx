import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const heading = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cheesy Media | Agenție Modernă de Marketing în Cluj-Napoca",
  description:
    "Cheesy Media este o agenție de marketing din Cluj-Napoca care ajută brandurile ambițioase să crească prin creație strategică, media plătită și execuție orientată spre performanță.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${heading.variable} ${body.variable} antialiased`}>{children}</body>
    </html>
  );
}
