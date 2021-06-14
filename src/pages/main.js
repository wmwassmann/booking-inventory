import React from 'react'
import { NavLink } from 'react-router-dom'

const main = () => {
    return (
    <div className='main-menu-background'>
        <div className='main-menu-container'>              
                <div className='menu-link'>
                    <NavLink className="nav-link border-pop" to='/inventory' exact>INVENTORY</NavLink>
                </div>
                <div className='menu-link'>
                    <NavLink className="nav-link border-pop" to='/auth' exact>LOGIN</NavLink>
                </div>              
                {/* <div className='menu-link'>
                    <NavLink className="nav-link border-pop" to='/intro' exact>INTRO</NavLink>
                </div>               */}
        </div>
    </div>
    )
}

export default main
