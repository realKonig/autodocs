import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AutoDocs - AI-Powered Project Documentation",
  description: "Generate comprehensive project documentation from your project description using AI.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-gray-900 text-gray-100`}>
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
