"use client";
import { useTheme } from "@/context/Toggle";
import Container from "../Container";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";

function MoneyRoll() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { setTheme } = useTheme();

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
    <div className="relative bg-white  h-40 md:h-140 pt-20" ref={ref}>
      <Container className="rounded-md bg-main-bg box ">
        <div className="p-5 flex flex-col   items-center md:items-start md:flex-row-reverse md:gap-5 ">
          <div className="flex-1 py-10 px-5 text-black space-y-2 box">
            <p className="hidden lg:block text-xs text-text-light">
              Human-assisted bookkeeping
            </p>
            <h1 className="text-6xl box font-light leading-tight text-white ">
              Squeaky <span className="text-main-purple">clean</span> books
            </h1>
            <ul className="mt-6 space-y-6">
              <li className="flex gap-2">
                <ArrowRight size={30} className="text-main-purple" />
                <p className="text-white">
                  Get up-to-date, balanced, and verified books by the 15th of
                  every month
                </p>
              </li>
              <li className="flex gap-2">
                <ArrowRight size={30} className="text-main-purple" />
                <p className="text-white">
                  Reconcile books that haven’t been updated in ages with
                  <span>Catch-Up Bookkeeping</span>
                </p>
              </li>
              <li className="flex gap-2">
                <ArrowRight size={30} className="text-main-purple" />
                <p className="text-white">
                  Use the default accrual-basis method or request that your
                  books be maintained on a cash-basis
                </p>
              </li>
            </ul>
          </div>
          <div className="flex-1 box">
            <Image
              src={"/money.jpg"}
              alt="feature"
              width={500}
              height={500}
              className="object-contain rounded-md"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default MoneyRoll;
