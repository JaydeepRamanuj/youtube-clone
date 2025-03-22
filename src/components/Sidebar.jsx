import React, { useContext } from "react";
import SidebarPill from "./SidebarPill";
import { IoHome, IoPersonCircle, IoPersonCircleOutline } from "react-icons/io5";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import SidebarList from "./SidebarList";
import ToolContext from "../contexts/toolContext";
import {
  collapsedOptions,
  exploreOptions,
  MoreOptions,
  OtherOptions,
  primaryOptions,
  secondaryOptions,
} from "../utils/Constants";
import SidebarButton from "./SidebarButton";

function Sidebar() {
  const { toolVal } = useContext(ToolContext);
  return (
    <>
      <div
        className={`${
          toolVal.sidebarCollapse ? "min-w-[100px]" : "min-w-[230px]"
        } p-2 pb-4 overflow-y-auto scrollable-element max-w-[230px]`}
      >
        {toolVal.sidebarCollapse ? (
          <div className="text-white">
            {collapsedOptions.map((option, index) => (
              <SidebarButton
                key={index}
                name={option.name}
                icon={option.icon}
              />
            ))}
          </div>
        ) : (
          <div className="text-white text-start ">
            <SidebarList sidebarItems={primaryOptions} />
            <hr className="border-white/20 my-3" />
            <SidebarList sidebarItems={secondaryOptions} />
            <hr className="border-white/20 my-3" />
            <div className="px-2.5">
              <span>Sign in to like videos, comment, and subscribe.</span>
              <span className="mt-2 text-blue-600 w-fit flex items-center border px-2 py-1 rounded-full border-white/50">
                <IoPersonCircleOutline className="mr-1.5 size-5" /> Sign in
              </span>
            </div>
            <hr className="border-white/20 my-3" />
            <SidebarList sidebarItems={exploreOptions} title={"Explore"} />
            <hr className="border-white/20 my-3" />
            <SidebarList
              sidebarItems={MoreOptions}
              title={"More from YouTube"}
            />
            <hr className="border-white/20 my-3" />
            <SidebarList sidebarItems={OtherOptions} />
            <hr className="border-white/20 my-3" />
            <div className="mt-2 flex flex-wrap gap-1">
              <span className="w-fit text-sm font-semibold hover:text-blue-300 cursor-pointer hover:underline">
                About
              </span>
              <span className="w-fit text-sm font-semibold hover:text-blue-300 cursor-pointer hover:underline">
                Press
              </span>
              <span className="w-fit text-sm font-semibold hover:text-blue-300 cursor-pointer hover:underline">
                Copyright
              </span>
              <span className="w-fit text-sm font-semibold hover:text-blue-300 cursor-pointer hover:underline">
                Contact us
              </span>
              <span className="w-fit text-sm font-semibold hover:text-blue-300 cursor-pointer hover:underline">
                Creators
              </span>
              <span className="w-fit text-sm font-semibold hover:text-blue-300 cursor-pointer hover:underline">
                Advertise
              </span>
              <span className="w-fit text-sm font-semibold hover:text-blue-300 cursor-pointer hover:underline">
                Developers
              </span>
            </div>

            <div className="mt-3 flex flex-wrap gap-1">
              <span className="w-fit text-sm font-semibold hover:text-blue-300 cursor-pointer hover:underline">
                Terms
              </span>
              <span className="w-fit text-sm font-semibold hover:text-blue-300 cursor-pointer hover:underline">
                Privacy
              </span>
              <span className="w-fit text-sm font-semibold hover:text-blue-300 cursor-pointer hover:underline">
                Policy & Safety
              </span>
              <span className="w-fit text-sm font-semibold hover:text-blue-300 cursor-pointer hover:underline">
                How YouTube works
              </span>
              <span className="w-fit text-sm font-semibold hover:text-blue-300 cursor-pointer hover:underline">
                Test new features
              </span>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Sidebar;
