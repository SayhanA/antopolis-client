import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Poppins } from "next/font/google";
import { ToastContainer } from "react-toastify";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Restaurent | Modern Restaurant Ordering App",
  description:
    "Discover delicious meals, browse menus, and place orders with ease. Built with Next.js for speed and simplicity.",
  openGraph: {
    title: "Restaurent | Modern Restaurant Ordering App",
    description:
      "Discover delicious meals, browse menus, and place orders with ease. Built with Next.js for speed and simplicity.",
    url: "https://antopolis-restro.netlify.app/",
    type: "website",
    images: [
      {
        url: "https://antopolis-restro.netlify.app/restaurne-hero.png",
        width: 1200,
        height: 630,
        alt: "Modern Restaurant App Preview",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <ToastContainer />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
