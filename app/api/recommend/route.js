import { NextResponse } from 'next/server';
import { getRecommendation } from '../../../lib/wardrobe';
export async function POST(request){try{const body=await request.json();return NextResponse.json(getRecommendation(body,Number(body.variant||0)));}catch{return NextResponse.json({error:'Invalid recommendation request'},{status:400});}}
export async function GET(request){const {searchParams}=new URL(request.url);return NextResponse.json(getRecommendation(Object.fromEntries(searchParams.entries()),Number(searchParams.get('variant')||0)));}
