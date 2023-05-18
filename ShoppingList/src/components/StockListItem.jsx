function StockListItem(props) {
  const name = props.name;
  const quantity = props.quantity;
  const setShoppingList = props.setShoppingList;
  const shoppingListOfItems = props.shoppingListOfItems;
  const setStockListOfItems = props.setStockListOfItems;

  const addItem = (name) => {
    setShoppingList((currentList) => {
      const currentListItem = currentList.filter((item) => {
        return item.name === name;
      });
      const notInCurrentList = currentList.filter((item) => {
        return item.name !== name;
      });

      if (currentListItem.length > 0) {
        let newQuantity = currentListItem[0].quantity + 1;
        return [{ name: name, quantity: newQuantity }, ...notInCurrentList];
      } else {
        return [{ name: name, quantity: 1 }, ...currentList];
      }
    });
    setStockListOfItems((currentList) => {
      const currentListItem = currentList.filter((item) => {
        return item.name === name;
      });
      const notInCurrentList = currentList.filter((item) => {
        return item.name !== name;
      });
      if (currentListItem[0].quantity === 0) {
        return [...currentList];
      } else {
        let newQuantity = currentListItem[0].quantity - 1;
        return [{ name: name, quantity: newQuantity }, ...notInCurrentList];
      }
    });
  };
  return (
    <>
      <li>
        <p>{name}</p> <p>{quantity}</p>
      </li>{" "}
      <button
        onClick={() => {
          addItem(name);
        }}
      >
        Add
      </button>
    </>
  );
}

export default StockListItem;
