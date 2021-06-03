import React, { Component } from "react";
import "./postStatusFilter.css";
import { Button } from "reactstrap";

export default class PostStatusFiltr extends Component {
  constructor(props) {
    super(props);
    this.button = [
      { name: "all", label: "Все" },
      { name: "like", label: "Понравилось" },
    ];
  }
  render() {
    const button = this.button.map(({ name, label }) => {
      const active = this.props.filter === name;
      const clazz = active ? "btn-info" : "btn-outline-secondary";
      return (
        <button key={name} className={`btn ${clazz}`} onClick={() => this.props.onFilterSelect(name)}>
          {label}
        </button>
      );
    });
    return <div className="btn-group">{button}</div>;
  }
}
