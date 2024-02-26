import React, {useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux"
import { updateOrder} from "../../redux/actions/actions"
import Burger from '../common/Burger';
import IngredientItem from '../common/IngredientItem';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useTheme} from '../../contexts/themeContext';

const OrderDetails = () => {
  const { orderId } = useParams();
  const [order,setOrder] = useState({})
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const orders = useSelector((state) => state.orderedBurgers)
  const { theme } = useTheme()

  const fetchOrders = () => {
    if(!orders || orderId > orders[orders.length-1].id){
      navigate('/orders');
    }
  }

  const fetchOrderDetails = () => {
    const selectedOrder = orders.find((obj) => obj.id === parseInt(orderId, 10));
    setOrder(selectedOrder || {});
  }

  const handleUpdateOrder = () => {
    dispatch(updateOrder(order))
    toast.success('Order updated!', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: theme,
      });
      setTimeout(() => {
        navigate('/orders');
      }, 2000);
  };

  useEffect(()=>{
    fetchOrders();
    fetchOrderDetails();
  },[])

  return (
    <>
      <div className='container w-2/4 p-5 text-center bg-red-50 m-auto mt-6  dark:bg-gray-700'>
      <ToastContainer />
      <Burger cheeseQuantity={order.Cheese} saladQuantity={order.Salad} pattiesQuantity={order.Patties} />
      <div className='my-10 w-2/4 m-auto'>
        <IngredientItem item={'Cheese'} itemCount={order.Cheese} updateItem={setOrder} />
        <IngredientItem item={'Patties'} itemCount={order.Patties} updateItem={setOrder} />
        <IngredientItem item={'Salad'} itemCount={order.Salad} updateItem={setOrder} />
      </div>
      <button type='button' className='bg-violet-500 px-3 py-1 rounded-md text-white hover:bg-violet-700' onClick={handleUpdateOrder}>Update Order</button>
    </div>
    </>
  )
}

export default OrderDetails
