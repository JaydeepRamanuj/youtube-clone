import React, { useContext, useEffect, useState } from "react";
import Feed from "../components/Feed";
import { categories } from "../utils/Constants";
import TrendingPill from "../components/TrendingPill";
import { getHomeFeed } from "../services/ApiServices";
import FeedSkeleton from "../components/FeedSkeleton";
import ToolContext from "../contexts/ToolContext";

function HomePage() {
  const [videosList, setVideosList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { setToolVal } = useContext(ToolContext);
  async function getVideos() {
    setIsLoading(true);
    try {
      const videos = await getHomeFeed();
      setVideosList(videos || []);
    } catch (err) {
      console.error("Error fetching videos:", err);
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    setToolVal((prev) => ({
      ...prev,
      sidebarCollapse: false,
    }));
    getVideos();
  }, []);
  return (
    <>
      <div className="trending-topics ml-4 md:ml-0 flex overflow-auto scrollbar-hide">
        {categories.map((category, index) => (
          <TrendingPill
            key={index}
            name={category}
            isActive={index === 0 && true}
          />
        ))}
      </div>
      {isLoading ? <FeedSkeleton /> : <Feed videosList={videosList} />}
    </>
  );
}

export default HomePage;
