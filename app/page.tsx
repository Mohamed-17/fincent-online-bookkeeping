"use client";
import Books from "@/components/home/Books";
import Customers from "@/components/home/Customers";
import Hero from "@/components/home/Hero";
import { useTheme } from "@/context/Toggle";
import React from "react";

export function HomePage() {
  const { theme } = useTheme();
  return (
    <div className={`${theme}`}>
      <Hero />
      <Customers />
      <div className="mt-5 w-full text-center text-text-light pb-20">
        Businesses, big and small, trust Fincent with their books
      </div>
      <Books />
    </div>
  );
}

export default HomePage;
