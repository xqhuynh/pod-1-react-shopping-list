const ItemsList = ({ cartItem }) => {
  // Buy button event handler
//   const buyButtonHandler = () => {
    const handleBuy = (evt) => {
      evt.preventDefault()
      console.log('buy')
    }

    const handleRemove = (evt) => {
      evt.preventDefault()
      console.log('remove')
    }
//   }
  const displayButtons = (cartItem) =>{
    let buttons;

    if(cartItem){
      buttons = <h4>Purchased</h4>
    } else {
      buttons =
        <>
        <button className="buyRemove buttons" onClick={handleBuy}>Buy</button>
        <button className="buyRemove buttons" onClick={handleRemove}>Remove</button>
        </>  
      }
      return buttons
  }

  return (
    <>
      <div className="boxContainer">
        {cartItem.map((groceryItem) => (
          <div className="box" key={groceryItem.id}>
            <div className="item">{groceryItem.item}</div>
            <div className="item">{groceryItem.quantity} {groceryItem.unit}</div>
            <div>
              {displayButtons(groceryItem.purchase)}
            </div>
          </div>
        //   add arrow function for submit
        ))}
      </div>
    </>
  );
};

export default ItemsList;

