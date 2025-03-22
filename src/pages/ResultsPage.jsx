import React, { useContext, useEffect, useState } from "react";
import { getSearchResults } from "../services/ApiServices";
import SearchResultVideoList from "../components/SearchResultVideoList";
import VideoCardHorizontal from "../components/VideoCardHorizontal";
import ToolContext from "../contexts/toolContext";
import { useSearchParams } from "react-router-dom";
import { formatViews, getRandomNumber } from "../utils/utils";
import TimeAgo from "../components/TimeAgo";

function ResultsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [videoList, setVideoList] = useState([]);
  const { toolVal, setToolVal } = useContext(ToolContext);
  const [searchParams] = useSearchParams();
  const key = searchParams.get("q");
  async function getData() {
    setIsLoading(true);
    const result = await getSearchResults(key);
    if (result.length != 0) {
      setVideoList(result);
      setIsLoading(false);
    }
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="mt-4 flex flex-col gap-3 px-6">
      {videoList &&
        videoList.map((video, index) => (
          <VideoCardHorizontal
            key={index}
            channelId={video.snippet.channelId}
            channelName={video.snippet.channelTitle}
            thumbnailURL={video.snippet.thumbnails.medium.url}
            title={video.snippet.title}
            videoId={video.id.videoId}
            videoThumbnailURL={video.snippet.thumbnails.medium.url}
            views={formatViews(getRandomNumber(1000, 1000000))}
            runtime={`${getRandomNumber(1, 8)}:${getRandomNumber(1, 60)}`}
            postedTime={
              <TimeAgo publishTime={video.snippet.publishTime} /> ||
              "5 months ago"
            }
          />
        ))}
    </div>
  );
}

export default ResultsPage;
