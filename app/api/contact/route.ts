import { Resend } from "resend"
import { type NextRequest, NextResponse } from "next/server"

const resend = new Resend("re_PjUAjQf6_86jXAVzYBDJ7AScHzFVGKbLb")

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, company, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email, and message are required" }, { status: 400 })
    }

    // Email to your business
    const businessEmail = await resend.emails.send({
      from: "Jupiter Exports Contact <noreply@jupiterexportscanada.com>", // Use your verified domain
      to: ["info@jupiterexportscanada.com"], // Your business email
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #d35400, #f39c12); padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0;">New Contact Form Submission</h1>
          </div>
          
          <div style="padding: 30px; background: #f9f9f9;">
            <h2 style="color: #d35400; margin-bottom: 20px;">Contact Details</h2>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
              ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
            </div>
            
            <div style="background: white; padding: 20px; border-radius: 8px;">
              <h3 style="color: #d35400; margin-top: 0;">Message:</h3>
              <p style="line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
          
          <div style="background: #333; color: white; padding: 20px; text-align: center;">
            <p style="margin: 0;">Jupiter Exports Canada - Premium Scrap Metal Solutions</p>
          </div>
        </div>
      `,
    })

    // Confirmation email to customer
    const customerEmail = await resend.emails.send({
      from: "Jupiter Exports Canada <noreply@jupiterexportscanada.com>",
      to: [email],
      subject: "Thank you for contacting Jupiter Exports Canada",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #d35400, #f39c12); padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0;">Thank You for Your Inquiry</h1>
          </div>
          
          <div style="padding: 30px; background: #f9f9f9;">
            <p>Dear ${name},</p>
            
            <p>Thank you for contacting Jupiter Exports Canada. We have received your message and will get back to you within 24 hours.</p>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #d35400; margin-top: 0;">Your Message:</h3>
              <p style="line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
            
            <p>In the meantime, feel free to explore our products and services on our website.</p>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="https://jupiterexportscanada.com" style="background: #d35400; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">Visit Our Website</a>
            </div>
            
            <p>Best regards,<br>
            <strong>Jupiter Exports Canada Team</strong></p>
            
            <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
            
            <p style="font-size: 14px; color: #666;">
              <strong>Contact Information:</strong><br>
              Phone: +1 (416) 555-0123<br>
              Email: info@jupiterexportscanada.com<br>
              Address: 123 Metal Street, Toronto, ON M5V 2K1, Canada
            </p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
      businessEmailId: businessEmail.data?.id,
      customerEmailId: customerEmail.data?.id,
    })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}
