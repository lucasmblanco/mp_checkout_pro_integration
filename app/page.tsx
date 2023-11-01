'use client'; 
import Payment from '@/components/Payment'; 
import Cart from '@/components/Cart';
import React, { useState } from 'react'; 
import data from '../mocks/db.json'
import { Product } from '@/types';



export default function Home() {
  return (
    // <CartProvider context={{cart, setCart}}>
      <main className="flex min-h-screen flex-col items-center justify-start py-4 font-sans gap-4 ">
        <h1 className="font-medium  text-2xl md:text-4xl  py-1 px-6 rounded-xl text-sky-500">TIENDA AZUL</h1>
        <h2 className='border border-sky-500 text-stone-100 rounded-2xl px-2 py-1 text-xs'>checkout pro integration</h2>
        <Cart data={Object.values(data) as Product[]} />
        <Payment />
      </main>
    // </CartProvider>
  )
}
