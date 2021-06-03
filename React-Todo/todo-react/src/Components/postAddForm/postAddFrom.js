import React, { Component } from "react";
import "./postAddForm.css";
export default class PostAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  onValueChange = (event) => {
    this.setState({ value: event.target.value });
  };

  onValueSubmit = (event) => {
    event.preventDefault();
    this.setState({ value: "" });
  };

  render() {
    const { onAdd } = this.props;
    const { value } = this.state;
    return (
      <form onSubmit={this.onValueSubmit} className="bottom-panel d-flex">
        <input type="text" placeholder="Новый пост" className="form-control new-post-label" onChange={this.onValueChange} value={value} />
        <button type="submit" className="btn btn-outline-secondary" onClick={() => onAdd(value)}>
          Добавить
        </button>
      </form>
    );
  }
}
