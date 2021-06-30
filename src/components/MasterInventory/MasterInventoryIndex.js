import React, { useState } from 'react'
// import { items } from '../../actions/auth'
import { Button, Paper, Grid, Typography, Container } from '@material-ui/core'
import MasterInventoryComp from './MasterInventoryComp'
import MasterInventoryCard from './MasterInventoryCards/MasterInventoryCard'
import Input from './MasterInventoryForm/MasterInventoryInput'
import { useSelector } from 'react-redux'
import './css/stock-style.css'

const MasterInventoryIndex = () => {
    const inventory = useSelector((state) => state.items)








    return (
        <MasterInventoryCard>
            <div className='master-container'>
                <div className='master-card-container'>


                    <div className='master-info-container'>
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
                            Price
                        </div>
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
            <div className='master-add-container'>
                <button type='submit' className='master-add-button'>
                    Add
                </button>
                <form className='master-add-list'>
                    <div className='master-title-input'>
                        <Input className='' name='itemName' label='Item Name' />
                    </div>
                    <div className='master-form-input'>
                        <Input className='' name='itemName' label='Item Name' />
                    </div>
                    <div className='master-form-input'>
                        <Input className='' name='itemName' label='Item Name' />
                    </div>
                    <div className='master-form-input'>
                        <Input className='' name='itemName' label='Item Name' />
                    </div>
                    <div className='master-form-input'>
                        <Input className='' name='itemName' label='Item Name' />
                    </div>
                    <div className='master-form-input'>
                        <Input className='' name='itemName' label='Item Name' />
                    </div>
                    <div className='master-form-input'>
                        <Input className='' name='itemName' label='Item Name' />
                    </div>
                    <div className='master-form-input'>
                        <Input className='' name='itemName' label='Item Name' />
                    </div>
                    <div className='master-form-input'>
                        <Input className='' name='itemName' label='Item Name' />
                    </div>          
               

                </form>

            </div>
        </MasterInventoryCard >
    )
}

export default MasterInventoryIndex
