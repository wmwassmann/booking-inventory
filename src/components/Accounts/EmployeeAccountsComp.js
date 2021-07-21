
import React, { useState } from 'react'
import './css/employee-style.css'
import Modal from '../Modals/EmployeeStockModal'



const AccountsComp = ({ username, employeePosition, email, employeeId }) => {
    const [isOpen, setIsOpen] = useState(false)


    return (
        <div>
            <button className='employee-employee-card-container' onClick={() => setIsOpen(true)}>
                <div className='employee-employee-title'>
                    Username: {username}                  
                </div>

                <div className='employee-employee-info-container'>            
                    <div className='employee-employee-info-item'>
                        Employee ID#: {employeeId}
                    </div>
                </div>


            </button>
            <Modal open={isOpen}
                onClose={() => setIsOpen(false)}>

                <div className='employee-modal-title'>
                Username: {username}
                </div>

                <div className='employee-modal-container'>
                    <div className='employee-left'>
                        <div className='employee-modal-item'>
                        Position: {employeePosition}
                        </div>
                        <div className='employee-modal-item'>
                        Email: {email}
                        </div>
                    </div>
                    <div className='employee-right'>
                        <div className='employee-modal-item'>
                        Employee ID#: {employeeId}
                        </div>
                      
                    </div>
                </div>
            </Modal>
        </div>

    )
}

export default AccountsComp
