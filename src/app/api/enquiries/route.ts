import { NextResponse } from 'next/server'
import { getSupabase } from '@/lib/supabase'
import type { EnquiryPayload } from '@/types'

export async function POST(req: Request) {
  const body: EnquiryPayload = await req.json()

  const { error } = await getSupabase().from('leads').insert({
    name: body.name,
    phone: body.phone,
    email: body.email,
    company: body.company ?? null,
    flat_id: body.flatId,
    flat_number: body.flatNumber,
    building_name: body.buildingName,
    message: body.message ?? null,
  })

  if (error) {
    console.error('Supabase error:', error)
    return NextResponse.json({ error: 'Failed to save lead' }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
