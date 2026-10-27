import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, projectType, area, location, message } = body;

    // Validation
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Name, email, and phone number are required.' },
        { status: 400 }
      );
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = parseInt(process.env.SMTP_PORT || '465', 10);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const toEmail = process.env.ENQUIRY_TO_EMAIL || 'brijesh@aspi.in, project@aspi.in';
    const fromEmail = process.env.SMTP_FROM || smtpUser || 'no-reply@aspi.in';

    // If SMTP is not yet configured, log to server and alert caller
    if (!smtpHost || !smtpUser || !smtpPass) {
      console.warn('⚠️ SMTP credentials missing. Enquiry received:', {
        name,
        email,
        phone,
        company,
        projectType,
        area,
        message,
        receivedAt: new Date().toISOString(),
      });

      return NextResponse.json(
        {
          success: false,
          error:
            'SMTP server is not yet configured. Please set SMTP_HOST, SMTP_PORT, SMTP_USER, and SMTP_PASS in .env.local or your Vercel project environment variables.',
          isConfigError: true,
        },
        { status: 503 }
      );
    }

    // Configure Nodemailer transporter for Vercel Serverless
    // Port 465 = secure true (SSL), Port 587 = secure false (TLS)
    const isSecure = smtpPort === 465;

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: isSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
      // Timeout settings to prevent Vercel serverless freeze
      connectionTimeout: 10000,
      greetingTimeout: 5000,
      socketTimeout: 15000,
    });

    const emailSubject = `New Project Enquiry: ${name} ${company ? `(${company})` : ''} - ASIPL`;

    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f7f6f2; margin: 0; padding: 24px; color: #1f1e1b; }
          .container { max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e7e3da; border-radius: 8px; overflow: hidden; }
          .header { background: #1a1917; color: #f4f1ea; padding: 24px 30px; }
          .header h1 { margin: 0 0 6px 0; font-size: 20px; font-weight: 600; letter-spacing: 0.05em; color: #ffffff; }
          .header p { margin: 0; font-size: 12px; color: #c5a880; text-transform: uppercase; letter-spacing: 0.15em; }
          .content { padding: 30px; }
          .badge { display: inline-block; background: #eef5ea; color: #2e6930; font-size: 11px; font-weight: 600; padding: 4px 10px; border-radius: 4px; margin-bottom: 20px; }
          .table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
          .table td { padding: 10px 12px; border-bottom: 1px solid #ede8df; font-size: 13px; vertical-align: top; }
          .table td.label { font-weight: 600; color: #5a554c; width: 35%; background: #faf8f5; }
          .table td.value { color: #1a1917; }
          .message-box { background: #faf8f5; border-left: 3px solid #c5a880; padding: 14px 18px; font-size: 13px; line-height: 1.6; margin-bottom: 24px; }
          .actions { text-align: center; margin: 30px 0 10px; }
          .btn { display: inline-block; background: #c5a880; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 4px; font-size: 13px; font-weight: 600; margin: 0 6px; }
          .footer { background: #f5f2eb; padding: 16px 30px; font-size: 11px; color: #7e776c; text-align: center; border-top: 1px solid #ede8df; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Art Space Interior Pvt. Ltd.</h1>
            <p>New Website Project Enquiry</p>
          </div>
          <div class="content">
            <span class="badge">● New Lead Captured</span>
            <p style="font-size: 14px; margin-top: 0; line-height: 1.5;">A prospective client has submitted an interior fit-out consultation enquiry through <strong>aspi.in</strong>.</p>
            
            <table class="table">
              <tr>
                <td class="label">Full Name</td>
                <td class="value"><strong>${name}</strong></td>
              </tr>
              <tr>
                <td class="label">Company / Organization</td>
                <td class="value">${company || 'Not specified'}</td>
              </tr>
              <tr>
                <td class="label">Email Address</td>
                <td class="value"><a href="mailto:${email}" style="color: #2b6cb0;">${email}</a></td>
              </tr>
              <tr>
                <td class="label">Phone Number</td>
                <td class="value"><a href="tel:${phone}" style="color: #2b6cb0; font-weight: 600;">${phone}</a></td>
              </tr>
              <tr>
                <td class="label">Project Type</td>
                <td class="value">${projectType || 'General Consultation'}</td>
              </tr>
              <tr>
                <td class="label">Approximate Area</td>
                <td class="value">${area || 'Not specified'}</td>
              </tr>
              ${location ? `
              <tr>
                <td class="label">Preferred Location</td>
                <td class="value">${location}</td>
              </tr>` : ''}
              <tr>
                <td class="label">Submission Time</td>
                <td class="value">${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} (IST)</td>
              </tr>
            </table>

            <div style="font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: #7e776c; margin-bottom: 8px;">
              Client Notes / Requirements
            </div>
            <div class="message-box">
              ${message ? message.replace(/\n/g, '<br>') : 'No specific message provided.'}
            </div>

            <div class="actions">
              <a href="tel:${phone.replace(/[^0-9+]/g, '')}" class="btn" style="background: #1a1917;">Call Client</a>
              <a href="https://wa.me/${phone.replace(/[^0-9]/g, '')}" class="btn" style="background: #25D366;">WhatsApp</a>
              <a href="mailto:${email}" class="btn">Reply via Email</a>
            </div>
          </div>
          <div class="footer">
            Delivered securely via ASIPL Next.js Enquiry Gateway • Gurugram Corporate Head Office
          </div>
        </div>
      </body>
      </html>
    `;

    const textContent = `
New Project Enquiry - Art Space Interior Pvt. Ltd. (ASIPL)
===========================================================
Name:         ${name}
Company:      ${company || 'N/A'}
Email:        ${email}
Phone:        ${phone}
Project Type: ${projectType || 'N/A'}
Area:         ${area || 'N/A'}
Location:     ${location || 'N/A'}
Date (IST):   ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}

Client Requirements / Notes:
${message || 'No additional notes provided.'}
===========================================================
    `;

    // Send email using Nodemailer
    await transporter.sendMail({
      from: `"ASIPL Website Enquiries" <${fromEmail}>`,
      to: toEmail,
      replyTo: email,
      subject: emailSubject,
      text: textContent,
      html: htmlContent,
    });

    return NextResponse.json({
      success: true,
      message: 'Enquiry sent successfully.',
    });
  } catch (err) {
    console.error('❌ Error sending enquiry email via SMTP:', err);
    return NextResponse.json(
      {
        success: false,
        error: err.message || 'Failed to dispatch email. Please check your SMTP configuration.',
      },
      { status: 500 }
    );
  }
}
