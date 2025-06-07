import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CartModal } from "@/components/cart-modal";

export const metadata: Metadata = {
  title: "DevNutri",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`relative antialiased`}
      >
        <Header/>
        {children}
        <CartModal />
        <Footer/>
      </body>
    </html>
  );
}
