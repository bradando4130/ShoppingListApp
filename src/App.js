import React, { useState } from "react";
import { ReactDOM } from "react";

import AddItem from "./Components/shoppingList/AddItem";
import ShoppingList from "./Components/shoppingList/ShoppingList";

function App() {
  const [shoppingList, setShoppingList] = useState([]);

  /**
   * Update shoppingList state with params hoisted up from AddItem.js
   * @param {*} itemName - item from item input AddItem.js
   * @param {*} itemQty - qty from qty input in AddItem.js
   */
  const addShoppingItemHandler = (itemName, itemQty) => {
    setShoppingList((prevState) => {
      return [
        ...prevState,
        {
          itemName: itemName,
          itemQty: itemQty,
          id: shoppingList.length,
        },
      ];
    });
  };

  const removeShoppingItemHandler = (event) => {
    // get id of parent li of button item want to remove
    const targetId = parseInt(event.target.parentElement.parentElement.id);

    // create filtered list with all but that item
    const filteredList = shoppingList.filter((item) => item.id !== targetId);
    
    // set new state
    setShoppingList(filteredList);
  };

  // Pass shoppingList to Shoppinglist as props.listItems
  return (
    <div>
      <h1>Shopping List App</h1>
      <AddItem onAddItem={addShoppingItemHandler} />
      <ShoppingList
        listItems={shoppingList}
        removeItem={removeShoppingItemHandler}
      />
    </div>
  );
}

export default App;
