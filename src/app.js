import React from "react";
import { Route, Switch } from "react-router";
import Main from "./components/main";
class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" component={Main} />
        </Switch>
      </div>
    );
  }
}
export default App;
