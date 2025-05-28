import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function VideoCardHorizontalSkeleton({ showAvatar = true }) {
  return (
    <div className="flex gap-2 p-1.5 rounded-md hover:bg-white/10 transition-all">
      {/* Thumbnail (40%) */}
      <div className="relative min-w-[40%] max-w-[40%] aspect-video">
        <Skeleton
          height="100%"
          width="100%"
          borderRadius={8}
          baseColor="#202020"
          highlightColor="#444"
          className="object-cover"
        />
        <span className="absolute bottom-1 right-1">
          <Skeleton
            height={16}
            width={32}
            borderRadius={4}
            baseColor="#202020"
            highlightColor="#444"
          />
        </span>
      </div>

      {/* Content Section */}
      <div className="flex flex-1 justify-between items-start mt-2">
        {/* Avatar + Info */}
        {showAvatar && (
          <div className="mt-0.5">
            <Skeleton
              circle
              height={32}
              width={32}
              baseColor="#202020"
              highlightColor="#444"
            />
          </div>
        )}

        <div className="flex flex-col ml-2 mr-auto gap-1.5">
          <Skeleton
            height={14}
            width={200}
            baseColor="#202020"
            highlightColor="#444"
          />
          <Skeleton
            height={12}
            width={120}
            baseColor="#202020"
            highlightColor="#444"
          />
          <Skeleton
            height={12}
            width={100}
            baseColor="#202020"
            highlightColor="#444"
          />
        </div>

        {/* Options dots */}
        <div className="mt-1.5 ml-2">
          <Skeleton
            circle
            height={20}
            width={20}
            baseColor="#202020"
            highlightColor="#444"
          />
        </div>
      </div>
    </div>
  );
}

export default VideoCardHorizontalSkeleton;
