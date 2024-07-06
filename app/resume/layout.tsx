import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import {ThemeProvider} from "next-themes";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Lily's Resume",
    description: "EMT | Pre-PA Student | Applying Field Experience to PA Studies",
};

export default function ResumeLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning={true}>
            <body className={`${spaceGrotesk.className} bg-white`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="light"
                    forcedTheme="light"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
