import React from 'react'
import EmployeeAccountsComp from './EmployeeAccountsComp'
import { useSelector } from 'react-redux'

const AccountsIndex = () => {

    const employees = useSelector(state => state.employee)

    


    console.log(employees)


    return (
        <div>
            {employees.map((employee) => (
                <EmployeeAccountsComp 
                    username={employee.employeeUsername}
                    employeePosition={employee.employeePosition}
                    email={employee.email}
                    employeeId={employee.employeeId}
                
                />
            ))
            }

            
        </div>
    )
}

export default AccountsIndex
