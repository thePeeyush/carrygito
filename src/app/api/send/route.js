import {  NextResponse } from "next/server";
const nodemailer = require('nodemailer');

export async function POST(request) {
  const body = await request.json();
  try {
    const data = JSON.parse(body.message)
    const message = {
        from: process.env.EMAIL,
        to: process.env.EMAIL,
        subject: body.subject,
        text: body.message,
        html:`<main>
        <h1><span>Fullname : </span>${data.fullname}</h1>
        <h1><span>Phone : </span>${data.phone}</h1>
        <h1><span>Plan : </span>${data.plan}</h1>
        <h1><span>Area : </span>${data.area}</h1>
        <h1><span>Address : </span>${data.address}</h1>
    </main>`,
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

import { NextResponse } from "next/server";

export async function GET() {
  try {
    return NextResponse.json({ message: "OK", result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}