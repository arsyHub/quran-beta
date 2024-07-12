import { Inter } from "next/font/google";
import "./globals.css";
import SurahMenu from "@/components/SurahMenu";
import Image from "next/image";
import NavSide from "@/components/NavSide";
import "animate.css";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen bg-[#ffffff]">
          {/* left side */}
          <NavSide />

          <div className="flex w-full ">
            <nav className=" flex gap-5 items-center w-full h-[60px] fixed top-0 bg-[#ffffff]  z-50">
              <div className="sm:-left-[70px] bg-[#01957c00] flex items-center justify-center ml-2 absolute">
                <Image src="/img/quran.png" alt="Logo" width={35} height={35} />
                <div className="animate__animated animate__bounce">
                  <h1 className="text-[#00957D] font-bold ml-1 italic animate__animated animate__bounce">
                    Quran App
                  </h1>
                </div>
              </div>
            </nav>

            {/* left side menu */}
            <SurahMenu />
            <div className="w-full">
              {/* main content */}
              <div className="bg-[#EEF2F3] w-full">
                <div className="bg-[#f7f7f7] pt-20 rounded-xl">{children}</div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
