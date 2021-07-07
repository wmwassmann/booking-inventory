import React, { useState } from 'react'
import { Button, Paper, Grid, Typography, Container } from '@material-ui/core'

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

const OrdersForm = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [isSignup, setIsSignup] = useState(false);
    // const [position, setPosition] = useState();
    const [form, setForm] = useState(initialState);

    const dispatch = useDispatch()
    const history = useHistory()
    // const currentPosition = JSON.parse(localStorage.getItem('currentEmployee'))

    // let selectPosition = JSON.parse(localStorage.getItem('currentEmployee'))


    // selectPosition = currentPosition?.employee.result[1].email

    const handleShowPassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword)
    }


    // Signup and signin toggle
    const handleSubmit = (e) => {
        // Axios here
        e.preventDefault()
        dispatch(addItem(form, history))
        console.log(form)


    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })

    }



    const switchMode = () => {
        setForm(initialState);
        setIsSignup((prevIsSignup) => !prevIsSignup);
        setShowPassword(false)
    }


    return (
        <div className='paper-container'>
            
         
                    <form className='form-container' onSubmit={handleSubmit}>

                        {/* <Grid container spacing={1}> */}
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
                            <Input name='itemQuantity' label='Quantity' handleChange={handleChange} type='Quantity' />
                        </div>
                        <div className='text-box'>
                            <Input name='itemPrice' label='Price' handleChange={handleChange} type='Price' />
                        </div>
                        <div className='text-box'>
                            <Input name='itemReorderPackaging' label='Re-Order Packaging Type' handleChange={handleChange} />
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
                        <div className='text-box'>
                            <Input  name='maintBrokenReturn' label='Broken Or Out for Return' handleChange={handleChange} />
                        </div>
                    
                     
                        {/* </Grid> */}

                    </form>
               
           
        </div >
    )
}

export default OrdersForm;

