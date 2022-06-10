
const ClearReset = ({deleteItems, resetPurchase}) => {
        const handleDelete = (evt) => {
            evt.preventDefault()
            console.log("Delete all")
            deleteItems()
        }
        const handleReset = (evt) => {
            evt.preventDefault()
            console.log("Reset all")
            resetPurchase()
        }
    
    
    return (

        <div className="clearResetBtns">
        <h2>Shopping List</h2>
        <button className="clearButton" onClick={handleDelete}>Clear</button>
        <button onClick={handleReset}>Reset</button>
        </div>
    )
}

export default ClearReset