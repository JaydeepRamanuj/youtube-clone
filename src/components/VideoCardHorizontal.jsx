import React from "react";
import { Link, useNavigate } from "react-router-dom";

function VideoCardHorizontal({
  isInSearchResult = false,
  videoId,
  channelId,
  thumbnailURL,
  videoThumbnailURL,
  title,
  channelName,
  runtime,
  views,
  postedTime,
  showAvatar = true,
}) {
  const navigate = useNavigate();
  return (
    <Link
      to={`/watch?v=${videoId}`}
      state={{ channelId }}
      className="cursor-pointer"
    >
      <div
        className={`max-h-[250px] ${
          isInSearchResult ? "md:max-w-[70%]" : "md:max-w-[450px]"
        } md:mx-auto flex flex-col  md:flex-row gap-3 p-2 rounded-lg transition-all hover:bg-white/10 group cursor-pointer`}
      >
        <div className="relative min-w-[40%] md:max-w-[40%] aspect-video">
          <img
            src={videoThumbnailURL}
            alt={title}
            className="w-full h-full object-cover rounded-md brightness-75 group-hover:brightness-100 transition-all"
          />
          <span className="absolute bottom-1 right-1 bg-black/70 text-white text-xs font-semibold px-1.5 py-0.5 rounded">
            {runtime}
          </span>
        </div>

        <div className="flex flex-1 justify-between items-start mt-1">
          {showAvatar && (
            <img
              src={thumbnailURL}
              alt={channelName}
              className="rounded-full w-8 h-8 mt-1"
            />
          )}

          <div className="flex flex-col ml-3 mr-auto text-white gap-1">
            <div className="font-medium leading-snug line-clamp-2">{title}</div>

            <div
              onClick={(e) => {
                e.preventDefault();
                navigate(`/channel/${channelId}`);
              }}
              className="text-sm text-gray-400 hover:text-gray-300 transition-colors cursor-pointer"
            >
              {channelName}
            </div>

            <div className="flex items-center text-sm text-gray-400 gap-1">
              <span>{views} views</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-dot"
                viewBox="0 0 16 16"
              >
                <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
              </svg>
              <span>{postedTime}</span>
            </div>
          </div>

          <button className="p-1 text-white hover:text-gray-300 mt-1.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              className="bi bi-three-dots-vertical"
              viewBox="0 0 16 16"
            >
              <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
            </svg>
          </button>
        </div>
      </div>
    </Link>
  );
}

export default VideoCardHorizontal;
