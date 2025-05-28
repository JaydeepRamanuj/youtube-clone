import React from "react";
import { useNavigate } from "react-router-dom";

function TrendingPill({ name, isActive = true }) {
  const navigate = useNavigate();
  return (
    <div
      className={`mt-3 px-4 py-1.5 mx-1 rounded-full font-medium text-sm cursor-pointer transition-all duration-200 
        ${
          isActive
            ? "bg-yellow-300 text-black shadow-sm"
            : "bg-white/10 text-white hover:bg-white/20"
        }`}
      onClick={() => {
        navigate(`/results?q=${name}`);
      }}
    >
      {name}
    </div>
  );
}

export default TrendingPill;
