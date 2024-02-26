import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import {deleteOrder} from "../../redux/actions/actions"
import Table from "../common/Table"

const Orders = () => {
  const dispatch = useDispatch()
  const orders = useSelector((state) => state.orderedBurgers)
	const [ordersObj, setOrdersObj] = useState([])
	const [searchQuery,setSearchQuery] = useState('');

	const fetchOrders = () => {
		setOrdersObj(orders)
	}

	useEffect(() => {
		fetchOrders()
	}, [])

	const handleDeleteOrder = (orderId) => {
		if (confirm(`Are you sure you want to cancel order ${orderId}`)) {
			const updatedOrders = ordersObj.filter((order) => order.id !== orderId)
			dispatch(deleteOrder(orderId));
			setOrdersObj(updatedOrders)
		}
	}

	const search = (data) => {
		return data.filter((item) => item.id.toString().includes(searchQuery.toString()));
	}

	return (
		<div className="w-3/4 m-auto mt-5 bg-lime-100 dark:bg-gray-700 p-5">
			<h1 className="text-center text-2xl font-semibold text-black dark:text-white">Your Orders</h1>
			<div className="search w-4/5 mt-5 mx-auto">
				<input type="text" name="search" id="search" className="px-3 w-[100%] py-1 outline-none rounded bg-white dark:bg-gray-500 text-black dark:text-white focus:ring focus:border-blue-500" value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} placeholder="search by id"/>
			</div>
			<div className="order-container">
				{ordersObj.length === 0 ? (
					<h1>No orders</h1>
				) : (
					<Table ordersObj={search(ordersObj)} handleDeleteOrder={handleDeleteOrder} />
				)}
			</div>
		</div>
	)
}

export default Orders
