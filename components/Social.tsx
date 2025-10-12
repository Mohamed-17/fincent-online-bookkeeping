import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import React from "react";

function Social() {
  return (
    <div className="flex items-center gap-3">
      <div className="text-black  p-2 bg-white rounded-full">
        <Facebook size={20} />
      </div>
      <div className="text-black  p-2 bg-white rounded-full">
        <Linkedin size={20} />
      </div>
      <div className="text-black  p-2 bg-white rounded-full">
        <Instagram size={20} />
      </div>
      <div className="text-black  p-2 bg-white rounded-full">
        <Youtube size={20} />
      </div>
      <div className="text-black  p-2 bg-white rounded-full">
        <Twitter size={20} />
      </div>
    </div>
  );
}

export default Social;
