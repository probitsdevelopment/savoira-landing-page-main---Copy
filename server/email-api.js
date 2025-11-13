import express from "express";
import cors from "cors";
import sgMail from "@sendgrid/mail";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY || "");

app.post("/api/send-email", async (req, res) => {
  console.log("📧 Email API called with data:", req.body);

  try {
    const formData = req.body;

    // Validate required fields
    if (!formData.fullName || !formData.email || !formData.phone) {
      console.log("❌ Missing required fields");
      return res.status(400).json({ message: "Missing required fields" });
    }

    console.log("✅ Form data validated successfully");

    // Create email content based on form type
    let emailSubject = "";
    let emailHtml = "";

    if (formData.type === "launch") {
      emailSubject = "🚀 New Launch Waitlist Registration - Savoira";
      emailHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">🚀 New Launch Waitlist Registration</h1>
            <p style="color: #e2e8f0; margin: 10px 0 0 0;">Savoira Launch Platform</p>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 10px; margin-top: 20px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <h2 style="color: #1e293b; margin-bottom: 20px;">Registration Details</h2>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #475569;">Full Name:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b;">${
                  formData.fullName
                }</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #475569;">Email:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b;">${
                  formData.email
                }</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #475569;">Phone:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b;">${
                  formData.phone
                }</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; font-weight: bold; color: #475569;">Registration Time:</td>
                <td style="padding: 12px 0; color: #64748b;">${new Date().toLocaleString()}</td>
              </tr>
            </table>
            
            <div style="margin-top: 30px; padding: 20px; background: linear-gradient(90deg, #3b82f6, #8b5cf6); border-radius: 8px; text-align: center;">
              <p style="color: white; margin: 0; font-weight: bold;">🎉 Ready for Launch Day: November 17, 2025</p>
              <p style="color: #e0e7ff; margin: 5px 0 0 0; font-size: 14px;">Make sure to follow up with this early adopter!</p>
            </div>
          </div>
        </div>
      `;
    } else {
      emailSubject = "🤝 New Partnership Inquiry - Savoira";
      emailHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc;">
          <div style="background: linear-gradient(135deg, #059669 0%, #0d9488 100%); padding: 30px; border-radius: 10px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">🤝 New Partnership Inquiry</h1>
            <p style="color: #a7f3d0; margin: 10px 0 0 0;">Savoira Partnership Program</p>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 10px; margin-top: 20px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <h2 style="color: #1e293b; margin-bottom: 20px;">Partner Information</h2>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #475569;">Full Name:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b;">${
                  formData.fullName
                }</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #475569;">Email:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b;">${
                  formData.email
                }</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #475569;">Phone:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b;">${
                  formData.phone
                }</td>
              </tr>
              ${
                formData.company
                  ? `
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #475569;">Company:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b;">${formData.company}</td>
              </tr>`
                  : ""
              }
              ${
                formData.position
                  ? `
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #475569;">Position:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b;">${formData.position}</td>
              </tr>`
                  : ""
              }
              ${
                formData.location
                  ? `
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #475569;">Location:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b;">${formData.location}</td>
              </tr>`
                  : ""
              }
              ${
                formData.teamSize
                  ? `
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #475569;">Team Size:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b;">${formData.teamSize}</td>
              </tr>`
                  : ""
              }
              <tr>
                <td style="padding: 12px 0; font-weight: bold; color: #475569;">Inquiry Time:</td>
                <td style="padding: 12px 0; color: #64748b;">${new Date().toLocaleString()}</td>
              </tr>
            </table>
            
            ${
              formData.message
                ? `
            <div style="margin-top: 25px;">
              <h3 style="color: #1e293b; margin-bottom: 15px;">Message:</h3>
              <div style="background: #f1f5f9; padding: 20px; border-radius: 8px; border-left: 4px solid #0d9488;">
                <p style="color: #334155; margin: 0; line-height: 1.6;">${formData.message}</p>
              </div>
            </div>`
                : ""
            }
            
            <div style="margin-top: 30px; padding: 20px; background: linear-gradient(90deg, #059669, #0d9488); border-radius: 8px; text-align: center;">
              <p style="color: white; margin: 0; font-weight: bold;">💼 New Partnership Opportunity</p>
              <p style="color: #a7f3d0; margin: 5px 0 0 0; font-size: 14px;">Follow up within 24 hours for best results!</p>
            </div>
          </div>
        </div>
      `;
    }

    // Send email via SendGrid
    const msg = {
      to: "nayana.am@probits.in", // Send notification to nayana
      from: {
        email: process.env.SENDGRID_FROM_EMAIL || "noreply@savoira.com", // From rohan
        name: "Savoira Platform",
      },
      subject: emailSubject,
      html: emailHtml,
    };

    console.log("📤 Sending notification email to: nayana.am@probits.in");
    await sgMail.send(msg);
    console.log("✅ Notification email sent successfully");

    // Send confirmation email to the user
    const confirmationMsg = {
      to: formData.email,
      from: {
        email: process.env.SENDGRID_FROM_EMAIL || "noreply@savoira.com",
        name: "Savoira Platform",
      },
      subject:
        formData.type === "launch"
          ? "🚀 Welcome to Savoira Launch!"
          : "🤝 Partnership Inquiry Received",
      html:
        formData.type === "launch"
          ? `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px;">🚀 Welcome Aboard!</h1>
            <p style="color: #e2e8f0; margin: 15px 0 0 0; font-size: 16px;">You're in the Launch Waitlist</p>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 10px; margin-top: 20px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <h2 style="color: #1e293b; margin-bottom: 20px;">Hi ${formData.fullName},</h2>
            <p style="color: #64748b; line-height: 1.6; margin-bottom: 20px;">
              Thank you for joining the Savoira launch waitlist! We're excited to have you as one of our early adopters.
            </p>
            <div style="background: linear-gradient(90deg, #3b82f6, #8b5cf6); padding: 20px; border-radius: 8px; text-align: center; margin: 25px 0;">
              <h3 style="color: white; margin: 0 0 10px 0;">🗓️ Launch Date: November 17, 2025</h3>
              <p style="color: #e0e7ff; margin: 0; font-size: 14px;">Mark your calendar - we'll email you when we go live!</p>
            </div>
            <p style="color: #64748b; line-height: 1.6;">
              Get ready to experience AI-powered L&D operations that will transform how you manage learning and development.
            </p>
          </div>
        </div>
      `
          : `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc;">
          <div style="background: linear-gradient(135deg, #059669 0%, #0d9488 100%); padding: 30px; border-radius: 10px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px;">🤝 Thank You!</h1>
            <p style="color: #a7f3d0; margin: 15px 0 0 0; font-size: 16px;">Partnership Inquiry Received</p>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 10px; margin-top: 20px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <h2 style="color: #1e293b; margin-bottom: 20px;">Hi ${formData.fullName},</h2>
            <p style="color: #64748b; line-height: 1.6; margin-bottom: 20px;">
              Thank you for your interest in partnering with Savoira! We've received your partnership inquiry and our team is reviewing it.
            </p>
            <div style="background: linear-gradient(90deg, #059669, #0d9488); padding: 20px; border-radius: 8px; text-align: center; margin: 25px 0;">
              <h3 style="color: white; margin: 0 0 10px 0;">⏱️ Response Time: 24-48 Hours</h3>
              <p style="color: #a7f3d0; margin: 0; font-size: 14px;">Our partnership team will be in touch shortly!</p>
            </div>
            <p style="color: #64748b; line-height: 1.6;">
              We're excited about the possibility of working together to transform L&D operations with AI-powered solutions.
            </p>
          </div>
        </div>
      `,
    };

    console.log("📤 Sending confirmation email to user:", formData.email);
    await sgMail.send(confirmationMsg);
    console.log("✅ Confirmation email sent successfully");

    res.status(200).json({
      success: true,
      message: "Form submitted successfully and emails sent!",
    });
  } catch (error) {
    console.error("SendGrid Error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to send email",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
});

app.get("/health", (req, res) => {
  res.json({ status: "OK", timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Email API server running on port ${PORT}`);
});
