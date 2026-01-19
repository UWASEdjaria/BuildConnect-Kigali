import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";


export const metadata: Metadata = {
  title: "BuildConnect Kigali | Find Trusted Construction Technicians",
  description: "The #1 platform in Rwanda to find verified electricians, plumbers, and masons for your construction projects in Kigali.",
  keywords: ["Kigali", "Construction", "Rwanda", "Plumber", "Electrician", "Fundi", "Technician"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className=""
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
