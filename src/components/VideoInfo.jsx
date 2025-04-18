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
      <div>
        <h1 className="text-xl font-bold line-clamp-2 text-white">{title}</h1>
        <div className="flex mt-3 flex-wrap flex-start gap-4">
          <div className="flex items-center mr-6">
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
          </div>
          <div className="flex items-center gap-3">
            <button
              className={`px-4 py-1.5 w-fit rounded-full bg-white text-center text-black hover:bg-gray-200"
            ${
              joined
                ? "bg-white/20 text-white hover:bg-white/30 "
                : "text-black hover:bg-gray-200"
            }`}
              onClick={() => {
                setJoined(!joined);
              }}
            >
              {joined ? "Joined" : "Join"}
            </button>
            <button
              className={`px-4 py-1.5 w-fit rounded-full bg-white text-center  ${
                subscribed
                  ? "bg-white/20 text-white hover:bg-white/30 "
                  : "text-black hover:bg-gray-200"
              } `}
              onClick={() => {
                setSubscribed(!subscribed);
              }}
            >
              {subscribed ? "Subscribed" : "Subscribe"}
            </button>
          </div>
          <div className="flex items-center ml-auto gap-3 flex-wrap">
            <button className="px-4 py-1.5 w-fit rounded-full bg-white/15 text-center text-white hover:bg-white/25 flex items-center">
              <span
                className="flex items-center gap-1.5"
                onClick={() => {
                  setLike(!like);
                  like
                    ? setLikeAmount(likeAmount - 1)
                    : setLikeAmount(likeAmount + 1);
                }}
              >
                {/* <IoMdThumbsUp /> */}
                {like ? <RiThumbUpFill /> : <RiThumbUpLine />}
                {formatViews(likeAmount)}
              </span>
              <RxDividerVertical />
              <span
                onClick={() => {
                  setdisLike(!dislike);
                }}
              >
                {/* <IoMdThumbsDown /> */}
                {dislike ? <RiThumbDownFill /> : <RiThumbDownLine />}
              </span>
            </button>
            <button className="px-4 py-1.5 w-fit rounded-full bg-white/15 text-center text-white hover:bg-white/25 flex items-center gap-1.5">
              <IoIosShareAlt />
              <span>Share</span>
            </button>
            <button className="px-4 py-1.5 w-fit rounded-full bg-white/15 text-center text-white hover:bg-white/25 flex items-center gap-1.5">
              <RiDownloadLine />
              <span>Download</span>
            </button>
            <button className="p-3 w-fit rounded-full bg-white/15 text-center text-white hover:bg-white/25 flex items-center justify-center">
              <IoEllipsisHorizontalSharp />
            </button>
          </div>
        </div>
        <div className=" mt-3 bg-white/15 rounded-lg p-2">
          <h5 className="flex gap-2">
            <span>{formatViews(views)} views</span>
            <TimeAgo publishTime={uploadedOn} />
          </h5>
          <pre
            className={`font-normal text-gray-400 transition-all overflow-hidden font-sans  ${
              loadMore ? "h-fit" : "h-[20px]"
            }`}
          >
            {description}
          </pre>
          <span
            onClick={() => {
              setLoadMore(!loadMore);
            }}
          >
            {loadMore ? "show less" : "...more"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default VideoInfo;
