import React from 'react'
import Cheese from '../ingredients/Cheese'
import Patties from '../ingredients/Patties'
import Salad from '../ingredients/Salad'

const Burger = ({cheeseQuantity, saladQuantity, pattiesQuantity}) => {

  const renderIngredients = (Component, quantity) => {
    return Array.from({ length: quantity }, (_, index) => (
      <Component key={index} />
    ));
  };

  return (
    <>
    <div className="burger w-2/4 m-auto min-h-[320px] flex justify-center flex-col items-center">
      <div className='w-[200px] h-[50px] bg-red-900 rounded-md flex justify-center items-center text-white'>Bread</div>
        {renderIngredients(Cheese, cheeseQuantity)}
        {renderIngredients(Salad, saladQuantity)}
        {renderIngredients(Patties, pattiesQuantity)}
      <div className='w-[200px] h-[50px] bg-red-900 rounded-md flex justify-center items-center text-white'>Bread</div>
    </div>
    </>
  )
}

export default Burger
