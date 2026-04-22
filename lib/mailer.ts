import nodemailer from "nodemailer";

function buildTransporter() {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

export interface ContactPayload {
  name: string;
  email: string;
  service: string;
  message?: string;
}

export async function sendContactEmail(payload: ContactPayload) {
  const transporter = buildTransporter();

  await transporter.sendMail({
    from: `"${payload.name}" <${process.env.SMTP_USER}>`,
    to: process.env.EMAIL_TO,
    replyTo: payload.email,
    subject: `New lead: ${payload.service} — ${payload.name}`,
    html: `
      <h2>New contact from portfolio</h2>
      <p><strong>Name:</strong> ${payload.name}</p>
      <p><strong>Email:</strong> ${payload.email}</p>
      <p><strong>Service:</strong> ${payload.service}</p>
      ${payload.message ? `<p><strong>Message:</strong><br/>${payload.message}</p>` : ""}
    `,
  });
}
