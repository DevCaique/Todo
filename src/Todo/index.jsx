import { ACTIONS } from "../Todos";

export function Todo({ todo, dispatch }) {
  return (
    <>
      <div className="todo-item">
        <span
          className="taref"
          style={{ color: todo.complete ? "#AAA" : "#000" }}
        >
          {todo.name}
        </span>
        <div className="button-area">
          <button
            className="del-btn todo-btn not-selectable"
            onClick={() =>
              dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })
            }
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}
