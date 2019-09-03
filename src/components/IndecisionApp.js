import React from "react";

import Addoption from "./AddOption";
import Options from "./Options";
import Action from "./Action";
import Header from "./Header";
import ModalOption from "./ModalOption";

export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    isModalOpen: undefined
  };

  constructor(props) {
    super(props);

    this.handlePick = this.handlePick.bind(this);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
    this.handleAddOption = this.handleAddoption.bind(this);
    this.hanldeRemoveOption = this.hanldeRemoveOption.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  /* componentDidMount() {
    const json = localStorage.getItem("options");
    const final = JSON.parse(json);

    if (final) this.setState(() => ({ final }));
  } */

  /*   componentDidUpdate(prevState, prevOption) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
    console.log("saving data");
  } */

  /* componentWillUnmount() {
    console.log("componentWillUnmount");
  } */

  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState(() => ({
      isModalOpen: option
    }));
  }

  handleCloseModal() {
    this.setState(() => ({
      isModalOpen: false
    }));
  }

  handleRemoveAll() {
    /*  this.setState(() => {
        return {
          options: []
        };
      }); */

    // This is the shorthend syntax of the above code
    this.setState(() => ({ options: [] }));
  }

  hanldeRemoveOption(optionToRemove) {
    this.setState(prevState => ({
      options: prevState.options.filter(option => optionToRemove !== option)
    }));
  }

  handleAddoption(option) {
    if (!option) {
      return "Enter valid option";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option is already exists.";
    }

    /* this.setState(prevState => {
        return {
          options: prevState.options.concat(option)
        };
      }); */

    this.setState(prevState => ({ options: prevState.options.concat(option) }));
  }

  render() {
    return (
      <div>
        <Header subTitle="Gives you the options" />
        <div className="container">
          <Action
            hasOption={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <div className="widget">
            <Options
              handleRemoveAll={this.handleRemoveAll}
              options={this.state.options}
              hanldeRemoveOption={this.hanldeRemoveOption}
            />
            <Addoption handleAddOption={this.handleAddOption} />
          </div>
        </div>

        <ModalOption
          handleIsOpen={this.state.isModalOpen}
          handleCloseModal={this.handleCloseModal}
        />
      </div>
    );
  }
}
