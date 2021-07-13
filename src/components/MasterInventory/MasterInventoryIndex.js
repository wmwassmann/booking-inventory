import React from 'react'




import {  useSelector } from 'react-redux';




import MasterInventoryComp from './MasterInventoryComp'
import MasterInventoryCard from './MasterInventoryCards/MasterInventoryCard'
import MasterBanner from './MasterBanner'

import './css/stock-style.css'

import OrdersComponent from '../OrderForm/OrdersComponent';





const MasterInventoryIndex = () => {
    const inventory = useSelector((state) => state.items);







    return (
        <MasterInventoryCard>
  
            <div className='master-container'>
                <MasterBanner />
                {inventory.map(item => (
                    <MasterInventoryComp
                        itemName={item.itemName}
                        itemSupplier={item.itemSupplier}
                        itemLocationInStorage={item.itemLocationInStorage}
                        itemQuantity={item.itemQuantity}
                        employeeId={item.employeeId}
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
                        employeeId={item.employeeId}



                    />

                ))}
                <OrdersComponent />
            </div>

           
        </MasterInventoryCard >
    )
}

export default MasterInventoryIndex
