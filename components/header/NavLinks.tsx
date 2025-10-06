"use client";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import FeatureItem from "../FeatureItem";
import { MENU_CONTENT } from "@/data";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../Container";

const navItems = [
  { label: "Platform", key: "platform" },
  { label: "Resources", key: "resources" },
  { label: "Case Studies", key: "case" },
  { label: "Services", key: "services" },
];

export default function NavLinks() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const menuData = openMenu
    ? MENU_CONTENT[openMenu as keyof typeof MENU_CONTENT]
    : null;
  return (
    <>
      <nav className="hidden lg:block">
        <ul className="flex items-center gap-5">
          {navItems.map(({ label, key }) => (
            <li
              key={key}
              onMouseEnter={() => setOpenMenu(key)}
              className={`text-sm text-bg-purple cursor-pointer flex items-center gap-1 py-1 px-2 rounded-2xl hover:bg-black hoverEffect  ${
                key === openMenu && "bg-black"
              }`}
            >
              {label} <ChevronDown size={13} />
            </li>
          ))}
          <Link href="/pricing" className="text-sm text-bg-purple">
            Pricing
          </Link>
        </ul>
      </nav>
      <div
        className="absolute left-0 top-full w-full"
        onMouseLeave={() => setOpenMenu(null)}
      >
        <AnimatePresence mode="wait">
          {menuData && (
            <motion.div
              key={openMenu}
              layout
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
                layout: { duration: 0.25 },
              }}
              className="relative z-40 bg-main-bg border-t border-white/10 backdrop-blur-md shadow-lg overflow-hidden"
            >
              <div className="absolute inset-0  backdrop-blur-md -z-10 rounded-b-xl"></div>

              <Container>
                <div className="px-5 py-8">
                  <h6 className="uppercase text-[10px] mb-5 text-text-light/70 font-semibold">
                    {menuData.title}
                  </h6>

                  <div className="grid grid-cols-3 gap-10">
                    <div className="col-span-2 flex gap-10 items-center">
                      {menuData.columns.map((col, i) => (
                        <div key={i} className="flex flex-col gap-4">
                          {col.map((item, idx) =>
                            "section" in item ? (
                              <h6
                                key={idx}
                                className="uppercase text-[10px]  text-text-light/70 font-semibold"
                              >
                                {item.section}
                              </h6>
                            ) : (
                              <FeatureItem
                                key={idx}
                                name={item.name}
                                desc={item.desc}
                                icon={
                                  "icon" in item && item.icon ? (
                                    <item.icon size={17} />
                                  ) : undefined
                                }
                              />
                            )
                          )}
                        </div>
                      ))}
                    </div>
                    <div className="col-span-1 border-l-1 border-l-text-light/60">
                      <div className="p-5">
                        <div className="w-full h-60 bg-bg-second-purple mt-auto rounded-md flex flex-col p-3">
                          <div className="flex-1 ml-auto p-3 ">
                            <ArrowUpRight
                              size={10}
                              className="text-black bg-white w-12 h-12 p-1 rounded-full"
                            />
                          </div>
                          <div className="flex-1 relative ">
                            <div className="absolute bottom-1 left-1 ">
                              <span className=" font-semibold text-3xl text-white  w-full h-full">
                                {openMenu === "platform" && "Product Tour"}
                                {openMenu === "resources" &&
                                  "Tools & Calculators"}
                                {openMenu === "case" && "Fincent's mobile app"}
                                {openMenu === "services" && "Pay"}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Container>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
