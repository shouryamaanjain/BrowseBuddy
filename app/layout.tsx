import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';

import "./globals.css";

export const metadata: Metadata = {
  title: "BrowseBuddy",
  description: "BrowseBuddy is a chat interface that allows you to search the web and get answers to your questions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${GeistSans.className} antialiased`}>
        
        {children}
      </body>
    </html>
  );
}
