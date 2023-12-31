import { NextRequest, NextResponse } from 'next/server'
import { MercadoPagoConfig, Payment } from 'mercadopago';
import { PaymentSearchData } from 'mercadopago/dist/clients/payment/search/types';

const client = new MercadoPagoConfig({ accessToken: process.env.MP_ACCESS_TOKEN ?? '' });

export async function GET() {
    const payments = new Payment(client);
    const params: PaymentSearchData = {
        options: {
            criteria: 'desc',
          sort: 'date_created',
          external_reference: 'lucasmatiasblanco@outlook.com'
            }
        }
    try {
        const result = await payments.search(params); 
        return NextResponse.json(result, {
            status: 200
        }); 
    } catch (error) {
        return NextResponse.json({ error: error }, {
            status: 400
        })
        }
  
}