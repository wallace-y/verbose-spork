function StockListItem(props) {

const name = props.name
const quantity = props.quantity
const setShoppingList = props.setShoppingList
const shoppingListOfItems = props.shoppingListOfItems





const addItem = (name)=>{
  
setShoppingList((currentList)=>{
    console.log(name)
return [{"name":name, quantity:1},...currentList]

})
// console.log(shoppingListOfItems)
}
    return (
    
     <>
     <li><p>{name}</p> <p>{quantity}</p></li> <button onClick={()=>{addItem(name)}}>Add</button>
     
     
     
     </>
    
    
     )
  }
  
  


  export default StockListItem