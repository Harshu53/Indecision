import React from "react";
const Action = props => {
  return (
    <div>
      <button
        className="big-button"
        disabled={!props.hasOption}
        onClick={props.handlePick}
      >
        What should is Do?
      </button>
    </div>
  );
};

/* class Action extends React.Component {
    render() {
      return (
        <div>
          <button
            disabled={!this.props.hasOption}
            onClick={this.props.handlePick}
          >
            What should is Do?
          </button>
        </div>
      );
    }
  } */
export default Action;
