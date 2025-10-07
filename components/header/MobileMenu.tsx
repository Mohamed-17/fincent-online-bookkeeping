"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import Link from "next/link";
import { X } from "lucide-react";

function MobileMenu() {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  return (
    <div className="lg:hidden ">
      <div>
        {" "}
        <Button
          onClick={() => setToggleMenu((prev) => !prev)}
          className="bg-black rounded-md hover:bg-black cursor-pointer"
        >
          {toggleMenu ? (
            <span className="flex gap-1 items-center">
              Close
              <X />
            </span>
          ) : (
            "Menu"
          )}
        </Button>
      </div>
      {toggleMenu && (
        <AnimatePresence mode="wait">
          <motion.div
            layout
            initial={{ opacity: 0, x: -1 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -1 }}
            transition={{
              duration: 0.3,
              ease: easeInOut,
              layout: { duration: 0.25 },
            }}
            className="flex flex-col fixed p-5 min-screen  top-17 space-y-5 left-0 w-full h-[calc(100vh-68px)] bg-main-bg overflow-y-scroll"
          >
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger
                  className="text-3xl text-white no-underline items-center"
                  iconClass="w-7 h-7 font-normal"
                >
                  Platform
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-5 text-text-light ">
                    <li>Headsup</li>
                    <li>Timeline</li>
                    <li>Get Paid</li>
                    <li>Pay</li>
                    <li>Directory</li>
                    <li>Financials</li>
                    <li>Files</li>
                    <li>Fincent Intelligence</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger
                  className="text-3xl text-white no-underline items-center"
                  iconClass="w-7 h-7 font-normal"
                >
                  Resources
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-5 text-text-light ">
                    <li>Fincent Blog</li>
                    <li>Glossary</li>
                    <li>IRS Forms</li>
                    <li>How-to-guides</li>
                    <li>1099 Tax Calculator</li>
                    <li>Net Sales Calculator</li>
                    <li>Good Growth Rate Calculators</li>
                    <li>SBA PPP Loan Calculator</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger
                  className="text-3xl text-white no-underline items-center"
                  iconClass="w-7 h-7 font-normal"
                >
                  Case Studies
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-5 text-text-light ">
                    <li>Aura Finance</li>
                    <li>Physio</li>
                    <li>Burrst</li>
                    <li>Sequence Partner</li>
                    <li>Smarter Swipe</li>
                    <li>Tango</li>
                    <li>Black Nymph Art</li>
                    <li>Blue Earth Healing</li>
                    <li>Unified IT</li>
                    <li>Metropolis Tours</li>
                    <li>Dyno Creative</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger
                  className="text-3xl text-white no-underline items-center"
                  iconClass="w-7 h-7 font-normal"
                >
                  Services
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-5 text-text-light ">
                    <li>Catch Up Bookkeeping</li>
                    <li>Monthly Bookkeeping</li>
                    <li>Tax Prep & Filing</li>
                    <li>AP / AR Assistance</li>
                    <li>Small Business Bookkeeping</li>
                    <li>Fractional CFO Services</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Link href={"/pricing"} className="text-3xl text-white ">
              Pricing
            </Link>
            <div className=" flex  items-end justify-center gap-2 w-full flex-1">
              <div className="flex-1">
                <Button className=" bg-bg-second-purple text-white w-full">
                  Watch a Demo
                </Button>
              </div>
              <div className="flex-1">
                <Button className=" bg-white text-black w-full">
                  Book a demo
                </Button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}

export default MobileMenu;
