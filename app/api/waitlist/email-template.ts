/**
 * Generates the welcome email HTML template for waitlist signups
 * Uses Flippay brand colors and styling
 */
export function generateWelcomeEmailTemplate(options: {
  websiteUrl?: string;
  logoUrl?: string;
}): string {
  const baseUrl = options.websiteUrl || process.env.NEXT_PUBLIC_SITE_URL || 'https://your-website.com';
  const logoUrl = options.logoUrl || `${baseUrl}/favicon.png`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to Flippay!</title>
    <!--[if mso]>
    <style type="text/css">
        body, table, td {font-family: Arial, sans-serif !important;}
    </style>
    <![endif]-->
</head>
<body style="margin: 0; padding: 0; background-color: #f8fafc; font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
    <!-- Main Container -->
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f8fafc; padding: 40px 20px;">
        <tr>
            <td align="center">
                <!-- Email Content Container -->
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="max-width: 600px; background-color: #ffffff; border-radius: 16px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05); overflow: hidden;">
                    
                    <!-- Header with Gradient Background -->
                    <tr>
                        <td style="background: linear-gradient(135deg, #00bfff 0%, #008fcc 100%); padding: 40px 30px; text-align: center;">
                            <!-- Logo -->
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                <tr>
                                    <td align="center" style="padding-bottom: 20px;">
                                        <div style="display: inline-block; width: 70px; height: 70px; background-color: rgba(255, 255, 255, 0.15); border-radius: 16px; padding: 12px; backdrop-filter: blur(10px); box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);">
                                            <img src="${logoUrl}" alt="Flippay Logo" width="46" height="46" style="display: block; width: 46px; height: 46px; object-fit: contain; margin: 0 auto;">
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="center">
                                        <h1 style="margin: 0; color: #ffffff; font-size: 32px; font-weight: 800; letter-spacing: -0.5px;">Flippay</h1>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Main Content -->
                    <tr>
                        <td style="padding: 40px 30px;">
                            <!-- Welcome Message -->
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                <tr>
                                    <td>
                                        <h2 style="margin: 0 0 16px 0; color: #0f172a; font-size: 28px; font-weight: 700; line-height: 1.2;">
                                            Welcome to the Future of Payments! 🎉
                                        </h2>
                                        <p style="margin: 0 0 24px 0; color: #475569; font-size: 16px; line-height: 1.6;">
                                            Hi there! Thank you for joining the Flippay waitlist. We're thrilled to have you on board as we build the next generation of seamless cross-border payments and smart wealth management.
                                        </p>
                                    </td>
                                </tr>
                            </table>

                            <!-- Info Card -->
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: 24px 0;">
                                <tr>
                                    <td style="background-color: #e0f7ff; border-left: 4px solid #00bfff; border-radius: 8px; padding: 20px;">
                                        <p style="margin: 0; color: #0f172a; font-size: 15px; line-height: 1.6; font-weight: 500;">
                                            <strong style="color: #00bfff;">What's Next?</strong><br>
                                            You're now part of an exclusive community of early adopters. We'll keep you updated on our launch, new features, and special early access opportunities.
                                        </p>
                                    </td>
                                </tr>
                            </table>

                            <!-- Benefits Section -->
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: 32px 0;">
                                <tr>
                                    <td>
                                        <h3 style="margin: 0 0 20px 0; color: #0f172a; font-size: 20px; font-weight: 700;">
                                            What You Can Expect:
                                        </h3>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                            <!-- Benefit 1 -->
                                            <tr>
                                                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                                                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                                        <tr>
                                                            <td width="40" valign="top">
                                                                <div style="width: 32px; height: 32px; background-color: #b3ebff; border-radius: 8px; display: flex; align-items: center; justify-content: center;">
                                                                    <span style="font-size: 18px;">🌍</span>
                                                                </div>
                                                            </td>
                                                            <td valign="top">
                                                                <p style="margin: 0; color: #0f172a; font-size: 15px; font-weight: 600; line-height: 1.5;">
                                                                    Cross-Border Payments
                                                                </p>
                                                                <p style="margin: 4px 0 0 0; color: #64748b; font-size: 14px; line-height: 1.5;">
                                                                    Send and receive money globally with zero friction
                                                                </p>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                            <!-- Benefit 2 -->
                                            <tr>
                                                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;">
                                                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                                        <tr>
                                                            <td width="40" valign="top">
                                                                <div style="width: 32px; height: 32px; background-color: #b3ebff; border-radius: 8px; display: flex; align-items: center; justify-content: center;">
                                                                    <span style="font-size: 18px;">💳</span>
                                                                </div>
                                                            </td>
                                                            <td valign="top">
                                                                <p style="margin: 0; color: #0f172a; font-size: 15px; font-weight: 600; line-height: 1.5;">
                                                                    Virtual Cards & Utility Hub
                                                                </p>
                                                                <p style="margin: 4px 0 0 0; color: #64748b; font-size: 14px; line-height: 1.5;">
                                                                    Manage all your payments and bills in one place
                                                                </p>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                            <!-- Benefit 3 -->
                                            <tr>
                                                <td style="padding: 12px 0;">
                                                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                                        <tr>
                                                            <td width="40" valign="top">
                                                                <div style="width: 32px; height: 32px; background-color: #b3ebff; border-radius: 8px; display: flex; align-items: center; justify-content: center;">
                                                                    <span style="font-size: 18px;">📊</span>
                                                                </div>
                                                            </td>
                                                            <td valign="top">
                                                                <p style="margin: 0; color: #0f172a; font-size: 15px; font-weight: 600; line-height: 1.5;">
                                                                    Smart Wealth Management
                                                                </p>
                                                                <p style="margin: 4px 0 0 0; color: #64748b; font-size: 14px; line-height: 1.5;">
                                                                    Track and grow your wealth with clarity and control
                                                                </p>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>

                            <!-- CTA Button -->
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: 32px 0;">
                                <tr>
                                    <td align="center">
                                        <a href="${baseUrl}" style="display: inline-block; background-color: #00bfff; color: #ffffff; text-decoration: none; padding: 16px 32px; border-radius: 12px; font-weight: 700; font-size: 16px; box-shadow: 0 4px 12px rgba(0, 191, 255, 0.3);">
                                            Learn More About Flippay
                                        </a>
                                    </td>
                                </tr>
                            </table>

                            <!-- Divider -->
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                <tr>
                                    <td style="padding: 24px 0; border-top: 1px solid #e2e8f0;">
                                        <p style="margin: 0; color: #64748b; font-size: 14px; line-height: 1.6; text-align: center;">
                                            We're building something special, and we can't wait to share it with you. Stay tuned for updates!
                                        </p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td style="background-color: #f8fafc; padding: 30px; text-align: center; border-top: 1px solid #e2e8f0;">
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                <tr>
                                    <td>
                                        <p style="margin: 0 0 16px 0; color: #0f172a; font-size: 16px; font-weight: 700;">
                                            Best regards,<br>
                                            <span style="color: #00bfff;">The Flippay Team</span>
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding-top: 20px; border-top: 1px solid #e2e8f0;">
                                        <p style="margin: 0 0 8px 0; color: #64748b; font-size: 12px; line-height: 1.5;">
                                            You're receiving this email because you signed up for the Flippay waitlist.<br>
                                            If you didn't sign up, please ignore this email.
                                        </p>
                                        <p style="margin: 8px 0 0 0; color: #94a3b8; font-size: 11px;">
                                            © 2026 Flippay Global. All rights reserved.
                                        </p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                </table>
            </td>
        </tr>
    </table>
</body>
</html>`;
}
