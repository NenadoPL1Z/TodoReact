import React, { Component } from "react";
import "./searchPanel.css";

export default class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
    };
  }

  onUpdateSearch = (e) => {
    this.setState({ searchValue: e.target.value });
    this.props.onUpdateSearch(e.target.value);
  };

  render() {
    return <input className="form-control search-input" type="text" placeholder="Поиск по записям" onChange={this.onUpdateSearch} />;
  }
}
