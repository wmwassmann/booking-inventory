import React from 'react'
import './css/stock-style.css'

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
        const visibility = document.getElementById(`${itemName}-edit-input`)
        
        const addInput = document.getElementById(`${itemName}-info-container`)
        var lockButton = document.querySelectorAll('button.master-edit-button')
        var unlockButton = document.querySelectorAll('button.master-save-button')
        
        
        for (var i = 0; i < lockButton.length; i++) {
            lockButton[i].classList.add('lock-button')
        }
        for (var i = 0; i < unlockButton.length; i++) {
            unlockButton[i].classList.remove('lock-button')
        }
        
        



        addInput.classList.remove('slide-input-out')
        addInput.classList.add('slide-input-in')
        
        visibility.classList.remove('stock-edit-input')
        visibility.classList.add('visible')
    }
    
    const handle_save = (e) => {
        e.preventDefault()
        console.log('save')
        const visibility = document.getElementById(`${itemName}-edit-input`)
        const removeInput = document.getElementById(`${itemName}-info-container`)
        
        

        removeInput.classList.remove('slide-input-in')
        removeInput.classList.add('slide-input-out')
        var lockButton = document.querySelectorAll('button.master-save-button')
        var unlockButton = document.querySelectorAll('button.master-edit-button')
        
        
        for (var i = 0; i < unlockButton.length; i++) {
            unlockButton[i].classList.remove('lock-button')
        }
        for (var i = 0; i < unlockButton.length; i++) {
            lockButton[i].classList.add('lock-button')
        }
        visibility.classList.add('stock-edit-input')
        setTimeout(() => {            
            visibility.classList.remove('visible')
            removeInput.classList.remove('slide-input-out')
        }, 600);
        




    }


    return (
        <div className='master-cont'>
            <div className='inventory-button-container'>
                <button className='master-edit-button' id={`${itemName}-edit-button`} onClick={handle_edit}>
                    Edit
                </button>
                <button className='master-save-button lock-button' id={`${itemName}-save-button`} onClick={handle_save}>
                    Save
                </button>
            </div>        
            <div className='stock-info-container' id={`${itemName}-info-container`}>                      
                {/* <div className='stock-edit-input' id={`${itemName}-edit-input`}>
                    <EditComponent />
                </div> */}
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
                <div className='stock-edit-input' id={`${itemName}-edit-input`}>
                    <EditComponent />
                </div>
            </div>
        </div>



    )
}

export default MasterInventoryComp



