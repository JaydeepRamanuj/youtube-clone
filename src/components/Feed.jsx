import TrendingPill from "./TrendingPill";
import VideoCard from "./VideoCard";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import TimeAgo from "./TimeAgo";
import { formatViews, getRandomNumber } from "../utils/utils";
function Feed({ videosList, avatarURL = "" }) {
  return (
    <>
      <div className="mt-8 flex flex-1 flex-wrap justify-center gap-2 gap-y-2">
        {videosList.map((video, index) => (
          <VideoCard
            key={index}
            videoId={video.id.videoId}
            channelId={video.snippet.channelId}
            title={video.snippet.title || ""}
            channelName={video.snippet.channelTitle || ""}
            views={formatViews(getRandomNumber(1000, 1000000))}
            runtime={`${getRandomNumber(1, 8)}:${getRandomNumber(1, 60)}`}
            postedTime={
              <TimeAgo publishTime={video.snippet.publishTime} /> ||
              "5 months ago"
            }
            videoThumbnailURL={video.snippet.thumbnails.medium?.url}
            thumbnailURL={video.snippet.thumbnails.medium?.url}
          />
        ))}
      </div>
    </>
  );
}

export default Feed;
