import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { name, businessName, email, platforms, message } =
      await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    const platformsText =
      platforms?.length > 0
        ? `\nPlatforms:\n${(platforms as { platform: string; handle: string }[]).map((p) => `  ${p.platform}: ${p.handle}`).join("\n")}`
        : "";

    const { error } = await resend.emails.send({
      from: "Honey Pot Media <onboarding@resend.dev>",
      to: "hello@honeypotmedia.com",
      replyTo: email,
      subject: `New inquiry from ${name}${businessName ? ` (${businessName})` : ""}`,
      text: `Name: ${name}\nBusiness: ${businessName || "N/A"}\nEmail: ${email}${platformsText}\n\nMessage:\n${message}`,
    });

    if (error) {
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
