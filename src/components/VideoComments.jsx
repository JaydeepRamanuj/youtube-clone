import React, { useEffect, useState } from "react";
import { getVideoComments } from "../services/ApiServices";
import { formatViews } from "../utils/utils";
import Comment from "./Comment";

function VideoComments({ videoId }) {
  const [isLoading, setIsLoading] = useState(true);
  const [commentData, setCommentData] = useState(null);
  async function getData() {
    setIsLoading(true);
    const response = await getVideoComments(videoId);
    if (response.length != 0) {
      setCommentData(response);
      setIsLoading(false);
    }
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="mt-3 w-full">
      {commentData && (
        <h1 className="text-lg font-bold">
          <span>{formatViews(commentData.length)}</span> <span> Comments</span>
        </h1>
      )}

      {commentData &&
        commentData.map((comment, index) => (
          <Comment
            key={index}
            comment={comment.snippet.topLevelComment.snippet.textDisplay}
            commenterAvatar={
              comment.snippet.topLevelComment.snippet.authorProfileImageUrl
            }
            commenterName={
              comment.snippet.topLevelComment.snippet.authorDisplayName
            }
            likeCount={comment.snippet.topLevelComment.snippet.likeCount}
            publishTime={comment.snippet.topLevelComment.snippet.updatedAt}
          />
        ))}
    </div>
  );
}

export default VideoComments;
