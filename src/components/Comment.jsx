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
    <div className="flex items-start text-base mt-2 text-gray-400">
      <div className="size-8 mr-2.5 mt-2">
        <img
          className="min-w-8 min-h-8 rounded-full object-cover mr-2"
          src={commenterAvatar}
          alt=""
        />
      </div>
      <div>
        <h5 className="flex">
          <span>{commenterName}</span> <TimeAgo publishTime={publishTime} />
        </h5>
        {/* <pre className="text-wrap">{comment}</pre> */}
        <div class="font-sans break-words overflow-hidden">
          <p class="whitespace-pre-wrap">{comment}</p>
        </div>
        <div className="flex items-center">
          <span
            className="cursor-pointer"
            onClick={() => {
              setLike(!like);
              like
                ? setLikeAmount(likeAmount - 1)
                : setLikeAmount(likeAmount + 1);
            }}
          >
            {like ? <RiThumbUpFill /> : <RiThumbUpLine />}
          </span>

          <span className="mx-2">{formatViews(likeAmount)}</span>

          <span
            className="cursor-pointer"
            onClick={() => {
              setDisLike(!dislike);
            }}
          >
            {dislike ? <RiThumbDownFill /> : <RiThumbDownLine />}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Comment;
