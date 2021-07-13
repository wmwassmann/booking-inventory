
import React, { useState } from 'react'
import './css/stock-style.css'
import Modal from '../Modals/EmployeeStockModal'



const InventoryComp = ({ name, quantity, price, reorder, reorderQuant }) => {
    const [isOpen, setIsOpen] = useState(false)


    return (
        <div>
            <button className='employee-stock-card-container' onClick={() => setIsOpen(true)}>
                <div className='employee-stock-title'>
                    {name}                  
                </div>

                <div className='employee-stock-info-container'>
                    <div className='employee-stock-info-item'>
                        Quantity: {quantity}
                    </div>
                    <div className='employee-stock-info-item'>
                        Price: ${price}
                    </div>
                </div>


            </button>
            <Modal open={isOpen}
                onClose={() => setIsOpen(false)}>

                <div className='stock-modal-title'>
                    {name}
                </div>

                <div className='stock-modal-container'>
                    <div className='stock-left'>
                        <div className='stock-modal-item'>
                            Quantity: {quantity}
                        </div>
                        <div className='stock-modal-item'>
                            Price: ${price}
                        </div>
                    </div>
                    <div className='stock-right'>
                        <div className='stock-modal-item'>
                            Re-order: {reorder}
                        </div>
                        <div className='stock-modal-item'>
                            Re-order Quantity: {reorderQuant}
                        </div>
                    </div>
                </div>
            </Modal>
        </div>

    )
}

export default InventoryComp
