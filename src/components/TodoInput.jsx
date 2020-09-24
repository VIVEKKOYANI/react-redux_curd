import React from "react";
import { useState } from "react";
import { addTodo } from "../reducer/actions";
import { v1 as uuid } from "uuid";
import { useDispatch } from "react-redux";

function TodoInput() {
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [discount, setDiscount] = useState();
  const [available, setAvailable] = useState();
  let dispatch = useDispatch();
  return (
    <div>
      <div className="row m-2">
        <label htmlFor="name">ProductName</label>
        <input
          type="text"
          className="col form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="name">Description</label>
        <input
          type="text"
          className="col form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label htmlFor="name">Price</label>
        <input
          type="text"
          className="col form-control"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <label htmlFor="name">Discount</label>
        <input
          type="text"
          className="col form-control"
          value={discount}
          onChange={(e) => setDiscount(e.target.value)}
        />
        <label htmlFor="name">Available</label>
        <input
          type="text"
          className="col form-control"
          value={available}
          onChange={(e) => setAvailable(e.target.value)}
        />
        <button
          className="btn btn-primary mx-2"
          onClick={() => {
            dispatch(
              addTodo({
                id: uuid(),
                name: name,
                description: description,
                price: price,
                available: available,
                discount: discount,
              })
            );
            setName("");
            setDescription("");
            setDiscount("");
            setPrice("");
            setAvailable("");
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default TodoInput;
