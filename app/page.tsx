'use client'; 
import Cart from '@/components/Cart';
import React, { useState } from 'react'; 
import data from '../mocks/db.json'
import { Product } from '@/types';
import { initMercadoPago } from '@mercadopago/sdk-react';

initMercadoPago(process.env.NEXT_PUBLIC_TEST_MP_PUBLIC_KEY ?? ""); 

export default function Home() {
 
  return (
      <main className="flex min-h-screen flex-col items-center justify-start py-4 font-sans gap-4 ">
        <h1 className="font-medium  text-2xl md:text-4xl  py-1 px-6 rounded-xl text-sky-500">TIENDA AZUL</h1>
        <h2 className='border border-sky-500 text-stone-100 rounded-2xl px-2 py-1 text-xs'>checkout pro integration</h2>
      <Cart data={Object.values(data) as Product[]} />
      </main>
  )
}
