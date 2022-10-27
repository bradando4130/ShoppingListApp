import React from "react";

import classes from "./ShoppingList.module.css";

import Card from "../UI/Card";
import Button from "../UI/Button";

const ShoppingList = (props) => {
  return (
    <Card className={classes.list}>
      <ul className={classes["paper-list"]}>
        {props.listItems.map((item) => {
          return (
            <li key={item.id} id={item.id}>
              <div className={classes["list-item"]}>
                <p>{item.itemName}</p>
                <p>x {item.itemQty}</p>
                <Button
                  className={classes["button-delete"]}
                  onClick={props.removeItem}
                >
                  X
                </Button>
              </div>
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default ShoppingList;
