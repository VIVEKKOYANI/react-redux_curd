import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.css";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";

class App extends Component {
  render() {
    return (
      <div className="m-5">
        <TodoInput />
        <TodoList />
      </div>
    );
  }
}
export default App;
