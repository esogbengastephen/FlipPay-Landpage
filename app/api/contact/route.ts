import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
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
    const toEmail = process.env.TO_EMAIL || smtpUser; // This is YOUR email (business email) where you receive notifications

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

    // Email to the business (you)
    const businessMailOptions = {
      from: fromEmail,
      to: toEmail,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #00bfff;">New Contact Form Submission</h2>
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; background-color: white; padding: 15px; border-radius: 4px; margin-top: 10px;">${message}</p>
          </div>
          <p style="color: #64748b; font-size: 12px; margin-top: 20px;">
            This email was sent from the Flippay contact form.
          </p>
        </div>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    };

    // Email to the user (confirmation)
    const userMailOptions = {
      from: fromEmail,
      to: email,
      subject: 'Thank you for contacting Flippay',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #00bfff;">Thank you for reaching out, ${name}!</h2>
          <p>We've received your message and will get back to you as soon as possible.</p>
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Your message:</strong></p>
            <p style="white-space: pre-wrap; background-color: white; padding: 15px; border-radius: 4px; margin-top: 10px;">${message}</p>
          </div>
          <p>Best regards,<br>The Flippay Team</p>
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 30px 0;">
          <p style="color: #64748b; font-size: 12px;">
            This is an automated confirmation email. Please do not reply to this message.
          </p>
        </div>
      `,
      text: `
        Thank you for reaching out, ${name}!
        
        We've received your message and will get back to you as soon as possible.
        
        Your message:
        ${message}
        
        Best regards,
        The Flippay Team
      `,
    };

    // Send both emails
    await transporter.sendMail(businessMailOptions);
    await transporter.sendMail(userMailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}
