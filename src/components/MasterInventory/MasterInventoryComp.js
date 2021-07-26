import React from 'react'
import './css/stock-style.css'
import OrdersComponent from '../OrderForm/OrdersComponent';
// import {  useSelector } from 'react-redux'

// import { stock } from '../../actions/auth';


const MasterInventoryComp = ({
    itemName,
    itemSupplier,
    itemLocationInStorage,
    employeeId,
    itemQuantity,
    itemPrice,
    itemReorderPackaging,
    itemCostPerUnit,
    itemCostPerSpareKit,
    itemCostPerKit,
    itemLocation,
    maintSpareKit,
    maintItemsReOrder,
    maintQuantityReOrder,
    maintBrokenReturn,
    maintReturnWindow,
    maintOnSitePOA,
    maintCategory
}) => {



    const handle_edit = (e) => {
        e.preventDefault()
        console.log('edit')
        const addInput = document.getElementById('stock-info-container')

        addInput.classList.add('slide-input')

    }

    const handle_save = (e) => {
        e.preventDefault()
        console.log('save')
        const removeInput = document.getElementById('stock-info-container')

        removeInput.classList.remove('slide-input')

    }


    return (
        <div className='master-cont'>
            <div className='inventory-button-container'>
                <button className='master-edit-button' onClick={handle_edit}>
                    Edit
                </button>
                <button className='master-edit-button' onClick={handle_save}>
                    Save
                </button>
            </div>        
            <div className='stock-info-container' id='stock-info-container'>
                <div className='stock-edit-input'>
                    <OrdersComponent />

                </div>
                <div className='stock-title'>
                    {itemName}
                </div>
                <div className='stock-info-item'>
                    {itemSupplier}
                </div>
                <div className='stock-info-item'>
                    {itemLocationInStorage}
                </div>
                <div className='stock-info-item'>
                    {employeeId}
                </div>
                <div className='stock-info-item'>
                    {itemQuantity}
                </div>
                <div className='stock-info-item'>
                    {itemPrice}
                </div>
                <div className='stock-info-item'>
                    {itemReorderPackaging}
                </div>
                <div className='stock-info-item'>
                    {itemCostPerUnit}
                </div>
                <div className='stock-info-item'>
                    {itemCostPerSpareKit}
                </div>
                <div className='stock-info-item'>
                    {itemCostPerKit}
                </div>
                <div className='stock-info-item'>
                    {itemLocation}
                </div>
                <div className='stock-info-item'>
                    {maintSpareKit}
                </div>
                <div className='stock-info-item'>
                    {maintItemsReOrder}
                </div>
                <div className='stock-info-item'>
                    {maintQuantityReOrder}
                </div>
                <div className='stock-info-item'>
                    {maintBrokenReturn}
                </div>
                <div className='stock-info-item'>
                    {maintReturnWindow}
                </div>
                <div className='stock-info-item'>
                    {maintOnSitePOA}
                </div>
                <div className='stock-info-item'>
                    {maintCategory}
                </div>

            </div>
        </div>



    )
}

export default MasterInventoryComp



