import React from "react"
import { Link } from "react-router-dom"

const Table = ({ ordersObj, handleDeleteOrder }) => {
	const tableHeadersClass =
		"px-6 py-3 bg-gray-200 dark:bg-gray-400 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider text-black dark:text-white text-center"

	return (
		<>
			<table className="min-w-full border border-gray-300 dark:border-gray-900 divide-y divide-gray-300 dark:divide-gray-900 mt-5 ">
				<thead>
					<tr>
						<th className={tableHeadersClass}>Order ID</th>
						<th className={tableHeadersClass}>Cheese</th>
						<th className={tableHeadersClass}>Patties</th>
						<th className={tableHeadersClass}>Salad</th>
						<th className="px-6 py-3 bg-gray-200 dark:bg-gray-400 text-center"></th>
					</tr>
				</thead>
				<tbody className="bg-white dark:bg-gray-500 divide-y divide-gray-300 dark:divide-gray-900 text-black dark:text-white text-center">
					{ordersObj.length === 0 ? (
						<tr>
							<td
								colSpan={4}
								className="py-2"
							>
								No Match Found
							</td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
					) : (
						ordersObj.map((order, index) => (
							<tr key={order.id}>
								<td className="px-6 py-4 whitespace-no-wrap">{order.id}</td>
								<td className="px-6 py-4 whitespace-no-wrap">{order.Cheese}</td>
								<td className="px-6 py-4 whitespace-no-wrap">
									{order.Patties}
								</td>
								<td className="px-6 py-4 whitespace-no-wrap">{order.Salad}</td>
								<td className="px-6 py-4 whitespace-no-wrap">
									<Link to={`/order-details/${order.id}`}>
										<button className="text-white hover:underline mr-2 bg-blue-400 px-2 py-1 rounded-md">
											Update
										</button>
									</Link>
									<button
										onClick={() => handleDeleteOrder(order.id)}
										className="text-white hover:underline bg-red-400 px-2 py-1 rounded-md"
									>
										Cancel
									</button>
								</td>
							</tr>
						))
					)}
				</tbody>
			</table>
		</>
	)
}

export default Table
