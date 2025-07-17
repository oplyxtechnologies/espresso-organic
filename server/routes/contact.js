const express = require("express");
const router = express.Router();
const { Resend } = require("resend");
const Contact = require("../models/contact");
require("dotenv").config();

const resend = new Resend(process.env.RESEND_API_KEY);

router.post("/", async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  // ✅ Basic validation
  if (!name || !email || !phone || !subject || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    // ✅ Save to MongoDB (auto-validates via schema if defined)
    await Contact.create({ name, email, phone, subject, message });

    // ✅ Send confirmation to client
    await resend.emails.send({
      from: "Espresso Organic <connect@oplyx.tech>",
      to: [email],
      subject: "Thanks for contacting Espresso Organic",
      html: `
        <div style="font-family: Arial, sans-serif; background: #fff8f2; padding: 20px; border-radius: 10px; border: 1px solid #e0cfc2;">
          <img src="https://espresso-organic.com/logo.png" alt="Espresso Organic" width="120" style="margin-bottom: 20px;" />
          <h2 style="color: #2B1E17;">Hi ${name},</h2>
          <p>Thanks for reaching out to <strong>Espresso Organic Coffee</strong>.</p>
          <p>We’ve received your message:</p>
          <blockquote style="margin: 15px 0; padding: 15px; background: #f5eae3; border-left: 4px solid #E9691D;">
            <strong>${subject}</strong><br />
            ${message}
          </blockquote>
          <p>We'll get back to you as soon as possible.</p>
          <p>Warm regards,</p>
          <p><strong>Espresso Organic Team</strong></p>
          <hr style="margin-top: 20px;" />
          <small style="color: #8B7766;">You’re receiving this email because you contacted us through our website.</small>
        </div>
      `,
    });

    // ✅ Send notification to admin
    await resend.emails.send({
      from: "Espresso Organic <connect@oplyx.tech>",
      to: [process.env.EMAIL_TO],
      subject: `New Inquiry: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; background: #fff8f2; padding: 20px; border-radius: 10px; border: 1px solid #e0cfc2;">
          <img src="https://espresso-organic.com/logo.png" alt="Espresso Organic" width="120" style="margin-bottom: 20px;" />
          <h2 style="color: #2B1E17;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p style="padding: 10px; background-color: #f5eae3; border-radius: 5px;">${message}</p>
          <hr style="margin-top: 20px;" />
          <small style="color: #8B7766;">Espresso Organic | New customer contact</small>
        </div>
      `,
    });

    return res.status(200).json({ message: "Message sent successfully." });
  } catch (error) {
    console.error("❌ Error in contact route:", error);

    // ✅ Return meaningful error in production-safe way
    return res.status(500).json({
      message: "Something went wrong. Please try again later.",
    });
  }
});

module.exports = router;
