import React, { Component } from "react";

import { Consumer } from "./Context";

const Store = WrappedComponent => {
  return class Store extends Component {
    render() {
      return (
        <Consumer>
          {value => <WrappedComponent {...this.props} {...{ authorization: value }} />}
        </Consumer>
      );
    }
  };
};

export default Store;
