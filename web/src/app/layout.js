
import "./globals.css";
import Providers from "./Providers";

import { Righteous, Caveat } from 'next/font/google';

const righteous = Righteous({ subsets: ['latin'], weight: ['400'], variable: '--font-righteous' });
const figmaHand = Caveat({ subsets: ['latin'], weight: ['400'], variable: '--font-figmaHand' });

export const metadata = {
  title: "Talk with anyone",
  description: "created with Love",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${righteous.variable} ${figmaHand.variable} antialiased`}
      >
        <Providers>
          {children}
        </Providers>

      </body>
    </html>
  );
}
