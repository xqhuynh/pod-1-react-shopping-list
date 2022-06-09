import React, { useState } from 'react';

const CreateForm = () => {
    // Create useState for inputs: item, quantity, unit
    const [newItem, setNewItem] = useState('');
    const [newQuantity, setNewQuantity] = useState('');
    const [newUnit, setNewUnit] = useState('');
    const [newPurchased, setNewPurchased] = useState('false');

    // Function to handle 'Save' click event
    const onSaveSubmit = (evt) => {
        evt.preventDefault();
    }

    // Clear input fields
    setNewItem('');
    setNewQuantity('');
    setNewUnit('');
    setNewPurchased('false');
    return (
        <>
            <h2>Add an Item</h2> 
        </>
    )
}

export default CreateForm;