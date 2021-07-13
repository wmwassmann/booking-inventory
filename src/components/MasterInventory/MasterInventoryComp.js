import React from 'react'
import './css/stock-style.css'
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


    const handle_edit = () => {

    }


    return (

            <div className='stock-info-container'>
            <button className='master-edit-button' onClick={handle_edit}>
                Edit
            </button>
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
        


    )
}

export default MasterInventoryComp



