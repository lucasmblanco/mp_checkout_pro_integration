'use client'; 
import React, { useState } from 'react'
import Product from './Product';
import { Product as ProductType } from '@/types';

export default function Cart({data} : {data: ProductType[]}) {
    const [products, setProducts] = useState(data); 
    const [amount, setAmount] = useState(products.reduce((acc, curr) => acc += curr.priceProduct * curr.quantity, 0)); 

    function changeQuantity(e: React.ChangeEvent<HTMLInputElement>) {
        const updatedProducts = products.map(p => {
            if (p.id !== e.target.id){
                return p
            }
            else  {
                return {
                    ...p,
                    quantity: Number(e.target.value)
                }
            } 
        })
        setProducts(updatedProducts); 
        setAmount(updatedProducts.reduce((acc, curr) => acc += curr.priceProduct * curr.quantity, 0)); 
    }

  return (
      <div className=' bg-stone-100 border rounded-2xl border-cyan-300'>
          <div className='py-4 px-4 bg-gradient-to-br from-cyan-500 via-sky-500 to-emerald-500 rounded-t-2xl'>
              <h2 className='font-medium text-xl'>Shopping Cart</h2>
             
              <p className='text-sm'>This is an example of Checkout Pro integration of Mercado Pago</p>
              <hr/>
          </div>
          {
              products.map(product => <Product key={Math.random()} data={product} changeQuantity={changeQuantity} />)
          }
          <hr className='bg-stone-950 border-0 h-px mx-4'/>
          <div className='bg-stone-100 text-stone-950 rounded-b-2xl px-4 py-3 grid grid-cols-4 font-extrabold font-mono text-xl'>
            <p className='font-extrabold col-span-2 underline decoration-2'>SUBTOTAL</p>
            <p className='text-center col-span-2 place-self-end'>${amount}</p>
          </div>
          <div className='w-full flex justify-end py-2 px-2'> 
          <button className='bg-stone-950  py-1 px-2 rounded  hover:bg-sky-500 transition-all'>Checkout</button>
         </div>
    </div>
  )
}
