const express = require("express");
const router = express.Router();
const { Resend } = require("resend");
const Enquiry = require("../models/enquiry"); // ✅ Mongoose model
require("dotenv").config();

const resend = new Resend(process.env.RESEND_API_KEY);

router.post("/", async (req, res) => {
  const { name, email, phone, course, message } = req.body;

  // ✅ Field validation
  if (!name || !email || !phone || !course) {
    return res
      .status(400)
      .json({ message: "All required fields must be filled." });
  }

  try {
    // ✅ Save to MongoDB
    await Enquiry.create({ name, email, phone, course, message });

    // ✅ Email to Admin
    await resend.emails.send({
      from: "Espresso Organic <connect@oplyx.tech>",
      to: [process.env.EMAIL_TO],
      subject: `New Course Enquiry: ${course}`,
      html: `
        <div style="font-family: Arial, sans-serif; background: #fff8f2; padding: 20px; border-radius: 10px; border: 1px solid #e0cfc2;">
          <img src="https://espresso-organic.com/logo.png" alt="Espresso Organic" width="120" style="margin-bottom: 20px;" />
          <h2 style="color: #2B1E17;">New Course Enquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Course:</strong> ${course}</p>
          <p><strong>Message:</strong><br/>${message || "N/A"}</p>
          <hr style="margin-top: 20px;" />
          <small style="color: #8B7766;">Espresso Organic | New course interest</small>
        </div>
      `,
    });

    // ✅ Confirmation Email to User
    await resend.emails.send({
      from: "Espresso Organic <connect@oplyx.tech>",
      to: [email],
      subject: "We received your enquiry!",
      html: `
        <div style="font-family: Arial, sans-serif; background: #fff8f2; padding: 20px; border-radius: 10px; border: 1px solid #e0cfc2;">
          <img src="https://espresso-organic.com/logo.png" alt="Espresso Organic" width="120" style="margin-bottom: 20px;" />
          <h2 style="color: #2B1E17;">Hi ${name},</h2>
          <p>Thank you for your interest in our <strong>${course}</strong> course.</p>
          <p>We’ve received your enquiry and our team will reach out to you soon with more details.</p>
          <p>If you have any urgent questions, feel free to reply to this email.</p>
          <p>Warm regards,<br /><strong>Espresso Organic Coffee Team</strong></p>
          <hr style="margin-top: 20px;" />
          <small style="color: #8B7766;">You’re receiving this email because you enquired through our website.</small>
        </div>
      `,
    });

    res.status(200).json({ message: "Enquiry submitted successfully." });
  } catch (error) {
    console.error("❌ Error handling enquiry:", error);
    res
      .status(500)
      .json({ message: "Something went wrong. Please try again later." });
  }
});

module.exports = router;
