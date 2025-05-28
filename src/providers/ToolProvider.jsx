import { useState } from "react";
import ToolContext from "../contexts/ToolContext";

function ToolProvider({ children }) {
  const [toolVal, setToolVal] = useState({
    sidebarCollapse: false,
    showPopup: false,
    popupContent: null,
    absoluteSidebar: false,
    searchKey: "",
    isSidebarHidden: true,
  });

  return (
    <ToolContext.Provider value={{ toolVal, setToolVal }}>
      {children}
    </ToolContext.Provider>
  );
}

export default ToolProvider;
