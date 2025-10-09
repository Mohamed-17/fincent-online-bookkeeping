import React from "react";
import Container from "../Container";
import Image from "next/image";

function Trusted() {
  return (
    <Container>
      <div className="w-full">
        <div className="text-2xl md:text-4xl lg:text-6xl text-black  text-center">
          Trusted by <span className="text-main-purple">legendary</span>{" "}
          business owners
        </div>
        <div className="flex flex-col lg:flex-row gap-3 pt-20 justify-center items-center lg:justify-start lg:items-start">
          <div className="flex-1 px-5 lg:px-0">
            <Image
              src={"/sophia.jpg"}
              alt="sophia_image"
              width={700}
              height={700}
              loading="lazy"
              className="w-120 object-contain"
            />
          </div>
          <div className="flex-2  px-5 lg:px-0">
            <div className="space-y-10">
              <p className="text-black">
                “Fincent has saved my business over $25k in just a few months.
                I&apos;ve now onboarded three of my companies to the platform —
                the team does a great job of categorizing expenses and the
                dashboard makes it easy to review everything.”
              </p>
              <h4 className="text-main-purple text-xl font-semibold">
                Sophia Amoruso
              </h4>
              <div className="flex  justify-between flex-wrap lg:flex-nowrap gap-5">
                <Image
                  src={"/founder.svg"}
                  alt="founder"
                  width={100}
                  height={100}
                />
                <Image
                  src={"/girlboss.svg"}
                  alt="girlboss"
                  width={100}
                  height={100}
                />
                <Image
                  src={"/nasty-gal.svg"}
                  alt="nasty-gal"
                  width={100}
                  height={100}
                />
                <Image
                  src={"/business-class.svg"}
                  alt="business-class"
                  width={100}
                  height={100}
                />
                <Image
                  src={"/trust-fund.svg"}
                  alt="trust-fund."
                  width={100}
                  height={100}
                />
              </div>
              <ul className="space-y-5 list-outside list-disc ml-6 marker:text-main-purple marker:text-xl text-black">
                <li>Built 3 multi-million dollar companies</li>
                <li>15+ years of experience as a business owner</li>
                <li>
                  Featured on America&apos;s Richest Self-Made Women List, 2016
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Trusted;
