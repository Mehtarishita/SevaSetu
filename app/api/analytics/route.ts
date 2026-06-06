import { NextResponse } from 'next/server';
import { getVolunteers } from '@/services/volunteerService';

export async function GET() {
	const volunteers = getVolunteers();
	const skillCounts: Record<string, number> = {};
	volunteers.forEach(v => v.skills.forEach(s => skillCounts[s.name] = (skillCounts[s.name] || 0) + 1));
	return NextResponse.json({ skills: skillCounts, totalVolunteers: volunteers.length });
}
