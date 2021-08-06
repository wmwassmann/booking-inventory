import React from 'react'




import { useSelector} from 'react-redux';



import { TextField, Grid, Button } from '@material-ui/core';
import MasterInventoryComp from './MasterInventoryComp'
import MasterInventoryCard from './MasterInventoryCards/MasterInventoryCard'
import MasterBanner from './MasterBanner'

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
                    <Grid key={item._id} item xs={12} sm={6} md={6}>
                        <MasterInventoryComp
                            selectedItem={item} 
                            currentId={currentId}
                            setCurrentId={setCurrentId}                      
                            
                            />
                    </Grid>
                ))}

                <OrdersComponent currentId={currentId} setCurrentId={setCurrentId} />
            </div>


        </MasterInventoryCard >
    )
}

export default MasterInventoryIndex

