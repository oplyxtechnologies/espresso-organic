const express = require("express");
const router = express.Router();
const { Resend } = require("resend");
require("dotenv").config();

const resend = new Resend(process.env.RESEND_API_KEY);

router.post("/", async (req, res) => {
  const { name, email, phone, course, message } = req.body;

  if (!name || !email || !phone || !course) {
    return res.status(400).json({ message: "Required fields missing." });
  }

  try {
    // Email to Admin
    await resend.emails.send({
      from: "Espresso Organic <connect@oplyx.tech>",
      to: [process.env.EMAIL_TO],
      subject: `New Course Enquiry: ${course}`,
      html: `
        <div style="font-family: Arial, sans-serif; background: #fff8f2; padding: 20px; border-radius: 10px;">
          <h2 style="color: #2B1E17;">Course Enquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Course:</strong> ${course}</p>
          <p><strong>Message:</strong><br/>${message || "N/A"}</p>
        </div>
      `,
    });

    // Confirmation to Client
    await resend.emails.send({
      from: "Espresso Organic <connect@oplyx.tech>",
      to: [email],
      subject: "Your Course Enquiry Received",
      html: `
        <div style="font-family: Arial, sans-serif; background: #fff8f2; padding: 20px; border-radius: 10px;">
          <h2 style="color: #2B1E17;">Hi ${name},</h2>
          <p>Thanks for enquiring about our <strong>${course}</strong> course.</p>
          <p>Our team will contact you shortly with more details.</p>
          <p>Warm regards,<br/>Espresso Organic Coffee</p>
        </div>
      `,
    });

    res.status(200).json({ message: "Enquiry submitted successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong." });
  }
});

module.exports = router;
