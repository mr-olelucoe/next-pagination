import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
});

export const metadata: Metadata = {
    title: "Pagination example",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={cn(
                    "min-h-screen bg-background font-sans antialiased flex flex-col justify-between items-center",
                    fontSans.variable
                )}
            >
                <header className="bg-gray-100 py-8 text-center w-full">
                    header
                </header>
                <div className="w-full flex-grow">{children}</div>
                <footer className="bg-gray-100 py-8 text-center  w-full">
                    footer
                </footer>
            </body>
        </html>
    );
}
