import { NextRequest } from "next/server";
import { EmailTemplate } from "../../components/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { firstName, lastName, email, subject, message } = body;

  try {
    const { data, error } = await resend.emails.send({
      from: `${firstName} ${lastName} <contact@yhajiali.com>`,
      to: ["yusuf@yhajiali.com"],
      subject: subject,
      react: EmailTemplate({ message: message, email: email }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
