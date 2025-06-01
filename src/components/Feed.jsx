import TrendingPill from "./TrendingPill";
import VideoCard from "./VideoCard";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import TimeAgo from "./TimeAgo";
import {
  formatViews,
  formatYouTubeDuration,
  getRandomNumber,
} from "../utils/utils";
function Feed({ videosList, avatarURL = "" }) {
  // console.log(videosList);
  return (
    <>
      <div className="mt-8 flex flex-1 flex-wrap justify-center gap-3.5 gap-y-4 p-3">
        {videosList.map((video, index) => (
          <VideoCard
            key={index}
            videoId={video.id}
            channelId={video.snippet?.channelId}
            videoCategoryId={video.snippet?.categoryId}
            title={video.snippet?.title}
            channelName={video.snippet?.channelTitle}
            views={formatViews(video.statistics?.viewCount)}
            runtime={formatYouTubeDuration(video.contentDetails?.duration)}
            postedTime={<TimeAgo publishTime={video.snippet?.publishedAt} />}
            videoThumbnailURL={video.snippet.thumbnails?.medium?.url}
            thumbnailURL={video.snippet.thumbnails.medium?.url}
          />
        ))}
      </div>
    </>
  );
}

export default Feed;
