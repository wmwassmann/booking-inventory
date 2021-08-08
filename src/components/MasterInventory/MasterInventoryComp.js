import React from 'react'
import EditComponent from '../EditComponent/EditComponent';
import './css/stock-style.css'


const MasterInventoryComp = ({ selectedItem, currentId, setCurrentId }) => {
    
    
    const handle_edit = () => {
        setCurrentId(selectedItem._id)  
        const visibility = document.getElementById(`${selectedItem._id}-edit-input`)        
        const addInput = document.getElementById(`${selectedItem._id}-info-container`)
        const lowerButton = document.getElementById(`${selectedItem._id}-button-container`)

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
        lowerButton.classList.add('lower-button')
        
        visibility.classList.remove('stock-edit-input')
        visibility.classList.add('visible')
        console.log(selectedItem._id)

       
    }
    
   
    const handle_save = (e) => {
        e.preventDefault()
        console.log('save')
        const visibility = document.getElementById(`${selectedItem._id}-edit-input`)
        const removeInput = document.getElementById(`${selectedItem._id}-info-container`)
        const raiseButton = document.getElementById(`${selectedItem._id}-button-container`)
 
        raiseButton.classList.remove('lower-button')
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
            <div id={`${selectedItem._id}-button-container`} className='inventory-button-container'>
                <button className='master-edit-button' id={`${selectedItem._id}-edit-button`} onClick={handle_edit}>
                    Edit
                </button>
                <button className='master-save-button lock-button' id={`${selectedItem._id}-save-button`} onClick={handle_save}>
                    Save
                </button>
            </div>       
            
            <div className='stock-info-container' id={`${selectedItem._id}-info-container`}>                      
                <div className='stock-edit-input' id={`${selectedItem._id}-edit-input`}>
                    <EditComponent 
                                key={selectedItem.itemName}  
                                selectedItem={selectedItem}                                                                         
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



