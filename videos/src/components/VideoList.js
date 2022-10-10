import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos }) => {
  const renderedList = videos.map((video) => {
    return <VideoItem></VideoItem>;
  });

  return (
    <div>
      <h1>{renderedList}</h1>
    </div>
  );
};

export default VideoList;
