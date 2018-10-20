import React, { Component } from "react";
import { css } from "react-emotion";
import { ClipLoader } from "react-spinners";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
class LoadingSpinner extends Component {
  state = {
    loading: true
  };

  render() {
    return (
      <div className="sweet-loading">
        <ClipLoader
          className={override}
          sizeUnit={"px"}
          size={150}
          color={"#ffffff"}
          loading={this.state.loading}
        />
      </div>
    );
  }
}

export default LoadingSpinner;
