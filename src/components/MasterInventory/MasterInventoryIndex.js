import React, { useState, useEffect } from 'react'




import {  useSelector, useDispatch } from 'react-redux';



import { TextField, Grid, Button } from '@material-ui/core';
import MasterInventoryComp from './MasterInventoryComp'
import MasterInventoryCard from './MasterInventoryCards/MasterInventoryCard'
import MasterBanner from './MasterBanner'
import { addItem, editItem } from '../../actions/auth'

import './css/stock-style.css'

import OrdersComponent from '../OrderForm/OrdersComponent';






const MasterInventoryIndex = () => {
    const [currentId, setCurrentId] = useState(0);
    const [itemData, setItemData] = useState({ itemName: '', itemLocation: '', employeeId: ''});
    // const inventory = useSelector((state) => state.items);
    const inventory = useSelector((state) => (currentId ? state.items.find((item) => item._id === currentId) : null));
    const dispatch = useDispatch();

    useEffect(() => {
        if (inventory) setItemData(inventory)    
    }, [inventory])

    console.log(inventory)

    const clear = () => {
        setCurrentId(0);
        setItemData({ itemName: '', itemLocation: '', employeeId: '' });
      };
    


const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('submitted')

    if (currentId === 0) {
        dispatch(addItem(itemData));
        clear();
      } else {
        dispatch(editItem(currentId, itemData));
        clear();
      }
}


    return (
        <MasterInventoryCard>
  
            <div className='master-container'>
                <MasterBanner />
                <form onSubmit={handleSubmit}>
                <Button variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <TextField name='Item Name' varient='outlined' label='Item Name' fullWidth value={itemData.itemName} onChange={(e)=> setItemData({...itemData, itemName: e.target.value })} />
                </ form>
          
                <OrdersComponent currentId={currentId} setCurrentId={setCurrentId} />
            </div>

           
        </MasterInventoryCard >
    )
}

export default MasterInventoryIndex



      {/* {inventory.map((item) => (
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