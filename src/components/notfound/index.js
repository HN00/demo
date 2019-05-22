import React from "react";
import { NavLink } from "react-router-dom";
class NotFound extends React.Component {
  render() {
    return (
      <div>
        <h1>Not Found</h1>
        <NavLink to={"/"}>Go to home page</NavLink>
      </div>
    );
  }
}
export default NotFound;
