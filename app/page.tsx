"use client";
import Books from "@/components/home/Books";
import Customers from "@/components/home/Customers";
import Hero from "@/components/home/Hero";
import MoneyRoll from "@/components/home/MoneyRoll";
import Taxes from "@/components/home/Taxes";
import Trusted from "@/components/home/Trusted";
import { useTheme } from "@/context/Toggle";
import React, { useEffect, useRef } from "react";

function Page() {
  const { theme, setTheme } = useTheme();
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTheme("light");
      }
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [setTheme]);
  return (
    <div className={`${theme}`}>
      <Hero />
      <Customers />
      <div className="mt-5 w-full text-center text-text-light pb-40">
        Businesses, big and small, trust Fincent with their books
      </div>
      <div ref={ref} className="bg-white">
        <Books />
        <MoneyRoll />
        <Taxes />
        <Trusted />
      </div>
    </div>
  );
}

export default Page;
