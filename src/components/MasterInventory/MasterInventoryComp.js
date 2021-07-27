import React from 'react'
import './css/stock-style.css'
import OrdersComponent from '../OrderForm/OrdersComponent';
import EditComponent from '../EditComponent/EditComponent';
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

        const currentItem = itemName

        localStorage.setItem('currentItem', `${currentItem}`)



        const addInput = document.getElementById(`${itemName}-info-container`)
        const visibility = document.getElementById(`${itemName}-edit-input`)

        addInput.classList.add('slide-input')

        setTimeout(() => {
            addInput.classList.remove('stock-info-container')
            addInput.classList.add('invisible')
        }, 600);
      
        



        visibility.classList.remove('stock-edit-input')
        visibility.classList.add('visible')

    }

    const handle_save = (e) => {
        e.preventDefault()
        console.log('save')
        const removeInput = document.getElementById(`${itemName}-info-container`)

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
            <div className='stock-info-container' id={`${itemName}-info-container`}>                      
                <div className='stock-edit-input' id={`${itemName}-edit-input`}>
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



