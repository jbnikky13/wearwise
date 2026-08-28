import { NextResponse } from 'next/server';
import { findClothing } from '../../../lib/clothing';
export async function GET(request){const {searchParams}=new URL(request.url);return NextResponse.json(findClothing({occasion:searchParams.get('occasion')||'',style:searchParams.get('style')||'',category:searchParams.get('category')||''}));}
