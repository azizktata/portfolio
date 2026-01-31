import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { BottomNavbar } from "@/components/bottom-navbar";
import { ScrollRestoration } from "@/components/scroll-restoration";
import { GoogleAnalytics } from "@next/third-parties/google";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300","400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Aziz Ktata",
  description: "Portfolio of Aziz Ktata, Full stack developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable}  antialiased`}
      >
          <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          // forcedTheme="light"
          // disableTransitionOnChange
        >
          <ThemeToggle />
        <ScrollRestoration />
        {children}
        <BottomNavbar />
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId="G-VCMMB9PKDS" />
    </html>
  );
}
