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


const OrdersForm = ({ itemId, item, currentId, setCurrentId }) => {


    // const [position, setPosition] = useState();
    const [myItem, setMyItem] = useState(initialState);
    const dispatch = useDispatch()
    const history = useHistory()
  





    // Signup and signin toggle
    const handleSubmit = (e) => {
        // Axios here
        e.preventDefault()
        // setCurrentId({itemId})
        // const params = currentId.itemId
        // const paramsValue = JSON.stringify(params)

        // const id = JSON.parse(paramsValue)

        // item._id.toString()
        // console.log(id)
        console.log(item)




        // dispatch(editItem(id))

        // console.log(id)

        // dispatch(addItem(form, history))
        // console.log(form)
        // console.log(item)
        // console.log("currentId: ", currentId)
     


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
                <div className='edit-text-box'>
                    <Input name='itemReorderPackaging' label='Re-Order Packaging' handleChange={handleChange} />
                </div>
                <div className='edit-text-box'>
                    <Input name='itemCostPerUnit' label='Cost Per Unit' handleChange={handleChange} />
                </div>
                <div className='edit-text-box'>
                    <Input name='itemCostPerSpareKit' label='Cost Per Spare Kit' handleChange={handleChange} />
                </div>
                <div className='edit-text-box'>
                    <Input name='itemCostPerKit' label='Cost Per Kit' handleChange={handleChange} />
                </div>
                <div className='edit-text-box'>
                    <Input name='itemLocation' label='Location in Unit' handleChange={handleChange} />
                </div>
                <div className='edit-text-box'>
                    <Input name='maintSpareKit' label='Spare Kit' handleChange={handleChange} />
                </div>
                <div className='edit-text-box'>
                    <Input name='maintItemsReOrder' label='Re-order' handleChange={handleChange} />
                </div>
                <div className='edit-text-box'>
                    <Input name='maintQuantityReOrder' label='Quantity to Re-Order' handleChange={handleChange} />
                </div>
                <div className='edit-text-box'>
                    <Input name='maintPlaced' label='Re-order Placed' handleChange={handleChange} />
                </div>
                {/* <div className='edit-text-box'>
                            <Input  name='maintBrokenReturn' label='Durability Status' handleChange={handleChange} />
                        </div> */}



            </form>


        </div >
    )
}

export default OrdersForm;

