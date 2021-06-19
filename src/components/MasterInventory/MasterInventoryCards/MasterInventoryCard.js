import React from 'react';
import './style.css';


function InventoryCard({ children }) {
    return (
        <div className='card-wrapper'>
            {children}               
        </div>
    )
}

export default InventoryCard;