import React, { useContext, useEffect, useRef } from "react";
import { IoPersonCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import ToolContext from "../contexts/ToolContext";
import { useBreakpoint } from "../custom-hooks/useBreakpoints";
import SidebarList from "./SidebarList";
import SidebarButton from "./SidebarButton";
import {
  collapsedOptions,
  exploreOptions,
  MoreOptions,
  OtherOptions,
  primaryOptions,
  secondaryOptions,
} from "../utils/Constants";
import { RxHamburgerMenu } from "react-icons/rx";

function Sidebar() {
  const { toolVal, setToolVal } = useContext(ToolContext);
  const isCollapsed = toolVal.sidebarCollapse;
  const isSidebarHidden = toolVal.isSidebarHidden;
  console.log("isCollapsed =>", isCollapsed);
  const breakpoint = useBreakpoint();
  const navigate = useNavigate();
  const ref = useRef(null);
  const isMobile = breakpoint < 992;

  useEffect(() => {}, [breakpoint]);

  return (
    <div
      ref={ref}
      className={`
        // ${isMobile ? "-left-full fixed" : "static"}
        ${isCollapsed ? "min-w-[100px]" : "min-w-[230px] left-0"}
        z-10 md:relative p-2
         pb-4 pt-4 overflow-y-auto scrollable-element
        max-w-[230px] bg-black/80 top-0 h-full backdrop-blur-md
      `}
    >
      {isCollapsed ? (
        <div className="text-white">
          {collapsedOptions.map((option, index) => (
            <SidebarButton key={index} name={option.name} icon={option.icon} />
          ))}
        </div>
      ) : (
        <div className="text-white text-start">
          <SidebarList sidebarItems={primaryOptions} />
          <hr className="border-white/20 my-3" />
          <SidebarList sidebarItems={secondaryOptions} />
          <hr className="border-white/20 my-3" />

          <div className="px-2.5">
            <p>Sign in to like videos, comment, and subscribe.</p>
            <button className="mt-2 text-blue-600 flex items-center border px-2 py-1 rounded-full border-white/50 hover:text-white hover:bg-blue-600 transition">
              <IoPersonCircleOutline className="mr-1.5 size-5" />
              Sign in
            </button>
          </div>
          <hr className="border-white/20 my-3" />

          <SidebarList sidebarItems={exploreOptions} title="Explore" />
          <hr className="border-white/20 my-3" />

          <SidebarList sidebarItems={MoreOptions} title="More from YouTube" />
          <hr className="border-white/20 my-3" />

          <SidebarList sidebarItems={OtherOptions} />
          <hr className="border-white/20 my-3" />

          <div className="mt-2 flex flex-wrap gap-1 text-sm font-semibold">
            {[
              "About",
              "Press",
              "Copyright",
              "Contact us",
              "Creators",
              "Advertise",
              "Developers",
            ].map((text, i) => (
              <span
                key={i}
                className="w-fit hover:text-blue-300 cursor-pointer hover:underline"
              >
                {text}
              </span>
            ))}
          </div>

          <div className="mt-3 flex flex-wrap gap-1 text-sm font-semibold">
            {[
              "Terms",
              "Privacy",
              "Policy & Safety",
              "How YouTube works",
              "Test new features",
            ].map((text, i) => (
              <span
                key={i}
                className="w-fit hover:text-blue-300 cursor-pointer hover:underline"
              >
                {text}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
