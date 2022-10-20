import React, { useEffect, useState } from "react";
import youtube from "../apis/youtube";
import SearchBar from "./SearchBar";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);


  // setSelectedVideo(response.data.items[0]);



  return (
    <div className="ui container">
      <SearchBar onFormSubmit={onTermSubmit}></SearchBar>
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo}></VideoDetail>
          </div>
          <div className="five wide column">
            <VideoList
              onVideoSelect={setSelectedVideo}
              videos={videos}
            ></VideoList>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
