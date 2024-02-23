import useLocalStorage from "../../CustomHooks/useLocalStorage"
import {
	deleteOrderAction,
	placeOrderAction,
	updateOrderAction,
} from "../actions/actions"

const { setItem, getItem } = useLocalStorage("orders")
const initialState = getItem() || []

const ordersReducer = (state = initialState, action) => {
	switch (action.type) {
		case placeOrderAction:
      const newOrders = [...state,action.payload]
      setItem(newOrders)
			return newOrders

		case deleteOrderAction:
			const filteredOrders = state.filter((order) => order.id != action.payload)
      setItem(filteredOrders)
			return filteredOrders

		case updateOrderAction:
			const updatedOrders = state.map((order) =>
				order.id === action.payload.id ? action.payload : order
			)
      setItem(updatedOrders)
			return updatedOrders

		default:
			return state
	}
}

export default ordersReducer
