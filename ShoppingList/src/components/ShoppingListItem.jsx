function ShoppingListItem(props) {
  const name = props.name;
  const quantity = props.quantity;
  const shoppingListOfItems = props.shoppingListOfItems;
  const setShoppingList = props.setShoppingList;

  function removeItem(name) {
    setShoppingList((currentList) => {
      const currentListItem = currentList.filter((item) => {
        return item.name === name;
      });
      const notInCurrentList = currentList.filter((item) => {
        return item.name !== name;
      });
      if (currentListItem[0].quantity === 1) {
        return [...notInCurrentList];
      } else {
        let newQuantity = currentListItem[0].quantity - 1;
        return [{ name: name, quantity: newQuantity }, ...notInCurrentList];
      }
    });
  }

  return (
    <>
      <li>
        <p>{name}</p>
        <p>{quantity}</p>
      </li>
      <button
        onClick={() => {
          removeItem(name);
        }}
      >
        Remove
      </button>
    </>
  );
}

export default ShoppingListItem;
