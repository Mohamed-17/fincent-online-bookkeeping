import React from "react";
import Container from "../Container";
import Logo from "../Logo";
import NavLinks from "./NavLinks";
import Login from "./Login";
import { Button } from "../ui/button";
import MobileMenu from "./MobileMenu";
export default function Header() {
  return (
    <header className="relative z-50 bg-main-bg shadow-sm">
      <Container>
        <div className="h-[70px] md:h-[80px] lg:h-[92px] flex items-center">
          <div className="flex justify-between items-center px-5 w-full">
            <Logo />
            <NavLinks />
            <div className="hidden lg:flex items-center gap-5">
              <Login />
              <div>
                {" "}
                <Button className="bg-white py-6 px-5 cursor-pointer font-semibold text-black hover:bg-main-purple hover:text-white hoverEffect">
                  Book a demo
                </Button>
              </div>
            </div>
            <MobileMenu />
          </div>
        </div>
      </Container>
    </header>
  );
}
