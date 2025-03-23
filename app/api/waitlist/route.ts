import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json();
    const { email } = body;

    // Validate email
    if (!email) {
      return NextResponse.json(
        { success: false, message: 'Email is required' },
        { status: 400 }
      );
    }

    // Log for debugging
    console.log('Sending request to Google Apps Script with email:', email);

    const response = await fetch(
        'https://script.google.com/macros/s/AKfycbyU1wFnpb7HbKbWpFmpq7gykxmh26rQKw41qG7zSnRRv4XohBgvThfnSNlmbxNRvzYnug/exec',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        }
      );
      

    // Log response status for debugging
    console.log('Google Script response status:', response.status);

    // Check if the response was successful
    if (!response.ok) {
      const errorText = await response.text();
      console.error('Error response from Google Script:', errorText);
      return NextResponse.json(
        { success: false, message: 'Error from Google Script' },
        { status: 500 }
      );
    }

    // Parse the response as JSON
    const data = await response.json();
    console.log('Success response from Google Script:', data);

    return NextResponse.json({ success: true, message: 'Successfully added to waitlist' });
  } catch (error) {
    console.error('Fetch error:', error);
    return NextResponse.json(
      { success: false, message: 'Error submitting form' },
      { status: 500 }
    );
  }
}

// Handle OPTIONS requests for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}