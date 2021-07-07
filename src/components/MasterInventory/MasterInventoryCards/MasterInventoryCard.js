import React from 'react';
import './style.css';


function MasterInventoryCard({ children }) {
    return (
        <div className='master-card-wrapper'>
            {children}               
        </div>
    )
}

export default MasterInventoryCard;