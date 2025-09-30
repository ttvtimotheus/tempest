import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { ThemeProvider } from "@/components/providers/theme-provider";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tempest eSports - Professional Gaming Organization",
  description: "Competitive gaming excellence across VALORANT, Counter-Strike 2, and League of Legends. Follow our journey to esports dominance.",
  keywords: ["esports", "gaming", "valorant", "counter-strike", "league of legends", "competitive gaming"],
  authors: [{ name: "Tempest eSports" }],
  creator: "Tempest eSports",
  publisher: "Tempest eSports",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://tempestesports.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tempestesports.com",
    title: "Tempest eSports - Professional Gaming Organization",
    description: "Competitive gaming excellence across VALORANT, Counter-Strike 2, and League of Legends.",
    siteName: "Tempest eSports",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tempest eSports - Professional Gaming Organization",
    description: "Competitive gaming excellence across VALORANT, Counter-Strike 2, and League of Legends.",
    creator: "@TempesteSports",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-1 pt-20">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
