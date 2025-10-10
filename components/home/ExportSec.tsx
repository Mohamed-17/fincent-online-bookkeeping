import React from "react";
import Container from "../Container";
import Card from "./Card";
import Image from "next/image";

function ExportSec() {
  return (
    <Container className=" gap-5 grid grid-cols-3">
      <div className="col-span-3 md:col-span-1">
        <Card
          title="Vendors will love you"
          desc="Pay vendors through your connected bank accounts or credit cards right from within the app."
          image="/socials.svg"
          background="bg-white w-full md:w-full h-fit md:h-full"
        />
      </div>

      <div className="col-span-3 md:col-span-1">
        <Card
          title="Export ready reports"
          desc="Gather deep insights around your financial operations with readymade P&L statements, balance sheets, and cash flow reports."
          background="bg-white w-full md:w-full h-fit md:h-full"
        />
      </div>
      <div className="col-span-3 md:col-span-1">
        <Card
          image="/exports.svg"
          background="bg-white w-full md:w-full flex items-start justify-start h-fit md:h-full"
          imageStyle="w-75"
        />
      </div>
    </Container>
  );
}

export default ExportSec;
