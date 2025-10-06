import React from "react";

interface Props {
  name: string;
  desc: string;
  icon?: React.ReactElement;
}
function FeatureItem({ name, desc, icon }: Props) {
  return (
    <div className="flex flex-col gap-1  w-80  rounded-md cursor-pointer hover:bg-bg-second-purple p-3 hoverEffecr">
      <div className="flex items-center gap-2 text-text-light">
        {icon && icon}
        <span className="font-bold text-white">{name}</span>
      </div>
      <div className="text-xs text-text-light/70">{desc}</div>
    </div>
  );
}

export default FeatureItem;
