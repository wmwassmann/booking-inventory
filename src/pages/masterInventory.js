import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { items, employee } from '../actions/auth';
import './css/pages-style.css'
import MasterInventoryIndex from '../components/MasterInventory/MasterInventoryIndex'


const MasterInventory = () => {

    const [currentId, setCurrentId] = useState(0);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(items())
        // dispatch(employee())
    }, [currentId, dispatch])

    console.log(currentId)
    return (
        <div className='page-container'>

                <MasterInventoryIndex 
                    currentId={currentId} 
                    setCurrentId={setCurrentId} 
                />
            
        </div>
    )
}

export default MasterInventory
