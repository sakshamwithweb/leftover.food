import { Commissioner } from "next/font/google";
import "./globals.css";

const commissioner = Commissioner({
  variable: "--font-commissioner",
  subsets: ["latin"],
});

export const metadata = {
  title: "Leftover.Food",
  description: "Turn leftovers into tasty meal 😋",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${commissioner.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
