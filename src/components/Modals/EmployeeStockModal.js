import React from 'react'
import ReactDom from 'react-dom'
import './css/modal-style.css'



export default function EmployeeStockModal({ open, onClose, children }) {
    if (!open) return null
 




    return ReactDom.createPortal(

        <>
            <div className='employee-modal-overlay' />
            <div className='employee-modal-container'>          
                <button className='employee-close-button' onClick={onClose}>X </button>    
            
                {children}
           
            </div>
        </>,
        document.getElementById('portal')
    )
}
