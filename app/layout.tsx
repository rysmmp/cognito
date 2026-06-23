import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Particles } from "@/components/Particles";
import { PwaRegister } from "@/components/PwaRegister";
import { SnackbarProvider } from "@/components/Snackbar";

// Inter — sans serif for the whole app. Exposed as --font-sans.
const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cognito — Think about your thinking",
  description:
    "Learn mental models, types of intelligence, and lateral-thinking puzzles through scenarios. One at a time.",
  applicationName: "Cognito",
  appleWebApp: {
    capable: true,
    title: "Cognito",
    statusBarStyle: "black-translucent",
  },
  // Declaring icons here suppresses the auto app/icon.svg link, so list it
  // explicitly alongside the apple-touch icon (the branded purple tile).
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/icon-512.svg", type: "image/svg+xml" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#07090c",
  width: "device-width",
  initialScale: 1,
  // Let the PWA fill the display on devices with notches.
  viewportFit: "cover",
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
          <div className="grid-overlay" aria-hidden="true" />
          <Particles />
          <div className="relative z-10 flex min-h-screen flex-col">
            <Nav />
            {children}
          </div>
        </SnackbarProvider>
        <PwaRegister />
      </body>
    </html>
  );
}
