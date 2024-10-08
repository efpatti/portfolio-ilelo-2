import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

// Configurando a fonte Open Sans
const font = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={font.className}>
        <Navbar />
        <div className="flex justify-center items-center justify-items-center">
          <div className="w-1/12">
            <Sidebar />
          </div>
          <main className="w-11/12">{children}</main>
        </div>
      </body>
    </html>
  );
}
