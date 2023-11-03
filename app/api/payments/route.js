import { NextRequest, NextResponse } from 'next/server'
import { MercadoPagoConfig, Payments } from 'mercadopago';

const client = new MercadoPagoConfig({ accessToken: process.env.MP_ACCESS_TOKEN });


export async function GET() {
    const payments = new Payments(client);
    const params = {
        criteria: 'desc',
          sort: 'date_created',
          external_reference: 'lucasmatiasblanco@outlook.com'
        }
    try {
        const result = await payments.search(params); 
        NextResponse.json(result); 
    } catch (error) {
        NextResponse.json({ error: error }, {
            status: 400
        })
        }
  
}