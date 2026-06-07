import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const prompt = `
You are an AI Volunteer Deployment System for Mahakumbh.

Your task is to choose the BEST volunteer for an incident.

Incident:
${body.incident}

Available Volunteers:
${JSON.stringify(body.volunteers, null, 2)}

Evaluation Criteria:
1. Skill relevance (highest priority)
2. Volunteer status (available preferred)
3. Fatigue score (lower is better)
4. Language match
5. Location proximity
6. Overall suitability

Return ONLY in this format:

Recommended Volunteer: <name>

Confidence Score: <0-100>

Reason:
- Point 1
- Point 2
- Point 3

Alternative Volunteers:
1. <name>
2. <name>
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    return NextResponse.json({
      recommendation: response.text,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to generate recommendation" },
      { status: 500 }
    );
  }
}