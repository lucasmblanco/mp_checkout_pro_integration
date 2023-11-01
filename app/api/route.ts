import { NextResponse } from 'next/server'

export async function GET() {
  const data = {
    message: 'hola'
  }
  return NextResponse.json(data, {
    status: 200
  })
}