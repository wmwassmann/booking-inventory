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
            <Paper className='' elevation={3}>
                <div className=''>
                    <form className='form-container' onSubmit={handleSubmit}>

                        {/* <Grid container spacing={1}> */}
                        <button type='submit' fullWidth varient='contained' color='primary' className=''>
                            Add
                        </button>
                        <div className='title-box'>
                            <Input className='' name='itemName' label='Product Name' handleChange={handleChange} />
                        </div>
                        <div className='text-box'>
                            <Input className='' name='itemSupplier' label='Supplier' handleChange={handleChange} />
                        </div>
                        <div className='text-box'>
                            <Input className='' name='itemLocationInStorage' label='Location in Storage Unit' handleChange={handleChange} />
                        </div>
                        <div className='text-box'>
                            <Input className='' name='itemQuantity' label='Quantity' handleChange={handleChange} type='Quantity' />
                        </div>
                        <div className='text-box'>
                            <Input className='' name='itemPrice' label='Price' handleChange={handleChange} type='Price' />
                        </div>
                        <div className='text-box'>
                            <Input className='' name='itemReorderPackaging' label='Re-Order Packaging Type' handleChange={handleChange} />
                        </div>
                        <div className='text-box'>
                            <Input className='' name='itemCostPerUnit' label='Cost Per Unit' handleChange={handleChange} />
                        </div>
                        <div className='text-box'>
                            <Input className='' name='itemCostPerSpareKit' label='Cost Per Spare Kit' handleChange={handleChange} />
                        </div>
                        <div className='text-box'>
                            <Input className='' name='itemCostPerKit' label='Cost Per Kit' handleChange={handleChange} />
                        </div>
                        <div className='text-box'>
                            <Input className='' name='itemLocation' label='Location in Unit' handleChange={handleChange} />
                        </div>
                        <div className='text-box'>
                            <Input className='' name='maintSpareKit' label='Spare Kit' handleChange={handleChange} />
                        </div>
                        <div className='text-box'>
                            <Input className='' name='maintItemsReOrder' label='Re-order' handleChange={handleChange} />
                        </div>
                        <div className='text-box'>
                            <Input className='' name='maintQuantityReOrder' label='Quantity to Re-Order' handleChange={handleChange} />
                        </div>
                        <div className='text-box'>
                            <Input className='' name='maintPlaced' label='Re-order Placed' handleChange={handleChange} />
                        </div>
                        <div className='text-box'>
                            <Input className='' name='maintBrokenReturn' label='Broken Or Out for Return' handleChange={handleChange} />
                        </div>
                        <div className='text-box'>
                            <Input className='' name='maintReturnWindow' label='Return or Repair Policy' handleChange={handleChange} />
                        </div>
                        <div className='text-box'>
                            <Input className='' name='maintOnSitePOA' label='On-site Plan of Action' handleChange={handleChange} />
                        </div>
                        <div className='text-box'>
                            <Input className='' name='maintCategory' label='New Purchase Category' handleChange={handleChange} />
                        </div>
                        {/* </Grid> */}

                    </form>
                </div>
            </Paper>
        </div >
    )
}

export default OrdersForm;

