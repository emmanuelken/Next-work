import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Header from "@/components/Header";
import styles from '@/styles/Layout.module.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Learning Next.js",
  description: "Create Next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav/>
        <div className={styles.container}>
            <main className={styles.main}>
              <Header/>
              {children}
            </main>
        </div>
      </body>
    </html>
  );
}
