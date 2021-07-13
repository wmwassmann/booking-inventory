import React, { useState } from 'react'
// import { items } from '../../actions/auth'
import EmployeeInventoryComp from './EmployeeInventoryComp'
import EmployeeInventoryCard from './EmployeeInventoryCards/EmployeeInventoryCard'
import { useSelector } from 'react-redux'
import './css/stock-style.css'

const EmployeeInventoryIndex = () => {
    const inventory = useSelector(state => state.items)
    
    // Logged in Employee
    const user = JSON.parse(localStorage.getItem('currentEmployee'))
    
    // Employee ID on the item
    const matchId = inventory.map(item => item.employeeId)
    
    let [id, setId] = useState('')
    console.log(id)

    function match()  {
        setId = matchId
    }

    match()

    return (
        <EmployeeInventoryCard>
            <div className='map-container'>
                {inventory.map(item => {
                    return user.result.employeeId == matchId ?

                        <EmployeeInventoryComp
                            name={item.itemName}
                            quantity={item.itemQuantity}
                            price={item.itemPrice}

                            reorder={item.maintItemsReOrder}
                            reorderQuant={item.maintQuantityReOrder}
                        />
                        :
                        <h1>NA</h1>
                })}
            </div>
        </EmployeeInventoryCard>
    )
}

export default EmployeeInventoryIndex
