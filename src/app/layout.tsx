import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mehedi Hasan | Full Stack Web Developer",
  description:
    "Professional portfolio of Mehedi Hasan, a Full Stack Web Developer specializing in PERN/MERN stack, SaaS, and complex logic solutions.",
    icons: {
    icon: `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><g stroke="%2338BDF8" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" fill="none"><path d="M 40,150 L 40,60 L 85,110 L 130,60" /><path d="M 130,60 L 130,150 M 130,105 L 170,105 M 170,60 L 170,150" /></g></svg>`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <ToastContainer position="top-right" autoClose={2000} />
        {children}
      </body>
    </html>
  );
}