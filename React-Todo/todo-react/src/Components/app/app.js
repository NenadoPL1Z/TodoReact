import React, { Component } from "react";
import AppHeader from "../appHeader/appHeader";
import SearchPanel from "../searchPanel/serachPanel";
import PostStatusFiltr from "../postStatusFilter/postStatusFilter";
import PostList from "../postList/postList";
import PostAddForm from "../postAddForm/postAddFrom";
import "./app.css";
import styled from "styled-components";

const AppBlock = styled.div`
  margin: 0 auto;
  max-width: 800px;
`;
//? Наследуем стили от AppBlock
const StyledAppBlock = styled(AppBlock)`
  bacground-color: gray;
`;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { label: "Confirm React", important: true, likePost: false, id: 1 },
        { label: "This not JS", important: false, likePost: false, id: 2 },
        { label: "Html?", important: false, likePost: false, id: 3 },
      ],
      searchValue: "",
      filter: "all",
    };
    this.maxId = 4;
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      //? Перебираем все элементы data.id и сравниваем их с нужным нам значением
      const index = data.findIndex((elem) => elem.id === id);

      //? Создаём новый массив, до нашего элемента на каторый кликнули
      const before = data.slice(0, index);
      //? Создаём массив после элемента на который кликнули
      const after = data.slice(index + 1);

      const NewArray = [...before, ...after];

      return { data: NewArray };
    });
  };

  addItem = (body) => {
    const newItem = {
      label: body,
      id: this.maxId++,
    };
    this.setState(({ data }) => {
      const NewArray = [...data, newItem];
      return {
        data: NewArray,
      };
    });
  };

  onToggleImportant = (id) => {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);
      const old = data[index];

      const newItem = { ...old, important: !old.important };
      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
      return {
        data: newArr,
      };
    });
  };

  onToggleLike = (id) => {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);
      const old = data[index];

      const newItem = { ...old, likePost: !old.likePost };
      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
      return {
        data: newArr,
      };
    });
  };

  searchPost = (items, searchValue) => {
    if (searchValue.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.label.indexOf(searchValue) > -1;
    });
  };

  onUpdateSearch = (searchValue) => {
    this.setState({ searchValue });
  };

  filterPost = (items, filter) => {
    if (filter === "like") {
      return items.filter((item) => item.likePost);
    } else {
      return items;
    }
  };

  onFilterSelect = (filter) => {
    this.setState({ filter });
  };

  render() {
    const like = this.state.data.filter((item) => item.likePost).length;
    const allPosts = this.state.data.length;
    const { data, searchValue, filter } = this.state;

    const visiblePosts = this.filterPost(this.searchPost(data, searchValue), filter);

    const NoTodo = styled.div`
      display: flex;
      justify-content: center;
      color: red;
      font-size: 32px;
    `;

    let items = data.length >= 1 ? <PostList posts={visiblePosts} onDelete={this.deleteItem} onToggleImportant={this.onToggleImportant} onToggleLike={this.onToggleLike} /> : <NoTodo>No todo</NoTodo>;
    console.log(items);

    return (
      <AppBlock>
        <AppHeader post={allPosts} like={like} />
        <div className="search-panel d-flex">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <PostStatusFiltr filter={filter} onFilterSelect={this.onFilterSelect} />
        </div>
        {items}
        <PostAddForm onAdd={this.addItem} />
      </AppBlock>
    );
  }
}
