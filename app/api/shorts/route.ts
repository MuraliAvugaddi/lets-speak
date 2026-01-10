// app/api/shorts/route.ts (Simple version - no API key needed)
import { NextRequest, NextResponse } from 'next/server';

// Manually add some of your YouTube Shorts video IDs here
// You can find these in the URL: youtube.com/shorts/VIDEO_ID
const HARDCODED_SHORTS = [
  'UlJ9vAynJUc',
  'ToE1Te-qhoQ',
  'THCndMIgQpM',
  'LaL28u278gk',
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