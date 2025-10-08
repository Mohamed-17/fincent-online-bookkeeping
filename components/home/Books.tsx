"use client";
import React, { useEffect, useRef } from "react";
import Container from "../Container";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useTheme } from "@/context/Toggle";

function Books() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { setTheme } = useTheme();
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTheme("light");
      } else {
        setTheme("dark");
      }
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [setTheme]);
  return (
    <div className="bg-white relative ">
      <Container className="rounded-md bg-white box h-100 absolute -top-10  lg:left-90 ">
        <div className="p-5 flex flex-col   items-center md:items-start md:flex-row md:gap-5">
          <div className="flex-1 py-10 px-5 text-black space-y-2" ref={ref}>
            <p className="hidden lg:block text-xs">
              Human-assisted bookkeeping
            </p>
            <h1 className="text-6xl box font-light leading-tight ">
              Squeaky <span className="text-main-purple">clean</span> books
            </h1>
            <ul className="mt-6 space-y-6">
              <li className="flex gap-2">
                <ArrowRight size={30} className="text-main-purple" />
                <p className="text-gray-600">
                  Get up-to-date, balanced, and verified books by the 15th of
                  every month
                </p>
              </li>
              <li className="flex gap-2">
                <ArrowRight size={30} className="text-main-purple" />
                <p className="text-gray-600">
                  Reconcile books that haven’t been updated in ages with
                  <span>Catch-Up Bookkeeping</span>
                </p>
              </li>
              <li className="flex gap-2">
                <ArrowRight size={30} className="text-main-purple" />
                <p className="text-gray-600">
                  Use the default accrual-basis method or request that your
                  books be maintained on a cash-basis
                </p>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <Image
              src={"/feature.jpg"}
              alt="feature"
              width={500}
              height={500}
              className="object-contain"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Books;
