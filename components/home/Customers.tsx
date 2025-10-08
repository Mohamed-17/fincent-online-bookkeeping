"use client";
import React, { useEffect, useState } from "react";
import Container from "../Container";
import { customers } from "@/data";
import Image from "next/image";
import { Circle, Star } from "lucide-react";
import FadeInSection from "../ComponentFade";
import { useTheme } from "@/context/Toggle";

function Customers() {
  const [current, SetCurrent] = useState(0);
  const { theme } = useTheme();
  useEffect(() => {
    const interval = setInterval(() => {
      SetCurrent((prev: number) => (prev < 2 ? prev + 1 : 0));
    }, 3000);
    return () => clearInterval(interval);
  }, [current]);
  return (
    <Container className="px-5 md:px-15 ">
      <div className="text-white mt-20  px-2">
        <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-5 w-full">
          <div className="relative md:flex  w-[100%]  min-h-[250px]">
            {customers?.map((customer, index) => (
              <div
                key={index}
                className={`absolute md:relative inset-0 flex flex-col items-center text-center gap-5 transition-opacity duration-500 ${
                  current !== index
                    ? "opacity-0 pointer-events-none md:opacity-100"
                    : "opacity-100"
                }`}
              >
                <FadeInSection>
                  <div className="flex-shrink-0 w-full text-center flex justify-center">
                    {customer.image && (
                      <Image
                        src={customer.image}
                        alt={customer.name}
                        width={200}
                        height={200}
                        className="rounded-full w-16 h-16 object-cover"
                      />
                    )}
                  </div>
                </FadeInSection>
                <FadeInSection>
                  <div className="flex flex-col gap-2 w-full">
                    <div className="flex items-center justify-center gap-1">
                      {Array.from({ length: customer.stars }).map((_, i) => (
                        <Star
                          width={18}
                          key={i}
                          fill="#ffb800"
                          className="text-[#ffb800]"
                        />
                      ))}
                    </div>

                    <h5
                      className={`${
                        theme === "light" ? "text-black" : "text-white"
                      }`}
                    >
                      {customer.advice}
                    </h5>
                    <p
                      className={`text-sm flex items-center gap-2 justify-center ${
                        theme === "dark" ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      <span>{customer.name}</span>
                      <span className="text-xs">•</span>
                      <span>{customer.job}</span>
                    </p>
                  </div>
                </FadeInSection>
              </div>
            ))}
          </div>

          <div className="flex md:hidden items-center gap-2 w-full justify-center">
            {Array.from({ length: 3 }).map((_, index) => (
              <Circle
                size={13}
                key={index}
                fill={`${current === index && "#c6c4cf"}`}
                className={`${
                  current === index && "text-white"
                } cursor-pointer`}
                onClick={() => SetCurrent(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Customers;
