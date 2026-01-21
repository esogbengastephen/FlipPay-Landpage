import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    // Validate input
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Get environment variables
    const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
    const smtpPort = parseInt(process.env.SMTP_PORT || '587');
    const smtpUser = process.env.SMTP_USER;
    const smtpPassword = process.env.SMTP_PASSWORD;
    const fromEmail = process.env.FROM_EMAIL || smtpUser;
    const toEmail = process.env.TO_EMAIL || smtpUser; // This is YOUR email (business email)

    if (!smtpUser || !smtpPassword) {
      console.error('SMTP credentials not configured');
      return NextResponse.json(
        { error: 'Email service not configured. Please contact the administrator.' },
        { status: 500 }
      );
    }

    // Create transporter with connection timeout settings
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465, // true for 465, false for other ports
      auth: {
        user: smtpUser,
        pass: smtpPassword,
      },
      connectionTimeout: 10000, // 10 seconds
      greetingTimeout: 10000, // 10 seconds
      socketTimeout: 10000, // 10 seconds
      // For Gmail, we need to use STARTTLS
      requireTLS: smtpPort === 587,
    });

    // Verify transporter configuration with better error handling
    try {
      await transporter.verify();
    } catch (verifyError: any) {
      console.error('SMTP verification failed:', verifyError);
      
      // Provide helpful error messages
      if (verifyError.code === 'ETIMEDOUT' || verifyError.code === 'ECONNREFUSED') {
        return NextResponse.json(
          { 
            error: 'Cannot connect to email server. Please check your network connection and SMTP settings. If using Gmail, ensure you have generated an App Password and that port 587 is not blocked by your firewall.',
            details: verifyError.message 
          },
          { status: 500 }
        );
      }
      
      if (verifyError.code === 'EAUTH') {
        return NextResponse.json(
          { 
            error: 'Email authentication failed. Please check your SMTP_USER and SMTP_PASSWORD in .env.local. For Gmail, make sure you are using an App Password, not your regular password.',
            details: 'Authentication error'
          },
          { status: 500 }
        );
      }
      
      throw verifyError;
    }

    // Email to the business (you) - notification of new waitlist signup
    const businessMailOptions = {
      from: fromEmail,
      to: toEmail, // Your business email
      subject: `New Waitlist Signup: ${email}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #00bfff;">New Waitlist Signup</h2>
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Signed up at:</strong> ${new Date().toLocaleString()}</p>
          </div>
          <p style="color: #64748b; font-size: 12px; margin-top: 20px;">
            This email was sent from the Flippay waitlist signup form.
          </p>
        </div>
      `,
      text: `
        New Waitlist Signup
        
        Email: ${email}
        Signed up at: ${new Date().toLocaleString()}
      `,
    };

    // Email to the user (acknowledgment) - confirmation they joined the waitlist
    const userMailOptions = {
      from: fromEmail,
      to: email, // The user's email who signed up
      subject: 'Welcome to the Flippay Waitlist! 🎉',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #00bfff;">Welcome to the Flippay Waitlist!</h2>
          <p>Thank you for joining our waitlist! We're excited to have you on board.</p>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0;"><strong>What's next?</strong></p>
            <ul style="margin: 10px 0; padding-left: 20px;">
              <li>You'll be among the first to know when Flippay launches</li>
              <li>Get exclusive early access to our platform</li>
              <li>Receive updates on new features and announcements</li>
            </ul>
          </div>

          <p>We're building something special, and we can't wait to share it with you. Stay tuned for updates!</p>
          
          <p>Best regards,<br><strong>The Flippay Team</strong></p>
          
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 30px 0;">
          <p style="color: #64748b; font-size: 12px;">
            You're receiving this email because you signed up for the Flippay waitlist. 
            If you didn't sign up, please ignore this email.
          </p>
        </div>
      `,
      text: `
        Welcome to the Flippay Waitlist!
        
        Thank you for joining our waitlist! We're excited to have you on board.
        
        What's next?
        - You'll be among the first to know when Flippay launches
        - Get exclusive early access to our platform
        - Receive updates on new features and announcements
        
        We're building something special, and we can't wait to share it with you. Stay tuned for updates!
        
        Best regards,
        The Flippay Team
        
        ---
        You're receiving this email because you signed up for the Flippay waitlist. 
        If you didn't sign up, please ignore this email.
      `,
    };

    // Send both emails
    await transporter.sendMail(businessMailOptions);
    await transporter.sendMail(userMailOptions);

    // Send to Google Sheets webhook (optional - won't fail if not configured)
    const googleSheetsWebhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    if (googleSheetsWebhookUrl) {
      try {
        const webhookResponse = await fetch(googleSheetsWebhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });

        if (!webhookResponse.ok) {
          console.warn('Google Sheets webhook failed, but email was sent successfully');
        }
      } catch (webhookError) {
        // Don't fail the entire request if webhook fails
        console.warn('Error calling Google Sheets webhook:', webhookError);
      }
    }

    return NextResponse.json(
      { message: 'Successfully joined waitlist' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing waitlist signup:', error);
    return NextResponse.json(
      { error: 'Failed to join waitlist. Please try again later.' },
      { status: 500 }
    );
  }
}
