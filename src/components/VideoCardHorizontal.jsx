import React from "react";
import { Link, useNavigate } from "react-router-dom";

function VideoCardHorizontal({
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
    <Link to={`/watch?v=${videoId}`} state={{ channelId }}>
      <div
        className={`md:min-w-[250px] p-1.5 cursor-pointer rounded-md transition-all hover:bg-white/10 group flex gap-2 `}
      >
        <div className="relative min-w-[40%] max-w-[40%]">
          <img
            className="rounded-md brightness-75 transition-all group-hover:brightness-100 min-w-full min-h-full object-cover"
            src={videoThumbnailURL}
            alt=""
          />
          <span className="absolute p-0.5 text-xs rounded font-bold  bg-black/60 text-white bottom-1 right-1">
            {runtime}
          </span>
        </div>
        <div className="mt-2 flex justify-between items-start">
          {showAvatar && (
            <div className="mt-0.5">
              <img
                className="rounded-full min-w-8 min-h-8 max-h-8 max-w-8 "
                src={thumbnailURL}
                alt=""
              />
            </div>
          )}
          <div className="text-start ml-2 mr-auto">
            <div className="text-white text-wrap">{title}</div>
            <div
              className="text-gray-400 text-sm hover:text-slate-500 mt-1.5"
              onClick={(e) => {
                e.preventDefault();
                navigate(`/channel/${channelId}`);
              }}
            >
              {channelName}
            </div>

            <div className="mt-1.5 text-gray-400 flex justify-start items-center text-sm ">
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
          <span className="min-w-4 mt-1.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              className="bi bi-three-dots-vertical text-white"
              viewBox="0 0 16 16"
            >
              <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}

export default VideoCardHorizontal;
