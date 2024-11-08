import localFont from "next/font/local";
import "./globals.css";
import Topbar from "./components/topbar";
import Intro from "./components/intro";
import AbouteMe from "./components/abouteMe";
import Portfolio from "./components/portfolio";
import Works from "./components/works";
import Contact from "./components/contact";
import menu from "./components/menu";
import TopSide from "./components/topSide";
import './components/style.css'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="">
          <TopSide />
          <div className="sections">
            <Intro />
            <AbouteMe />
            <Portfolio />
            <Works />
            <Contact />
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
