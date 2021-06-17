import React from 'react'
import './css/stock-style.css'
// import {  useSelector } from 'react-redux'

// import { stock } from '../../actions/auth';


const InventoryComp = ({ name, quantity, price }) => {

    return (
        <div className='stock-card-container'>
            <div className='stock-title'>
                {name}
            </div>

            <div className='stock-info-container'>
                <div className='stock-info-item'>
                    Quantity: {quantity}
                </div>
                <div className='stock-info-item'>
                    Price: ${price}
                </div>           
            </div>

        </div>

    )
}

export default InventoryComp
