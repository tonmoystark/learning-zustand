import React from 'react'
import { useCart } from '../../store/useCart'

const Cart = () => {

    const {products} = useCart()
  return (
    <>
        {products.map((product) => (
        <div key={product.id} className='border rounded p-5'>
            <h1>{product.name}</h1>
            <h1>{product.category}</h1>
            <h1>{product.price}</h1>
            <h1>{product.rating}</h1>
            <h1>{product.stock}</h1>
        </div>
    ))}
    </>
  )
}

export default Cart