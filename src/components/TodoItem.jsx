import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../reducer/actions";
import { useState } from "react";
import "../App.css";

{
  /* Item Edit */
}

function TodoItem({ todo }) {
  const [editable, setEditable] = useState(false);
  const [name, setName] = useState(todo.name);
  const [description, setDescription] = useState(todo.description);
  const [price, setPrice] = useState(todo.price);
  const [discount, setDiscount] = useState(todo.discount);
  const [available, setAvailable] = useState(todo.available);
  const [checked, setChecked] = useState(true);
  const hidden = checked ? "" : "hidden";
  let dispatch = useDispatch("");
  return (
    <div>
      <div className="row mx-2 align-items-center">
        <div>{todo.id.length > 1 ? todo.id[2] : todo.id}</div>
        <div className="col">
          <input
            type="checkbox"
            checked={checked}
            onChange={() => setChecked(!checked)}
          />
          {editable ? (
            <>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                className="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <input
                type="text"
                className="form-control"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              <input
                type="text"
                className="form-control"
                value={available}
                onChange={(e) => setAvailable(e.target.value)}
              />
              <input
                type="text"
                className="form-control"
                value={discount}
                onChange={(e) => setDiscount(e.target.value)}
              />
            </>
          ) : (
            <div className="row row-cols-6 justify-content-center">
              <h4 className={hidden}>{todo.name}</h4>
              <h4 className={hidden}>{todo.description}</h4>
              <h4 className={hidden}>{todo.price}</h4>
              <h4 className={hidden}>{todo.available}</h4>
              <h4 className={hidden}>{todo.discount}</h4>
            </div>
          )}
        </div>
        <button
          className="btn btn-primary m-2"
          onClick={() => {
            dispatch(
              updateTodo({
                ...todo,
                name: name,
                description: description,
                price: price,
                discount: discount,
                available: available,
              })
            );
            if (editable) {
              setName(todo.name);
              setDescription(todo.description);
              setDiscount(todo.discount);
              setPrice(todo.price);
              setAvailable(todo.available);
            }
            setEditable(!editable);
          }}
        >
          {editable ? "Update" : "Edit"}
        </button>
        <button
          className="btn btn-danger m-2"
          onClick={() => dispatch(deleteTodo(todo.id))}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
