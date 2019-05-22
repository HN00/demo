import React from "react";
import { action } from "./action";
import { connect } from "react-redux";

class Index extends React.Component {
  render() {
    return null;
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  action: () => dispatch(action())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
