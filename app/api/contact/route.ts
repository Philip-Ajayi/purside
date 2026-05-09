import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // In a real application, you would save this to a database 
    // or send an email notification using Resend, SendGrid, etc.
    console.log('New Contact Inquiry:', body);

    return NextResponse.json({ 
      success: true, 
      message: 'Inquiry received successfully.' 
    }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      message: 'Failed to process inquiry.' 
    }, { status: 400 });
  }
}
