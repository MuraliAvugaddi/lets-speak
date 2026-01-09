// app/api/shorts/route.ts (Simple version - no API key needed)
import { NextRequest, NextResponse } from 'next/server';

// Manually add some of your YouTube Shorts video IDs here
// You can find these in the URL: youtube.com/shorts/VIDEO_ID
const HARDCODED_SHORTS = [
  'GhQ0eOvAEm4', // Replace with your actual video IDs
  '4WRJwS3XM3I', // Replace with your actual video IDs
  'g2NuhRBUPmY', // Replace with your actual video IDs
  'fEDg3ATkAi8', // Replace with your actual video IDs
  '8ODk_OBpcMk', // Replace with your actual video IDs
  'l2-SWmYe9RU', // Replace with your actual video IDs
  'rXNkRpsSXKY', // Replace with your actual video IDs
  'd1ymeRsJ2HI', // Replace with your actual video IDs
];

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const count = parseInt(searchParams.get('count') || '4');

    // Shuffle and return random shorts
    const shuffled = [...HARDCODED_SHORTS]
      .sort(() => Math.random() - 0.5)
      .slice(0, Math.min(count, HARDCODED_SHORTS.length));

    return NextResponse.json({
      videos: shuffled,
      count: shuffled.length
    });

  } catch (error) {
    console.error('Error fetching shorts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch shorts', videos: [] },
      { status: 500 }
    );
  }
}