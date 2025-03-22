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
        className="w-full md:min-h-[550px] "
      ></iframe>
    </div>
  );
}

export default VideoPlayer;
