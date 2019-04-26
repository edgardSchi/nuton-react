import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import MainPage from "./MainPage.js";
import Download from "./Download.js";
import NotFound from "./NotFound.js";
import Footer from "./Footer.js";
import Topbar from "./Topbar.js";
import ScrollToTop from "./ScrollToTop.js";
import GettingStarted from "./GettingStarted.js";
import License from "./License.js";
import Impressum from "./Impressum.js";
import Datenschutz from "./Datenschutz.js";

class Main extends React.Component {
  render() {
    return (
      <Router>
        <React.Fragment style={{ height: "100%", display: "flex" }}>
          <ScrollToTop />
          <Topbar />
          <div style={{ height: "100%", flex: "1", padding: "0", margin: "0" }}>
            <Switch>
              <Route exact path="/" component={MainPage} />
              <Route path="/download" component={Download} />
              <Route path="/erste-schritte" component={GettingStarted} />
              <Route path="/lizenz" component={License} />
              <Route path="/impressum" component={Impressum} />
              <Route path="/datenschutz" component={Datenschutz} />
              <Route component={NotFound} />
            </Switch>
          </div>
          <div style={{ marginTop: "-17px", padding: "0" }}>
            <Footer />
          </div>
        </React.Fragment>
      </Router>
    );
  }
}

export default Main;
