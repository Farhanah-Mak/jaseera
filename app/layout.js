import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
// import { Inter } from "next/font/google";
import "./globals.css";
import { inter } from "./fonts";



export const metadata = {
  title: "Jaseera",
  description: "3D Design and Manufacturing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
