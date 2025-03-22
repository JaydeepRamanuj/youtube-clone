import ToolProvider from "./ToolProvider";

function ProviderWrapper({ children }) {
  return <ToolProvider>{children}</ToolProvider>;
}

export default ProviderWrapper;
