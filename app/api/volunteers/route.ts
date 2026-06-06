import { NextResponse } from 'next/server';
import { getVolunteers } from '@/services/volunteerService';

export async function GET() {
	const data = getVolunteers();
	return NextResponse.json({ data });
}

export async function POST(req: Request) {
	const body = await req.json().catch(()=> ({}));
	// In mock mode we don't persist; echo back
	return NextResponse.json({ created: body }, { status: 201 });
}
