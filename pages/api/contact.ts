import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { email, title, message } = req.body;

    // Validate input
    if (!email || !title || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Create transporter with debug logging
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      logger: true,
      debug: true,
    });

    // Verify connection
    await new Promise((resolve, reject) => {
      transporter.verify((error) => {
        if (error) {
          console.error("Server verification error:", error);
          reject(new Error("SMTP connection failed"));
        } else {
          resolve(null);
        }
      });
    });

    const mailOptions = {
      from: `"Contact Form" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: process.env.EMAIL_USER,
      subject: `New Message: ${title}`,
      text: `From: ${email}\n\n${message}`,
      html: `
        <div>
          <h2>New Contact Form Submission</h2>
          <p><strong>From:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${title}</p>
          <div>
            <p>${message.replace(/\n/g, "<br>")}</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "Message sent successfully!" });
  } catch (err) {
    console.error("Full error details:", err);

    // Proper error typing
    const error = err instanceof Error ? err : new Error(String(err));

    return res.status(500).json({
      error: error.message || "Failed to send message",
      details: process.env.NODE_ENV === "development" ? error.stack : undefined,
    });
  }
}
