import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "./ErrorModal";

import classes from "./AddItem.module.css";

const AddItem = (props) => {
  const [enteredItem, setEnteredItem] = useState("");
  const [enteredQty, setEnteredQty] = useState("");
  const [error, setError] = useState();

  /**
   * Add item description to state
   * @param {*} event
   */
  const itemChangeHandler = (event) => {
    setEnteredItem(event.target.value);
  };

  /**
   * Add item qty to state
   * @param {*} event
   */
  const qtyChangeHandler = (event) => {
    setEnteredQty(event.target.value);
  };

  /**
   * Handle submit and add item to list
   * this is done by hoisting state upto App component
   * reset enteredItem and enteredQty state also
   * If error than ser state of error accordingly
   * @param {*} event
   */
  const handleSubmit = (event) => {
    event.preventDefault();

    if (enteredItem.trim().length <= 2 || enteredQty.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter item name and quantity",
      });
      return;
    }
    if (+enteredQty <= 0) {
      setError({
        title: "Invalid quantity",
        message: "Please enter quantity for item (1 or greater)",
      });
      return;
    }
    props.onAddItem(enteredItem, enteredQty);
    setEnteredItem("");
    setEnteredQty("");

    // re focus first input upon submit
    const input = document.querySelector("input");
    input.focus();
  };

  /**
   * Error Handler reset to null
   */
  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={handleSubmit}>
          <label className={classes.label} htmlFor="item">
            Item
          </label>
          <input
            autoFocus
            type="text"
            id="item"
            onChange={itemChangeHandler}
            value={enteredItem}
          ></input>
          <label className={classes.label} htmlFor="quantity">
            Quantity
          </label>
          <input
            type="number"
            id="quantity"
            onChange={qtyChangeHandler}
            value={enteredQty}
          ></input>
          <Button className={classes["button-add"]} type="submit">
            Add Item
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default AddItem;
