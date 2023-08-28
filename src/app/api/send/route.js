import Profile from "@/components/userprofile";
import {  NextResponse } from "next/server";
const nodemailer = require('nodemailer');

export async function POST(request) {
  const body = await request.json();
  try {
    const data = JSON.parse(body.message);
    const htmlmessage = Profile(data);
    const message = {
        from: process.env.EMAIL,
        to: process.env.EMAIL,
        subject: body.subject,
        text: body.message,
        html:htmlmessage,
      };
    
      let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASS,
        },
      });

      const result = await transporter.sendMail(message);
    return NextResponse.json({ message: "OK" , result}, { status: 250 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}