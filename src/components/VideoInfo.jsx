import React, { useEffect, useState } from "react";
import { formatViews } from "../utils/utils";
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa";
import { RxDividerVertical } from "react-icons/rx";
import { HiHandThumbUp, HiMiniHandThumbDown } from "react-icons/hi2";
import { IoIosShareAlt, IoMdThumbsDown, IoMdThumbsUp } from "react-icons/io";
import {
  RiDownloadLine,
  RiThumbDownFill,
  RiThumbDownLine,
  RiThumbUpFill,
  RiThumbUpLine,
} from "react-icons/ri";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import { formatDate } from "date-fns";
import TimeAgo from "./TimeAgo";
import { useNavigate } from "react-router-dom";

function VideoInfo({
  videoId,
  channelId,
  title,
  channelName,
  likeCount,
  views,
  uploadedOn,
  description,
  creatorAvatar,
  subscriberCount,
}) {
  const [loadMore, setLoadMore] = useState(false);
  const [like, setLike] = useState(false);
  const [dislike, setdisLike] = useState(false);
  const [likeAmount, setLikeAmount] = useState(likeCount);
  const [subscribed, setSubscribed] = useState(false);
  const [joined, setJoined] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {}, [
    videoId,
    channelId,
    title,
    channelName,
    likeCount,
    views,
    uploadedOn,
    description,
    creatorAvatar,
    subscriberCount,
  ]);

  return (
    <div className="mt-5 items-center text-base font-semibold text-white">
      <h1 className="text-xl font-bold line-clamp-2 text-white">{title}</h1>
      <div className="flex mt-3 flex-wrap flex-start gap-4">
        {/* <div className="flex items-center mr-6">
          <span>
            <img
              className="size-10 object-cover rounded-full mr-4"
              src={creatorAvatar}
              alt=""
            />
          </span>
          <div className="flex flex-col">
            <span
              className="cursor-pointer text-white"
              onClick={(e) => {
                e.preventDefault();
                navigate(`/channel/${channelId}`);
              }}
            >
              {channelName}
            </span>
            <span className="text-sm text-gray-400">
              {formatViews(subscriberCount)} subscribers
            </span>
          </div>
        </div> */}
        <div className="flex flex-wrap gap-4 mt-4 items-center">
          {/* Avatar + Channel Info */}
          <div className="flex items-center gap-4 mr-6">
            <img
              src={creatorAvatar}
              alt=""
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="flex flex-col">
              <span
                className="cursor-pointer hover:underline"
                onClick={(e) => {
                  e.preventDefault();
                  navigate(`/channel/${channelId}`);
                }}
              >
                {channelName}
              </span>
              <span className="text-sm text-gray-400">
                {formatViews(subscriberCount)} subscribers
              </span>
            </div>
          </div>

          {/* Subscribe + Join Buttons */}
          <div className="flex items-center gap-3">
            <button
              className={`px-4 py-1.5 rounded-full text-sm transition-colors ${
                joined
                  ? "bg-white/20 text-white hover:bg-white/30"
                  : "bg-white text-black hover:bg-gray-200"
              }`}
              onClick={() => setJoined(!joined)}
            >
              {joined ? "Joined" : "Join"}
            </button>

            <button
              className={`px-4 py-1.5 rounded-full text-sm transition-colors ${
                subscribed
                  ? "bg-white/20 text-white hover:bg-white/30"
                  : "bg-white text-black hover:bg-gray-200"
              }`}
              onClick={() => setSubscribed(!subscribed)}
            >
              {subscribed ? "Subscribed" : "Subscribe"}
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 ml-auto">
            {/* Like/Dislike */}
            <button className="px-4 py-1.5 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center gap-2">
              <span
                className="flex items-center gap-1"
                onClick={() => {
                  setLike(!like);
                  like
                    ? setLikeAmount(likeAmount - 1)
                    : setLikeAmount(likeAmount + 1);
                }}
              >
                {like ? <RiThumbUpFill /> : <RiThumbUpLine />}
                {formatViews(likeAmount)}
              </span>
              <span onClick={() => setdisLike(!dislike)} className="ml-2">
                {dislike ? <RiThumbDownFill /> : <RiThumbDownLine />}
              </span>
            </button>

            {/* Share */}
            <button className="px-4 py-1.5 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center gap-2">
              <IoIosShareAlt />
              <span>Share</span>
            </button>

            {/* Download */}
            <button className="px-4 py-1.5 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center gap-2">
              <RiDownloadLine />
              <span>Download</span>
            </button>

            {/* More */}
            <button className="p-3 rounded-full bg-white/15 hover:bg-white/25 text-white">
              <IoEllipsisHorizontalSharp />
            </button>
          </div>
        </div>
      </div>
      <div className="mt-4 bg-white/10 rounded-lg p-3 text-gray-300 font-normal text-sm font-sans ">
        <div className="flex gap-2 mb-1 text-white">
          <span>{formatViews(views)} views</span>
          <TimeAgo publishTime={uploadedOn} />
        </div>
        <pre
          className={`transition-all overflow-hidden font-sans ${
            loadMore ? "max-h-fit" : "max-h-[24px]"
          }`}
        >
          {description}
        </pre>
        <span
          className="text-sm text-gray-300 cursor-pointer"
          onClick={() => setLoadMore(!loadMore)}
        >
          {loadMore ? "show less" : "...more"}
        </span>
      </div>
    </div>
  );
}

export default VideoInfo;
