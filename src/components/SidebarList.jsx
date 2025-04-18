import React from "react";
import SidebarPill from "./SidebarPill";

function SidebarList({ sidebarItems, title = null }) {
  return (
    <>
      {title && <div>{title}</div>}
      <div className={`${title && "mt-2"}`}>
        {sidebarItems.map((item, index) => (
          <SidebarPill key={index} name={item.name} icon={item.icon} />
        ))}
      </div>
    </>
  );
}

export default SidebarList;
