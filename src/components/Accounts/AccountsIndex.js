import React from 'react'
import EmployeeAccountsComp from './EmployeeAccountsComp'
import EmployeeAccountsCard from './EmployeeAccountsCards/EmployeeAccountsCard'
import { useSelector } from 'react-redux'

const AccountsIndex = () => {

    const employees = useSelector(state => state.employee)




    console.log(employees)


    return (
        <EmployeeAccountsCard>

            <div className='map-container'>
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
        </EmployeeAccountsCard>
    )
}



export default AccountsIndex
