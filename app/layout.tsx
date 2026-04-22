import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { BottomNavbar } from "@/components/bottom-navbar";
import { ScrollRestoration } from "@/components/scroll-restoration";
import { GoogleAnalytics } from "@next/third-parties/google";


const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
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
        className={`${bricolage.variable} antialiased`}
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
