import React from "react";
import Container from "../Container";
import Social from "../Social";
import Logo from "../Logo";
import { ChevronDown, Circle } from "lucide-react";
import FooterCard from "./FooterCard";

function Footer() {
  return (
    <div className="text-white bg-main-bg w-full">
      <Container>
        <div className="grid grid-cols-4 px-3 md:px-0">
          <div className="col-span-4 md:col-span-3 px-3 md:px-0 grid grid-cols-3 space-y-2 mt-20 pt-10">
            <div className="col-span-3 md:col-span-1 space-y-10">
              <div className="space-y-5">
                <h5 className="text-[10px] uppercase tracking-wide flex items-center gap-2 text-gray-300">
                  <Circle size={8} /> Features
                </h5>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>Headsup</li>
                  <li>Timeline</li>
                  <li>Pay</li>
                  <li>Get paid</li>
                  <li>Financials</li>
                  <li>Files</li>
                  <li>Fincent Intelligence</li>
                </ul>
              </div>
              <div className="space-y-5">
                <h5 className="text-[10px] uppercase tracking-wide flex items-center gap-3 text-gray-300">
                  <Circle size={8} /> Platform
                </h5>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>Product Overview</li>
                  <li>Product Tour</li>
                  <li>Pricing</li>
                  <li>Security</li>
                  <li>Download iOS App</li>
                </ul>
              </div>
              <div className="col-span-3 md:col-span-1 space-y-10">
                <div className="space-y-5">
                  <h5 className="text-[10px] uppercase tracking-wide flex items-center gap-3 text-gray-300">
                    <Circle size={8} /> Resources
                  </h5>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>Blog</li>
                    <li>Glossary</li>
                    <li>IRS Forms</li>
                    <li>How-to Guides</li>
                    <li>1099 Tax Calculator</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-span-3 md:col-span-1 space-y-10">
              <div className="space-y-5">
                <h5 className="text-[10px] uppercase tracking-wide flex items-center gap-3 text-gray-300">
                  <Circle size={8} /> Company
                </h5>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>We’re Hiring!</li>
                  <li>Support</li>
                </ul>
              </div>
              <div className="space-y-5">
                <h5 className="text-[10px] uppercase tracking-wide flex items-center gap-3 text-gray-300">
                  <Circle size={8} /> Services
                </h5>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>Catchup Bookkeeping</li>
                  <li>Monthly Bookkeeping</li>
                  <li>Tax Prep & Filing</li>
                  <li>AP / AR Assistance</li>
                </ul>
              </div>
              <div className="space-y-5">
                <h5 className="text-[10px] uppercase tracking-wide flex items-center gap-3 text-gray-300">
                  <Circle size={8} /> Customer Stories
                </h5>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>Aura Finance</li>
                  <li>Burrst</li>
                  <li>Smarter Swipe</li>
                  <li>Black Nymph Art</li>
                  <li>Unified It</li>
                  <li>PhysioCare Rehab and Wellness</li>
                  <li>Sequence Partner</li>
                  <li>Tango</li>
                  <li>Blue Earth Healing</li>
                  <li>Metropolis Tours</li>
                  <li>Dyno Creative</li>
                </ul>
              </div>
            </div>
            <div className="col-span-3 md:col-span-1 space-y-10">
              <div className="space-y-5">
                <h5 className="text-[10px] uppercase tracking-wide flex items-center gap-3 text-gray-300">
                  <Circle size={8} /> Fincent Vs Others
                </h5>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>Pilot</li>
                  <li>Bench</li>
                  <li>Xendoo</li>
                  <li>1800 Accountant</li>
                  <li>Less Accounting</li>
                  <li>Wave</li>
                </ul>
              </div>
              <div className="space-y-5">
                <h5 className="text-[10px] uppercase tracking-wide flex items-center gap-3 text-gray-300">
                  <Circle size={8} /> Industries
                </h5>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>Bookkeeping for Real Estate</li>
                  <li>Bookkeeping For Restaurants</li>
                  <li>Bookkeeping for Law firms</li>
                  <li>Bookkeeping For Construction</li>
                  <li>Bookkeeping For Startups</li>
                  <li>Bookkeeping For Interior Design Firms</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-4 md:col-span-1 order-1">
            <div className="py-10 px-3 w-full flex flex-col items-center md:items-end md:justify-end justify-center">
              <Social />
              <div className="mt-10 space-y-4">
                <p className="text-xl">support@fincent.com</p>
                <div className="text-sm text-gray-400 space-y-1">
                  <p>Fincent Inc.</p>
                  <p>38350 Fremont Blvd, #203</p>
                  <p>Fremont CA 94536</p>
                </div>
                <Logo />
              </div>
            </div>
          </div>
        </div>

        <FooterCard />
      </Container>
    </div>
  );
}

export default Footer;
