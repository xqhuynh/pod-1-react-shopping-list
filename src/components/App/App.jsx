import React from 'react';
import axios from 'axios'
import { useState, useEffect  } from 'react';
import Header from '../Header/Header.jsx'
import './App.css';

// Import components
import CreateForm from '../CreateForm/CreateForm.jsx';
import ClearReset from '../ClearReset/ClearReset.jsx';




function App() {
    let [cartItem, setCartItem] = useState([]);
   
useEffect(()=> {
    fetchCart();
}, [])

const fetchCart = () =>{
    axios({
        method: 'GET', 
        url: '/cart'
    })
    .then((response)=>{
        setCartItem(response.data)
    })
    .catch(err =>{
        console.log('error in GET', err);
    })
};

const addNewItem = (newItemInput) =>{
    axios.post('/cart', newItemInput)
    .then(response => {
        console.log('In POST /cart', response);
        fetchCart();
    })
    .catch(err =>{
        alert('err adding item');
        console.log('err');
    });
}


 const deleteItems = () =>{
   
   console.log('in delete')
   axios({
       method: 'DELETE', 
       url: '/cart'
   })
   .then(() =>{
   fetchCart();
})
.catch(err =>{
    console.log('error in delete', err);
})
 };


// const clearItem = (item) =>{  
// console.log('in delete', item)
// axios({
//      method: 'DELETE', 
//     url: `'/cart'/${item}`
// })
// .then((response)=>{
//     fetchCart();
//  })
//  .catch(err =>{
//      console.log('error in delete', err);
//  })
// };

 const resetPurchase = () => {
     console.log('in reset')
     axios.post('/reset').then(()=>{
         console.log('reset success')
         fetchCart()
     }).catch((err)=>{
         console.log('error in resetPurchase', err)
     })
 }


 return (
        <div className="App">
            <Header />
            <CreateForm 
             addNewItem={addNewItem}/>
             <ClearReset deleteItems={deleteItems} resetPurchase={resetPurchase} />
            <main>
                <p>Under Construction...</p>
            </main>
        </div>
    );
    }

export default App;
