import React from "react";
import Topbar from "./Topbar.js";
import Footer from "./Footer.js";
import Main from "./Main.js";

class App extends React.Component {
  render() {
    return (
      <div
        style={{
          margin: "0",
          padding: "0 !important",
          minHeight: "100%",
          height: "100%",
          top: '0'
        }}
      >
        <div>
          <Main />
        </div>
      </div>
    );
  }
}

export default App;
