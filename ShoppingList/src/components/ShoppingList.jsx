import ShoppingListItem from "./ShoppingListItem";

function ShoppingList(props) {
  const shoppingListOfItems = props.shoppingListOfItems;
  const setShoppingList = props.setShoppingList;

  return (
    <>
      <h2>Selected Items</h2>
      <ul>
        {shoppingListOfItems.map((element) => {
          return (
            <ShoppingListItem
              name={element.name}
              quantity={element.quantity}
              setShoppingList={setShoppingList}
              shoppingListOfItems={shoppingListOfItems}
            />
          );
        })}
      </ul>
    </>
  );
}

export default ShoppingList;
