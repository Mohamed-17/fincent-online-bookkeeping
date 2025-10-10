import React from "react";
import Container from "../Container";
import Image from "next/image";
import Card from "./Card";

function SearchSection() {
  return (
    <div className="mt-30">
      <Container>
        <div className="space-y-2 text-2xl smd:text-5xl px-5 md:px-0 font-semibold">
          <h4 className="text-black">The perfect solution does exist.</h4>
          <h4 className="text-gray-600">It&apos;s staring you in the face.</h4>
        </div>
        <div className="mt-10 grid grid-cols-3 gap-4  w-full min-h-100 text-white px-3 md:px-0">
          <div className="col-span-3  h-full  md:col-span-2 flex flex-col bg-bg-second-purple rounded-xl ">
            <div className="flex-1 py-8 px-8 space-y-3">
              <h4 className="text-3xl">Powerful Search</h4>
              <p className="w-100">
                Find invoices, transactions, and subscriptions quickly with
                Fincent&apos;s built-in search engine.
              </p>
            </div>
            <div className="flex-1 px-8 flex justify-end">
              <Image
                src={"/search.svg"}
                alt="search"
                width={500}
                height={500}
              />
            </div>
          </div>
          <div className="col-span-3 md:col-span-1 bg-bg-second-purple rounded-xl">
            <div className="flex-1 py-8 px-8 space-y-3">
              <h4 className="text-4xl">Powered by real bookkeepers</h4>
              <p className="w-full">
                Your dedicated bookkeeping team with 100+ hours of experience is
                always just a DM away.
              </p>
            </div>
            <div className="flex-1 px-8 flex justify-end">
              <Image
                src={"/bookkeepers.svg"}
                alt="search"
                width={500}
                height={500}
                className="object-contain w-60"
              />
            </div>
          </div>
        </div>
        <div className="mt-5 w-full flex gap-4 px-3 md:px-0 flex-col md:flex-row items-center justify-between">
          <Card
            title="Never out of sight"
            desc="Forward email invoices or upload images of bills and see them magically appear in your books."
            image="/sight.svg"
            className="justify-center"
          />
          <Card
            title="Your financial chat history"
            desc="Track average spends, lifetime costs, and total earnings for every vendor, subscription, and customer."
            image="/financial.svg"
          />
          <Card
            title="Plugs and plays"
            desc="Start afresh or pick up where you left things off by importing your QuickBooks files into Fincent."
            image="/plugs.svg"
            className="justify-center"
          />
        </div>
      </Container>
    </div>
  );
}

export default SearchSection;
