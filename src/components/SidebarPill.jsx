import React from "react";

function SidebarPill({ name, icon, isActive = false }) {
  return (
    <div
      className={`flex items-center gap-3 rounded-md my-1 p-1.5 text-white  hover:bg-white/10 cursor-pointer px-2.5 ${
        isActive && "bg-white/10"
      }`}
    >
      {icon}
      <span className="font-semibold">{name}</span>
    </div>
  );
}

export default SidebarPill;
