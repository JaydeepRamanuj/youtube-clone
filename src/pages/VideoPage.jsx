import React, { useContext, useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import VideoPlayer from "../components/VideoPlayer";
import VideoInfo from "../components/VideoInfo";
import ToolContext from "../contexts/ToolContext";
import {
  getChannelDetails,
  getSuggestedVideos,
  getVideoDetails,
} from "../services/ApiServices";
import VideoComments from "../components/VideoComments";
import { formatViews, getRandomNumber } from "../utils/utils";
import VideoCardHorizontal from "../components/VideoCardHorizontal";
import TimeAgo from "../components/TimeAgo";

function VideoPage() {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const location = useLocation();
  const channelId = location.state.channelId;
  const [videoDetails, setVideoDetails] = useState(null);
  const [channelDetails, setChannelDetails] = useState(null);
  const [suggestedVideosList, setSuggestedVideosList] = useState(null);
  const { toolVal, setToolVal } = useContext(ToolContext);
  const [isLoading, setIsLoading] = useState(true);
  async function getData() {
    setIsLoading(true);
    const videoResult = await getVideoDetails(videoId);
    const channelResult = await getChannelDetails(channelId);
    const suggestionResult = await getSuggestedVideos(videoId);
    if (
      videoResult.length != 0 &&
      channelResult.length != 0 &&
      suggestionResult.length != 0
    ) {
      console.log(suggestionResult);
      setVideoDetails(videoResult);
      setChannelDetails(channelResult);
      setSuggestedVideosList(suggestionResult);
      setIsLoading(false);
    }
  }
  useEffect(() => {
    setToolVal((prev) => ({
      ...prev,
      sidebarCollapse: true,
      absoluteSidebar: true,
    }));

    getData();
  }, [videoId, channelId]);
  return (
    <>
      {videoDetails && channelDetails && suggestedVideosList && (
        <div className="flex flex-col lg:flex-row mx-autotext-gray-300 text-3xl ">
          <div className="flex-1 px-3 w-full lg:max-w-[70%]">
            <VideoPlayer videoId={videoId} />
            <VideoInfo
              id={videoId}
              channelName={videoDetails.snippet.channelTitle}
              creatorAvatar={channelDetails.snippet.thumbnails.medium.url}
              likeCount={videoDetails.statistics.likeCount}
              subscriberCount={channelDetails.statistics.subscriberCount}
              uploadedOn={videoDetails.snippet.publishedAt}
              views={videoDetails.statistics.viewCount}
              title={videoDetails.snippet.title}
              description={videoDetails.snippet.description}
              channelId={channelId}
              videoId={videoId}
            />
            <VideoComments videoId={videoId} />
          </div>
          <div className="recommended-videos w-full mt-6 lg:mt-0 lg:max-w-[450px] text-base px-3">
            {suggestedVideosList &&
              suggestedVideosList.map((video, index) => (
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
                  showAvatar={false}
                />
              ))}
          </div>
        </div>
      )}
      ;
    </>
  );
}

export default VideoPage;
