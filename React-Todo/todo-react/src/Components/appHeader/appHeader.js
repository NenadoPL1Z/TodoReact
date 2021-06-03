import React from "react";
import "./appHeader.css";
import styled from "styled-components";

const Header = styled.div`
  align-items: flex-end;
  justify-content: space-between;
  display: flex;
  h1 {
    font-size: 26px;
    transition: 0.2s all linear;
    :hover {
      color: ${(props) => props.color};
    }
  }
  h2 {
    font-size: 1.2rem;
    color: grey;
  }
`;

const AppHeader = ({ post, like }) => {
  return (
    <Header color="#32a83c">
      <h1>Rodion Pyatigroskiy</h1>
      <h2>
        Постов: {post}; Нравится: {like}
      </h2>
    </Header>
  );
};

export default AppHeader;
