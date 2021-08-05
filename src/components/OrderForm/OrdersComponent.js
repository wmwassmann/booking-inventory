import React, { useState } from 'react'


import './css/input-style.css';
import Input from './OrdersInput';

import { useDispatch } from 'react-redux';

import { addItem } from '../../actions/auth'
import { useHistory } from 'react-router-dom'


const initialState = {
    employeeUsername: '',
    email: '',
    password: '',
    passwordConfirm: '',
    employeeId: '',
    employeePosition: ''

}

const OrdersForm = ({ currentId, setCurrentId }) => {


    // const [position, setPosition] = useState();
    const [form, setForm] = useState(initialState);

    const dispatch = useDispatch()
    const history = useHistory()
    // const currentPosition = JSON.parse(localStorage.getItem('currentEmployee'))

    // let selectPosition = JSON.parse(localStorage.getItem('currentEmployee'))


    // selectPosition = currentPosition?.employee.result[1].email



    // Signup and signin toggle
    const handleSubmit = (e) => {
        // Axios here
        e.preventDefault()
        setCurrentId(currentId + 1)

        dispatch(addItem(form, history))
        console.log(form)
        console.log("should be 1: ", currentId)
        window.location.reload(true)

    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })

    }





    return (
        <div className='paper-container'>
            
         
                    <form className='form-container' onSubmit={handleSubmit}>                     
                        <button className='add-button' type='submit'>
                            Add
                        </button>
                        <div className='text-box'>
                            <Input name='itemName' label='Product Name' handleChange={handleChange} />
                        </div>
                        <div className='text-box'>
                            <Input name='itemSupplier' label='Supplier' handleChange={handleChange} />
                        </div>
                        <div className='text-box'>
                            <Input name='itemLocationInStorage' label='Location in Storage Unit' handleChange={handleChange} />
                        </div>
                        <div className='text-box'>
                            <Input name='employeeId' label='Employee Id' handleChange={handleChange} />
                        </div>
                        <div className='text-box'>
                            <Input name='itemQuantity' label='Quantity' handleChange={handleChange} type='Quantity' />
                        </div>
                        <div className='text-box'>
                            <Input name='itemPrice' label='Price' handleChange={handleChange} type='Price' />
                        </div>
                        <div className='text-box'>
                            <Input name='itemReorderPackaging' label='Re-Order Packaging' handleChange={handleChange} />
                        </div>
                        <div className='text-box'>
                            <Input name='itemCostPerUnit' label='Cost Per Unit' handleChange={handleChange} />
                        </div>
                        <div className='text-box'>
                            <Input name='itemCostPerSpareKit' label='Cost Per Spare Kit' handleChange={handleChange} />
                        </div>
                        <div className='text-box'>
                            <Input name='itemCostPerKit' label='Cost Per Kit' handleChange={handleChange} />
                        </div>
                        <div className='text-box'>
                            <Input name='itemLocation' label='Location in Unit' handleChange={handleChange} />
                        </div>
                        <div className='text-box'>
                            <Input name='maintSpareKit' label='Spare Kit' handleChange={handleChange} />
                        </div>
                        <div className='text-box'>
                            <Input name='maintItemsReOrder' label='Re-order' handleChange={handleChange} />
                        </div>
                        <div className='text-box'>
                            <Input  name='maintQuantityReOrder' label='Quantity to Re-Order' handleChange={handleChange} />
                        </div>
                        <div className='text-box'>
                            <Input  name='maintPlaced' label='Re-order Placed' handleChange={handleChange} />
                        </div>      
                        {/* <div className='text-box' name={currentId} handleChange={handleChange}/> */}
                                         
                        {/* <div className='text-box'>
                            <Input  name='maintBrokenReturn' label='Durability Status' handleChange={handleChange} />
                        </div> */}
                    
                     

                    </form>
               
           
        </div >
    )
}

export default OrdersForm;

