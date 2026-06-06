import { NextResponse } from 'next/server';
import { getVolunteers } from '@/services/volunteerService';

export async function GET() {
	const vols = getVolunteers();
	const items = vols.map(v => ({ id: v.id, fatigue: v.fatigueScore, status: v.fatigueScore > 70 ? 'red' : v.fatigueScore > 40 ? 'yellow' : 'green' }));
	return NextResponse.json({ data: items });
}
