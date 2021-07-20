import React from 'react'
import { useSelector } from 'react-redux'

const AccountsComponent = () => {

    const employees = useSelector(state => state.employees)
    console.log(employees)


    return (
        <div>
       
        </div>
    )
}

export default AccountsComponent
