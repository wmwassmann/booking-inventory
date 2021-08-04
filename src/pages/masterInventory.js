import React from 'react'
import './css/pages-style.css'
import MasterInventoryIndex from '../components/MasterInventory/MasterInventoryIndex'


const masterInventory = ({ currentId, setCurrentId }) => {



    console.log(currentId)
    console.log(setCurrentId)

    return (
        <div className='page-container'>
           
                <MasterInventoryIndex setCurrentId={setCurrentId} />
            
        </div>
    )
}

export default masterInventory
