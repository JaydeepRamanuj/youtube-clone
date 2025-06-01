import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { getChannelDetails, getChannelVideos } from "../services/ApiServices";
import { formatViews } from "../utils/utils";
import Feed from "../components/Feed";
import FeedSkeleton from "../components/FeedSkeleton";
import Skeleton from "react-loading-skeleton";
import { useParams, useSearchParams } from "react-router-dom";
import ToolContext from "../contexts/ToolContext";
import { IoMail, IoPerson } from "react-icons/io5";
import { IoIosShareAlt, IoMdClose } from "react-icons/io";
import { FaGlobe, FaGlobeAfrica, FaInfoCircle } from "react-icons/fa";
import { RiVideoFill } from "react-icons/ri";
import { TfiStatsUp } from "react-icons/tfi";
import Loader from "../components/Loader";
function ChannelPage() {
  const [channelData, setVideoData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [subscribed, setSubscribed] = useState(false);
  const [videosList, setVideosList] = useState([]);
  const { setToolVal } = useContext(ToolContext);
  const channelId = useParams();

  useEffect(() => {
    setToolVal((prev) => ({
      ...prev,
      sidebarCollapse: false,
    }));

    async function getData() {
      setIsLoading(true);
      // console.log(channelId);
      const channelResult = await getChannelDetails(channelId.id);
      const channelVideos = await getChannelVideos(channelId.id);

      // console.log(channelData);
      console.log(channelResult);
      console.log(channelVideos);

      if (channelResult?.length != 0 && channelVideos?.length != 0) {
        setVideoData(channelResult);
        setVideosList(channelVideos);
        setIsLoading(false);
      }
    }

    getData();
  }, []);

  if (isLoading) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <Loader />
      </div>
    );
  }
  return (
    <>
      {channelData && (
        <div className="flex-1">
          <div className="channel-info">
            <div>
              <img
                className="h-24 lg:h-52 w-full rounded-2xl object-cover"
                src={channelData.brandingSettings?.image.bannerExternalUrl}
                alt=""
              />
            </div>
            <div className="my-6 max-w-1/2 text-white flex items-center flex-wrap p-3">
              <img
                className="size-[100px] lg:size-[150px] rounded-full mr-7 object-cover"
                src={
                  channelData.snippet?.thumbnails?.medium.url || "/avatar.png"
                }
                alt=""
              />
              <div className="">
                <h1 className="text-3xl font-bold">
                  {channelData.brandingSettings?.channel.title}
                </h1>
                <h6 className="flex items-center flex-wrap">
                  <span>{channelData.snippet?.customUrl} </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-dot text-gray-400"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                  </svg>
                  <span className="text-gray-400">
                    <span>
                      {formatViews(channelData.statistics?.subscriberCount)}
                    </span>
                    <span> subscribers</span>
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-dot text-gray-400 "
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                  </svg>
                  <span className="text-gray-400">
                    <span>
                      {formatViews(channelData.statistics?.videoCount)}
                    </span>
                    <span> videos</span>
                  </span>
                </h6>
                <h6
                  className="flex cursor-pointer"
                  onClick={() => {
                    setToolVal((prev) => ({
                      ...prev,
                      showPopup: true,
                      popupContent: (
                        <div className="">
                          <div className="flex justify-between items-center">
                            <span>About</span>
                            <span
                              className="size-10 flex justify-center items-center hover:bg-gray-700/60 cursor-pointer rounded-full p-1.5 text-2xl"
                              onClick={() => {
                                setToolVal((prev) => ({
                                  ...prev,
                                  showPopup: false,
                                }));
                              }}
                            >
                              <IoMdClose className="text-2xl" />
                            </span>
                          </div>
                          <h5 className="mt-4">
                            {channelData.snippet?.description}
                          </h5>
                          <h3 className="text-xl font-bold mt-2">
                            Channel Details
                          </h3>
                          <div>
                            <div className="flex gap-4 mt-4 items-center">
                              <IoMail className="text-2xl" />
                              <span className="text-blue-600">Sign in</span>
                              to see email address
                            </div>
                            <div className="flex gap-4 mt-4 items-center">
                              <FaGlobe className="text-2xl" />
                              <span>
                                www.youtube.com/$
                                {channelData.snippet?.customUrl}
                              </span>
                            </div>
                            <div className="flex gap-4 mt-4 items-center">
                              <FaGlobeAfrica className="text-2xl" />
                              <span>{channelData.snippet?.country}</span>
                            </div>
                            <div className="flex gap-4 mt-4 items-center">
                              <FaInfoCircle className="text-2xl" />
                              <span>
                                joined {channelData.snippet?.publishedAt}
                              </span>
                            </div>
                            <div className="flex gap-4 mt-4 items-center">
                              <IoPerson className="text-2xl" />
                              <span>
                                {formatViews(
                                  channelData.statistics?.subscriberCount
                                )}
                                subscribers
                              </span>
                            </div>
                            <div className="flex gap-4 mt-4 items-center">
                              <RiVideoFill className="text-2xl" />
                              <span>
                                {formatViews(
                                  channelData.statistics?.videoCount
                                )}
                                videos
                              </span>
                            </div>
                            <div className="flex gap-4 mt-4 items-center">
                              <TfiStatsUp className="text-2xl" />
                              <span>
                                {formatViews(channelData.statistics?.viewCount)}
                                views
                              </span>
                            </div>
                          </div>
                          <button className="px-3 py-1.5 mt-6  bg-stone-600/50 flex items-center justify-center text-white gap-1.5 rounded-full">
                            <IoIosShareAlt />
                            share channel
                          </button>
                        </div>
                      ),
                    }));
                  }}
                >
                  <span className="max-w-[400px] line-clamp-1 text-gray-400">
                    {channelData.brandingSettings?.channel?.description}
                  </span>
                  <span>more</span>
                </h6>
                <button
                  className={`px-4 py-1.5 w-fit rounded-full bg-white text-center mt-2  ${
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
            </div>
          </div>
          <div className="channel-videos text-white overflow-auto scrollbar-hide">
            <Feed
              videosList={videosList}
              avatarURL={channelData.snippet?.thumbnails?.medium.url}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default ChannelPage;
