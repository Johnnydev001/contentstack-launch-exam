import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {BlogHeaderComponent} from "@/components/blog-header/blog-header-component";
import {BlogFooterComponent} from "@/components/blog-footer/blog-footer-component";
import React, {ReactNode} from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Contentstack Launch NextJS APP",
  description: "Contentstack Launch NextJS APP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#F8F5F0]`}
      >
        <BlogHeaderComponent/>
            <main className=" w-full px-4 pt-12 mx-0 ">
                {children}
            </main>
        <BlogFooterComponent/>
      </body>
    </html>
  );
}
