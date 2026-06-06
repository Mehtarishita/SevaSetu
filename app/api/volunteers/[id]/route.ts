import { NextResponse } from 'next/server';
import { getVolunteerById } from '@/services/volunteerService';

export async function GET(_req: Request, context: any) {
	const rawParams = context?.params;
	const resolved = rawParams && typeof rawParams.then === 'function' ? await rawParams : rawParams;
	const id = resolved?.id;
	const v = getVolunteerById(id);
	if (!v) return NextResponse.json({ error: 'not found' }, { status: 404 });
	return NextResponse.json({ data: v });
}
