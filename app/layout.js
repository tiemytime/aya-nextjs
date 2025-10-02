import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs';
import Header from "@/components/header";
import { dark } from '@clerk/themes';
import { Marcellus } from 'next/font/google';

const marcellus = Marcellus({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-marcellus',
});

export const metadata = {
  title: "Aya-The prayer World",
  description: "A modern web application built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider 
    appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en">
        <body className={`antialiased ${marcellus.variable}`}>
          {/*header*/ }
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
        {/*footer*/ }
        </body>
      </html>
    </ClerkProvider>
  );
}
