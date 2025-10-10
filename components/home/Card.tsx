import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

function Card({
  image,
  title,
  desc,
  className,
  background,
  imageStyle,
}: {
  image?: string;
  title?: string;
  desc?: string;
  className?: string;
  background?: string;
  imageStyle?: string;
}) {
  return (
    <div
      className={cn(
        "w-full md:w-[32%]  h-100 flex flex-col gap-5 bg-bg-purple text-black rounded-xl overflow-hidden",
        background
      )}
    >
      <div className=" p-8 space-y-2">
        {title && <h1 className="text-2xl">{title}</h1>}
        {desc && <p className="text-sm">{desc}</p>}
      </div>
      {image && (
        <div className={cn("flex justify-end items-center", className)}>
          <Image
            src={image}
            alt="card-image"
            width={700}
            height={700}
            className={cn("w-50 h-50 object-contain", imageStyle)}
          />
        </div>
      )}
    </div>
  );
}

export default Card;
