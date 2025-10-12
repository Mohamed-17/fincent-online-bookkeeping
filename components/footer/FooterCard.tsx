"use client";
import { ChevronDown, ChevronUp, Circle } from "lucide-react";
import React, { useState } from "react";

function FooterCard() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="w-full flex justify-center mt-5">
        {isOpen ? (
          <ChevronUp
            size={40}
            className="text-gray-300 font-light"
            onClick={() => setIsOpen(false)}
          />
        ) : (
          <ChevronDown
            size={40}
            className="text-gray-300 font-light"
            onClick={() => setIsOpen(true)}
          />
        )}
      </div>
      {isOpen && (
        <div className="w-full bg-bg-second-purple min-h-[1340px] md:h-[1340px] rounded-md mt-10">
          <div className="p-10 grid grid-cols-3 ">
            <div className="col-span-3 md:col-span-1 space-y-10 pt-4">
              <div className="space-y-5">
                <h5 className="text-[10px] uppercase tracking-wide flex items-center gap-3 text-gray-300">
                  <Circle size={8} /> Calculators
                </h5>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>Self Employment Tax Calculator</li>
                  <li>Capital Gains Tax Calculator</li>
                  <li>SBA PPP Loan Calculator</li>
                  <li>Net Income Calculator</li>
                  <li>Startup Burn Rate Calculator</li>
                  <li>Average Fixed Cost Calculator</li>
                  <li>Gross Margin Calculator</li>
                  <li>Debt to Equity Ratio Calculator</li>
                  <li>Current Ratio Calculator</li>
                  <li>Quarterly Tax Calculator</li>
                </ul>
              </div>
              <div className="space-y-5">
                <h5 className="text-[10px] uppercase tracking-wide flex items-center gap-3 text-gray-300">
                  <Circle size={8} /> Small Businesses
                </h5>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>Starting A Business</li>
                  <li>How to Grow Your Small Business</li>
                  <li>Track Small Business Expenses</li>
                  <li>Measure Small Business Growth</li>
                  <li>Bookkeeping Basics for Small Business</li>
                  <li>File and Pay Small Business Taxes</li>
                  <li>Payment Methods for Small Businesses</li>
                  <li>Paying Yourself As A Small Business Owner</li>
                  <li>Get Your Small Business Ready for Tax Season</li>
                </ul>
              </div>
              <div className="space-y-5">
                <h5 className="text-[10px] uppercase tracking-wide flex items-center gap-3 text-gray-300">
                  <Circle size={8} /> Taxes And Scams
                </h5>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>Dirty Dozen Tax Scams</li>
                  <li>Tax Transcript Email Scam</li>
                  <li>Tax Evasion</li>
                  <li>Pink Tax</li>
                  <li>Tax Levies</li>
                  <li>Trump Tax Plan</li>
                  <li>Tax Amendments</li>
                  <li>Tax Disputes</li>
                  <li>Tax Return Rejection Codes</li>
                  <li>Tax Data Identity Protection</li>
                  <li>IRS Scams</li>
                  <li>Tax Refund Scam</li>
                </ul>
              </div>
              <div className="space-y-5">
                <h5 className="text-[10px] uppercase tracking-wide flex items-center gap-3 text-gray-300">
                  <Circle size={8} /> Rules
                </h5>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>IRA Rules on Withdrawals</li>
                  <li>Inherited IRA Rules</li>
                  <li>IRA Contributions</li>
                  <li>Rollovers IRAs</li>
                  <li>Roth IRA vs. Traditional IRA</li>
                </ul>
              </div>
            </div>
            <div className="col-span-3 md:col-span-1 space-y-10 pt-4">
              <div className="space-y-5">
                <h5 className="text-[10px] uppercase tracking-wide flex items-center gap-3 text-gray-300">
                  <Circle size={8} /> Trends
                </h5>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>Fractional CFO</li>
                  <li>Tax Nexus</li>
                  <li>Tax-Loss Harvesting</li>
                  <li>IRS Crypto Tax Rules</li>
                </ul>
              </div>
              <div className="space-y-5">
                <h5 className="text-[10px] uppercase tracking-wide flex items-center gap-3 text-gray-300">
                  <Circle size={8} /> Tax Acts
                </h5>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>Federal Unemployment Tax Act (FUTA)</li>
                  <li>State Unemployment Tax Act</li>
                  <li>Federal Insurance Contributions Act (FICA)</li>
                  <li>Section 232 of the Trade Expansion Act</li>
                  <li>Sarbanes-Oxley Act</li>
                </ul>
              </div>
              <div className="space-y-5">
                <h5 className="text-[10px] uppercase tracking-wide flex items-center gap-3 text-gray-300">
                  <Circle size={8} /> Investing
                </h5>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>Retirement Planning</li>
                  <li>Net 965 Tax Liability</li>
                  <li>Investing in an IRA CD</li>
                  <li>Roth 401k</li>
                  <li>Business Emergency Fund</li>
                </ul>
              </div>
              <div className="space-y-5">
                <h5 className="text-[10px] uppercase tracking-wide flex items-center gap-3 text-gray-300">
                  <Circle size={8} /> How to Guides
                </h5>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>Qualify Earned Income Tax Credit</li>
                  <li>Renew Your IRS PTIN Annually</li>
                  <li>Manage Alternative Minimum Tax</li>
                  <li>Change Accounting Methods Using IRS Form 3115</li>
                  <li>How To Live Tax-Free</li>
                </ul>
              </div>
              <div className="space-y-5">
                <h5 className="text-[10px] uppercase tracking-wide flex items-center gap-3 text-gray-300">
                  <Circle size={8} /> Individual Tax Forms
                </h5>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>Form 1040</li>
                  <li>Schedule A (Form 1040)</li>
                  <li>Form 1040-ES</li>
                  <li>Form 1099-INT</li>
                  <li>Schedule D (Form 1040)</li>
                  <li>Schedule 2 Tax Form</li>
                  <li>Form 540</li>
                  <li>Form 4868</li>
                </ul>
              </div>
              <div className="space-y-5">
                <h5 className="text-[10px] uppercase tracking-wide flex items-center gap-3 text-gray-300">
                  <Circle size={8} />
                  Corporate and Business Entity Forms
                </h5>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>Form 3115</li>
                  <li>Form 56</li>
                  <li>Form 3115</li>
                </ul>
              </div>
            </div>
            <div className="col-span-3 md:col-span-1 space-y-10 pt-4">
              <div className="space-y-5">
                <h5 className="text-[10px] uppercase tracking-wide flex items-center gap-3 text-gray-300">
                  <Circle size={8} /> Employment and Payroll Forms
                </h5>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>Form W-4r</li>
                  <li>Form W-2 </li>
                </ul>
              </div>
              <div className="space-y-5">
                <h5 className="text-[10px] uppercase tracking-wide flex items-center gap-3 text-gray-300">
                  <Circle size={8} /> Small Business Tax Forms
                </h5>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>Schedule C (Form 1040)</li>
                  <li>Form 1099</li>
                  <li>Form 720</li>
                  <li>Form 4562</li>
                  <li>Form 5472</li>
                </ul>
              </div>
              <div className="space-y-5">
                <h5 className="text-[10px] uppercase tracking-wide flex items-center gap-3 text-gray-300">
                  <Circle size={8} /> Rental Income and Capital Gains
                </h5>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>Form 1098</li>
                  <li>Form 4797</li>
                </ul>
              </div>
              <div className="space-y-5">
                <h5 className="text-[10px] uppercase tracking-wide flex items-center gap-3 text-gray-300">
                  <Circle size={8} /> Estate and Gift Tax Forms
                </h5>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>Form 709</li>
                  <li>Form 1041</li>
                </ul>
              </div>
              <div className="space-y-5">
                <h5 className="text-[10px] uppercase tracking-wide flex items-center gap-3 text-gray-300">
                  <Circle size={8} /> Partnerships
                </h5>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>Schedule F Tax Form</li>
                </ul>
              </div>
              <div className="space-y-5">
                <h5 className="text-[10px] uppercase tracking-wide flex items-center gap-3 text-gray-300">
                  <Circle size={8} />
                  Excise Tax and Refund Forms
                </h5>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>Form 8849</li>
                </ul>
              </div>
              <div className="space-y-5">
                <h5 className="text-[10px] uppercase tracking-wide flex items-center gap-3 text-gray-300">
                  <Circle size={8} />
                  Late Filing and Extensions
                </h5>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>Form 966 Late Filing</li>
                  <li>Form 7004</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default FooterCard;
