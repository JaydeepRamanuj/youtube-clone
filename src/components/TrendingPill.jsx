import React from "react";
import { useNavigate } from "react-router-dom";

function TrendingPill({ name, isActive = true }) {
  const navigate = useNavigate();
  return (
    <div
      className={`px-3 py-1 mx-1 w-fit rounded  text-center font-bold   cursor-pointer transition-all ${
        isActive
          ? "bg-white text-black"
          : "bg-white/10 hover:bg-white/20 text-white"
      }
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
