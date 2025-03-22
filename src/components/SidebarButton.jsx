import React from "react";

function SidebarButton({ name, icon, isActive = false }) {
  return (
    <div
      className={`size-20 flex flex-col justify-center items-center gap-2 rounded-md my-1 p-1.5 text-white  hover:bg-white/10 cursor-pointer px-2.5 ${
        isActive && "bg-white/10"
      }`}
    >
      {icon}
      <span className="text-xs">{name}</span>
    </div>
  );
}

export default SidebarButton;
