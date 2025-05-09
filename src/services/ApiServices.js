// const APIKey = process.env.X_RAPIDAPI_KEY;

// Note: I'm aware that API keys should't be exposed in such way, but due to some unknown api key issue on netlify I'm hardcoding it here.

// One possibility is that since my using api from client side, it might get exposed to public and may cause some rate limit issue which may be creating problem with rapid api.
const APIKey = "d9157a4f04msh0a0a40455adbce6p1d5de2jsn82bc8e38c437";

const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": APIKey,
    "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
  },
};

async function getHomeFeed() {
  const url =
    "https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=x4rFhThSX04&part=id%2Csnippet&type=video&maxResults=50";
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    // console.log(result);
    return result.items;
  } catch (err) {
    console.log("Error while loading Feed videos", err);
  }
}
async function getChannelDetails(id) {
  const url = `https://youtube-v31.p.rapidapi.com/channels?&id=${id}`;
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    // console.log("channel data:", result.items[0]);
    return result.items[0];
  } catch (err) {
    console.log("Error while getting channel details,", err);
  }
}
async function getChannelVideos(id) {
  const url = `https://youtube-v31.p.rapidapi.com/search?channelId=${id}&part=snippet%2Cid&order=date&maxResults=50`;

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    // console.log("Videos list:", result.items);
    return result.items;
  } catch (err) {
    console.log("Error while getting channel videos,", err);
  }
}

async function getVideoDetails(id) {
  const url = `https://youtube-v31.p.rapidapi.com/videos?part=contentDetails%2Csnippet%2Cstatistics&id=${id}`;

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    // console.log(result.items[0]);
    return result.items[0];
  } catch (err) {
    console.log("Error while getting video details,", err);
  }
}
async function getVideoComments(id) {
  const url = `https://youtube-v31.p.rapidapi.com/commentThreads?part=snippet&videoId=${id}&maxResults=100`;

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    // console.log(result.items);
    return result.items;
  } catch (err) {
    console.log("Error while getting video comments,", err);
  }
}

async function getSearchResults(searchKey) {
  const url = `https://youtube-v31.p.rapidapi.com/search?q=${searchKey}&part=snippet%2Cid&order=date`;
  // console.log(searchKey);

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    // console.log(result.items);
    return result.items;
  } catch (err) {
    console.log("Error while loading search results", err);
  }
}
async function getSuggestedVideos(id) {
  const url = `https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=${id}&part=id%2Csnippet&type=video&maxResults=50`;

  try {
    const response = await fetch(url, options);

    const result = await response.json();
    // console.log(result.items);
    return result.items;
  } catch (err) {
    console.log("Error while loading suggested videos", err);
  }
}
export {
  getHomeFeed,
  getChannelDetails,
  getChannelVideos,
  getVideoDetails,
  getVideoComments,
  getSearchResults,
  getSuggestedVideos,
};
