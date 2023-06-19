import { Inter } from "next/font/google";
import "@/styles/main.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kenzie Hub",
  description: "Painel de gerenciamento de tecnologia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
