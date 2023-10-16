import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

import { ToastContainer } from "react-toastify";  
import 'react-toastify/dist/ReactToastify.css';

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Meu Novo Pet 🐶😸",
  description: "Encontre seu melhor amigo: Adote um gato ou um cachorro!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={openSans.className}>
        <ToastContainer autoClose={1500} pauseOnFocusLoss={false} pauseOnHover={false} />
        {children}
      </body>
    </html>
  );
}
