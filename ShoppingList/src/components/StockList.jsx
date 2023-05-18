import ShoppingListItem from "./ShoppingListItem";
import StockListItem from "./StockListItem";

function StockList(props) {
  const listStock = props.stock;
  const setShoppingList = props.setShoppingList;
  const shoppingListOfItems = props.shoppingListOfItems;
  const setStockListOfItems = props.setStockListOfItems;

  return (
    <>
      <h2>Available Items</h2>
      <ul>
        {listStock.map((element) => {
          return (
            <StockListItem
              name={element.name}
              quantity={element.quantity}
              setShoppingList={setShoppingList}
              shoppingListOfItems={shoppingListOfItems}
              setStockListOfItems={setStockListOfItems}
            />
          );
        })}
      </ul>
    </>
  );
}

export default StockList;
