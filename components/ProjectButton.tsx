import React from "react";
import { Button } from "./ui/button";

function ProjectButton({ context }: { context: string }) {
  return (
    <Button className="bg-white py-6 px-5 cursor-pointer font-semibold text-black hover:bg-main-purple hover:text-white hoverEffect rounded-[0.6rem]">
      {context}
    </Button>
  );
}

export default ProjectButton;
