import React, { useState } from 'react'


import './css/input-style.css';
import Input from './EditInput';

import { useDispatch } from 'react-redux';

import { editItem } from '../../actions/auth'
// import { addItem } from '../../actions/auth'
import { useHistory } from 'react-router-dom'


const initialState = {
    employeeUsername: '',
    email: '',
    password: '',
    passwordConfirm: '',
    employeeId: '',
    employeePosition: ''

}


const EditForm = ({ itemId, item, currentId, setCurrentId }) => {


    // const [position, setPosition] = useState();
    const [myItem, setMyItem] = useState(initialState);
    const dispatch = useDispatch()
    const history = useHistory()
  





    // Signup and signin toggle
    const handleSubmit = (e) => {
        
        e.preventDefault()
  
        console.log(item)




        dispatch(editItem(currentId))

 
     


    }

    const handleChange = () => { 
        setMyItem({ ...myItem, item })

    }





    return (
        <div className='edit-container'>


            <form className='edit-form-container' onSubmit={handleSubmit}>
                <button className='add-button' type='submit' >
                    Add
                </button>
                <div className='edit-text-box'>
                    <Input name='itemName' label='Product Name' handleChange={handleChange} />
                </div>
                <div className='edit-text-box'>
                    <Input name='itemSupplier' label='Supplier' handleChange={handleChange} />
                </div>
                <div className='edit-text-box'>
                    <Input name='itemLocationInStorage' label='Location in Storage Unit' handleChange={handleChange} />
                </div>
                <div className='edit-text-box'>
                    <Input name='employeeId' label='Employee Id' handleChange={handleChange} />
                </div>
                <div className='edit-text-box'>
                    <Input name='itemQuantity' label='Quantity' handleChange={handleChange} type='Quantity' />
                </div>
                <div className='edit-text-box'>
                    <Input name='itemPrice' label='Price' handleChange={handleChange} type='Price' />
                </div> 



            </form>


        </div >
    )
}

export default EditForm;

