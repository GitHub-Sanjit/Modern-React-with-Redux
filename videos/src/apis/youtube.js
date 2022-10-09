import axios from "axios";

const KEY = "AIzaSyBTFC3QtDWipyM4OU96UDcW3AlCGnrVcm0";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    naxResult: 5,
    key: KEY,
  },
});
