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
         
                
                    </form>
      
           
        </div >
    )
}

export default OrdersForm;

