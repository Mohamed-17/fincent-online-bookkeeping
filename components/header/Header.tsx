"use client";
import React from "react";
import Container from "../Container";
import Logo from "../Logo";
import NavLinks from "./NavLinks";
import Login from "./Login";
import MobileMenu from "./MobileMenu";
import ProjectButton from "../ProjectButton";
import { useTheme } from "@/context/Toggle";
export default function Header() {
  const { theme } = useTheme();
  return (
    <header className={`${theme} z-50 sticky top-0 left-0 `}>
      <Container className={`${theme === "light" && "dark md:rounded-b-lg"}`}>
        <div className="h-[70px] md:h-[80px] relative w-full lg:h-[92px] flex items-center  ">
          <div className="flex justify-between items-center px-5 w-full">
            <Logo />
            <NavLinks />
            <div className="hidden lg:flex items-center gap-5">
              <Login />
              <div>
                {" "}
                <ProjectButton context="Book a demo" />
              </div>
            </div>
            <MobileMenu />
          </div>
        </div>
      </Container>
    </header>
  );
}
