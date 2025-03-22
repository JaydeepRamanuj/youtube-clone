import React from "react";
import Skeleton from "react-loading-skeleton";

function FeedSkeleton() {
  return (
    <div className="mt-8 flex flex-1 flex-wrap justify-center gap-2 gap-y-2">
      {Array.from({ length: 16 }).map((_, index) => (
        <div key={index}>
          <Skeleton
            baseColor="#202020"
            highlightColor="#444"
            height={150}
            width={300}
            className="rounded-lg"
          />
          <div className="flex">
            <Skeleton
              circle={true}
              width={40}
              height={40}
              baseColor="#202020"
              highlightColor="#444"
              className="rounded-full mr-2"
            />
            <div>
              <Skeleton
                baseColor="#202020"
                highlightColor="#444"
                className="rounded-lg"
                width={250}
              />
              <Skeleton
                baseColor="#202020"
                highlightColor="#444"
                className="rounded-lg"
                width={250}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FeedSkeleton;
