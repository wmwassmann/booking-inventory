import React, { useState } from 'react'

import { useDispatch } from 'react-redux';
import { editItem } from '../../actions/auth'

import './css/input-style.css';
import Input from './EditInput';







const EditForm = ({ selectedItem, currentId }) => {

    const [itemData, setItemData] = useState({ itemName: selectedItem.itemName, itemSupplier: selectedItem.itemSupplier, itemLocationInStorage: selectedItem.itemLocationInStorage, employeeId: selectedItem.employeeId, itemQuantity: selectedItem.itemQuantity, itemPrice: selectedItem.itemPrice  })
    const dispatch = useDispatch()


    // Signup and signin toggle
    const handleSubmit = (e) => {
        e.preventDefault()    
        dispatch(editItem(currentId, itemData))
        window.location.reload(true)
    }

    const handleChange = (e) => { 
        setItemData({ ...itemData, [e.target.name]: e.target.value  })

    }

    return (
        <div className='edit-container'>
            <form className='edit-form-container' onSubmit={handleSubmit}>
                <button id={`${selectedItem.itemName}-submit-button`} className='edit-button' type='submit' >
                    Submit
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

