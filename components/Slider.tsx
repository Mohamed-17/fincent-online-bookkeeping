"use client";
import React, { useEffect, useState } from "react";
import Container from "./Container";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { founders } from "@/data";
import FadeInSection from "./ComponentFade";

function Slider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev: number) => (prev < founders.length - 1 ? prev + 1 : 0));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="w-full mt-10 md:mt-20 min-h-[600px] md:min-h-[500px]">
        <Container className="h-full flex flex-col">
          <div className="relative flex w-full min-h-[550px] md:min-h-[450px]">
            {founders.map((founder, index) => (
              <div
                className={`absolute inset-0 px-5 md:px-0 w-full flex flex-col md:flex-row h-full justify-between gap-5 md:gap-10 transition-all duration-700 ease-in-out ${
                  current === index
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-8 pointer-events-none"
                }`}
                key={founder.name}
              >
                <FadeInSection>
                  <div className="flex-shrink-0 w-full md:w-auto h-auto  flex justify-center md:justify-start">
                    <Image
                      src={founder.image}
                      alt={founder.name}
                      width={300}
                      height={300}
                      className="w-48 h-48 md:w-70 md:h-72 rounded-md object-contain"
                    />
                  </div>
                </FadeInSection>

                <FadeInSection>
                  <div className="flex flex-col gap-6 md:gap-8 lg:gap-10 h-full text-black flex-1">
                    <div className="px-1">
                      <h3 className="text-lg md:text-2xl lg:text-3xl font-bold">
                        {founder.title}
                      </h3>
                    </div>

                    <div>
                      <p className="font-bold text-base md:text-lg lg:text-xl">
                        {founder.name}
                      </p>
                      <p className="text-gray-800 text-sm md:text-base">
                        {founder.position}
                      </p>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-4 lg:gap-8">
                      <div className="space-y-2">
                        <p className="text-main-purple text-2xl md:text-4xl lg:text-5xl font-bold">
                          {founder.score1}
                        </p>
                        <p className="text-sm md:text-base lg:text-lg">
                          {founder.task1}
                        </p>
                      </div>

                      <div className="space-y-2">
                        <p className="text-main-purple text-2xl md:text-4xl lg:text-5xl font-bold">
                          {founder.score2}
                        </p>
                        <p className="text-sm md:text-base lg:text-lg">
                          {founder.task2}
                        </p>
                      </div>

                      <div className="flex gap-3 md:gap-4 items-center">
                        <p className="text-sm md:text-base lg:text-xl whitespace-nowrap">
                          Read Case Study
                        </p>
                        <button
                          className="p-2 border border-black rounded-full cursor-pointer transition-colors hover:bg-black hover:text-white hover:border-white"
                          aria-label="Read case study"
                        >
                          <ArrowRight className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
                        </button>
                      </div>
                    </div>
                  </div>
                </FadeInSection>
              </div>
            ))}
          </div>
        </Container>
      </div>

      <div className="flex items-center gap-3 w-full justify-center my-5">
        {founders.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
              current === index
                ? "bg-main-purple"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </>
  );
}

export default Slider;
