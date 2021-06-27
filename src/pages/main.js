
import React, { useState, useEffect } from 'react'



const Main = () => {
    const [position, setPosition] = useState('')

    const currentEmployeePosition = JSON.parse(localStorage.getItem('currentEmployee'))
    const myPos = currentEmployeePosition.result.employeePosition
    
    useEffect(() => {
        if (myPos === null ) {
            window.location.href = 'http://localhost:3000/auth'
        }

        if (myPos === 'Manager') {
            setPosition('Manager')
            window.location.href = 'http://localhost:3000/orders'
        } 

        if (myPos === 'Employee') {
            window.location.href = 'http://localhost:3000/employeeInventory'
        }
        console.log(position)
    })

 

    return (
        <div className='main-menu-background'>
            <div className='main-menu-container'>
                {/* <div className='menu-link'>
                    <NavLink className="nav-link border-pop" to='/inventory' exact>INVENTORY</NavLink>
                </div>
                <div className='menu-link'>
                    <NavLink className="nav-link border-pop" to='/auth' exact>LOGIN</NavLink>
                </div>               */}
                {/* <button onClick={setLocal()}>
                    Hio
                </button>
       */}
            </div>
        </div>
    )
}

export default Main
