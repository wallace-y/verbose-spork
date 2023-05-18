import { useState } from "react";
import ShoppingList from "./ShoppingList";
import StockList from "./StockList";

function Container() {
  const initialStockList = [
    { name: "milk", quantity: 50 },
    { name: "cheese", quantity: 50 },
    { name: "bread", quantity: 50 },
    { name: "eggs", quantity: 50 },
  ];
  const [StockListOfItems, setStockListOfItems] = useState(initialStockList);

  const [shoppingListOfItems, setShoppingList] = useState([]);

  return (
    <>
      <ShoppingList
        setShoppingList={setShoppingList}
        shoppingListOfItems={shoppingListOfItems}
      />
      <StockList
        stock={StockListOfItems}
        setShoppingList={setShoppingList}
        shoppingListOfItems={shoppingListOfItems}
        setStockListOfItems={setStockListOfItems}
      />
    </>
  );
}

export default Container;
