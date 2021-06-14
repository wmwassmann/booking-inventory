import React, { useState } from 'react'
// import { items } from '../../actions/auth'
import InventoryComp from './InventoryComp'
import InventoryCard from './InventoryCards/InventoryCard'
import {  useSelector } from 'react-redux'

const InventoryIndex = () => {
    const inventory = useSelector((state) => state.items)
   


    return (
        <InventoryCard>
            <div>
                {inventory.map(item => (
                    <InventoryComp
                        name={item.itemName}
                        quantity={item.itemInfo.quantity}
                        price={item.itemInfo.price}
                    />

                ))}
            </div>
        </InventoryCard>
    )
}

export default InventoryIndex
