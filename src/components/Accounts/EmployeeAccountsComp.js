
import React, { useState } from 'react'
import './css/employee-style.css'
import Modal from '../Modals/EmployeeStockModal'



const AccountsComp = ({ username, employeePosition, email, employeeId }) => {
    const [isOpen, setIsOpen] = useState(false)


    return (
        <div>
            <button className='employee-stock-card-container' onClick={() => setIsOpen(true)}>
                <div className='employee-stock-title'>
                    Username: {username}                  
                </div>

                <div className='employee-stock-info-container'>            
                    <div className='employee-stock-info-item'>
                        Employee ID#: {employeeId}
                    </div>
                </div>


            </button>
            <Modal open={isOpen}
                onClose={() => setIsOpen(false)}>

                <div className='stock-modal-title'>
                Username: {username}
                </div>

                <div className='stock-modal-container'>
                    <div className='stock-left'>
                        <div className='stock-modal-item'>
                        Position: {employeePosition}
                        </div>
                        <div className='stock-modal-item'>
                        Email: {email}
                        </div>
                    </div>
                    <div className='stock-right'>
                        <div className='stock-modal-item'>
                        Employee ID#: {employeeId}
                        </div>
                      
                    </div>
                </div>
            </Modal>
        </div>

    )
}

export default AccountsComp
