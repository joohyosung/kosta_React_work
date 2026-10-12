import { useState } from "react";
import Header from "./components/Header.jsx";
import Editor from "./components/Editor.jsx";
import List from "./components/List.jsx";
import "./css/App.css";

const mockData = [
  { id: 0, isDone: false, content: "React study", date: Date.now() },
  { id: 1, isDone: false, content: "친구만나기", date: Date.now() },
  { id: 2, isDone: false, content: "낮잠자기", date: Date.now() },
];

function App() {
  const [todos, setTodos] = useState(mockData);

  const onCreate = (content) => {
    const createdDate = Date.now();

    setTodos((prevTodos) => {
      const nextId =
        prevTodos.length === 0
          ? 0
          : Math.max(...prevTodos.map((todo) => todo.id)) + 1;

      const newTodo = {
        id: nextId,
        isDone: false,
        content: content,
        date: createdDate,
      };

      return [...prevTodos, newTodo];
    });
  };

  const onUpdate = (targetId) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === targetId) {
          return { ...todo, isDone: !todo.isDone };
        }
        return todo;
      }),
    );
  };

  const onDelete = (targetId) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== targetId));
  };

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
