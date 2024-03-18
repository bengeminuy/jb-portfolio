import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import NavBar from "@/components/NavBar/NavBar";
import SplineContainer from "@/components/SplineContainer/SplineContainer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: ".JB Fullstack Developer Web Portfolio",
  description: "Fullstack developer web portfolio for John Bengemin Uy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <SplineContainer />
        {children}
      </body>
    </html>
  );
}
