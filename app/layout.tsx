import { SidebarInset } from "@/components/ui/sidebar";
import AppHeader from "@/features/sidebar/app-header";
import { AppSidebar } from "@/features/sidebar/app-sidebar";
import { cn } from "@/lib/utils";
import Providers from "@/providers/providers";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Task Management",
    description: "test recrutement dev front",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning className="h-full text-2xl">
            <body
                className={cn(
                    geistSans.variable,
                    geistMono.variable,
                    "antialiased h-full flex flex-col overflow-hidden"
                )}
            >
                <Toaster position="top-right" richColors />
                <main className="flex-1 bg-background">
                    <Providers>
                        <AppSidebar variant="floating" />
                        <SidebarInset>
                            <AppHeader />
                            {children}
                        </SidebarInset>
                    </Providers>
                </main>
            </body>
        </html>
    );
}
