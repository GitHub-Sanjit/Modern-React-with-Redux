import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map((video) => {
    return <VideoItem onVideoSelect={onVideoSelect} video={video}></VideoItem>;
  });

  return (
    <div>
      <div className="ui relaxed divided list">{renderedList}</div>
    </div>
  );
};

export default VideoList;
