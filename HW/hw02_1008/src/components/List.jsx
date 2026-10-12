import { useState } from "react";
import TodoItem from "./TodoItem.jsx";
import "../css/List.css";

function List({ todos, onUpdate, onDelete }) {
  const [search, setSearch] = useState("");

  const filteredTodos = todos.filter((todo) => todo.content.includes(search));

  return (
    <div className="List">
      <h4>Todo List🌱</h4>
      <input
        id="keyword"
        placeholder="검색어를 입력해주세요."
        aria-label="할 일 검색"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="todos_wrapper">
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default List;
