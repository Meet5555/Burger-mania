export const placeOrderAction = 'PLACE_ORDER'
export const deleteOrderAction = 'DELETE_ORDER'
export const updateOrderAction = 'UPDATE_ORDER'

export const placeOrder = (order)=>{
  return {
    type: placeOrderAction,
    payload: order
  }
}

export const deleteOrder = (orderId) => {
  return {
    type: deleteOrderAction,
    payload: orderId
  }
}

export const updateOrder = (order) => {
  return {
    type: updateOrderAction,
    payload: order
  }
}