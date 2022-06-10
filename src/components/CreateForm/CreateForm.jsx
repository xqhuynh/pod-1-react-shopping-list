import React, { useState } from 'react';
import './CreateForm.css';

const CreateForm = ({ addNewItem} ) => {
    // Create useState for inputs: item, quantity, unit
    const [newItem, setNewItem] = useState('');
    const [newQuantity, setNewQuantity] = useState('');
    const [newUnit, setNewUnit] = useState('');

    // Function to handle 'Save' click event
    const onSaveSubmit = (evt) => {
        // Prevent browser refresh
        evt.preventDefault();
        // Create object to store as data
        const newItemsInput = {
            item: newItem,
            quantity: newQuantity,
            unit: newUnit,
        };

        // Pass new item to GET item
        addNewItem(newItemsInput)
          // Clear input fields
        setNewItem('');
        setNewQuantity('');
        setNewUnit('');
    }

    return (
        // On submit to handle 'save' click event
        <form onSubmit={onSaveSubmit}>
            <h2>Add an Item</h2> 
            <div>
                <h4 className='addItemText'>Item:</h4>
                <input className='addItem' onChange={event => setNewItem(event.target.value)} type="text" />
            </div>
            <div>
                <h4 className='quantityInputText'>Quantity:</h4>
                <input className='quantityInput' onChange={event=> setNewQuantity(event.target.value)} type="number" />
                <h4 className='unitInputText'>Unit:</h4>
                <input className='unitInput' onChange={event => setNewUnit(event.target.value)} type="text" />
            </div>
            <button className='saveBtn' type="submit">Save</button>
        </form>
    )
}

export default CreateForm;

