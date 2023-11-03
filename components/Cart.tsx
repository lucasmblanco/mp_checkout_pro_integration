'use client'; 
import React, { useState } from 'react'
import Product from './Product';
import { Product as ProductType } from '@/types';


import { Wallet } from '@mercadopago/sdk-react'

function Payment({ preferenceId }: { preferenceId: string }) {
  return (
            <Wallet initialization={{ preferenceId: preferenceId }}/>          
  )
}

export default function Cart({ data }: { data: ProductType[]}) {
    const [products, setProducts] = useState(data); 
    const [amount, setAmount] = useState(products.reduce((acc, curr) => acc += curr.price * curr.quantity, 0)); 
    const [preferenceId, setPreferenceId] = useState(undefined)
    // const [loading, setLoading] = useState(false);


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
        setAmount(updatedProducts.reduce((acc, curr) => acc += curr.price * curr.quantity, 0)); 
    }

    async function createPreference() {
        // setLoading(true);
        const res = await fetch('/api', {
            method: 'POST', 
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({data: products})
        });
        
       
        const data = await res.json();
        setPreferenceId(data.id);
        // setLoading(false);
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
          <hr className='bg-stone-950 border-0 h-px mx-4' />
          <div className='bg-stone-100 text-stone-950 rounded-b-2xl px-4 py-3 grid grid-cols-4 font-extrabold font-mono text-xl'>
                <p className='font-extrabold col-span-2 underline decoration-2'>SUBTOTAL</p>
                <p className='text-center col-span-2 place-self-end'>${amount}</p>
          </div>
          <hr className='bg-stone-950 border-0 h-px mx-4' />
          <div className='w-full flex justify-end py-2 px-2 h-24'> 
          {
              preferenceId === undefined ? <>
                <div className='flex items-end'>
                    <button className='bg-stone-950 py-2 px-8 rounded hover:bg-sky-500 transition-all' onClick={createPreference}>Checkout</button>
                </div>
              </> : <Payment preferenceId={preferenceId} />
           }
          </div>
          
    </div>
  )
}
