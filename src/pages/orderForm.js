import React from 'react'
import OrdersComponent from '../components/OrderForm/OrdersComponent'

const orderForm = () => {
    return (
        <div className='page-container'>
            <div>
                <OrdersComponent />
            </div>
            <div>
                Order form
            </div>
        </div>
    )
}

export default orderForm
