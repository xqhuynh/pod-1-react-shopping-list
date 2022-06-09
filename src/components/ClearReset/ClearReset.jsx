
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

        <>
        <h2>Shopping List</h2>
        <button onClick={handleDelete}>Clear</button>
        <button onClick={handleReset}>Reset</button>
        </>
    )
}

export default ClearReset