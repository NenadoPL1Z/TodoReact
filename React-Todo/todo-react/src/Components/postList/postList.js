import React from "react";
import "./postList.css";
import PostListItem from "../postListItem/postListItem";
import { ListGroup } from "reactstrap";

const PostList = ({ posts, onDelete, onToggleImportant, onToggleLike }) => {
  return (
    <ListGroup className="app-list list-group">
      {posts.map((item) => {
        if (typeof item == "object") {
          const { id, label, important, likePost } = item;
          return (
            <li key={id} className="list-group-item">
              <PostListItem label={label} important={important} likePost={likePost} onDelete={() => onDelete(id)} onToggleImportant={() => onToggleImportant(id)} onToggleLike={() => onToggleLike(id)} />
            </li>
          );
        }
      })}
    </ListGroup>
  );
};

export default PostList;
