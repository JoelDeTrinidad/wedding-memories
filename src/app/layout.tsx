import type { Metadata } from "next";
import { Great_Vibes } from "next/font/google";
import "./globals.css";


const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Momentos de boda de Anjelica y Joel",
  description: "Familia y amigos gracias por celebrar con nosotros y ser parte de nuestra historia. Gracias por compartirnos tus fotos para que podamos revivir el momento desde tu teléfono",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${greatVibes.variable}`}>
        {children}
      </body>
    </html>
  );
}
