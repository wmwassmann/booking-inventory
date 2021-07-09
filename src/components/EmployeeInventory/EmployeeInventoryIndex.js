import React, { useState } from 'react'
// import { items } from '../../actions/auth'
import EmployeeInventoryComp from './EmployeeInventoryComp'
import EmployeeInventoryCard from './EmployeeInventoryCards/EmployeeInventoryCard'
import {  useSelector } from 'react-redux'
import './css/stock-style.css'

const EmployeeInventoryIndex = () => {
    const inventory = useSelector((state) => state.items)
   


    return (
        <EmployeeInventoryCard>
            <div className='map-container'>
                {inventory.map(item => (                
                    
                    <EmployeeInventoryComp
                    name={item.itemName}
                    quantity={item.itemQuantity}
                    price={item.itemPrice}
               

                        reorder={item.maintItemsReOrder}
                        reorderQuant={item.maintQuantityReOrder}
                    />

                    ))}
            </div>
        </EmployeeInventoryCard>
    )
}

export default EmployeeInventoryIndex
