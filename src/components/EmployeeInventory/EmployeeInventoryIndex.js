import React, { useState } from 'react'
// import { items } from '../../actions/auth'
import EmployeeInventoryComp from './EmployeeInventoryComp'
import EmployeeInventoryCard from './EmployeeInventoryCards/EmployeeInventoryCard'
import {  useSelector } from 'react-redux'

const EmployeeInventoryIndex = () => {
    const inventory = useSelector((state) => state.items)
   


    return (
        <EmployeeInventoryCard>
            <div>
                {inventory.map(item => (

                    // EMPLOYEE Portal
                    // Add photo for if something is broken
                    // Needs repair option
                    // State counter (useState)
                    // Last report
                    // Submit new report - PDF file with a full report of things in the inventory, what is missing, what was sold, what was added.
                    // Add in a notification
                    // Threshold set on managers side check under quantity notifies them if they need to order more.
                    // Remove the crazy authentication for the inventory.

                    // MANAGER Portal
                    // Needs to be able to see all employees. 
                    // Warehouse inventory levels.
                    // Adding new types of inventory - who it goes to/employees/warehouse. 
                    // MANAGER Needs to be able to have desktop.
                    // Pending inventory - What's on the way, what needs ordering.
                    // Footer difference for Management and Employee 
                    //  

                    // On each kit, what are the missing, what's the total value. 
                    // Manager (Isaiah) Email is set at the master email
                    // ADMIN, MANAGER, EMPLOYEE
                    // Toggling and the like 

                    // Orders is just checking the stuff and things.

                    <EmployeeInventoryComp
                        name={item.itemName}
                        quantity={item.itemQuantity}
                        price={item.itemPrice}
                    />

                ))}
            </div>
        </EmployeeInventoryCard>
    )
}

export default EmployeeInventoryIndex
