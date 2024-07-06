import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "next-themes";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lily Marino",
  description: "EMT & Aspiring Physician Assistant (PA)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.className}`} suppressHydrationWarning={true}>
      <body>
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
