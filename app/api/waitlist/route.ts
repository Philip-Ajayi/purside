import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // In a real application, you would save this to a database (e.g. Supabase, Prisma)
    // or send it to a CRM (e.g. HubSpot, Mailchimp)
    console.log('New Waitlist Submission:', body);

    return NextResponse.json({ 
      success: true, 
      message: 'Waitlist entry received successfully.' 
    }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      message: 'Failed to process waitlist entry.' 
    }, { status: 400 });
  }
}
