import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function FeedSkeleton() {
  return (
    <div className="mt-8 flex flex-wrap justify-center gap-6">
      {Array.from({ length: 12 }).map((_, index) => (
        <div key={index} className="w-[300px]">
          <Skeleton
            height={168} // 16:9 ratio for 300px width
            borderRadius={12}
            baseColor="#202020"
            highlightColor="#444"
            className="mb-3"
          />

          <div className="flex gap-3">
            <Skeleton
              circle
              height={36}
              width={36}
              baseColor="#202020"
              highlightColor="#444"
            />
            <div className="flex flex-col gap-1">
              <Skeleton
                height={14}
                width={180}
                style={{ width: "90%" }}
                baseColor="#202020"
                highlightColor="#444"
              />

              <Skeleton
                height={12}
                width={180}
                baseColor="#202020"
                highlightColor="#444"
              />

              <div className="flex gap-2">
                <Skeleton
                  height={12}
                  width={80}
                  // style={{ width: "50%" }}
                  baseColor="#202020"
                  highlightColor="#444"
                />
                <Skeleton
                  height={12}
                  width={80}
                  // style={{ width: "50%" }}
                  baseColor="#202020"
                  highlightColor="#444"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FeedSkeleton;
