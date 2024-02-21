import React, {useState} from 'react'
import Burger from '../common/Burger'
import IngredientItem from '../common/IngredientItem'
import useLocalStorage from '../../CustomHooks/useLocalStorage'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Recipes = () => {
  const [ingredients, setIngredients] = useState({
    Cheese: 1,
    Patties: 1,
    Salad: 1
  })
  const {setItem: setOrders, getItem: getOrders} = useLocalStorage('orders');

  const handleOrderClick = () => {
    const orders = getOrders() || [];

    orders.push({
      id: orders.length!=0 ? orders[orders.length-1].id + 1: 1,
      ...ingredients
    });

    setOrders(orders);
    toast.success('Order Sent!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }

  return (
    <div className='container w-2/4 p-5 text-center bg-red-50 m-auto mt-6'>
      <ToastContainer />
      <Burger cheeseQuantity={ingredients.Cheese} saladQuantity={ingredients.Salad} pattiesQuantity={ingredients.Patties} />
      <div className='my-10 w-2/4 m-auto'>
        <IngredientItem item={'Cheese'} itemCount={ingredients.Cheese} updateItem={setIngredients}/>
        <IngredientItem item={'Patties'} itemCount={ingredients.Patties} updateItem={setIngredients}/>
        <IngredientItem item={'Salad'} itemCount={ingredients.Salad} updateItem={setIngredients}/>
      </div>
      <button type='button' className='bg-violet-500 px-3 py-1 rounded-md text-white hover:bg-violet-700' onClick={handleOrderClick}>Order Now</button>
    </div>
  )
}

export default Recipes
