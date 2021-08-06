import React from 'react'
import './css/stock-style.css'

import EditComponent from '../EditComponent/EditComponent';



const MasterInventoryComp = ({ selectedItem, currentId, setCurrentId }) => {
    
    
    const handle_edit = () => {
        setCurrentId(selectedItem._id)  
        const visibility = document.getElementById(`${selectedItem.itemName}-edit-input`)        
        const addInput = document.getElementById(`${selectedItem.itemName}-info-container`)

        var lockButton = document.querySelectorAll('button.master-edit-button')
        var unlockButton = document.querySelectorAll('button.master-save-button')
   

        
        
        for (var i = 0; i < lockButton.length; i++) {
            lockButton[i].classList.add('lock-button')
        }
        for (i = 0; i < unlockButton.length; i++) {
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
        const visibility = document.getElementById(`${selectedItem.itemName}-edit-input`)
        const removeInput = document.getElementById(`${selectedItem.itemName}-info-container`)
        
 
        removeInput.classList.remove('slide-input-in')
        removeInput.classList.add('slide-input-out')
        var lockButton = document.querySelectorAll('button.master-save-button')
        var unlockButton = document.querySelectorAll('button.master-edit-button')
        
        
        for (var i = 0; i < unlockButton.length; i++) {
            unlockButton[i].classList.remove('lock-button')
        }
        for (i = 0; i < unlockButton.length; i++) {
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
                <button className='master-edit-button' id={`${selectedItem.itemName}-edit-button`} onClick={handle_edit}>
                    Edit
                </button>
                <button className='master-save-button lock-button' id={`${selectedItem.itemName}-save-button`} onClick={handle_save}>
                    Save
                </button>
            </div>       
            
            <div className='stock-info-container' id={`${selectedItem.itemName}-info-container`}>                      
                <div className='stock-edit-input' id={`${selectedItem.itemName}-edit-input`}>
                    <EditComponent 
                                key={selectedItem.itemName}                                                                           
                                currentId={currentId}                            
                                setCurrentId={setCurrentId}                            
                        />
                </div>
                <div className='stock-title'>
                    {selectedItem.itemName}
                </div>
                <div className='stock-info-item'>
                    {selectedItem.itemSupplier}
                </div>
                <div className='stock-info-item'>
                    {selectedItem.itemLocationInStorage}
                </div>
                <div className='stock-info-item'>
                    {selectedItem.employeeId}
                </div>
                <div className='stock-info-item'>
                    {selectedItem.itemQuantity}
                </div>
                <div className='stock-info-item'>
                    {selectedItem.itemPrice}
                </div>
  
                
            </div>
             
        </div>



    )
}

export default MasterInventoryComp



