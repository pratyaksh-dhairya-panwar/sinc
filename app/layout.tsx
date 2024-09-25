import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./header";
import Footer from "./footer";
import Newsletter from "./newsletter";


export const metadata: Metadata = {
  title: "SInC",
  description: "Official website of Student Incubation Cell, IIT Delhi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-primary">
        <Header />
        {children}
        <Newsletter />
        <Footer />
        </body>
    </html>
  );
}
