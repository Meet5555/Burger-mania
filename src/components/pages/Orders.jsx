import React, {useEffect, useState} from 'react'
import useLocalStorage from '../../CustomHooks/useLocalStorage';
import {Link} from 'react-router-dom';

const Orders = () => {
  const {setItem: setOrders, getItem: getOrders} = useLocalStorage('orders');
  const [ordersObj,setOrdersObj] = useState([])

  const tableHeadersClass = "px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider"
  const fetchOrders = () => {
    setOrdersObj(()=>getOrders() || [])
  }

  useEffect(()=>{
    fetchOrders()
  },[]);

  const handleDeleteOrder = (orderId) => {
    if(confirm(`Are you sure you want to cancel order ${orderId}`)){
      const updatedOrders = ordersObj.filter((order) => order.id !== orderId);
      setOrders(updatedOrders);
      setOrdersObj(updatedOrders);
    }
  };

  return (
    <div className='w-3/4 m-auto mt-5 bg-lime-100 p-5'>
      <h1 className='text-center text-2xl font-semibold'>Your Orders</h1>
      <div className="order-container">
        {ordersObj.length === 0 ? (
          <h1>No orders</h1>
        ) : (
          <table className="min-w-full border border-gray-300 divide-y divide-gray-300 mt-5">
            <thead>
              <tr>
                <th className={tableHeadersClass} >
                  Order ID
                </th>
                <th className={tableHeadersClass} >
                  Cheese
                </th>
                <th className={tableHeadersClass} >
                  Patties
                </th>
                <th className={tableHeadersClass} >
                  Salad
                </th>
                <th className="px-6 py-3 bg-gray-200"></th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-300">
              {ordersObj.map((order, index) => (
                <tr key={order.id}>
                  <td className="px-6 py-4 whitespace-no-wrap">{order.id}</td>
                  <td className="px-6 py-4 whitespace-no-wrap">{order.Cheese}</td>
                  <td className="px-6 py-4 whitespace-no-wrap">{order.Patties}</td>
                  <td className="px-6 py-4 whitespace-no-wrap">{order.Salad}</td>
                  <td className="px-6 py-4 whitespace-no-wrap">
                    <Link to={`/order-details/${order.id}`}>
                      <button className="text-white hover:underline mr-2 bg-blue-400 px-2 py-1 rounded-md">Update</button>
                    </Link>
                    <button onClick={() => handleDeleteOrder(order.id)} className="text-white hover:underline bg-red-400 px-2 py-1 rounded-md">Cancel</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}

export default Orders
