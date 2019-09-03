import React from "react";
import Option from "./Option";

const Options = props => {
  return (
    <div>
      <div className="widget-header">
        <h3 className="widget-header-title">Your Options</h3>
        <button className="button button--link" onClick={props.handleRemoveAll}>
          Remove All
        </button>
      </div>

      {!props.options.length && (
        <p className="widget-message">Please enter option</p>
      )}
      {props.options.map((option, index) => (
        <Option
          key={option}
          count={index + 1}
          optionText={option}
          hanldeRemoveOption={props.hanldeRemoveOption}
        />
      ))}
    </div>
  );
};

/* class Options extends React.Component {
    render() {
      return (
        <div>
          <button onClick={this.props.handleRemoveAll}>Remove All</button>
          <p>Options:</p>
          {this.props.options.map(option => (
            <Option key={option} optionText={option} />
          ))}
        </div>
      );
    }
  } */
export default Options;
