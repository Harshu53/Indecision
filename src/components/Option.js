import React from "react";

const Option = props => {
  return (
    <div className="option">
      <p className="option__text">
        {props.count}. {props.optionText}
      </p>
      <button
        className="button button--link"
        onClick={e => {
          props.hanldeRemoveOption(props.optionText);
        }}
      >
        Remove
      </button>
    </div>
  );
};

/* class Option extends React.Component {
    render() {
      return (
        <div>
          <p>{this.props.optionText}</p>
        </div>
      );
    }
  } */

export default Option;
