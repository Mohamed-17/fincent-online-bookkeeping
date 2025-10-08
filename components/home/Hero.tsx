"use client";
import React, { useContext } from "react";
import Container from "../Container";
import { Sparkles } from "lucide-react";
import ProjectButton from "../ProjectButton";
import Image from "next/image";
import { ThemeContext, useTheme } from "@/context/Toggle";
function Hero() {
  const { theme } = useTheme();

  return (
    <main
      className={`min-h-screen flex flex-col  items-center justify-center ${theme} `}
    >
      <Container className="flex flex-col gap-5 lg:gap-0 items-center px-5">
        <div className="bg-black text-white rounded-br-3xl lg:rounded-br-none rounded-l-3xl rounded-bl-3xl rounded-t-3xl px-5 py-10 w-full  space-y-8">
          <h1 className="text-3xl md:text-7xl lg:text-[116px] box font-bold leading-tight ">
            Better bookkeeping
          </h1>
          <p className="text-gray-300 max-w-2xl box">
            Meet Fincent — The only solution that combines beautiful software,
            human bookkeepers, and obsessive customer support. Now you can grow
            your business, keep costs down, and still have time for life.
          </p>
          <div className="flex items-center gap-4">
            <ProjectButton context="Book a demo" />
            <p className="flex items-center gap-2 text-sm text-gray-400">
              <Sparkles size={14} className="text-main-purple" />
              <span className="text-xs md:text-sm">
                10 businesses booked this week
              </span>
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-5 md:gap-0  lg:flex-row w-full overflow-hidden ">
          <div
            className={`flex-1 bg-main-bg rounded-3xl w-full  flex items-center justify-center lg:pt-10 lg:px-10 h-full ${theme}`}
          >
            <Image
              src="/hero-home.jpg"
              width={600}
              height={400}
              priority
              alt="hero-image"
              className="md:rounded-xl rounded-3xl shadow-lg  w-full  md:object-cover"
            />
          </div>
          <div className="flex-1 rounded-xl md:rounded-none  bg-black text-white  space-y-4 flex flex-col ">
            <div className="py-15 px-10 space-y-10 ">
              <h2 className="text-4xl md:text-6xl box">
                Leave the old ways behind
              </h2>
              <p className="flex flex-col gap-2 box">
                <span className="text-3xl md:text-6xl">240+</span>{" "}
                <span className="text-text-light">
                  hours freed up every year
                </span>
              </p>
              <p className="flex flex-col gap-2 box">
                <span className="text-3xl md:text-6xl">24x7</span>{" "}
                <span className="text-text-light">
                  access to financial reports and insights
                </span>
              </p>
              <p className="flex flex-col gap-2 box">
                <span className="text-3xl md:text-6xl">$11k+</span>{" "}
                <span className="text-text-light">
                  saved annually on bookkeeping and taxes
                </span>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}

export default Hero;
