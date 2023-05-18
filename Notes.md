# Overview

Example Image [MockUp.png]

# Expected component file structure

```
APP
|_TITLE
|_ContainerComponent
|_StockList
|        |_StockListItem
|_ShoppingList
|_ShoppingListItem
```

# Expected Data structure

StockList could be an array of items
[Milk,Eggs,Cheese,etc...]
COULD have a quantity value also - ie available stock but optional

SelectedItems could be an object

```
{ Milk: { quantity: 1}, {Cheese: {quantity: 2}} }
```

# Expected State Usage

### Container Component

const [listOfItems, setListOfItems] = useState([])

Used by StockList component
Used by SelectedItems component

const [shoppingList, setShoppingList] = useState({name: {quantity: 0}})

Used by SelectedItems component
