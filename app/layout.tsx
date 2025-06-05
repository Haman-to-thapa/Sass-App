// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";

// Load fonts with CSS variables
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// App metadata
export const metadata: Metadata = {
  title: "Companion Builder",
  description: "Create and manage your learning companions with ease.",
};

// Root layout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{ variables: { colorPrimary: "#fe5933" } }}>
      <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
        <body className="antialiased min-h-screen bg-white text-black">
          <Navbar />
          <main className="pt-4">{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
