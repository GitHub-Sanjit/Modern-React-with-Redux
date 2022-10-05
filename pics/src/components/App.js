import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
  onSearchSubmit(term) {
    axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID mqTJMDUSfxSqFO2SKOLGGFY8W0ZxxIpiq2VmOG_FHco",
      },
    });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit}></SearchBar>
      </div>
    );
  }
}

export default App;
