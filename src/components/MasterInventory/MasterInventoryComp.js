import React from 'react'
import EditComponent from '../EditComponent/EditComponent';
import { useDispatch } from 'react-redux';
import { removeItem } from '../../actions/auth'
import './css/stock-style.css'


const MasterInventoryComp = ({ selectedItem, currentId, setCurrentId }) => {
    const id = selectedItem._id
    const dispatch = useDispatch()
    
    
    const handle_edit = () => {
        setCurrentId(id)  
        const visibility = document.getElementById(`${id}-edit-input`)        
        const addInput = document.getElementById(`${id}-info-container`)
        const lowerButton = document.getElementById(`${id}-button-container`)

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

       
    }
    
   
    const handle_delete = (e) => {
        e.preventDefault() 
        dispatch(removeItem(id))
    
        window.location.reload(true)       
    }


    return (
        <div className='master-cont'>
            <div id={`${id}-button-container`} className='inventory-button-container'>
                <button className='master-edit-button' id={`${id}-edit-button`} onClick={handle_edit}>
                    Edit
                </button>
                <button className='master-edit-button' id={`${id}-save-button`} onClick={handle_delete}>
                    Delete
                </button>
            </div>       
            
            <div className='stock-info-container' id={`${id}-info-container`}>                      
                <div className='stock-edit-input' id={`${id}-edit-input`}>
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



