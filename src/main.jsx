import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ProviderWrapper from "./providers/ProviderWrapper.jsx";

createRoot(document.getElementById("root")).render(
  <ProviderWrapper>
    <StrictMode>
      <App />
    </StrictMode>
  </ProviderWrapper>
);
