import { NextResponse } from 'next/server';
import { getIncidents } from '@/services/incidentService';

export async function GET() {
	return NextResponse.json({ data: getIncidents() });
}

export async function POST(req: Request) {
	const body = await req.json().catch(()=> ({}));
	return NextResponse.json({ created: body }, { status: 201 });
}
