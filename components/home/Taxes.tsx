import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import Container from "../Container";

function Taxes() {
  return (
    <div className="bg-white relative min-h-[10rem] md:min-h-[35rem] pt-10 ">
      <Container className="rounded-md bg-white box  ">
        <div className=" flex flex-col   items-center md:items-start md:flex-row md:gap-5">
          <div className="flex-1 py-10 px-5 text-black space-y-2 box">
            <p className="hidden lg:block text-xs">Zero stress taxes</p>
            <h1 className="text-6xl box font-light leading-tight ">
              Stay <span className="text-main-purple">two steps ahead </span> of
              the IRS
            </h1>
            <ul className="mt-6 space-y-6">
              <li className="flex gap-2">
                <ArrowRight size={30} className="text-main-purple" />
                <p className="text-gray-600">
                  Receive year-round support to file both your business and
                  personal taxes
                </p>
              </li>
              <li className="flex gap-2">
                <ArrowRight size={30} className="text-main-purple" />
                <p className="text-gray-600">
                  Outsource every step of the tax filing process for your your
                  S-Corp, LLC, or any other type of business entity
                </p>
              </li>
              <li className="flex gap-2">
                <ArrowRight size={30} className="text-main-purple" />
                <p className="text-gray-600">
                  Get a professional to prepare, review, and verify your forms
                  before you sign it
                </p>
              </li>
            </ul>
          </div>
          <div className="flex-1 box">
            <Image
              src={"/feature3.jpg"}
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

export default Taxes;
