import { NextResponse } from 'next/server';
import { getIncidentById } from '@/services/incidentService';

export async function GET(_req: Request, context: any) {
	const rawParams = context?.params;
	const resolved = rawParams && typeof rawParams.then === 'function' ? await rawParams : rawParams;
	const id = resolved?.id;
	const i = getIncidentById(id);
	if (!i) return NextResponse.json({ error: 'not found' }, { status: 404 });
	return NextResponse.json({ data: i });
}
