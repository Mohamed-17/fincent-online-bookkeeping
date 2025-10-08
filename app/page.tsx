import Customers from "@/components/home/Customers";
import Hero from "@/components/home/Hero";
import React from "react";

function HomePage() {
  return (
    <div className={`bg-main-bg`}>
      <Hero />
      <Customers />
    </div>
  );
}

export default HomePage;
