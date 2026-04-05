import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, Exo_2, Boldonse, Gravitas_One } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";

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

const exo2 = Exo_2({
  variable: "--font-exo2",
  subsets: ["latin"],
  display: "swap",
});

const boldonse = Boldonse({
  variable: "--font-boldonse",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const gravitasOne = Gravitas_One({
  variable: "--font-gravitas",
  weight: "400",
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
      <body className={`${heading.variable} ${body.variable} ${exo2.variable} ${boldonse.variable} ${gravitasOne.variable} antialiased`}>
        <div className="min-h-screen bg-background text-foreground">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
