import React, { useState, useEffect } from 'react'




import { useSelector, useDispatch } from 'react-redux';



import { TextField, Grid, Button } from '@material-ui/core';
import MasterInventoryComp from './MasterInventoryComp'
import MasterInventoryCard from './MasterInventoryCards/MasterInventoryCard'
import MasterBanner from './MasterBanner'
import { addItem, editItem } from '../../actions/auth'

import './css/stock-style.css'

import OrdersComponent from '../OrderForm/OrdersComponent';



// OLD VERSION


const MasterInventoryIndex = ({ currentId, setCurrentId }) => {
    const inventory = useSelector((state) => state.items);

    return (
        <MasterInventoryCard>

            <div className='master-container'>
                <MasterBanner />
                {inventory.map((item) => (
                    <MasterInventoryComp
                        selectedItem={item}
                        // key={item._id}
                        // itemName={item.itemName}
                        // itemSupplier={item.itemSupplier}
                        // itemLocationInStorage={item.itemLocationInStorage}
                        // itemQuantity={item.itemQuantity}
                        // employeeId={item.employeeId}
                        // itemPrice={item.itemPrice}
                        // itemReorderPackaging={item.itemReorderPackaging}
                        // itemCostPerUnit={item.itemCostPerUnit}
                        // itemCostPerSpareKit={item.itemCostPerSpareKit}
                        // itemCostPerKit={item.itemCostPerKit}
                        // itemLocation={item.itemLocation}
                        // maintSpareKit={item.maintSpareKit}
                        // maintItemsReOrder={item.maintItemsReOrder}
                        // maintQuantityReOrder={item.maintQuantityReOrder}
                        // maintPlace={item.maintPlace}
                        // maintBrokenReturn={item.maintBrokenReturn}
                        // maintReturnWindow={item.maintReturnWindow}
                        // maintOnSitePOA={item.maintOnSitePOA}
                        // maintCategory={item.maintCategory}
                        // currentId={currentId}
                        // setCurrentId={setCurrentId}




                    />

                ))}

                <OrdersComponent currentId={currentId} setCurrentId={setCurrentId} />
            </div>


        </MasterInventoryCard >
    )
}

export default MasterInventoryIndex

{/* 
                    <form onSubmit={handleSubmit}>
                    <Button variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                    <TextField name='Item Name' varient='outlined' label='Item Name' fullWidth value={itemData.itemName} onChange={(e) => setItemData({ ...itemData, itemName: e.target.value })} />
                    <TextField name='Item Location' varient='outlined' label='Item Location' fullWidth value={itemData.itemLocation} onChange={(e) => setItemData({ ...itemData, itemLocation: e.target.value })} />
                    <TextField name='Employee Id' varient='outlined' label='Employee Id' fullWidth value={itemData.employeeId} onChange={(e) => setItemData({ ...itemData, employeeId: e.target.value })} />
                </ form> */}

// OLD VERSION MAPPING



{/* 
                {itemDisplay.map((item) => (
                    <MasterInventoryComp
                        key={item._id}
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
                        currentId={currentId}
                        setCurrentId={setCurrentId}                   
                    />
                ))} */}