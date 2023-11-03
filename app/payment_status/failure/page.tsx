import React from 'react'
import { useSearchParams } from 'next/navigation';

export default function FailureScreen() {
    const searchParams = useSearchParams();
    const collectionStatus = searchParams.get('collection_status');
    const externalReference = searchParams.get('external_reference');
    const paymentType = searchParams.get('payment_type');
    const preferenceId = searchParams.get('preference_id');
    const sideId = searchParams.get('side_id');
    const processingMode = searchParams.get('processing_mode');
    const merchantAccountId = searchParams.get('merchant_account_id');

  return (
      <div>
        <p>{collectionStatus}</p>
        <p>{externalReference}</p>
        <p>{paymentType}</p>
        <p>{preferenceId}</p>
        <p>{sideId}</p>
        <p>{processingMode}</p>
        <p>{merchantAccountId}</p>
   </div>
  )
}
