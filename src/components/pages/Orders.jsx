import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { deleteOrder } from "../../redux/actions/actions"
import Table from "../common/Table"
import { TablePagination } from "@mui/material"
import useDebounce from "../../CustomHooks/useDebounce"

const Orders = () => {
	const dispatch = useDispatch()
	const orders = useSelector((state) => state.orderedBurgers)
	const [ordersObj, setOrdersObj] = useState([])
	const [searchQuery, setSearchQuery] = useState("")
	const [page, setPage] = useState(0)
	const [limit, setLimit] = useState(5)
	const [tableData, setTableData] = useState([])
	const [isAscending, setIsAscending] = useState(true);

	const fetchOrders = () => {
		setOrdersObj(orders)
	}

	useEffect(() => {
		fetchOrders()
	}, [])

	const handleInputChange = (e) => {
		setPage(0)
		if(!isNaN(e.target.value)){
			setSearchQuery(e.target.value.toString().trim())
		}
	}

	const handleDeleteOrder = (orderId) => {
		if (confirm(`Are you sure you want to cancel order ${orderId}`)) {
			const updatedOrders = ordersObj.filter((order) => order.id !== orderId)
			dispatch(deleteOrder(orderId))
			setOrdersObj(updatedOrders)
			if(updatedOrders.length <= page*limit){
				setPage(prev=>prev-1)
			}
			// if((((updatedOrders.length / limit)*10) % 10) === 0){
			// 	setPage(prev=>prev-1)
			// }
		}
	}

	const search = (data) => {
		return data.filter((item) =>
			item.id.toString().includes(searchQuery.toString())
		)
	}

	const dataToShow = (data) => {
		return data.slice(page * limit, (page + 1) * limit).sort((a,b)=>isAscending ? a.id-b.id : b.id-a.id);
	}

	const toggleSort = () => {
		setIsAscending(prev=>!prev);
	}

	const handleChangeRowsPerPage = (event) => {
		if (event.target.value == -1) {
			setLimit(ordersObj.length)
			setPage(0)
		} else {
			setLimit(parseInt(event.target.value, 10))
			setPage(0)
		}
	}

	const handleChangePage = (e, newPage) => {
		setPage(newPage)
	}

	const debouncedQuery = useDebounce(searchQuery, 300)

	useEffect(() => {
		if (searchQuery !== "") {
			setTableData(dataToShow(search(ordersObj)))
		} else {
			setTableData(dataToShow(ordersObj))
		}
	}, [debouncedQuery, page, limit, ordersObj, isAscending])

	return (
		<div className="w-3/4 m-auto mt-5 bg-lime-100 dark:bg-gray-700 p-5">
			<h1 className="text-center text-2xl font-semibold text-black dark:text-white">
				Your Orders
			</h1>
			<div className="search w-4/5 mt-5 mx-auto">
				<input
					type="text"
					name="search"
					id="search"
					className="px-3 w-[100%] py-1 outline-none rounded bg-white dark:bg-gray-500 text-black dark:text-white focus:ring focus:border-blue-500"
					value={searchQuery}
					onChange={handleInputChange}
					placeholder="Search order by order id"
				/>
			</div>
			<div className="order-container">
				{ordersObj.length === 0 ? (
					<div className="w-4/5 m-auto text-center mt-5">
						<h1 className="text-xl">No orders</h1>
					</div>
				) : (
					<>
						<Table
							ordersObj={tableData}
							handleDeleteOrder={handleDeleteOrder}
							toggleSort={toggleSort}
							isAscending={isAscending}
						/>
						<TablePagination
							component="div"
							count={ordersObj.length}
							page={page}
							onPageChange={handleChangePage}
							rowsPerPage={limit}
							rowsPerPageOptions={[{ label: "All", value: -1 }, 5, 10, 25]}
							onRowsPerPageChange={handleChangeRowsPerPage}
						/>
					</>
				)}
			</div>
		</div>
	)
}

export default Orders
