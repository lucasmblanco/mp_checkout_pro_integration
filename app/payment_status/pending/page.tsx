'use client'
import React from 'react'
import { useSearchParams } from 'next/navigation';

export default function PendingScreen() {
    const searchParams = useSearchParams();
    const collectionStatus = searchParams.get('collection_status');
    const externalReference = searchParams.get('external_reference');
    const paymentType = searchParams.get('payment_type');
    const preferenceId = searchParams.get('preference_id');
    const sideId = searchParams.get('side_id');
    const processingMode = searchParams.get('processing_mode');
    const merchantAccountId = searchParams.get('merchant_account_id');

  return (
    <div className='bg-yellow-700 font-mono px-2'>
    <p>Collection status: {collectionStatus}</p>
    <p>External Reference: {externalReference}</p>
    <p>PaymentType: {paymentType}</p>
    <p>Preference ID: {preferenceId}</p>
    <p>Side ID: {sideId}</p>
    <p>Processing mode: {processingMode}</p>
    <p>Merchant account ID: {merchantAccountId}</p>
  </div>
  )
}
