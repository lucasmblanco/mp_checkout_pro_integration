import { NextRequest, NextResponse } from 'next/server'
import { MercadoPagoConfig, Preference } from 'mercadopago';
import { PreferenceRequest } from 'mercadopago/dist/clients/preference/commonTypes';

const client = new MercadoPagoConfig({ accessToken: process.env.MP_ACCESS_TOKEN ?? "", options: {integratorId: 'dev_24c65fb163bf11ea96500242ac130004'}  });

interface Item{
  id: string,
  name: string,
  quantity: string,
  price: string,
  image: string,
  description: string
}


export async function GET() {
  const data = {
    message: 'test'
  }
  return NextResponse.json(data, {
    status: 200
  })
}

export async function POST(req: NextRequest) {
  const preference = new Preference(client);
  const result = await req.json();
  const payload = result.data.reduce((acc: PreferenceRequest, curr: Item) => {
    acc.items.push({
      'id': curr.id,
      'title': curr.name,
      'description': curr.description,
      'quantity': Number(curr.quantity),
      'unit_price': Number(curr.price),
      'picture_url': curr.image
    });
    return acc;
  }, {
    items: [],
    back_urls: {
      "success":` ${process.env.URL_LOCATION}payment_status/success`,
      "failure":` ${process.env.URL_LOCATION}payment_status/failure`,
      "pending":` ${process.env.URL_LOCATION}payment_status/pending`
    },
    payment_methods: {
      excluded_payment_methods: [
      {
        id: "visa"
      }
      ],
      excluded_payment_types: [],
      installments: 6
    },
    auto_return: 'approved',
    payer: {
      name: 'Lalo',
      surname: 'Landa',
      email: 'test_user_36961754@testuser.com',
      phone: {
        area_code: '351',
        number: '5300541'
      },
      address: {
        street_name: 'calle falsa',
        street_number: 123,
        zip_code: '5000'
      }
    },
    external_reference: 'lucasmatiasblanco@outlook.com',
    notification_url: `${process.env.URL_LOCATION}/payment_status`,
  })
  try {
    const preferenceRes = await preference.create({body: payload} );
    return NextResponse.json(preferenceRes, {
      status: 200
    })
  } catch (err) {
    return NextResponse.json({ error: err }, {
      status: 400
    });
    
  
}   
}
  