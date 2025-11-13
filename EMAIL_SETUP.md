# SendGrid Email Integration Setup

This guide will help you set up SendGrid email integration for the Savoira forms.

## Prerequisites

- SendGrid account (free tier available)
- API Key from SendGrid
- Verified sender identity in SendGrid

## Step 1: Install Dependencies

Run the following command to install the required packages:

```bash
npm install @sendgrid/mail express cors dotenv concurrently
```

## Step 2: SendGrid Setup

1. **Create SendGrid Account**: Go to https://sendgrid.com and create a free account
2. **Get API Key**:

   - Go to Settings > API Keys
   - Click "Create API Key"
   - Choose "Restricted Access"
   - Give permissions for "Mail Send" (Full Access)
   - Copy the API key (starts with SG.)

3. **Verify Sender Identity**:
   - Go to Settings > Sender Authentication
   - Click "Verify a Single Sender"
   - Fill in the form with noreply@savoira.com (or your domain)
   - Verify the email address

## Step 3: Environment Configuration

Update your `.env` file with your SendGrid credentials:

```env
# SendGrid Configuration
SENDGRID_API_KEY=SG.your_actual_sendgrid_api_key_here
SENDGRID_FROM_EMAIL=noreply@savoira.com

# Server Configuration
PORT=3001
```

## Step 4: Running the Application

### Option 1: Run Both Frontend and Backend Together

```bash
npm run dev:full
```

### Option 2: Run Separately

Terminal 1 (Frontend):

```bash
npm run dev
```

Terminal 2 (Backend):

```bash
npm run server
```

## How It Works

### Launch Form

- **User submits**: Name, Email, Phone
- **Email sent to**: nayana.am@probits.in
- **User gets**: Welcome email confirmation
- **Subject**: "🚀 New Launch Waitlist Registration - Savoira"

### Partner Form

- **User submits**: Name, Email, Phone, Company, Position, Location, Team Size, Message
- **Email sent to**: nayana.am@probits.in
- **User gets**: Partnership inquiry confirmation
- **Subject**: "🤝 New Partnership Inquiry - Savoira"

## Email Templates

Both emails include:

- Professional HTML templates
- All form data in a clean table format
- Branded styling with gradients
- Call-to-action sections
- Responsive design

## Troubleshooting

### Common Issues:

1. **CORS Error**: Make sure the backend server is running on port 3001
2. **SendGrid Error**: Check your API key and sender verification
3. **Email not received**: Check spam folder and SendGrid activity logs

### Testing:

1. Fill out either form on the website
2. Check the browser network tab for API calls
3. Check SendGrid dashboard for email delivery status
4. Verify emails arrive at nayana.am@probits.in

## Production Deployment

For production:

1. Replace localhost URLs with your production API URL
2. Set up proper CORS origins
3. Use environment variables for all sensitive data
4. Consider using a process manager like PM2 for the backend

## Support

If you need help:

1. Check SendGrid logs for delivery issues
2. Review browser console for frontend errors
3. Check server logs for backend errors
4. Ensure all environment variables are set correctly
