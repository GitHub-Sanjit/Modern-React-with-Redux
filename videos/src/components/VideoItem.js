import React from "react";

const VideoItem = ({ video }) => {
  return (
    <div>
      <ul>
        <img src={video.snippet.thumbnails.medium.url} alt="" />
        {video.snippet.title}
      </ul>
    </div>
  );
};

export default VideoItem;
