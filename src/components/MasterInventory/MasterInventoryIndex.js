import React, { useState } from 'react'
import { addItem } from '../../actions/auth'



import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'



import MasterInventoryComp from './MasterInventoryComp'
import MasterInventoryCard from './MasterInventoryCards/MasterInventoryCard'

import './css/stock-style.css'

import OrdersComponent from '../OrderForm/OrdersComponent';





const MasterInventoryIndex = () => {
    const inventory = useSelector((state) => state.items);







    return (
        <MasterInventoryCard>
            <div className='master-container'>
                <div className='master-card-container'>


                        <div className='master-title'>
                            Item Name
                        </div>
                        <div className='master-info-item'>
                            Supplier
                        </div>
                        <div className='master-info-item'>
                            Location
                        </div>
                        <div className='master-info-item'>
                            Quantity
                        </div>
                        <div className='master-info-item'>
                            Price
                        </div>
                        <div className='master-info-item'>
                            Re-Order Packaging
                        </div>
                        <div className='master-info-item'>
                            Cost/Unit
                        </div>
                        <div className='master-info-item'>
                            Cost/Kit
                        </div>
                        <div className='master-info-item'>
                            Location
                        </div>
                        <div className='master-info-item'>
                            Spare Kit
                        </div>
                        <div className='master-info-item'>
                            Re-order
                        </div>
                        <div className='master-info-item'>
                            Broken Return
                        </div>
                        <div className='master-info-item'>
                            Return Window
                        </div>
                        <div className='master-info-item'>
                            Plan of Action
                        </div>
                        <div className='master-info-item'>
                            Category
                        </div>
               

                </div>
                {inventory.map(item => (

                    <MasterInventoryComp


                        itemName={item.itemName}
                        itemSupplier={item.itemSupplier}
                        itemLocationInStorage={item.itemLocationInStorage}
                        itemQuantity={item.itemQuantity}
                        itemPrice={item.itemPrice}
                        itemReorderPackaging={item.itemReorderPackaging}
                        itemCostPerUnit={item.itemCostPerUnit}
                        itemCostPerSpareKit={item.itemCostPerSpareKit}
                        itemCostPerKit={item.itemCostPerKit}
                        itemLocation={item.itemLocation}
                        maintSpareKit={item.maintSpareKit}
                        maintItemsReOrder={item.maintItemsReOrder}
                        maintQuantityReOrder={item.maintQuantityReOrder}
                        maintPlace={item.maintPlace}
                        maintBrokenReturn={item.maintBrokenReturn}
                        maintReturnWindow={item.maintReturnWindow}
                        maintOnSitePOA={item.maintOnSitePOA}
                        maintCategory={item.maintCategory}
                        employeeKit={item.employeeKit}



                    />

                ))}
            </div>

            <div className='master-card-container'>
                <OrdersComponent />
            </div>
        </MasterInventoryCard >
    )
}

export default MasterInventoryIndex
