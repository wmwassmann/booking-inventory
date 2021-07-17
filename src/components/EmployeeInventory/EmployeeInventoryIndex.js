import React from 'react'
// import { items } from '../../actions/auth'
import EmployeeInventoryComp from './EmployeeInventoryComp'
import EmployeeInventoryCard from './EmployeeInventoryCards/EmployeeInventoryCard'
import { useSelector } from 'react-redux'
import './css/stock-style.css'

const EmployeeInventoryIndex = () => {
    const inventory = useSelector(state => state.items)
    let currentId = '1234567'
    let checkId = inventory.filter(function(item) {
        return currentId.indexOf(item.currentId) === '1234567';
    })

    // forEach(inventory) {
    //     if (items)
    // }

    console.log(checkId)
    return (
        <EmployeeInventoryCard>
            <div className='map-container'>
                {inventory.map((item) => (


                    <EmployeeInventoryComp
                        name={item.itemName}
                        quantity={item.itemQuantity}
                        price={item.itemPrice}

                        reorder={item.maintItemsReOrder}
                        reorderQuant={item.maintQuantityReOrder}
                    />

                ))
                }

            </div>
        </EmployeeInventoryCard>
    )
}

export default EmployeeInventoryIndex
