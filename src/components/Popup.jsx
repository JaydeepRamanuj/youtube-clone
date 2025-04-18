import React, { useContext, useEffect, useRef } from "react";
import ToolContext from "../contexts/ToolContext";

function Popup() {
  const { toolVal, setToolVal } = useContext(ToolContext);
  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setToolVal((prev) => ({ ...prev, showPopup: false }));
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setToolVal((prev) => ({ ...prev, showPopup: false }));
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
  });
  return (
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 shadow-xl bg-stone-800 rounded-lg p-6 text-white/80 backdrop-blur-sm max-w-[600px] max-h-[80%] overflow-auto scrollable-element"
      ref={popupRef}
    >
      {toolVal.popupContent}
    </div>
  );
}

export default Popup;
