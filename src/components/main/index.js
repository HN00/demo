import React from "react";
import { Route, Switch } from "react-router";

import Header from "../template/header";
import Footer from "../template/footer";
import NotFound from "../notfound";
import Home from "../home";

class Main extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }
}
export default Main;
