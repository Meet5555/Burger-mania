import React from 'react'

const IngredientItem = ({item,itemCount,updateItem}) => {

  const maxQuantity = {
    Cheese: 3,
    Patties: 2,
    Salad: 4
  }
  
  const minQuantity = {
    Cheese: 0,
    Patties: 1,
    Salad: 2
  }

  const handleIncrement = () => {
    if (itemCount < maxQuantity[item]) {
      updateItem((prev) => {
        return {
          ...prev,
          [item]: prev[item] + 1
        };
      });
    }
  };

  const handleDecrement = () => {
    if (itemCount > minQuantity[item]) {
      updateItem((prev) => {
        return {
          ...prev,
          [item]: prev[item] - 1
        };
      });
    }
  };

  return (
    <>
     <div className='ingredient-item mt-3 w-[min(250px,2/4)] m-auto flex items-center justify-between'>
        <div>{item}</div>
        <div>
          <button type='button' className={`item-btns ms-3 bg-teal-50 px-2 rounded ${itemCount <= minQuantity[item] ? 'bg-teal-700 cursor-not-allowed':' hover:bg-teal-100'}`} onClick={handleDecrement} disabled={itemCount <= minQuantity[item]}>-</button>
          <span className='mx-1'> {itemCount} </span>
          <button type='button' className={`item-btns me-3 bg-teal-50  px-2 rounded ${itemCount >= maxQuantity[item] ? 'bg-teal-700 cursor-not-allowed':' hover:bg-teal-100'}`} onClick={handleIncrement} disabled={itemCount >= maxQuantity[item]}>+</button>
        </div>
      </div> 
    </>
  )
}

export default IngredientItem
