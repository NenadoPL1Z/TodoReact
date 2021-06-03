import React, { Component } from "react";
import PostList from "../postList/postList";
import "./postListItem.css";

export default class PostListItem extends Component {
  onImportant = () => {
    this.setState({ important: !this.state.important });
  };

  onLike = () => {
    this.setState({ like: !this.state.like });
  };

  render() {
    const { label, onDelete, onToggleLike, onToggleImportant, important, likePost } = this.props;

    let className = "app-list-item d-flex justify-content-between";

    if (important) {
      className += " important";
    }

    if (likePost) {
      className += " like";
    }

    return (
      <div className={className}>
        <span className="app-list-item-label" onClick={onToggleLike}>
          {label}
        </span>
        <div className="d-flex justify-content-center alig-items-center">
          <button type="button" className="btn-star btn-sm" onClick={onToggleImportant}>
            <i className="fa fa-star"></i>
          </button>
          <button type="button" className="btn-trash btn-sm" onClick={onDelete}>
            <i className="fa fa-trash"></i>
          </button>
          <i className="fa fa-heart"></i>
        </div>
      </div>
    );
  }
}
