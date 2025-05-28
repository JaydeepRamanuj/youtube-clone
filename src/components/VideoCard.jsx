import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

function VideoCard({
  videoId,
  channelId,
  thumbnailURL,
  videoThumbnailURL,
  title,
  channelName,
  runtime,
  views,
  postedTime,
}) {
  const navigate = useNavigate();
  return (
    <Link to={`/watch?v=${videoId}`} state={{ channelId }} className="grow">
      <div className="min-w-full mx-auto sm:w-[330px] max-w-[400px] h-full  p-2 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 shadow-md transition-all hover:shadow-lg cursor-pointer group">
        <div className="relative overflow-hidden rounded-lg">
          <img
            className="w-full h-auto object-cover rounded-lg brightness-75 group-hover:brightness-100 transition-all duration-300"
            src={videoThumbnailURL}
            alt=""
          />
          <span className="absolute bottom-1 right-1 bg-black/70 text-white text-[11px] font-semibold px-1.5 py-0.5 rounded">
            {runtime}
          </span>
        </div>

        <div className="mt-3 flex items-start gap-3">
          <img
            className="rounded-full w-8 h-8 object-cover"
            src={thumbnailURL}
            alt=""
          />

          <div className="flex-1">
            <div className="text-white text-sm font-medium leading-snug line-clamp-2">
              {title}
            </div>
            <div
              className="text-slate-400 hover:text-slate-300 text-xs mt-0.5 cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                navigate(`/channel/${channelId}`);
              }}
            >
              {channelName}
            </div>
            <div className="text-slate-500 text-xs flex items-center gap-1 mt-0.5">
              <span>{views} views</span>
              <span className="text-slate-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="currentColor"
                  className="bi bi-dot"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                </svg>
              </span>
              <span>{postedTime}</span>
            </div>
          </div>

          <span className="mt-1 text-white/70 hover:text-white transition-colors">
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
          </span>
        </div>
      </div>
    </Link>
  );
}

export default VideoCard;
