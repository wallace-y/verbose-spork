
import ShoppingListItem from "./ShoppingListItem"

function ShoppingList(props) {
const shoppingListOfItems = props.shoppingListOfItems

    return (
        <>
        <h2>Selected Items</h2>
        <ul>
        {
            
            shoppingListOfItems.map((element)=>{
       
        return<ShoppingListItem name = {element.name} quantity ={element.quantity}/>})
     
     
        }
     </ul>
        </>
    )
  }
  
  


  export default ShoppingList