import { NextResponse } from 'next/server';
import { getVolunteers } from '@/services/volunteerService';
import { scoreVolunteerForIncident } from '@/services/aiMock';

export async function POST(req: Request) {
	const body = await req.json().catch(()=>({ text: '' }));
	const volunteers = getVolunteers();
	const results = volunteers.map(v=> ({ volunteerId: v.id, score: scoreVolunteerForIncident(v, body.text || '') }));
	results.sort((a,b)=> (b.score as number) - (a.score as number));
	return NextResponse.json({ recommendations: results.slice(0,5) });
}
