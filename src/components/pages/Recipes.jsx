import React, { useState } from "react"
import Burger from "../common/Burger"
import IngredientItem from "../common/IngredientItem"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useDispatch, useSelector } from "react-redux"
import { placeOrder } from "../../redux/actions/actions"
import {useTheme} from "../../contexts/themeContext"

const Recipes = () => {
	const dispatch = useDispatch()
	const orders = useSelector((state) => state.orderedBurgers)
	const [ingredients, setIngredients] = useState({
		Cheese: 1,
		Patties: 1,
		Salad: 2,
	})
	const { theme } = useTheme()

	const handleOrderClick = () => {
		const newOrder = {
			id: orders.length != 0 ? orders[orders.length - 1].id + 1 : 1,
			...ingredients,
		}

		dispatch(placeOrder(newOrder))
		toast.success("Order Sent!", {
			position: "top-center",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: theme,
		})
	}

	return (
		<div className="container w-2/4 p-5 text-center bg-red-50 m-auto mt-6 dark:bg-gray-700">
			<ToastContainer />
			<Burger
				cheeseQuantity={ingredients.Cheese}
				saladQuantity={ingredients.Salad}
				pattiesQuantity={ingredients.Patties}
			/>
			<div className="my-10 w-2/4 m-auto">
				<IngredientItem
					item={"Cheese"}
					itemCount={ingredients.Cheese}
					updateItem={setIngredients}
				/>
				<IngredientItem
					item={"Patties"}
					itemCount={ingredients.Patties}
					updateItem={setIngredients}
				/>
				<IngredientItem
					item={"Salad"}
					itemCount={ingredients.Salad}
					updateItem={setIngredients}
				/>
			</div>
			<button
				type="button"
				className="bg-violet-500 px-3 py-1 rounded-md text-white hover:bg-violet-700"
				onClick={handleOrderClick}
			>
				Order Now
			</button>
		</div>
	)
}

export default Recipes
