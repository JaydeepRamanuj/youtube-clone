const APIKey = import.meta.env.VITE_X_YOUTUBE_API_KEY;

const baseUrl = "https://www.googleapis.com/youtube/v3";

async function getHomeFeed(maxResults = 24, regionCode = "IN") {
  const params = new URLSearchParams({
    part: "snippet,contentDetails,statistics",
    chart: "mostPopular",
    maxResults: maxResults,
    regionCode: regionCode,
    key: APIKey,
  });

  const url = `${baseUrl}/videos?${params.toString()}`;

  try {
    const response = await fetch(url);

    if (response.ok) {
      const result = await response.json();
      return result.items;
    } else {
      console.log("Bad response while loading Feed videos ");
      return [];
    }
  } catch (err) {
    console.log("Error while loading Feed videos", err);
    return [];
  }
}

async function getChannelDetails(id) {
  const params = new URLSearchParams({
    part: "snippet,contentDetails,statistics,brandingSettings",
    id: id,
    key: APIKey,
  });

  const url = `${baseUrl}/channels?${params.toString()}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      console.log("HTTP error,", response.status);
      return [];
    }
    const result = await response.json();
    // console.log(result);
    if (result.error) {
      console.log("Bad response while getting channel details", result.error);
      return [];
    }
    return result.items[0];
  } catch (err) {
    console.log("Error while getting channel details,", err);
    return [];
  }
}
async function getChannelVideos(id, maxResults = 15) {
  // We don't get contentDetails with search query, to get channel videos we have to first find all videoId for that specific channel and then make another request asking for required data in second request

  const searchParams = new URLSearchParams({
    part: "id,snippet",
    channelId: id,
    order: "date",
    maxResults: maxResults,
    type: "video",
    key: APIKey,
  });

  const searchUrl = `${baseUrl}/search?${searchParams.toString()}`;
  const videoIds = [];
  try {
    const searchResponse = await fetch(searchUrl);

    if (!searchResponse.ok) {
      console.log("HTTP error,", searchResponse.status);
      return [];
    }
    const result = await searchResponse.json();
    // console.log(result);
    if (result.error) {
      console.log("Bad response while getting video Ids", result.error);
      return [];
    }
    // console.log(result.items);

    result.items.forEach(
      (video) => video.id && video.id.videoId && videoIds.push(video.id.videoId)
    );
    // return result.items;
    // console.log(videoIds);
  } catch (err) {
    console.log("Error while getting video Ids", err);
    return [];
  }

  const videoParams = new URLSearchParams({
    part: "snippet,contentDetails",
    id: videoIds.join(","),
    key: APIKey,
  });

  const videoUrl = `${baseUrl}/videos?${videoParams.toString()}`;
  // console.log(videoUrl);

  try {
    const videoResponse = await fetch(videoUrl);

    if (!videoResponse.ok) {
      console.log("HTTP error,", videoResponse.status);
      return [];
    }
    const result = await videoResponse.json();
    console.log(result);
    if (result.error) {
      console.log("Bad response while getting channel videos", result.error);
      return [];
    }
    // console.log(result);

    // console.log(result.items);

    // console.log(videoIds);
    return result.items;
  } catch (err) {
    console.log("Error while getting channel videos", err);
    return [];
  }
}

async function getVideoDetails(id) {
  const params = new URLSearchParams({
    part: "snippet,contentDetails,statistics",
    id: id,
    key: APIKey,
  });

  const url = `${baseUrl}/videos?${params.toString()}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      console.log("HTTP error,", response.status);
      return [];
    }
    const result = await response.json();
    // console.log(result);
    if (result.error) {
      console.log("Bad response while getting video details", result.error);
      return [];
    }
    return result.items[0];
  } catch (err) {
    console.log("Error while getting video details", err);
    return [];
  }
}
async function getVideoComments(id, maxResults = 25) {
  const params = new URLSearchParams({
    part: "snippet,replies",
    videoId: id,
    maxResults: maxResults,
    // update this to html for better comments
    textFormat: "plainText",
    key: APIKey,
  });

  const url = `${baseUrl}/commentThreads?${params.toString()}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      console.log("HTTP error,", response.status);
      return [];
    }
    const result = await response.json();
    // console.log(result);
    if (result.error) {
      console.log("Bad response while getting video comments", result.error);
      return [];
    }
    return result.items;
  } catch (err) {
    console.log("Error while getting video comments", err);
    return [];
  }
}

async function getSearchResults(searchKey, maxResults = 15) {
  const params = new URLSearchParams({
    part: "id,snippet",
    q: searchKey,
    type: "video",
    maxResults: maxResults,
    order: "relevance",
    key: APIKey,
  });

  const url = `${baseUrl}/search?${params.toString()}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      console.log("HTTP error,", response.status);
      return [];
    }
    const result = await response.json();
    // console.log(result);
    if (result.error) {
      console.log("Bad response while loading search results", result.error);
      return [];
    }
    return result.items;
  } catch (err) {
    console.log("Error while loading search results", err);
    return [];
  }
}
async function getSuggestedVideos(id, maxResults = 10) {
  // console.log(id);

  const params = new URLSearchParams({
    part: "id,snippet",
    videoCategoryId: id,
    type: "video",
    maxResults: maxResults,
    key: APIKey,
    videoDuration: "medium",
  });

  const url = `${baseUrl}/search?${params.toString()}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      console.log("HTTP error,", response.status);
      return [];
    }
    const result = await response.json();
    // console.log(result);
    if (result.error) {
      console.log("Bad response while loading suggested videos", result.error);
      return [];
    }
    return result.items;
  } catch (err) {
    console.log("Error while loading suggested videos", err);
    return [];
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
