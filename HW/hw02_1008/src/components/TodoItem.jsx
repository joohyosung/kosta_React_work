import "../css/TodoItem.css";

function TodoItem({ todo, onUpdate, onDelete }) {
  return (
    <div className="TodoItem">
      <input
        type="checkbox"
        checked={todo.isDone}
        data-id={todo.id}
        aria-label={`${todo.content} 완료`}
        onChange={() => onUpdate(todo.id)}
      />
      <div className="content">{todo.content}</div>
      <div className="date">{new Date(todo.date).toLocaleString()}</div>
      <button
        name={String(todo.id)}
        type="button"
        onClick={() => onDelete(todo.id)}
      >
        삭제
      </button>
    </div>
  );
}

export default TodoItem;
