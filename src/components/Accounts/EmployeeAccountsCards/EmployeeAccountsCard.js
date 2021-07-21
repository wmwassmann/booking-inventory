import React from 'react';
import './style.css';


function AccountsCard({ children }) {
    return (
        <div className='card-wrapper'>
            {children}               
        </div>
    )
}

export default AccountsCard;