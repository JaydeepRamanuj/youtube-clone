import { BiSolidMoviePlay } from "react-icons/bi";
import { BsBroadcast } from "react-icons/bs";
import {
  FaFire,
  FaFlag,
  FaGraduationCap,
  FaHistory,
  FaRegNewspaper,
  FaShoppingBag,
  FaTrophy,
  FaYoutube,
} from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { IoIosMusicalNotes, IoLogoGameControllerB } from "react-icons/io";
import { IoHome, IoPersonCircleOutline } from "react-icons/io5";
import {
  MdFeedback,
  MdOutlineHelp,
  MdPodcasts,
  MdSubscriptions,
} from "react-icons/md";
import { SiYoutubekids, SiYoutubemusic, SiYoutubeshorts } from "react-icons/si";
import { TbHanger2Filled } from "react-icons/tb";

export const categories = [
  "New",
  "Coding",
  "ReactJS",
  "NextJS",
  "Music",
  "Education",
  "Podcast",
  "Movie",
  "Gaming",
  "Live",
  "Sport",
  "Fashion",
  "Beauty",
  "Comedy",
  "Gym",
  "Crypto",
];

export const exploreOptions = [
  { name: "Trending", icon: <FaFire /> },
  { name: "Shopping", icon: <FaShoppingBag /> },
  { name: "Music", icon: <IoIosMusicalNotes /> },
  { name: "Movies", icon: <BiSolidMoviePlay /> },
  { name: "Live", icon: <BsBroadcast /> },
  { name: "Gaming", icon: <IoLogoGameControllerB /> },
  { name: "News", icon: <FaRegNewspaper /> },
  { name: "Sports", icon: <FaTrophy /> },
  { name: "Courses", icon: <FaGraduationCap /> },
  { name: "Fashion & Beauty", icon: <TbHanger2Filled /> },
  { name: "Podcasts", icon: <MdPodcasts /> },
];

export const primaryOptions = [
  { name: "Home", icon: <IoHome /> },
  { name: "Shorts", icon: <SiYoutubeshorts /> },
  { name: "Subscription", icon: <MdSubscriptions /> },
];

export const secondaryOptions = [
  {
    name: "You",
    icon: <IoPersonCircleOutline className="size-5" />,
  },
  { name: "History", icon: <FaHistory /> },
];

export const MoreOptions = [
  { name: "YouTube Premium", icon: <FaYoutube className="text-red-700" /> },
  { name: "YouTube Music", icon: <SiYoutubemusic className="text-red-700" /> },
  { name: "YouTube Kids", icon: <SiYoutubekids className="text-red-700" /> },
];

export const OtherOptions = [
  { name: "Settings", icon: <FaGear /> },
  { name: "Report history", icon: <FaFlag /> },
  { name: "Help", icon: <MdOutlineHelp /> },
  { name: "Send feedback", icon: <MdFeedback /> },
];

export const collapsedOptions = [
  { name: "Home", icon: <IoHome /> },
  { name: "Shorts", icon: <SiYoutubeshorts /> },
  { name: "Subscription", icon: <MdSubscriptions /> },
  { name: "You", icon: <IoPersonCircleOutline className="size-5" /> },
  { name: "History", icon: <FaHistory /> },
];
