import type { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Particles } from "@/components/Particles";
import { SnackbarProvider } from "@/components/Snackbar";

// Roboto — the typeface of Google's Material Design system. Drives every
// `font-sans` surface via --font-sans. (Roboto ships 400/500/700, not 600.)
const sans = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cognito — Think about your thinking",
  description:
    "Learn mental models through scenarios. Scenario first, model second. One model at a time.",
};

export const viewport: Viewport = {
  themeColor: "#141218",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={sans.variable}>
      <body className="min-h-screen bg-background text-on-surface antialiased">
        <SnackbarProvider>
          <Particles />
          <div className="relative z-10 flex min-h-screen flex-col">
            <Nav />
            {children}
          </div>
        </SnackbarProvider>
      </body>
    </html>
  );
}
