'use client';
import React, { useEffect, useState } from 'react'

import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'

export default function Payment() {
  const [message, setMessage] = useState<string>(''); 
  useEffect(() => {
    initMercadoPago(process.env.NEXT_PUBLIC_TEST_MP_PUBLIC_KEY ?? "");
  })

  async function fetchResource() {
    const res = await fetch('http://localhost:3000/api/');
    if (!res.ok) {
      throw new Error('Failed');
    }
    const data = await res.json()
    setMessage(data.message)
  }


  return (
    <div >
      <Wallet initialization={{ preferenceId: "" }}/> 
      {/* <button onClick={fetchResource}>Test</button>
      <p>Payment Component</p> */}
    </div>
  )
}
