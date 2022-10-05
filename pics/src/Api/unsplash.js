import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID mqTJMDUSfxSqFO2SKOLGGFY8W0ZxxIpiq2VmOG_FHco",
  },
});
