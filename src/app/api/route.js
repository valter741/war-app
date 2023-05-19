import { kv } from '@vercel/kv';
import { NextResponse } from 'next/server';

export async function POST(request) {
  var res = await request.json();
  await kv.set('count', res);
  return NextResponse.json(res);
}