'use client'; 
import React, { useState } from 'react';
import Image from 'next/image'
import { Product } from '@/types';

export default function Product({ data, changeQuantity }: { data: Product; changeQuantity: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
  return (
    <div className='bg-stone-100 text-stone-950 grid grid-cols-4 py-4 px-4 w-full place-content-center'>
              <Image src={data.image} alt='camera picture' width={100} height={100} />
                  <div>
                  <p className='text-lg'>{data?.name}</p>
        <p className='text-xs uppercase text-stone-400'>{data.company}</p>
                  <p className='text-sm text-stone-400'>{data.description}</p>
                  </div>
                  <div className='px-4 grid place-content-center'>
              <input type="number"
                    id={data.id}
                    value={data.quantity}
                    onChange={changeQuantity}
                    min="1"
                    className='w-16 border border-sky-500 rounded px-2' />
                  </div>
                  <div className='grid justify-end items-center'>
                  <div>
                    <span>Price: </span><span>${data.priceProduct}</span>
                    </div>
                  </div>
          </div>
  )
}
