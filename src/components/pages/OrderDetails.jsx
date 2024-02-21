import React, {useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import useLocalStorage from '../../CustomHooks/useLocalStorage';
import Burger from '../common/Burger';
import IngredientItem from '../common/IngredientItem';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const OrderDetails = () => {
  const { orderId } = useParams();
  const {setItem: setOrders, getItem: getOrders} = useLocalStorage('orders');
  const [order,setOrder] = useState({})
  const [ordersObj,setOrdersObj] = useState([])
  const navigate = useNavigate();

  const fetchOrders = () => {
    const orders = getOrders();
    if(!orders || orderId > orders[orders.length-1].id){
      navigate('/orders');
    }
    setOrdersObj(()=>getOrders() || [])
  }

  const fetchOrderDetails = () => {
    const selectedOrder = ordersObj.find((obj) => obj.id === parseInt(orderId, 10));
    setOrder(selectedOrder || {});
  }

  const handleUpdateOrder = () => {
    const updatedOrders = ordersObj.map((curOrder)=>{
      if(curOrder.id === order.id){
        return order;
      }
      return curOrder;
    });
    setOrders(updatedOrders);
    toast.success('Order updated!', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
      setTimeout(() => {
        navigate('/orders');
      }, 2000);
  };

  useEffect(()=>{
    fetchOrders();
  },[])
  
  useEffect(()=>{
    fetchOrderDetails();
  },[ordersObj])

  return (
    <>
      <div className='container w-2/4 p-5 text-center bg-red-50 m-auto mt-6'>
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
