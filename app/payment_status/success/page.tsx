'use client'; 
import React from 'react'
import { useSearchParams } from 'next/navigation';

export default function SuccessScreen() {
    const searchParams = useSearchParams();
    const collectionStatus = searchParams.get('collection_status');
    const externalReference = searchParams.get('external_reference');
    const paymentType = searchParams.get('payment_type');
    const preferenceId = searchParams.get('preference_id');
    const sideId = searchParams.get('side_id');
    const processingMode = searchParams.get('processing_mode');
    const merchantAccountId = searchParams.get('merchant_account_id');

  async function fetchPaymentData() {
    const data = await fetch('/payments'); 
    console.log(data); 
    }
  
  
  return (
    <>
     <div>
        <p>{collectionStatus}</p>
        <p>{externalReference}</p>
        <p>{paymentType}</p>
        <p>{preferenceId}</p>
        <p>{sideId}</p>
        <p>{processingMode}</p>
        <p>{merchantAccountId}</p>
      </div>
      <div><button className="bg-sky-500 px-4 py-2 m-4"onClick={fetchPaymentData}>Buscar Pago</button></div>
    </>
  )
}
