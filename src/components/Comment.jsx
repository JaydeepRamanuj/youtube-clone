import React, { useState } from "react";
import TimeAgo from "./TimeAgo";
import { formatViews } from "../utils/utils";
import { IoMdThumbsDown, IoMdThumbsUp } from "react-icons/io";
import {
  RiThumbDownFill,
  RiThumbDownLine,
  RiThumbUpFill,
  RiThumbUpLine,
} from "react-icons/ri";

function Comment({
  commenterAvatar,
  commenterName,
  comment,
  likeCount,
  publishTime,
}) {
  const [like, setLike] = useState(false);
  const [dislike, setDisLike] = useState(false);
  const [likeAmount, setLikeAmount] = useState(likeCount);
  return (
    <div className="flex items-start text-sm md:text-base text-gray-300 mt-4">
      {/* Avatar */}
      <div className="w-10 h-10 mr-3 shrink-0">
        <img
          className="w-10 h-10 rounded-full object-cover"
          src={commenterAvatar || "/avatar.png"}
          alt={commenterName}
        />
      </div>

      {/* Comment Content */}
      <div className="flex-1">
        {/* Name + Timestamp */}
        <div className="flex items-center gap-2 font-semibold text-white">
          <span>{commenterName}</span>
          <span className="text-gray-400 font-normal text-sm">
            <TimeAgo publishTime={publishTime} />
          </span>
        </div>

        {/* Comment Text */}
        <div className="mt-1 whitespace-pre-wrap break-words text-gray-300 leading-relaxed">
          {comment}
        </div>

        {/* Reactions */}
        <div className="flex items-center gap-3 mt-2 text-gray-400">
          {/* Like Button */}
          <button
            className="flex items-center gap-1 hover:text-white transition-colors"
            onClick={() => {
              setLike(!like);
              like
                ? setLikeAmount(likeAmount - 1)
                : setLikeAmount(likeAmount + 1);
            }}
          >
            {like ? (
              <RiThumbUpFill className="text-lg" />
            ) : (
              <RiThumbUpLine className="text-lg" />
            )}
            <span className="text-sm">{formatViews(likeAmount)}</span>
          </button>

          {/* Dislike Button */}
          <button
            className="hover:text-white transition-colors"
            onClick={() => {
              setDisLike(!dislike);
            }}
          >
            {dislike ? (
              <RiThumbDownFill className="text-lg" />
            ) : (
              <RiThumbDownLine className="text-lg" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Comment;
