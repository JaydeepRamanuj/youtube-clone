import React from "react";

function VideoPlayer({ videoId }) {
  return (
    <div className="flex-1 rounded-lg overflow-hidden">
      <iframe
        id="youtubePlayer"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        className="w-full min-h-[300px] md:min-h-[700px] "
      ></iframe>
    </div>
  );
}

export default VideoPlayer;
