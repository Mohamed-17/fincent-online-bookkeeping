import Image from "next/image";
import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <div>
      <Link href={"/"}>
        <Image
          src={"/finance-white.svg"}
          width={120}
          height={120}
          alt="finance-logo"
        />
      </Link>
    </div>
  );
}

export default Logo;
