# Environment Variables Setup Guide

## ⚠️ Important: Next.js Environment Files

**Next.js ONLY reads `.env.local` file, NOT `env` file!**

You must edit `.env.local` for your changes to take effect.

## Quick Fix Steps

1. **Open `.env.local` file** (not `env`)
2. **Copy the contents from `env` file** to `.env.local`
3. **Replace placeholder values** with your actual credentials
4. **Restart your dev server** (stop with Ctrl+C, then run `npm run dev` again)

## Required Environment Variables

### Gmail SMTP Configuration

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-actual-email@gmail.com
SMTP_PASSWORD=your-gmail-app-password
FROM_EMAIL=your-actual-email@gmail.com
TO_EMAIL=your-business-email@gmail.com
```

### How to Get Gmail App Password

1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Click on **Security** in the left sidebar
3. Enable **2-Step Verification** (if not already enabled)
4. Scroll down and click on **App passwords**
5. Select **Mail** as the app and **Other (Custom name)** as device
6. Enter "Flippay" as the name
7. Click **Generate**
8. Copy the 16-character password (no spaces)
9. Paste it as `SMTP_PASSWORD` in `.env.local`

### Optional: Google Sheets Integration

```env
GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

## Common Issues & Solutions

### Issue 1: Connection Timeout (ETIMEDOUT)

**Symptoms:** Terminal shows `Error: connect ETIMEDOUT 142.251.179.108:587`

**Causes:**
- SMTP credentials are still placeholders
- Firewall blocking port 587
- Network connectivity issues
- Wrong SMTP settings

**Solutions:**
1. ✅ Make sure you've replaced ALL placeholder values in `.env.local`
2. ✅ Verify you're using a Gmail App Password (not regular password)
3. ✅ Check your firewall/antivirus isn't blocking port 587
4. ✅ Restart your dev server after changing `.env.local`
5. ✅ Try using port 465 instead (change `SMTP_PORT=465` and it will use SSL)

### Issue 2: "Email service not configured"

**Solution:** Make sure `SMTP_USER` and `SMTP_PASSWORD` are set in `.env.local` (not `env`)

### Issue 3: Authentication Failed (EAUTH)

**Solution:** 
- Double-check your Gmail App Password
- Make sure 2-Step Verification is enabled
- Ensure there are no extra spaces in your `.env.local` file

### Issue 4: Changes Not Taking Effect

**Solution:** 
- You MUST restart the Next.js dev server after changing `.env.local`
- Environment variables are loaded only when the server starts
- Stop the server (Ctrl+C) and run `npm run dev` again

## File Locations

- ✅ **Edit this file:** `.env.local` (Next.js reads this)
- ❌ **Don't edit:** `env` (Next.js ignores this - it's just a template)

## Testing Your Configuration

After setting up `.env.local` and restarting your server:

1. Try joining the waitlist on your site
2. Check the terminal for any error messages
3. If successful, you should receive:
   - A notification email at `TO_EMAIL`
   - A confirmation email at the email you entered

## Need Help?

If you're still having issues:
1. Check the terminal output for specific error messages
2. Verify all values in `.env.local` are correct (no quotes, no spaces)
3. Make sure you restarted the dev server
4. Try using port 465 with SSL instead of 587
