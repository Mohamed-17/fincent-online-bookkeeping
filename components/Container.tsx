import { cn } from "@/lib/utils";
import React from "react";

function Container({
  children,
  clasName,
}: {
  children: React.ReactNode;
  clasName?: string;
}) {
  return <div className={cn("container", clasName)}>{children}</div>;
}

export default Container;
